import {Usuarios} from './Usuarios.js'
const user = new Usuarios('Bradesco', 'Amontada CE, centro', 'Segunda', new Date('March 11, 2024 8:00:00'), new Date('March 11, 2024 17:00:00'), 'Jeferson Venicius', 'Nubank', 123456789, 2000, 12345)
console.log(user)
user.sacar(100)
console.log(user._saldo)
user.depositar(5000)
console.log(user._saldo)
const user2 = new Usuarios('Bradesco', 'Amontada CE, centro', 'Segunda', new Date('March 11, 2024 8:00:00'), new Date('March 11, 2024 17:00:00'), 'João', 'Iti', 23848383, 0, 342345)
console.log(user2._saldo)
user.tranferir(3000, user2)
console.log(user2._saldo)
console.log(user._saldo)
