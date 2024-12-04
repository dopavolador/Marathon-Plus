import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recovery',
  standalone: true,
  templateUrl: './recovery.component.html',
  styleUrls: ['./recovery.component.css'],// Asegúrate de usar styleUrls
  imports: [FormsModule, CommonModule],
})
export class RecoveryComponent {
  email: string = '';
  message: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  onSubmit(event: Event): void {
    event.preventDefault(); // Evita el envío del formulario

    this.message = ''; // Limpia mensajes de éxito previos
    this.errorMessage = ''; // Limpia mensajes de error previos

    // Simulación de envío de un enlace de recuperación
    if (this.validateEmail(this.email)) {
      // Aquí puedes hacer la lógica para enviar el enlace de recuperación
      this.message = `Se ha enviado un enlace de recuperación a `;

      alert(`Se ha enviado un enlace de recuperación a ${this.email}`);

      setTimeout(() => {
        this.router.navigate(['/login']);
      }, 1000); // Esperar 2 segundos antes de redirigir

    } else {
      this.errorMessage = 'Por favor, introduce un correo electrónico válido.';
    }
  }

  validateEmail(email: string): boolean {
    // Simple regex para validar el formato del correo electrónico
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }
}

