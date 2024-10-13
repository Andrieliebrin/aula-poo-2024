import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { Correntista } from '../../model/correntista';
import { FormsModule } from '@angular/forms';
import { CorrentistaService } from '../correntista.service';
import { Router } from '@angular/router'; // Importa Router

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [InputTextModule, ButtonModule, FormsModule],
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  public dadosCadastrais = new Correntista();

  constructor(
    private service: CorrentistaService,
    private router: Router // Adiciona o Router
  ) {}

  clickSalvar(): void {
    this.service.cadastrar(this.dadosCadastrais).subscribe(resposta => {
      alert("Cadastrado com sucesso!");
      this.router.navigate(['/tela-inicial']); // Redireciona para a tela inicial após cadastro
    });
  }
}
