// Dado o código a seguir, refatore ele e implemente Promessas.
// function waitTo(ms, callback) {
//     setTimeout(() => callback('done!', ms));
// }
// waitTo(1200, (result) => {
//     console.log(result);
// })


function retornoApos2SegundosPromise() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('done!')
      }, 1200);
    });
  }

  retornoApos2SegundosPromise().then(console.log);
