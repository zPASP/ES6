const arr = [1,3,4,5,8,9,2];

// array.map percorre o vetor em cada item e executa a ação solicitada
// pode ser solicitada alem do item do vetor a posicao do mesmo
// array.map(function(item,index) { ACAO })

const newArr = arr.map (function(item, index){ //
    return item + index;
})

console.log(newArr)


//array.reduce retorna apenas um valor fazendo com a acao solicitada
//

const sum = arr.reduce (function (total,next){
    return total + next;
})

console.log(sum) // soma de todos os valores de vetor


// array.filter funciona como um filtro para valores que eu queira que fique no novo array
// podendo assim deixar apenas os numeros pares de um array. Tem que dar um return no valor que deve ser salvo
// true salva no filter

const filter = arr.filter (function(item){
    return item % 2 === 0;
})

console.log (filter)



// array.find é utilizado para procurar um item no vetor, caso tenha ira retorna o valor
// se não tiver retorna undefined
const find = arr.find (function(item){
    return item === 22;
})

console.log(find);
