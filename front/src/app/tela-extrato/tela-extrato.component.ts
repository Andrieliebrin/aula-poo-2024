import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CalendarModule } from 'primeng/calendar'; 
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-tela-extrato',
  standalone: true,
  imports: [CommonModule, CalendarModule, FormsModule], 
  templateUrl: './tela-extrato.component.html',
  styleUrls: ['./tela-extrato.component.css']
})
export class TelaExtratoComponent {
  sidebarOpen: boolean = false; 

  transacoes = [
    { data: '2024-10-01', descricao: 'Depósito', valor: 100, tipo: 'Crédito' },
    { data: '2024-10-02', descricao: 'Pagamento de Conta', valor: -50, tipo: 'Débito' },
    { data: '2024-10-03', descricao: 'Transferência', valor: -30, tipo: 'Débito' },
  ];

  dataSelecionada: Date | null = null; 
  dataInicio: Date | null = null; 
  dataFim: Date | null = null; 

  constructor(private router: Router) {}

  voltar() {
    this.router.navigate(['/tela-inicial']); 
  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen; 
  }

  sair() {
    console.log('Usuário saiu');
    this.router.navigate(['/login']);
  }
}
