export class Banco {
    public nomeBanco: string
    public localizacaoBanco: string
    public diasBanco: string
    public _horarioAbertura: Date
    public _horarioFechamento: Date
    constructor(nomeBanco: string, localizacaoBanco: string, diasBanco: string, _horarioAbertura: Date, _horarioFechamento: Date) {
        this.nomeBanco = nomeBanco
        this.localizacaoBanco = localizacaoBanco
        this.diasBanco = diasBanco
        this._horarioAbertura = _horarioAbertura
        this._horarioFechamento = _horarioFechamento

    }
    get obterNomeBanco() {
        return this.nomeBanco
    }
    get obterLocalizacaoBanco() {
        return this.localizacaoBanco
    }
    get obterDiasBanco() {
        return this.diasBanco
    }
    get horarioAbertura() {
        return this._horarioAbertura
    }
    get horarioFechamento() {
        return this._horarioFechamento
    }
    set alterarNomeBanco(novoNomeBanco: string) {
        this.nomeBanco = novoNomeBanco
    }
    set alterarLocalizacaoBanco(novaLocalizacaoBanco: string) {
        this.localizacaoBanco = novaLocalizacaoBanco
    }
    set alterarDiasBanco(novoDiaBanco: string) {
        this.diasBanco = novoDiaBanco
    }
    set horarioAbertura(novoHorarioAbertura: Date) {
        this._horarioAbertura = novoHorarioAbertura
    }
    set horarioFechamento(novoHorarioFechamento: Date) {
        this._horarioFechamento = novoHorarioFechamento
    }
}
