let valor: number = 0
let unidadeValor: string = ''
let unidadeDestino: string = ''

function converterValor() {
    if (unidadeValor === unidadeDestino) {
        console.log(`${valor}${unidadeValor} é igual a ${valor}${unidadeDestino}`)
    }
    let metros: any
    switch(unidadeValor) {
        case 'm' :
            metros = valor
            break
        case 'km' :
            metros = valor * 1000
            break
        case 'cm' :
            metros = valor / 100
            break
        case 'mm' :
            metros = valor / 1000
            break
    }
    console.log(metros)
    let resultado: any
    switch(unidadeDestino) {
        case 'm' :
            resultado = metros
            break
        case 'km' :
            resultado = metros / 1000
            break
        case 'cm' :
            resultado = metros * 100
            break
        case 'mm' :
            resultado = metros * 1000
            break
    }
    if (valor > 0) {
        console.log(`${valor}${unidadeValor} equivale a ${resultado}${unidadeDestino}`)
    }
    else {
        console.log(`${valor} não é um valor valido.`)
    }
}
valor = 20
unidadeValor = 'm'
unidadeDestino = 'km'
converterValor()
