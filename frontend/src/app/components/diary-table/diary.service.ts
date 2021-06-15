import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { DiaryTableRecord } from '../../models/diaryTablerecord.model';

@Injectable({
  providedIn: 'root'
})
export class DiaryTableService {

  constructor(
    private http: HttpClient
  ) { }

  getDataForUser(mealType: string)
  {
    return this.http.get<DiaryTableRecord[]>('http://127.0.0.1:3000/user-daily-meals',
    {params: {mealType: mealType}}
    )
    .pipe(
      tap(data => {
        return data;
      })
    );
  }

  addToList(fName: string, mealType: string, fAmount: number, currDate: string )
  {
    return this.http.post<DiaryTableRecord[]>('http://127.0.0.1:3000/user-daily-meals', 
    { foodName: fName, type: mealType, amount: fAmount, date: currDate },
    { headers: new HttpHeaders({ 'Content-Type':  'application/json' })}
    )
    .pipe(
      tap(data => {
        return data;
      })
    );
  }

  updateListElement(recordIdNum: number, fAmount: number, currDate: string )
  {
    return this.http.put<DiaryTableRecord[]>('http://127.0.0.1:3000/user-daily-meals',
    { recordId: recordIdNum, amount: fAmount, date: currDate },
    { headers: new HttpHeaders({ 'Content-Type':  'application/json' }) }
    )
    .pipe(
      tap(data => {
        return data;
      })
    );
  }

  deleteFromList(recordIdNum: number, currDate: string)
  {
    return this.http.delete<DiaryTableRecord[]>('http://127.0.0.1:3000/user-daily-meals', 
    {params: { recordId: recordIdNum.toString(), date: currDate}}
    )
    .pipe(
      tap(data => {
        return data;
      })
    )
  }

}
