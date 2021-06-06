import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { FoodInstance } from 'src/app/models/foodInstance.model';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(
    private http: HttpClient
  )
  { }

  findFoodInstancesByName(name: string)
  {
    return this.http.get<FoodInstance[]>('http://127.0.0.1:3000/food',
    { params: { name: name }})
    .pipe(
      tap(data => {
        return data;
      })
    )
  }

}
