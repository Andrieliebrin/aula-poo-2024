export class Correntista {
    // Propriedades básicas do correntista
    nome: string = '';               // Nome do correntista
    cpf_cnpj: number = 0;           // CPF ou CNPJ do correntista
    senha: string = '';              // Senha do correntista
    chave_pix: string = '';          // Chave PIX do correntista

    // Propriedades adicionais
    email: string = '';              // Email do correntista
    telefone: string = '';           // Telefone do correntista
    dataNascimento: Date | null = null; // Data de nascimento do correntista

    constructor() {
        // O construtor pode ser usado para inicializações adicionais, se necessário.
    }
}