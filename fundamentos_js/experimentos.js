let a = 3

global.b = 123

this.c = 456
this.d = false
this.e = 'teste'

console.log(this.a)
console.log(global.b)
console.log(this.c)
console.log(module.exports.c)
console.log(module.exports === this)
console.log(module.exports)

//isso abaixo é criar uma variavel global, que pode acarretar varios erros 
//criando variavel maluca, sem var e sem let
abc = 3 // não faça isso!!!!!!!!

console.log(global.abc)


//fuja do escopo global