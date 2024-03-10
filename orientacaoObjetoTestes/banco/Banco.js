"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Banco = void 0;
class Banco {
    constructor(nomeBanco, localizacaoBanco, diasBanco, _horarioAbertura, _horarioFechamento) {
        this.nomeBanco = nomeBanco;
        this.localizacaoBanco = localizacaoBanco;
        this.diasBanco = diasBanco;
        this._horarioAbertura = _horarioAbertura;
        this._horarioFechamento = _horarioFechamento;
    }
    get obterNomeBanco() {
        return this.nomeBanco;
    }
    get obterLocalizacaoBanco() {
        return this.localizacaoBanco;
    }
    get obterDiasBanco() {
        return this.diasBanco;
    }
    get horarioAbertura() {
        return this._horarioAbertura;
    }
    get horarioFechamento() {
        return this._horarioFechamento;
    }
    set alterarNomeBanco(novoNomeBanco) {
        this.nomeBanco = novoNomeBanco;
    }
    set alterarLocalizacaoBanco(novaLocalizacaoBanco) {
        this.localizacaoBanco = novaLocalizacaoBanco;
    }
    set alterarDiasBanco(novoDiaBanco) {
        this.diasBanco = novoDiaBanco;
    }
    set horarioAbertura(novoHorarioAbertura) {
        this._horarioAbertura = novoHorarioAbertura;
    }
    set horarioFechamento(novoHorarioFechamento) {
        this._horarioFechamento = novoHorarioFechamento;
    }
}
exports.Banco = Banco;
