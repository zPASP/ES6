const arr = [1,2,3,4,5];
/*

const newArr = arr.map(function(item) {return item * 2;})
A function tilizada abaixo pode ser removida por conta de ser anomina, serve apenas para aquele proposito
const newArr = arr.map((item) => {return item * 2;})
devido ao fato de ser tratado apenas um item pode ser reduzido a quatidade de parenteses
const newArr = arr.map(item => {return item * 2;})
quando a funcão de retorno não tem um corpo de funcao pode ser reduzida e colocada para apos o =>
const newArr = arr.map(item =>  item * 2;)
*/

const newArr = arr.map(item => item * 2)

console.log (newArr)

const teste = () => ({ nome: 'Pedro Pinto' })
const teste2 = () => 'Pedro'

console.log (teste())
console.log (teste2())