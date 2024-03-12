"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuarios = void 0;
const Banco_js_1 = require("./Banco.js");
class Usuarios extends Banco_js_1.Banco {
    constructor(nomeBanco, localizacaoBanco, diasBanco, _horarioAbertura, _horarioFechamento, _nomeUsuario, _cartao, _senha, _saldo, conta) {
        super(nomeBanco, localizacaoBanco, diasBanco, _horarioAbertura, _horarioFechamento);
        this._nomeUsuario = _nomeUsuario;
        this._cartao = _cartao;
        this._senha = _senha;
        this._saldo = _saldo;
        this.conta = conta;
    }
    get obterNomeUsuario() {
        return this._nomeUsuario;
    }
    get obterCartao() {
        return this._cartao;
    }
    get obterSenha() {
        return this._senha;
    }
    get obterSaldo() {
        return this._saldo;
    }
    get obterConta() {
        return this.conta;
    }
    set alterarNomeUsuario(novoNomeUsuario) {
        this._nomeUsuario = novoNomeUsuario;
    }
    set alterarCartao(novoCatao) {
        this._cartao = novoCatao;
    }
    set alterarSenha(novaSenha) {
        this._senha = novaSenha;
    }
    depositar(valor) {
        if (valor <= 0) {
            return;
        }
        else {
            this._saldo += valor;
        }
    }
    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor;
            return valor;
        }
    }
    tranferir(valor, outraConta) {
        const valorSacado = this.sacar(valor);
        if (valorSacado !== undefined) {
            outraConta.depositar(valorSacado);
        }
    }
}
exports.Usuarios = Usuarios;
