const usuario = {
    nome: 'Pedro',
    idade: 24,
    endereco: {
        cidade: 'Rio Grande',
        estado: 'RS',
    },
};
/* modo não simplificado de chamar as informações do vetor
const nome = usuario.nome;
const idade = usuario.idade;
const cidade = usuario.endereco.cidade;
*/

const { nome, idade, endereco: {cidade}} = usuario;

function mostraNome ({ nome }) {
    console.log(nome);
}

const mostraIdade = ({idade}) => console.log(idade);

mostraIdade(usuario)
mostraNome(usuario)

console.log(nome)
console.log(idade)
console.log(cidade)