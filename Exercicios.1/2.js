const usuarios = [
    { nome: 'Pedro', idade: 24 , empresa: 'SocorroTecnico'},
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
]

// mostrar apenas as idades.
const idades = usuarios.map(item => item.idade)
console.log(idades)

// mostrar pessoas que tenham mais de 18 anos e trabalhe na empresa especifica. Retorna vazio ou com todos os valores encontrados
const filter = usuarios.filter(item => (item.idade > 17 && item.empresa == 'SocorroTecnico'))
console.log(filter);

// procurar por pessoas que trabalhe na empresa especifica. Lembrando que o find retorna o primeiro valor encontrado e caso não encontre nada retorna undefined
const find = usuarios.find(item => item.empresa == 'google')
console.log(find)

const verificarIdade = usuarios.filter ((item) => ((item.idade * 2) < 50) )
console.log(verificarIdade)