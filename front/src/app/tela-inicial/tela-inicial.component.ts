import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tela-inicial',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tela-inicial.component.html',
  styleUrls: ['./tela-inicial.component.css']
})
export class TelaInicialComponent {
  sidebarOpen: boolean = false;
  saldoVisivel: boolean = false;

  constructor(private router: Router) {}

  extrato() {
    this.router.navigate(['/tela-extrato']);
  }

  pix() {
    this.router.navigate(['/tela-pix']);
  }

  recarga() {
    this.router.navigate(['/tela-recarga']);
  }

  investir() {
    this.router.navigate(['/tela-investir']);
}

  sacar() {
    this.router.navigate(['/tela-saque']);
  }

  sair() {
    this.router.navigate(['/tela-login']);
  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  toggleSaldo() {
    this.saldoVisivel = !this.saldoVisivel;
  }
}
