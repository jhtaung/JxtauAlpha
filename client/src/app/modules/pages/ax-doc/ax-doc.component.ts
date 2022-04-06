import { Component, OnInit, ViewChild } from '@angular/core';

import { AxDocService } from 'src/app/core/services/ax-doc.service';
import { AxDoc } from 'src/app/shared/models/ax-doc';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-ax-doc',
  templateUrl: './ax-doc.component.html',
  styleUrls: ['./ax-doc.component.css']
})
export class AxDocComponent implements OnInit {
  isLoading = false;
  pageSize = 10;
  pageSizeOptions: number[] = [10, 25, 50, 100, 200];

  displayedColumns: string[] = [];
  columns = [
    { key: 'dateStr', name: 'Date', attr: 'string' },
    { key: 'name', name: 'Name', attr: 'string' }
  ];

  dataSource: MatTableDataSource<AxDoc> = new MatTableDataSource();

  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private axDocService: AxDocService) { }

  ngOnInit(): void {
    this.setTable();
    this.load();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }

  setTable() {
    for (var col of this.columns) {
      this.displayedColumns.push(col.key);
    }
  }

  load() {
    this.isLoading = true;

    this.axDocService.getAxDocs().subscribe({
      next: response => {
        console.log('response', response);
        this.dataSource.data = response;
        this.isLoading = false;
      },
      error: error => {
        console.log(error);
        this.isLoading = false;
      }
    });
  }
}
