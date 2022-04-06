import { Component, OnInit, ViewChild } from '@angular/core';

import { DepartmentService } from 'src/app/core/services/department.service';
import { Department } from 'src/app/shared/models/department';
import { DepartmentParams } from 'src/app/shared/models/department-params';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})
export class DepartmentComponent implements OnInit {
  isLoading: boolean = false;
  totalRows = 0;
  orderBy = "";
  pageSize = 10;
  currentPage = 1;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  displayedColumns: string[] = [];
  columns = [
    { key: 'actions', name: 'Actions', attr: 'actions' },
    { key: 'id', name: 'ID', attr: 'string' },
    { key: 'code', name: 'Code', attr: 'string' },
    { key: 'name', name: 'Name', attr: 'string' },
    { key: 'presenterName', name: 'Presenter Name', attr: 'string' },
    { key: 'presenterTitle', name: 'Presenter Title', attr: 'string' },
    { key: 'comment', name: 'Comment', attr: 'string' },
    { key: 'createUser', name: 'Create User', attr: 'string' },
    { key: 'createDate', name: 'Create Date', attr: 'date' },
    { key: 'updateUser', name: 'Update User', attr: 'string' },
    { key: 'updateDate', name: 'Update Date', attr: 'date' },
  ];

  departmentParams: DepartmentParams;
  dataSource: MatTableDataSource<Department> = new MatTableDataSource();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  @ViewChild(MatSort) sort!: MatSort;

  constructor(private departmentService: DepartmentService) {
    this.departmentParams = this.departmentService.getDepartmentParams();
  }

  ngOnInit(): void {
    this.setTable();
    this.load();
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

  setTable() {
    for (var col of this.columns) {
      this.displayedColumns.push(col.key);
    }
  }

  load() {
    this.isLoading = true;
    this.departmentParams.pageNumber = this.currentPage;
    this.departmentParams.pageSize = this.pageSize;
    this.departmentParams.orderBy = this.orderBy;
    this.departmentService.setDepartmentParams(this.departmentParams);
    this.departmentService.getDepartments(this.departmentParams).subscribe({
      next: response => {
        // console.log(response);
        this.dataSource.data = response.result;
        this.currentPage = response.pagination.currentPage - 1;
        this.totalRows = response.pagination.totalItems;
        this.isLoading = false;
      },
      error: error => {
        console.log('error', error);
        this.isLoading = false;
      }
    });
  }

  pageChanged(event: PageEvent) {
    this.currentPage = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.load();
  }

  doFilter(event: any) {
    this.dataSource.filter = event.target.value.trim().toLocaleLowerCase();
  }

  doSort(event: any) {
    this.currentPage = this.departmentParams.pageNumber;
    this.orderBy = event.active + "+" + event.direction;
    this.load();
  }
}
