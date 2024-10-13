import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // Importando o CommonModule
import { CalendarModule } from 'primeng/calendar'; // Importando o CalendarModule
import { FormsModule } from '@angular/forms'; // Importando o FormsModule

@Component({
  selector: 'app-tela-extrato',
  standalone: true,
  imports: [CommonModule, CalendarModule, FormsModule], // Adicionando o FormsModule aqui
  templateUrl: './tela-extrato.component.html',
  styleUrls: ['./tela-extrato.component.css']
})
export class TelaExtratoComponent {
  sidebarOpen: boolean = false; // Variável para controlar o estado da sidebar

  transacoes = [
    { data: '2024-10-01', descricao: 'Depósito', valor: 100, tipo: 'Crédito' },
    { data: '2024-10-02', descricao: 'Pagamento de Conta', valor: -50, tipo: 'Débito' },
    { data: '2024-10-03', descricao: 'Transferência', valor: -30, tipo: 'Débito' },
  ];

  dataSelecionada: Date | null = null; // Para uma única data
  dataInicio: Date | null = null; // Para o início do intervalo de datas
  dataFim: Date | null = null; // Para o fim do intervalo de datas

  constructor(private router: Router) {}

  voltar() {
    this.router.navigate(['/tela-inicial']); // Altere para o caminho desejado
  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen; // Alterna o estado da sidebar
  }

  sair() {
    // Implemente a lógica para sair aqui
    console.log('Usuário saiu');
    // Por exemplo, redirecionar para a página de login:
    this.router.navigate(['/login']);
  }
}
