import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; 
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-tela-pix',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './tela-pix.component.html',
  styleUrls: ['./tela-pix.component.css']
})
export class TelaPixComponent {
  tipoChave: string = 'cpf'; 
  chave: string = '';
  valor: number = 0;

  constructor(private router: Router) {}

  voltar() {
    this.router.navigate(['/tela-inicial']); 
  }

  onSubmit() {
    console.log(`Chave: ${this.chave}, Tipo: ${this.tipoChave}, Valor: ${this.valor}`);
  }
}
