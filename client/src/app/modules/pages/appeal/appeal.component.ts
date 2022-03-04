import { Component, OnInit } from '@angular/core';

import { AppealService } from 'src/app/core/services/appeal.service';
import { Appeal } from 'src/app/shared/models/Appeal';
import { AppealParams } from 'src/app/shared/models/appealParams';
import { Pagination } from 'src/app/shared/models/pagination';

import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-appeal',
  templateUrl: './appeal.component.html',
  styleUrls: ['./appeal.component.css']
})
export class AppealComponent implements OnInit {
  appealParams: AppealParams;
  pagination!: Pagination;

  displayedColumns: string[] = ['appealId', 'subject'];
  dataSource = new MatTableDataSource<Appeal>();

  constructor(private appealService: AppealService) {
    this.appealParams = this.appealService.getAppealParams();
  }

  ngOnInit(): void {
    this.loadAppeal();
  }

  loadAppeal() {
    this.appealService.setAppealParams(this.appealParams);
    this.appealService.getAppeal(this.appealParams).subscribe(response => {
      this.pagination = response.pagination;
      this.dataSource = new MatTableDataSource<Appeal>(response.result);
    });
  }
}
