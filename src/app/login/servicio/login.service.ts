import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Login} from "../../models/login";
import {catchError, Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private usersUrl = 'https://agile-earth-57530.herokuapp.com/api-om/usuarios'
  //'http://localhost:8080/api-om/usuarios';

  constructor(private http: HttpClient) {
  }

  onLogin(login: Login): Observable<string> {
    console.log(`${this.usersUrl}/login`);
    return this.http.post<string>(`${this.usersUrl}/login`, login)
      .pipe(catchError(this.handleError<string>('login', 'failed')));
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   *
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
