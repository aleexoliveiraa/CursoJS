let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A

/*
const varBTemp = 'B'
varB = varC;
varC = varBTemp;
varA = varB;
*/

[varA, varB, varC] = [varB, varC, varA]

console.log(varA, varB, varC)