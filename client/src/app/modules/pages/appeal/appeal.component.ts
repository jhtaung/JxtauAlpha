import { Component, ViewChild } from '@angular/core';

import { AppealService } from 'src/app/core/services/appeal.service';
import { AppealList } from 'src/app/shared/models/appealList';
import { AppealParams } from 'src/app/shared/models/appealParams';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-appeal',
  templateUrl: './appeal.component.html',
  styleUrls: ['./appeal.component.css']
})
export class AppealComponent {
  isLoading = false;
  totalRows = 0;
  pageSize = 10;
  currentPage = 1;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  displayedColumns: string[] = [];
  columns = [
    { key: 'actions', name: 'Actions', attr: 'actions' },
    { key: 'id', name: 'ID', attr: 'string' },
    { key: 'rap', name: 'RAP', attr: 'string' },
    { key: 'dept', name: 'DEPT', attr: 'string' },
    { key: 'mpid', name: 'MPID', attr: 'string' },
    { key: 'firstName', name: 'First Name', attr: 'string' },
    { key: 'lastName', name: 'Last Name', attr: 'string' },
    { key: 'meeting', name: 'Meeting', attr: 'date' },
    { key: 'status', name: 'Status', attr: 'string' },
    { key: 'statusUpdateUser', name: 'Updated User', attr: 'string' },
    { key: 'statusUpdateDate', name: 'Updated Date', attr: 'date' },
    { key: 'receivedDate', name: 'Received Date', attr: 'date' },
    { key: 'notes', name: 'Notes', attr: 'string' },
  ];

  appealParams: AppealParams;
  dataSource: MatTableDataSource<AppealList> = new MatTableDataSource();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(private appealService: AppealService) {
    this.appealParams = this.appealService.getAppealParams();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.setTable();
    this.loadAppeal();
  }

  setTable() {
    for (var col of this.columns) {
      this.displayedColumns.push(col.key);
    }
  }

  loadAppeal() {
    this.isLoading = true;
    this.appealParams.pageNumber = this.currentPage;
    this.appealParams.pageSize = this.pageSize;
    this.appealService.setAppealParams(this.appealParams);
    this.appealService.getAppealsList(this.appealParams).subscribe({
      next: response => {
        this.dataSource.data = response.result;
        setTimeout(() => {
          this.paginator.pageIndex = response.pagination.currentPage - 1;
          this.paginator.length = response.pagination.totalItems;
        });
        this.isLoading = false;
      },
      error: error => {
        console.log(error);
        this.isLoading = false;
      }
    });
  }

  pageChanged(event: PageEvent) {
    this.currentPage = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.loadAppeal();
  }
}
