import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule], 
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'] // Corregido a styleUrls
})
export class RegisterComponent {
  fullName: string = '';
  email: string = '';
  age: number | null = null;
  gender: string = '';
  distance: string = '';
  message: string = '';
  errorMessage: string = '';

  onSubmit(event: Event): void {
    event.preventDefault(); // Evita el envío del formulario

    this.message = ''; // Limpia mensajes de éxito previos
    this.errorMessage = ''; // Limpia mensajes de error previos

    // Simulación de envío de inscripción
    if (this.fullName && this.email && this.age && this.gender && this.distance) {
      this.message = `Inscripción exitosa para ${this.fullName} en ${this.distance}!`;
    } else {
      this.errorMessage = 'Por favor, completa todos los campos.';
    }
  }
}

