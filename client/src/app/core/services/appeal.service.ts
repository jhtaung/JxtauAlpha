import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { AppealList } from 'src/app/shared/models/appeal-list';
import { AppealParams } from 'src/app/shared/models/appeal-params';
import { environment } from 'src/environments/environment';
import { getPaginatedResult, getPaginationHeaders } from './pagination-helper';
import { Appeal } from 'src/app/shared/models/appeal';

@Injectable({
  providedIn: 'root'
})
export class AppealService {
  baseUrl: string = environment.apiUrl;
  appealParams: AppealParams = new AppealParams();

  constructor(private http: HttpClient) { }

  getAppealParams() {
    return this.appealParams;
  }

  setAppealParams(params: AppealParams) {
    this.appealParams = params;
  }

  getAppealList(appealParams: AppealParams) {
    let params = getPaginationHeaders(appealParams.pageNumber, appealParams.pageSize);
    params = params.append('rap', appealParams.rap);
    return getPaginatedResult<AppealList[]>(
      this.baseUrl + 'Appeals/List', params, this.http)
        .pipe(map(response => {
          response.result.map(x => {
            x.meeting = new Date(x.meeting);
            return x;
          });
          return response;
        }));
  }

  getAppeals(appealParams: AppealParams) {
    let params = getPaginationHeaders(appealParams.pageNumber, appealParams.pageSize);
    params = params.append('id', appealParams.id);
    return getPaginatedResult<Appeal[]>(
      this.baseUrl + 'Appeals', params, this.http).pipe(map(x => x));
  }
}
