import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user = {
    email: '',
    password: ''
  };
  showPassword = false;
  errorMessage: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }

  onSubmit() {
    if (this.user.email && this.user.password) {
      this.authService.login(this.user.email, this.user.password).subscribe({
        next: (response) => {
          if (response.token) {
            localStorage.setItem('authToken', response.token); // Save the JWT token
            localStorage.setItem('userData', JSON.stringify(response.userData)); // Optional: Save user data

            // Navigate to a specific route after login
            const userRole = response.userData.role; // Assume `role` indicates user type
            if (userRole === 'user') {
              this.router.navigate(['/teacher/dashboard']);
            } else if (userRole === 'parent') {
              this.router.navigate(['/parent']);
            } else {
              this.router.navigate(['/child-test']); // Default route for other roles
            }
          } else {
            console.error('Invalid response format:', response);
          }
        },
        error: (err) => {
          if (err.status === 401) {
            this.errorMessage = 'The password you entered is incorrect. Please try again.';
          } else {
            this.errorMessage = 'An error occurred during login. Please try again later.';
          }
          console.error('Login error:', err);
        }
      });
    }
  }
}
