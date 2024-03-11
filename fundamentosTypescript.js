"use strict";
// TIPO NÚMERO
let numero = 2;
numero = 10; // O DADO SÓ PODE SER ALTERADO POR OUTRO DADO DO MESMO TIPO
// TIPO STRING
let palavra = 'Jeferson';
palavra = 'Venicius';
// TIPO BOOLEAN
let verdade = true;
let mentira = false;
verdade = false;
mentira = true;
// ANNOTATION AND INFERENCE
let minhaVariavel = 'Texto'; // ANNOTATION
let meuArray2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // INFERENCE
minhaVariavel = 'Texto2'; // COM ANNOTATION NÃO DÁ PARA MUDAR O TIPO
meuArray2.push(10);
let multiploArray = [1, 2, 'a', 'b', true, false]; // ARRAY FOI TRANSFORMADO EM UM ARRAY TIPO ANY
multiploArray.push(1, 2, 3, 4);
let numero2 = [1, 2, 3, 4, 5, 6];
let letras = ['Oi', 'eu', 'sou', 'Goku!'];
let arrayMisto = ['Oi', 'Eu', 'Sou', 'Goku!', 1, true]; // USAR O ANY NÃO É UMA BOA PRATICA
const meuArray = ['João', 'Maria', 'Eduardo'];
const numerosPares = [1, 2, 3, 4, 5];
const mistoVariaveis = [1, 3, 4, 'José', true, meuArray];
function minhasLetras(a, b) {
    console.log(a, b);
}
minhasLetras('J', 'E');
function soma(x, y) {
    let somar = x + y;
    return somar;
}
soma(8, 10);
function coordenadas(cord) {
    console.log(`À cordenada X é: ${cord.x}`);
    console.log(`À cordenada Y é: ${cord.y}`);
}
const minhaCordenada = { x: 728, y: 72.6 };
coordenadas(minhaCordenada);
function mostreNumeros(a, b, c) {
    console.log(`À: ${a}; B: ${b}; C: ${c}`);
}
mostreNumeros(1, 2, 3);
mostreNumeros(4, 5); // CHAMADA DE VARIAVEIS SEM O C
function validaOpcao(opcao1, opcao2) {
    console.log(opcao1, opcao2);
}
validaOpcao('Jeferson', true);
validaOpcao(23, 24);
function showCpf(cpf) {
    console.log(`O CPF é: ${cpf}`);
}
showCpf(20398403498);
showCpf('203.984.034-98');
function userDetails(user) {
    console.log(`Nome: ${user.name}`);
    console.log(`Idade: ${user.idade}`);
}
userDetails({ name: 'Paulo', idade: 26 });
function showCoords(myObject) {
    console.log(`x = ${myObject.x}; y = ${myObject.y}; z = ${myObject.z}`);
}
let minhasCoordenadas = { x: 10, y: 15, z: 25 };
showCoords(minhasCoordenadas);
function showPet(meuPet) {
    console.log(meuPet.peso);
    console.log(meuPet.nome);
    console.log(meuPet.idade);
    console.log(meuPet.raca);
}
showPet({ nome: 'Floki', peso: 4, raca: 'Vira-lata', idade: 2 });
function showPetI(meuPetI) {
    console.log(meuPetI.nomeI);
    console.log(meuPetI.racaI);
    console.log(meuPetI.idadeI);
    console.log(meuPetI.pesoI);
}
const gatinhoDaAlice = {
    nomeI: 'Floki',
    pesoI: 4,
    racaI: 'Gatinho',
    idadeI: 32,
    tipoRacaoI: 'Premier para gatos castrados'
};
showPetI(gatinhoDaAlice);
// FUNÇÃO SEM RETORNO
function semRetorno() {
    console.log('Sou uma função sem retorno');
}
semRetorno();
// LITERAL TYPES
let teste; // LITERAL TYPE, UM TIPO LITERALMENTE CRIADO POR VOCÊ
teste = 'testando'; // O VALOR DA VARIAVEL LITERAL TYPE SEMPRE SERÁ O PRIMEIRO VALOR
// TYPE UNKNOW
function algumaCoisa(x) {
    if (Array.isArray(x)) {
        console.log(x[0]);
    }
}
algumaCoisa(10);
algumaCoisa(true);
// NEVER - é usado para funções retornam erros
function showError(msgError) {
    throw new Error(msgError); // throw - processa os erros
}
// showError('Deu erro aqui!')
// SPREAD E REST no JS
let umArray = [1, 2, 3, 4, 5];
let umNovoArray = [...umArray, 6, 7, 8, 9, 10];
console.log(umNovoArray); // SPREAD
function umaFuncao(...a) {
    console.log(a);
} // REST
umaFuncao(1);
umaFuncao(1, 2, 3, 4, 5);
// DESTRUCTURING COM PARAMETROS DE OBJETOS
function showProdutos({ nome, preco }) {
    return `O nome do produto é: ${nome} e o preço dele é ${preco}`;
}
const camisa = { nome: 'Camisa de algodão', preco: 39.90 };
console.log(showProdutos(camisa));
// READONLY
const meuReadonly = [['Jeferson']]; // SEMPRE TEM QUE SER FEITO EM CONST
const fusca = {
    marca: 'VW',
    modelo: 'Fusca 1600',
    qntdPneus: 4
};
fusca.marca = 'Ford'; // TENTANDO ALTERAR ATRIBUTOS
console.log(fusca.marca);
function showUserDetails(newUser) {
    return `Seu e-mail é ${newUser.email} sua senha de acesso é ${newUser.senha} e sua regra de acesso é: ${newUser.regra ? newUser.regra : 'SEM REGRAS'}`;
    //   SE newUser.regra for verdade: imprime newUser; SE NÃO: newUser.regra = 'SEM REGRAS'
}
const user10 = {
    email: 'teste@gmail.com',
    senha: 123456,
};
const user11 = {
    email: 'teste2@gmail.com',
    senha: '12kkshf',
};
console.log(showUserDetails(user10));
console.log(showUserDetails(user11));
