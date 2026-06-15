import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  template: `<div style="max-width: 320px; margin: 60px auto; padding: 25px; border: 1px solid #cbd5e0; border-radius:8px; font-family:sans-serif;">
      <h2 style="color:#2b6cb0; text-align:center;">Sign In</h2>
      <p style="text-align:center; color:#4a5568; margin-bottom:24px;">Enter username and password to access your dashboard.</p>
      <input [(ngModel)]="username" placeholder="Username" style="width:100%; padding:10px; margin-bottom:12px; box-sizing:border-box; border:1px solid #cbd5e0; border-radius:4px;">
      <input type="password" [(ngModel)]="password" placeholder="Password" style="width:100%; padding:10px; margin-bottom:20px; box-sizing:border-box; border:1px solid #cbd5e0; border-radius:4px;">
      <button (click)="submitLogin()" style="width:100%; padding:12px; background:#3182ce; color:white; border:none; cursor:pointer; border-radius:4px; font-weight:600;">Sign In</button>
      <p style="margin-top:16px; text-align:center; color:#4a5568;">New here? <a routerLink="/register" style="color:#48bb78; text-decoration:none;">Register</a></p>
    </div>`
})
export class LoginComponent {
  username = ''; password = '';
  constructor(private auth: AuthService, private router: Router) {}

  submitLogin() {
    this.auth.login(this.username, this.password).subscribe({
      next: () => this.router.navigate(['/dashboard']),
      error: () => alert('Invalid credentials mismatch authentication error.')
    });
  }
}