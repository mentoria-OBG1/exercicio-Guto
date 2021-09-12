// Crie uma função assincrona que retora um array de inteiros após 2 segundos, itere sobre o resultado mostrando no console cada valor . NÃO USE CALLBACKS

const datas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

async function retornoApos2Segundos() {
  datas.forEach((el) => {
    setTimeout(() => {
      console.log(el);
    }, 2000);
  });
}

retornoApos2Segundos();


