import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `<div style="max-width: 600px; margin: 50px auto; padding: 30px; border:1px solid #e2e8f0; border-radius:8px; text-align: center; font-family: sans-serif;">
      <h2 style="color:#2b6cb0;">About PlannedProj Management Hub</h2>
      <p>This public view component maps project initialization data definitions. Anyone can access this documentation summary layout page before validating username login forms.</p>
      <hr style="border:0; border-top:1px solid #edf2f7; margin:20px 0;">
      <button routerLink="/register" style="padding:10px 20px; background:#48bb78; color:white; border:none; margin-right:10px; cursor:pointer; border-radius:4px;">Register Account</button>
      <button routerLink="/login" style="padding:10px 20px; background:#3182ce; color:white; border:none; cursor:pointer; border-radius:4px;">Sign In Portal</button>
    </div>`
})
export class AboutComponent {}