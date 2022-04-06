import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { AxDoc } from 'src/app/shared/models/ax-doc';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AxDocService {
  baseUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAxDocs() {
    return this.http.get<AxDoc[]>(this.baseUrl + "AxDocs").pipe(map(x => x));
  }
}
