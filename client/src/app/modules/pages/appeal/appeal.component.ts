import { Component, ViewChild } from '@angular/core';

import { AppealService } from 'src/app/core/services/appeal.service';
import { AppealsList } from 'src/app/shared/models/appealsList';
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
  appealParams: AppealParams;
  totalRows = 0;
  pageSize = 10;
  currentPage = 1;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  displayedColumns: string[] = [];
  columns = [
    { key: 'id', name: 'ID' },
    { key: 'rap', name: 'RAP' },
    { key: 'dept', name: 'DEPT' },
    { key: 'mpid', name: 'MPID' },
    { key: 'firstName', name: 'First Name' },
    { key: 'lastName', name: 'Last Name' },
    // { key: 'meeting', name: 'Meeting' },
    { key: 'status', name: 'Status' },
    { key: 'statusUpdateUser', name: 'Updated User' },
    // { key: 'statusUpdateDate', name: 'Updated Date' },
    // { key: 'receivedDate', name: 'Received Date' },
    { key: 'notes', name: 'Notes' },
  ];

  dataSource: MatTableDataSource<AppealsList> = new MatTableDataSource();

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
    this.displayedColumns.push('actions');
    for (var col of this.columns) {
      if (col.key == 'status') {
        this.displayedColumns.push('meeting');
      } else if (col.key == 'notes') {
        this.displayedColumns.push('statusUpdateDate');
        this.displayedColumns.push('receivedDate');
      }
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
    console.log({ event });
    this.currentPage = event.pageIndex + 1;
    this.pageSize = event.pageSize;
    this.loadAppeal();
  }
}
