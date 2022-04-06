import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TemplateService } from 'src/app/core/services/template.service';
import { Template } from 'src/app/shared/models/template';
import { TemplateParams } from 'src/app/shared/models/template-params';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-template-detail',
  templateUrl: './template-detail.component.html',
  styleUrls: ['./template-detail.component.css']
})
export class TemplateDetailComponent implements OnInit {
  config = {
    editable: true,
    spellcheck: true,
    minHeight: '100px',
  };

  isLoading: boolean = false;
  id: number = 0;
  data!: Template;
  templateParams: TemplateParams = new TemplateParams();
  error: string = "";

  constructor(
    private route: ActivatedRoute,
    private templateService: TemplateService,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.isLoading = true;
    this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) used convert int
      this.templateParams.id = this.id;
      this.templateService.getTemplates(this.templateParams).subscribe({
        next: response => {
          console.log('success', response);
          var templates = response.result;
          if (templates.length == 0) {
            this.error = 'template not found.';
          } else {
            this.data = templates[0];
          }
          this.isLoading = false;
        },
        error: error => {
          console.log('error', error);
          this.isLoading = false;
        }
      });
    })
  }

  updateTemplate() {
    console.log('update', this.data);
    var templateUpdate = {
      id: this.data.id,
      subjectTemplate: this.data.subjectTemplate,
      appealInfoTemplate: this.data.appealInfoTemplate,
      planReferenceTemplate: this.data.planReferenceTemplate,
      execSummaryTemplate: this.data.execSummaryTemplate,
      recommendationsTemplate: this.data.recommendationsTemplate
    };

    this.templateService.updateTemplate(templateUpdate).subscribe({
      next: response => {
        console.log('success', response);
        this.snackBar.open('Save Success', 'Close', { duration: 3000 });
        this.load();
      },
      error: error => {
        console.log('error', error);
        this.snackBar.open('Save Error', 'Close');
      }
    });
  }

}
