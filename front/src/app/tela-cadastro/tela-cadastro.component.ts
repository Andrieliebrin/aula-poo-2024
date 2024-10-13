import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CorrentistaService } from '../correntista.service';
import { FormsModule } from '@angular/forms';
import { Correntista } from '../../model/correntista';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [InputTextModule, ButtonModule, FormsModule],
  templateUrl: './tela-cadastro.component.html',
  styleUrls: ['./tela-cadastro.component.css']
})
export class CadastroComponent {

  dadosCadastrais = new Correntista();

  constructor(
    private service: CorrentistaService,
    private router: Router
  ) {}

  clickSalvar(): void {
    this.service.cadastrar(this.dadosCadastrais).subscribe(resposta => {
      alert("Cadastrado com sucesso!");
    });
  }

  voltar(): void {
    this.router.navigate(['/tela-login']); // Redirecionar para a tela inicial ou a tela desejada
  }
}
