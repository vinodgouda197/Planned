import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
  // DEVELOPMENT TARGET PATH: Change this web address string with your live production cloud path once deployed
  private apiUrl = 'https://localhost:44332/api/auth';

  constructor(private http: HttpClient) {}

  register(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, { username, password }, { withCredentials: true });
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, { username, password }, { withCredentials: true });
  }

  checkAuth(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/status`, { withCredentials: true });
  }

  logout(): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/logout`, {}, { withCredentials: true });
  }
}
