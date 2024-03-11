const banco = {
    nomeBanco: '',
    localizacaoBanco: '',
    diasBanco: '',
    horarioDataAbertura: new Date(),
    horarioDataFechamento: new Date()
}

const usuarios =  {
    nome: '',
    cartao: '',
    senha: ''
}

Object.setPrototypeOf(banco, usuarios)
usuarios.nomeBanco = 'Bradesco'
usuarios.localizacaoBanco = 'Amontada'
usuarios.diasBanco = 'Segunda'
usuarios.horarioDataAbertura = new Date('March 11, 2024 8:00:00')
usuarios.horarioDataFechamento = new Date('March 11, 2024 17:00:00')
usuarios.nome = 'Jeferson Venicius'
usuarios.cartao = 'Nubank'
usuarios.senha = '123456789'
console.log(usuarios)
