import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppealService } from 'src/app/core/services/appeal.service';
import { AppealParams } from 'src/app/shared/models/appealParams';
import { Appeal } from 'src/app/shared/models/appeals';

@Component({
  selector: 'app-appeal-detail',
  templateUrl: './appeal-detail.component.html',
  styleUrls: ['./appeal-detail.component.css']
})
export class AppealDetailComponent implements OnInit {
  id: number = 0;
  data!: Appeal;
  appealParams: AppealParams;
  error: string = "";

  constructor(
    private route: ActivatedRoute,
    private appealService: AppealService
  ) {
    this.appealParams = this.appealService.getAppealParams();
  }

  ngOnInit(): void {
    this.loadDetail();
  }

  loadDetail() {

    this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) used convert int
      this.appealParams.id = this.id;
      this.appealService.getAppeals(this.appealParams).subscribe({
        next: response => {
          console.log(response);

          var appeals = response.result;
          if (appeals.length == 0) {
            this.error = 'appeal not found.';
            return;
          }

          this.data = appeals[0];
          console.log(this.data);
        },
        error: error => {
          console.log(error);
        }
      });
    });
  }
}
