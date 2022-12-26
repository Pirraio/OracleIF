export class Usuario {
    nome: string;
    senha: string;

    constructor(pNome: string = '', pSenha: string = '') {
        this.nome = pNome;
        this.senha = pSenha;
    }
}