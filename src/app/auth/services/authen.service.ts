// auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://votreapi.com/api/auth'; // URL de l'API
  private user: any = null; // Utilisateur connecté

  constructor(private http: HttpClient) {}

  // Méthode pour se connecter
  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials).pipe(
      tap((response: any) => {
        this.saveToken(response.token);
        this.user = response.user; // Stocke l'utilisateur
      })
    );
  }

  // Sauvegarder le token et les informations de l'utilisateur
  saveToken(token: string): void {
    localStorage.setItem('authToken', token);
  }

  // Méthode pour obtenir l'utilisateur actuellement connecté
  getUser(): any {
    return this.user;
  }

  // Méthode pour vérifier la connexion
  isLoggedIn(): boolean {
    return localStorage.getItem('authToken') !== null;
  }

  // Méthode de déconnexion
  logout(): void {
    localStorage.removeItem('authToken');
    this.user = null;
  }
}
