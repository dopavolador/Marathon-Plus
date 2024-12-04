import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  errorMessage: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  onSubmit(event: Event): void {
    event.preventDefault();

    this.errorMessage = '';

    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Las contraseñas no coinciden.';
      return;
    }

    if (!this.firstName || !this.lastName) {
      this.errorMessage = 'Por favor, completa todos los campos.';
      return;
    }

    const userData = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password
    };

    this.authService.register(userData).subscribe({
      next: (response) => {
        this.router.navigate(['/login']);
      },
      error: (error) => {
        if (error.status === 409) {
          this.errorMessage = 'El correo electrónico ya está registrado.';
        } else {
          this.errorMessage = 'Ocurrió un error inesperado. Intenta de nuevo más tarde.';
        }
      }
    });

  }
}
