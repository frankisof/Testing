import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StddevService {
  

  constructor(private http: HttpClient) { }

  apiUrl = 'http://localhost:8080/dev_hours';
  apiUrl2= 'http://localhost:8080/1a_proxy_size';

  httpOptions = {
    headers: new HttpHeaders ({
      'Content-Type' : 'application/json'
    })
  }
  getNumbers() : Observable <number[]> {
    return this.http.get<number[]>(this.apiUrl);
  }
  getNumbers2() : Observable <number[]> {
    return this.http.get<number[]>(this.apiUrl2);
  }

  handleError(error: any) {
    let errorMessage = '';

    if(error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error code: ${error.status} \n Message: ${error.message}`
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}





 



