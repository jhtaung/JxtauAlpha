import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Appeal } from 'src/app/shared/models/Appeal';
import { AppealParams } from 'src/app/shared/models/appealParams';
import { environment } from 'src/environments/environment';
import { getPaginatedResult, getPaginationHeaders } from './paginationHelper';

@Injectable({
  providedIn: 'root'
})
export class AppealService {
  baseUrl: string = environment.apiUrl;
  appeal!: Appeal;
  appealParams: AppealParams = new AppealParams();

  constructor(private http: HttpClient) { }

  getAppealParams() {
    return this.appealParams;
  }

  setAppealParams(params: AppealParams) {
    this.appealParams = params;
  }

  getAppeal(appealParams: AppealParams) {
    let params = getPaginationHeaders(appealParams.pageNumber, appealParams.pageSize);
    params = params.append('rap', appealParams.rap);
    return getPaginatedResult<Appeal[]>(this.baseUrl + 'appeal', params, this.http).pipe(map(response => { return response; }));
  }
}
