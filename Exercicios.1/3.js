// 3.1
const arr = [1, 2, 3, 4, 5];
const e31 = arr.map(item => item + 10);
console.log(e31)

// 3.2
// Dica: Utilize uma constante pra function

const usuario = {nome: 'Pedro', idade: 24};
function e32 ({ idade }) {
    return idade;
}
console.log(e32(usuario))

// 3.3
// Dica: Utilize uma constante pra function

const nome = 'Pedro'
const idade = 24

const e33 = (nome = 'Pedro', idade = 18) => ({nome, idade})
console.log(e33())

// 3.4

const promise = function () { return new Promise (function(resolve, reject){
        return resolve ();
    })
}

const e34 = () => new Promise ((resolve, reject) => resolve())