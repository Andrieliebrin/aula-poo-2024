import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login', // Certifique-se de que o seletor corresponde ao seu HTML
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  cpf: string = ''; // Armazena o CPF do usuário
  senha: string = ''; // Armazena a senha do usuário

  constructor(private router: Router) {}

  // Método chamado ao enviar o formulário
  login() {
    if (this.validarCredenciais(this.cpf, this.senha)) {
      // Se as credenciais forem válidas, redireciona para a tela inicial
      this.router.navigate(['/tela-inicial']);
    } else {
      alert('CPF ou Senha inválidos. Tente novamente.'); // Mensagem de erro
    }
  }

  // Método para validar as credenciais do usuário (exemplo simples)
  private validarCredenciais(cpf: string, senha: string): boolean {
    // Aqui você pode implementar a lógica de autenticação real, 
    // como uma chamada a uma API, por exemplo.
    const usuariosValidos = [
      { cpf: '12345678900', senha: 'senha123' },
      { cpf: '09876543211', senha: 'senha456' }
    ];
    return usuariosValidos.some(usuario => usuario.cpf === cpf && usuario.senha === senha);
  }

  // Método para navegar para a página de cadastro
  navigateToCadastro() {
    this.router.navigate(['/cadastro']); // Redireciona para a página de cadastro
  }
}
