import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ResourceService {
  private baseUrl: string = `https://reqres.in/api/resources/`;
  constructor(private http: HttpClient) {}

  public getResources(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

  public getResourceById(id: number): Observable<any> {
    return this.http.get(this.baseUrl + `${id}`);
  }
}
