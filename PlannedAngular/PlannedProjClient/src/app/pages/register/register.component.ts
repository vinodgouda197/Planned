import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  template: `<div style="max-width: 360px; margin: 50px auto; padding: 30px; border:1px solid #e2e8f0; border-radius:8px; font-family: sans-serif;">
      <h2 style="color:#2b6cb0; text-align:center;">Create Your Account</h2>
      <p style="text-align:center; color:#4a5568; margin-bottom:24px;">Register with a username and password to access the dashboard.</p>
      <input [(ngModel)]="username" placeholder="Username" style="width:100%; padding:10px; margin-bottom:12px; box-sizing:border-box; border:1px solid #cbd5e0; border-radius:4px;">
      <input type="password" [(ngModel)]="password" placeholder="Password" style="width:100%; padding:10px; margin-bottom:20px; box-sizing:border-box; border:1px solid #cbd5e0; border-radius:4px;">
      <button (click)="submitRegistration()" style="width:100%; padding:12px; background:#48bb78; color:white; border:none; cursor:pointer; border-radius:4px; font-weight:600;">Register Account</button>
      <p style="margin-top:16px; text-align:center; color:#4a5568;">Already registered? <a routerLink="/login" style="color:#3182ce; text-decoration:none;">Sign in</a></p>
    </div>`
})
export class RegisterComponent {
  username = ''; password = '';
  constructor(private auth: AuthService, private router: Router) {}

  submitRegistration() {
    this.auth.register(this.username, this.password).subscribe({
      next: () => {
        alert('Account created successfully! Forwarding to validation view login form...');
        this.router.navigate(['/login']);
      },
      error: (err) => alert(err.error.message || 'Registration processing runtime failure error.')
    });
  }
}