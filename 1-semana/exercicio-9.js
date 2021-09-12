// Crie uma função com uma variável chamada num e incremente o valor dentro de um setInterval de 1200ms. Ela deve mostrar no console cada atualização até que o programa seja encerrado.
// Dica: quando você está executando um programa no console e ele não termina, você pode forçar o encerramento dele apertando ctrl+c

function incrementNum() {
  let num = 0;
  setInterval(() => {
  
      num++;
      console.log(num);
    
  }, 1200);
}
incrementNum()