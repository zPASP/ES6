function soma (a = 3 ,b = 9) {
    return a + b;
}

const soma2 = (a = 3, b = 9) => a+b; // utilizando ao arrowFunction

console.log (soma(1))
console.log (soma())
console.log (soma(1,2))

console.log (soma2(1))
console.log (soma2())
console.log (soma2(1,2))

