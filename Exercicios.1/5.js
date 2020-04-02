// 5
const arr = [1,2,3,4,5,6];
const [x , ...y] = arr

console.log(x)
console.log(y)

// 5.1
function soma(...params) {
    return params.reduce ((total, next) => (total + next))
}

console.log(soma(1,2,3,4,5))

// 5.2
const usuario = {
    nome: 'Pedro',
    idade: 24,
    endereco: {
        cidade: 'Rio Grande',
        uf: 'RS',
        pais: 'Brasil'
    },
};

const usuario2 = {...usuario, nome : 'Arthur'}
const usuario3 = {...usuario ,endereco: {...usuario.endereco, cidade : 'Lontras'}}

console.log(usuario)
console.log(usuario2)
console.log(usuario3)
