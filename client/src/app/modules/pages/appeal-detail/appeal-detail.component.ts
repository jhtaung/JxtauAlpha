import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppealService } from 'src/app/core/services/appeal.service';
import { AppealParams } from 'src/app/shared/models/appealParams';
import { Appeals } from 'src/app/shared/models/appeals';

@Component({
  selector: 'app-appeal-detail',
  templateUrl: './appeal-detail.component.html',
  styleUrls: ['./appeal-detail.component.css']
})
export class AppealDetailComponent implements OnInit {
  id: number = 0;
  data!: Appeals;
  appealParams: AppealParams = new AppealParams();
  error: string = "";

  constructor(
    private route: ActivatedRoute,
    private appealService: AppealService
  ) {}

  ngOnInit(): void {
    this.loadDetail();
  }

  loadDetail() {

    this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) used convert int
      this.appealParams.id = this.id;
      this.appealService.getAppeals(this.appealParams).subscribe({
        next: response => {
          console.log('success', response);

          var appeals = response.result;
          if (appeals.length == 0) {
            this.error = 'appeal not found.';
            return;
          }

          this.data = appeals[0];
          // console.log('success', this.data);
        },
        error: error => {
          console.log('error', error);
        }
      });
    });
  }
}
