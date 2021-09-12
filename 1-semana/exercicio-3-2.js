// Dado o array [30, 5, 5, 18, 43, 16, 21, 16, 24, 4, 38, 3, 18, 19, 18, 42, 6, 35, 38, 43]
// 2. Com o mesmo array ordene ele do menor para o maior.

let dados = [
  30, 5, 5, 18, 43, 16, 21, 16, 24, 4, 38, 3, 18, 19, 18, 42, 6, 35, 38, 43,
];

let menorMaior = dados.sort((n1, n2) =>{
    if(n1 === n2) return 0;
    if(n1 < n2) return -1;
    if(n1 > n2) return 1;
})


console.log(menorMaior);

