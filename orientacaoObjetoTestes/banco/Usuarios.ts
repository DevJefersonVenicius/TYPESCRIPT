import {Banco} from "./Banco.js"
export class Usuarios extends Banco {
    public _nomeUsuario: string
    public _cartao: string
    public _senha: number
    public _saldo: number
    public conta: number
    constructor(nomeBanco: string, localizacaoBanco: string, diasBanco: string, _horarioAbertura: Date, _horarioFechamento: Date, _nomeUsuario: string, _cartao: string, _senha: number, _saldo: number, conta: number) {
        super(nomeBanco, localizacaoBanco, diasBanco, _horarioAbertura, _horarioFechamento)
        this._nomeUsuario = _nomeUsuario
        this._cartao = _cartao
        this._senha = _senha
        this._saldo = _saldo
        this.conta = conta
    }
    get obterNomeUsuario() {
        return this._nomeUsuario
    }
    get obterCartao() {
        return this._cartao
    }
    get obterSenha() {
        return this._senha
    }
    get obterSaldo() {
        return this._saldo
    }
    get obterConta() {
        return this.conta
    }
    set alterarNomeUsuario(novoNomeUsuario: string) {
        this._nomeUsuario = novoNomeUsuario
    }
    set alterarCartao(novoCatao: string) {
        this._cartao = novoCatao
    }
    set alterarSenha(novaSenha: number) {
        this._senha = novaSenha
    }
    depositar(valor: number) {
        if (valor <= 0) {
            return
        } else {
            this._saldo += valor
        }
    }  
    sacar(valor: number) {
        if (this._saldo >= valor) {
            this._saldo -= valor
            return valor
        }
    }
    tranferir(valor: number, outraConta: Usuarios) {
        const valorSacado = this.sacar(valor)
        if (valorSacado !== undefined) {
            outraConta.depositar(valorSacado)
        }
    }
}
