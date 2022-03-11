import { Component, ViewChild } from '@angular/core';

import { AppealService } from 'src/app/core/services/appeal.service';
import { Appeal } from 'src/app/shared/models/Appeal';
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

  displayedColumns: string[] = ['appealId', 'dptCode', 'mpid'];
  dataSource: MatTableDataSource<Appeal> = new MatTableDataSource();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(private appealService: AppealService) {
    this.appealParams = this.appealService.getAppealParams();
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.loadAppeal();
  }

  loadAppeal() {
    this.isLoading = true;
    this.appealParams.pageNumber = this.currentPage;
    this.appealParams.pageSize = this.pageSize;
    this.appealService.setAppealParams(this.appealParams);
    this.appealService.getAppeal(this.appealParams).subscribe({
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
