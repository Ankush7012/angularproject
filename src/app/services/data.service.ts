import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

//import 'rxjs/add/operator/catch';
import {  Observable,EMPTY, throwError } from 'rxjs';
import { catchError,map } from 'rxjs/operators';

import { AppError } from '../common/app-error';
import { BadInutError } from '../common/bad-input-error';
import { NotFoundError } from '../common/not-found-error';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //private url = "https://jsonplaceholder.typicode.com/posts";
  constructor(private url:string,private http:Http) { }
  getAll(){
    return this.http.get(this.url).pipe(
        map(response=>response.json()),
        catchError(this.handleError)
      );
  }
  create(resource){
    //return Observable.throw(new AppError('123'));
      return this.http.post(this.url,JSON.stringify(resource)).pipe(
        map(response=>response.json()),
      catchError(this.handleError)
    );  
  }
  update(resource){
    return this.http.patch(this.url + '/' + resource.id,JSON.stringify(resource)).pipe(
        map(response=>response.json()),
      catchError(this.handleError)
    );
  }
  delete(id){
    return this.http.delete(this.url + '/' + id).pipe(
        map(response=>response.json()),
      catchError(this.handleError)
    );
    
  }
  private handleError(error:Response){
    if (error.status==404){
      return throwError(new NotFoundError(error));
    }
    if (error.status==400){
      return throwError(new BadInutError(error));
    }
          return throwError(new AppError(error));
    

  }
}
