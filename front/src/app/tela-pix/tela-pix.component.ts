import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // Importando CommonModule
import { FormsModule } from '@angular/forms'; // Importando FormsModule

@Component({
  selector: 'app-tela-pix',
  standalone: true,
  imports: [CommonModule, FormsModule], // Adicionando FormsModule aqui
  templateUrl: './tela-pix.component.html',
  styleUrls: ['./tela-pix.component.css']
})
export class TelaPixComponent {
  tipoChave: string = 'cpf'; // Valor inicial
  chave: string = '';
  valor: number = 0;

  constructor(private router: Router) {}

  voltar() {
    this.router.navigate(['/tela-inicial']); // Altere para o caminho desejado
  }

  onSubmit() {
    // Implementar a lógica para processar a transferência via Pix
    console.log(`Chave: ${this.chave}, Tipo: ${this.tipoChave}, Valor: ${this.valor}`);
  }
}
