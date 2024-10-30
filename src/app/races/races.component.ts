import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-races',
  standalone: true,
  imports: [],
  templateUrl: './races.component.html',
  styleUrl: './races.component.css'
})
export class RacesComponent {
  constructor(private router: Router) {}

  enroll(): void {
    this.router.navigate(['/register']); // Redirige a la vista de inscripción
  }
}
