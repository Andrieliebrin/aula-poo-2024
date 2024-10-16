import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'] 
})
export class LoginComponent {
  constructor(private router: Router) {}

  fazerLogin() {
    this.router.navigate(['/tela-inicial']); 
  }

  cadastrar() {
    this.router.navigate(['/tela-cadastro']);
  }
}