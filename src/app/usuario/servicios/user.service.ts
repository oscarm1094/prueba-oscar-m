import { Injectable } from '@angular/core';
import {User} from "../../models/user";
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl = 'https://agile-earth-57530.herokuapp.com/api-om/usuarios';//'http://localhost:8080/api-om/usuarios';

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]>{

    return this.http.get<User[]>(this.usersUrl+"/listar");
  }

  getUserById(identificacion:string): Observable<User>{
    console.log(`${this.usersUrl}/buscar/${identificacion}`);
    return this.http.get<User>(`${this.usersUrl}/buscar/${identificacion}`);
  }

  createUser(usuario:User):Observable<String>{
    console.log(`${this.usersUrl}/create`);
    return this.http.post<String>(`${this.usersUrl}/create`,usuario);
  }

  updateUser(usuario:User): Observable<User>{
    return this.http.put<User>(`${this.usersUrl}/update`,usuario);
  }

  deleteUser(identificacion:string):Observable<User>{
    return this.http.delete<User>(`${this.usersUrl}/delete/${identificacion}`);
  }




}
