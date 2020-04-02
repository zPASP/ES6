"use strict";

// Object Short Syntax
// É utilizado para reduzir os campos de um objeto.
//caso ja tenho uma variavel que tem o mesmo nome da variavel que será utilizada no objeto
//é possivel apenas colocar o nome da variavel sem reatribuição.
var nome = 'Pedro';
var idade = 24;
var usuario = {
  //nome = nome; jeito que seria utilizado
  nome: nome,
  idade: idade,
  empresa: 'Socorro Técnico'
};
console.log(usuario);
