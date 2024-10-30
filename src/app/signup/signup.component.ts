import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule], 
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  errorMessage: string = '';

  constructor(private router: Router) {}

  onSubmit(event: Event): void {
    event.preventDefault(); // Evita el envío del formulario

    this.errorMessage = ''; // Limpia mensajes de error previos

    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Las contraseñas no coinciden.';
      return;
    }

    // Aquí puedes agregar más validaciones o enviar el formulario
    alert(`Registro exitoso para ${this.username}`);

    // Redirigir a la vista anterior (por ejemplo, a la página de inicio)
    this.router.navigate(['/login']); 

  }
}
