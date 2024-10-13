import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],  // Adicione o CommonModule aqui
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']  // Corrigido para styleUrls
})
export class LoginComponent {
  constructor(private router: Router) {}

  fazerLogin() {
    // Lógica de autenticação (se necessário)
    this.router.navigate(['/tela-inicial']); // Navega após login
  }

  cadastrar() {
    this.router.navigate(['/tela-cadastro']);
  }
}