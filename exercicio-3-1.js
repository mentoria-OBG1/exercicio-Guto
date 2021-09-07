// Dado o array [30, 5, 5, 18, 43, 16, 21, 16, 24, 4, 38, 3, 18, 19, 18, 42, 6, 35, 38, 43]
// 1. Ordene esse array de um jeito que o número pares venham antes dos ímpares.
// 2. Com o mesmo array ordene ele do menor para o maior.

let dados = [
  30, 5, 5, 18, 43, 16, 21, 16, 24, 4, 38, 3, 18, 19, 18, 42, 6, 35, 38, 43,
];

let numeroPar = dados.filter((pares) => pares % 2 === 0);
let numeroImpar = dados.filter((impares) => impares % 2 !== 0);

let ordernarPar = numeroPar.sort((n1, n2) =>{
    if(n1 === n2) return 0;
    if(n1 < n2) return -1;
    if(n1 > n2) return 1;
})

let ordenarImpar = numeroImpar.sort((n1,n2) =>{
    if(n1 === n2) return 0;
    if(n1 < n2) return -1;
    if(n1 > n2) return 1;
})

console.log();

console.log(ordernarPar, ordenarImpar); // 1. Ordene esse array de um jeito que o número pares venham antes dos ímpares.


console.log(ordernarPar.concat(ordenarImpar));


