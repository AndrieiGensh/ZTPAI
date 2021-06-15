import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  constructor(
    private http: HttpClient
  ) { }

  requestStatsInitData(type: string, days: number, date: string)
  {
    let resultData: any;
    let par = new HttpParams().append("type", type).append("days", days.toString()).append("date", date);
    return this.http.get('http://127.0.0.1:3000/statistics', {params: par, observe: 'body'})
    .pipe(tap(data => {
      return data;
    }));
  }

}
