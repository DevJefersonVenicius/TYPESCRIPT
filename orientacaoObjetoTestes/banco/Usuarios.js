"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Usuarios = void 0;
const Banco_js_1 = require("./Banco.js");
class Usuarios extends Banco_js_1.Banco {
    constructor(nomeBanco, localizacaoBanco, diasBanco, _horarioAbertura, _horarioFechamento, _cartao, _senha) {
        super(nomeBanco, localizacaoBanco, diasBanco, _horarioAbertura, _horarioFechamento);
        this._cartao = _cartao;
        this._senha = _senha;
    }
    get obterCartao() {
        return this._cartao;
    }
    get obterSenha() {
        return this._senha;
    }
    set alterarCartao(novoCatao) {
        this._cartao = novoCatao;
    }
    set alterarSenha(novaSenha) {
        this._senha = novaSenha;
    }
}
exports.Usuarios = Usuarios;
