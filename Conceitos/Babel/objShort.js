// Object Short Syntax

// É utilizado para reduzir os campos de um objeto.
//caso ja tenho uma variavel que tem o mesmo nome da variavel que será utilizada no objeto
//é possivel apenas colocar o nome da variavel sem reatribuição.

const nome = 'Pedro';
const idade = 24;

const usuario = {
    //nome = nome; jeito que seria utilizado
    nome,
    idade,
    empresa: 'Socorro Técnico'
}

console.log(usuario)