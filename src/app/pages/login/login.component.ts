import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email = '';
  password = '';
  loading = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  onLogin(): void {
    if (!this.email || !this.password) {
      alert('Please fill in all fields');
      return;
    }

    this.loading = true;
    setTimeout(() => {
      const success = this.authService.login(this.email, this.password);
      this.loading = false;

      if (success) {
        this.router.navigate(['/']);
      }
    }, 500);
  }

  demoLogin(): void {
    this.email = 'demo@example.com';
    this.password = 'password123';
    this.onLogin();
  }
}
