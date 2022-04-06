import { Component, OnInit, ViewChild } from '@angular/core';

import { TemplateService } from 'src/app/core/services/template.service';
import { Template } from 'src/app/shared/models/template';
import { TemplateParams } from 'src/app/shared/models/template-params';

import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})

export class TemplateComponent implements OnInit {
  isLoading: boolean = false;
  totalRows = 0;
  pageSize = 10;
  currentPage = 1;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  displayedColumns: string[] = [];
  columns = [
    { key: 'actions', name: 'Actions', attr: 'actions' },
    { key: 'id', name: 'ID', attr: 'string' },
    { key: 'department', name: 'Department', attr: 'string' },
    { key: 'subjectTemplate', name: 'Subject', attr: 'string' },
    // { key: 'appealInfoTemplate', name: 'Appeal', attr: 'html' },
    // { key: 'execSummaryTemplate', name: 'Executive Summary', attr: 'html' },
    // { key: 'planReferenceTemplate', name: 'Plan Reference', attr: 'html' },
    // { key: 'recommendationsTemplate', name: 'Recommendations', attr: 'html' },
    { key: 'createUser', name: 'Create User', attr: 'string' },
    { key: 'createDate', name: 'Create Date', attr: 'date' },
    { key: 'updateUser', name: 'Update User', attr: 'string' },
    { key: 'updateDate', name: 'Update Date', attr: 'date' },
    // { key: 'comment', name: 'Comment' },
  ];

  templateParams: TemplateParams;
  dataSource: MatTableDataSource<Template> = new MatTableDataSource();

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  constructor(private templateService: TemplateService) {
    this.templateParams = this.templateService.getTemplatesParams();
  }

  ngOnInit(): void {
    this.setTable();
    this.load();
  }

  setTable() {
    for (var col of this.columns) {
      this.displayedColumns.push(col.key);
    }
  }

  load() {
    this.isLoading = true;
    this.templateParams.pageNumber = this.currentPage;
    this.templateParams.pageSize = this.pageSize;
    this.templateService.setTemplatesParams(this.templateParams);
    this.templateService.getTemplates(this.templateParams).subscribe({
      next: response => {
        console.log('response', response);
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

}
