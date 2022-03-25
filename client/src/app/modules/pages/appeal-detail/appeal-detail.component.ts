import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AppealService } from 'src/app/core/services/appeal.service';
import { AppealParams } from 'src/app/shared/models/appealParams';
import { Appeal } from 'src/app/shared/models/appeal';

@Component({
  selector: 'app-appeal-detail',
  templateUrl: './appeal-detail.component.html',
  styleUrls: ['./appeal-detail.component.css']
})
export class AppealDetailComponent implements OnInit {
  isLoading: boolean = false;
  id: number = 0;
  data!: Appeal;
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
    this.isLoading = true;
    this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) used convert int
      this.appealParams.id = this.id;
      this.appealService.getAppeals(this.appealParams).subscribe({
        next: response => {
          console.log('success', response);

          var appeals = response.result;
          if (appeals.length == 0) {
            this.error = 'appeal not found.';
          } else {
            this.data = appeals[0];
          }
          this.isLoading = false;
        },
        error: error => {
          console.log('error', error);
          this.isLoading = false;
        }
      });
    });
  }
}
