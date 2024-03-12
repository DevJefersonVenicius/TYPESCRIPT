"use strict";
const banco = {
    nomeBanco: '',
    localizacaoBanco: '',
    diasBanco: '',
    horarioDataAbertura: new Date(),
    horarioDataFechamento: new Date()
};
const usuarios = {
    nome: '',
    cartao: '',
    senha: '',
    conta: 0,
    saldo: 0,
    depositar: function (valor) {
        if (valor <= 0) {
            return;
        }
        else {
            this.saldo += valor;
        }
    },
    sacar: function (valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
            return valor;
        }
    },
    transferir(valor, novaConta) {
        const valorSacado = this.sacar(valor);
        if (valorSacado !== undefined) {
            novaConta.depositar(valorSacado);
        }
    }
};
const usuarios2 = {
    nome: 'Nome do Usuário 2',
    cartao: 'Cartão do Usuário 2',
    senha: '987654321',
    conta: 54321,
    saldo: 0,
    depositar: function (valor) {
        if (valor <= 0) {
            return;
        }
        else {
            this.saldo += valor;
        }
    },
    sacar: function (valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
            return valor;
        }
    },
    transferir(valor, novaConta) {
        const valorSacado = this.sacar(valor);
        if (valorSacado !== undefined) {
            novaConta.depositar(valorSacado);
        }
    }
};
Object.setPrototypeOf(banco, usuarios);
usuarios.nomeBanco = 'Bradesco';
usuarios.localizacaoBanco = 'Amontada';
usuarios.diasBanco = 'Segunda';
usuarios.horarioDataAbertura = new Date('March 11, 2024 8:00:00');
usuarios.horarioDataFechamento = new Date('March 11, 2024 17:00:00');
usuarios.nome = 'Jeferson Venicius';
usuarios.cartao = 'Nubank';
usuarios.senha = '123456789';
usuarios.conta = 12345;
usuarios.saldo = 10000;
console.log(usuarios);
usuarios.depositar(500);
console.log(usuarios.saldo);
usuarios.sacar(5000);
console.log(usuarios.saldo);
usuarios.transferir(3000, usuarios2);
console.log(usuarios2.saldo);
