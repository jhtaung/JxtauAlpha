import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {
  @Input() isLoading: boolean = false;
  @Input() columns: Array<Column> = [];
  @Input() dataSource: MatTableDataSource<any> = new MatTableDataSource();

  @Input() totalRows = 0;
  @Input() pageSize = 10;
  @Input() currentPage = 1;
  @Input() pageSizeOptions: number[] = [5, 10, 25, 100];
  displayedColumns: string[] = [];

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor() {
  }

  ngOnInit(): void {
    this.setTable();
    this.setPagination();
  }

  setTable() {
    for (var col of this.columns) {
      this.displayedColumns.push(col.key);
    }
  }

  setPagination() {
    if (this.paginator !== undefined) {
      this.paginator.pageIndex = this.currentPage;
      this.paginator.length = this.totalRows;
    }
  }

  pageChanged(event: PageEvent) {
    this.currentPage = event.pageIndex + 1;
    this.pageSize = event.pageSize;
  }
}

interface Column {
  key: string;
  name: string;
  attr: string;
}
