import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root', // Provee el servicio de forma global
})
export class AuthService {
  private baseUrl = 'http://localhost:8080/api/auth'; // Cambia por la URL de tu backend

  constructor(private http: HttpClient) {}

  // Método para registrar usuarios
  register(userData: any): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${this.baseUrl}/register`, userData);
  }

  login(credentials: { email: string; password: string }): Observable<{ message: string }> {
    return this.http.post<{ message: string }>(`${this.baseUrl}/login`, credentials);
  }

}
