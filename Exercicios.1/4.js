// 4.1
const empresa = {
    nome: 'SocorroTecnico',
    endereco: {
        cidade: 'Rio Grande',
        estado: 'RS'
    },
}

const {nome, endereco: {cidade , estado}} = empresa;

console.log(nome)
console.log(cidade)
console.log(estado)

//4.2
function mostrtaInfo ({ nome , idade }) {
    return `${nome} tem ${idade} anos`
}
console.log ( mostrtaInfo({ nome: 'Pedro', idade: 24}) )

