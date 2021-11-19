import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private baseUrl: string = `https://reqres.in/api/users/`;
  constructor(private http: HttpClient) {}

  public getUsers(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  public getUserById(id: number): Observable<any> {
    return this.http.get(this.baseUrl + `${id}`);
  }
}
