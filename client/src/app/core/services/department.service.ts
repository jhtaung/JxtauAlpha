import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Department } from 'src/app/shared/models/department';
import { DepartmentParams } from 'src/app/shared/models/department-params';
import { environment } from 'src/environments/environment';
import { getPaginatedResult, getPaginationHeaders } from './pagination-helper';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  baseUrl: string = environment.apiUrl;
  departmentParams: DepartmentParams = new DepartmentParams();

  constructor(private http: HttpClient) { }

  getDepartmentParams() {
    return this.departmentParams;
  }

  setDepartmentParams(params: DepartmentParams) {
    this.departmentParams = params;
  }

  getDepartments(departmentParams: DepartmentParams) {
    let params = getPaginationHeaders(departmentParams.pageNumber, departmentParams.pageSize);
    params = departmentParams.id == 0 ? params : params.append('id', departmentParams.id);
    params = departmentParams.orderBy == "" ? params : params.append('orderby', departmentParams.orderBy);
    return getPaginatedResult<Department[]>(
      this.baseUrl + 'Departments', params, this.http).pipe(map(x => x));
  }
}
