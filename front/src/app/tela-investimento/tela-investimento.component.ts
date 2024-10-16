import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-investimento',
  standalone: true,
  imports: [CommonModule, FormsModule], 
  templateUrl: './tela-investimento.component.html',
  styleUrls: ['./tela-investimento.component.css']
})
export class InvestimentosComponent {
  aporteMensal: number = 0;
  dataResgate: string = '';
  valorFinal: number | null = null;
  taxaMensal: number = 0.009; 

  constructor(private router: Router) {}

  voltar() {
    this.router.navigate(['/tela-inicial']);
  }

  calcularRendimento() {
    const hoje = new Date();
    const resgate = new Date(this.dataResgate);
    const meses = (resgate.getFullYear() - hoje.getFullYear()) * 12 + (resgate.getMonth() - hoje.getMonth());

    if (meses > 0) {
      let montante = 0;
      for (let i = 0; i < meses; i++) {
        montante = (montante + this.aporteMensal) * (1 + this.taxaMensal);
      }
      this.valorFinal = montante;
    } else {
      this.valorFinal = 0;
    }
  }
}
