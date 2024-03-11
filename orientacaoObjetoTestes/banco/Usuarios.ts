import {Banco} from "./Banco.js"
export class Usuarios extends Banco {
    public nomeUsuario: string
    public _cartao: string
    public _senha: number
    constructor(nomeBanco: string, localizacaoBanco: string, diasBanco: string, _horarioAbertura: Date, _horarioFechamento: Date, nomeUsuario: string, _cartao: string, _senha: number) {
        super(nomeBanco, localizacaoBanco, diasBanco, _horarioAbertura, _horarioFechamento)
        this.nomeUsuario = nomeUsuario
        this._cartao = _cartao
        this._senha = _senha
    }
    get obterNomeUsuario() {
        return this.nomeUsuario
    }
    get obterCartao() {
        return this._cartao
    }
    get obterSenha() {
        return this._senha
    }
    set alterarNomeUsuario(novoNomeUsuario: string) {
        this.nomeUsuario = novoNomeUsuario
    }
    set alterarCartao(novoCatao: string) {
        this._cartao = novoCatao
    }
    set alterarSenha(novaSenha: number) {
        this._senha = novaSenha
    }
}
