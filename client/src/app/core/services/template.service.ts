import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Template } from 'src/app/shared/models/template';
import { TemplateParams } from 'src/app/shared/models/templateParams';
import { TemplateUpdate } from 'src/app/shared/models/templateUpdate';
import { environment } from 'src/environments/environment';
import { getPaginatedResult, getPaginationHeaders } from './paginationHelper';

@Injectable({
  providedIn: 'root'
})
export class TemplateService {
  baseUrl: string = environment.apiUrl;
  templateParams: TemplateParams = new TemplateParams();

  constructor(private http: HttpClient) { }

  getTemplatesParams() {
    return this.templateParams;
  }

  setTemplatesParams(params: TemplateParams) {
    this.templateParams = params;
  }

  getTemplates(templateParams: TemplateParams) {
    let params = getPaginationHeaders(templateParams.pageNumber, templateParams.pageSize);
    params = templateParams.id == 0 ? params : params.append('id', templateParams.id);
    return getPaginatedResult<Template[]>(
      this.baseUrl + 'Templates', params, this.http).pipe(map(x => x));
  }

  updateTemplate(template: TemplateUpdate) {
    return this.http.put(this.baseUrl + 'templates', template);
  }
}
