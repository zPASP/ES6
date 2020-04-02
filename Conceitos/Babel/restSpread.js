 //REST
//        pega o resto de alguma desestruturação ou de uma passagem de parametros
const usuario = {
     nome: 'Pedro',
     idade: 24,
     empresa: 'Socorro Técnico'
}

const arr = [1,2,3,4,5];
//pegando os valores do array e difinindo uma variavel para cada,
const [a, b, c, ...d] = arr
// a = 1 | b = 2 | c = 3 | d = [4,5]

 // é utilizado ... e logo apos todas a informações que não foram utilizadas ficam salvas nela
const {nome, ...resto } = usuario;

//pode ser utilizado para pegar todos os parametros recebido para fazer a ação
function soma (...params) {
    return params.reduce( (total, next) => total + next);
}
console.log(soma(1,2,3,4,5,6))

console.log(nome)
console.log(resto)
console.log(d)

// SPREAD
//         faz o papel de propagar e/ou repassar as informações de algum array para outra estrutura de dados

const arr1 = [1,2,3]
const arr2 = [4,5,6]
//utilização do spread para inur os dois array's
const arr3 = [...arr1, ...arr2]

console.log(arr3)

const usuario1 = {
    nome: 'Pedro',
    idade: 24,
    empresa: 'Socorro Técnico'
}

//criar um novo objeto com as mesma propriedades porem alterando algum valor.
const usuario2 = {...usuario1 , nome: 'Alexandre'}

console.log(usuario2)