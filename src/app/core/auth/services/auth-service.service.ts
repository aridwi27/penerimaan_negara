import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private apiUrl = '/api/';

  constructor(private http: HttpClient) { }
  login(data:{nik:number, password:string}): Observable<any> {
    return this.http.post<any>(this.apiUrl + 'login', data);
  }
  setToken(token: string): void {
    localStorage.setItem('authToken', token);
  }

  getToken(): string | null {
    return localStorage.getItem('authToken');
  }

  logout(): void {
    localStorage.removeItem('authToken');
  }


}
