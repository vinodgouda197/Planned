import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard',
  template: `
    <div style="max-width: 500px; margin: 40px auto; padding: 25px; border:1px solid #4299e1; background:#ebf8ff; border-radius:8px; font-family:sans-serif;">
      <h2 style="color:#2b6cb0;">Secure Project Dashboard View</h2>
      <p style="font-weight:bold; color:#2d3748;">{{ serverMessage }}</p>
      <p>This secure section is blocked by authentication guards and is only readable if your browser holds a verified cryptographic token payload signature.</p>
    </div>
  `
})
export class DashboardComponent implements OnInit {
  serverMessage: string = 'Loading encrypted system information data payload...';

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<any>(`${environment.apiBaseUrl}/dashboard/data`, { withCredentials: true }).subscribe({
      next: (res) => {
        this.serverMessage = res.secureMessage;
      },
      error: (err) => {
        this.serverMessage = 'Security validation error: Token validation handshake rejected.';
        console.error('Dashboard API Error:', err);
      }
    });
  }
}