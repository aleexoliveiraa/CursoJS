const a = {
    nome:'Alex',
    sobrenome: 'Oliveira'
};
const b = {...a};

a.nome = 'André';
console.log(a, b);

/*let a = ['a', 'b', 'c'];
let b = [...a]; //CÓPIA DO ARRAY

console.log(a, b);

a.push('d');
console.log(a, b);
*/


/*
let a = ['a', 'b', 'c'];
let b = a;

console.log(a, b);

a.push('d');
console.log(a, b);

b.pop();
console.log(a, b);
*/

/*
let a = 'A';
let b = a; //CÓPIA 

console.log(a, b);

a = 'Ourra coisa';
console.log(a, b);
*/