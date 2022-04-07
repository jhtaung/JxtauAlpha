import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { EformResponse } from 'src/app/shared/models/eform-user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EformService {
  baseUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getUsers () {
    return this.http.get<EformResponse>(this.baseUrl + "Eforms/Users").pipe(map(x => x));
  }
}
