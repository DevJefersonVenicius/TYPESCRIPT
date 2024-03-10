import {Banco} from "./Banco.js"
export class Usuarios extends Banco {
    public _cartao: string
    public _senha: number
    constructor(nomeBanco: string, localizacaoBanco: string, diasBanco: string, _horarioAbertura: Date, _horarioFechamento: Date, _cartao: string, _senha: number) {
        super(nomeBanco, localizacaoBanco, diasBanco, _horarioAbertura, _horarioFechamento)
        this._cartao = _cartao
        this._senha = _senha
    }
    get obterCartao() {
        return this._cartao
    }
    get obterSenha() {
        return this._senha
    }
    set alterarCartao(novoCatao: string) {
        this._cartao = novoCatao
    }
    set alterarSenha(novaSenha: number) {
        this._senha = novaSenha
    }
}
