// Crie uma função que receba qualquer número de parametros, para cada parametro:
//  - Não faça nada se o parametro não for uma string
//  - Mostre no console o objeto JSON se for uma string JSON válida
//  - Se o objeto desserializado contiver uma propriedade de idade, some todas as idades e retorna o total
//  Use esses parametros para testar sua função
//  - (15,'{"name":"John"}',"",'{"age":"30"}','{"age":"40"}')
//  Dica 1: JSON.parse dispara um erro se não o parâmetro não for válido
//  Dica 2: Use o objeto function arguments

function argumentParameter() {
  let sumAge = 0;
  const validar = Object.values(arguments);

  validar.forEach((el) => {
    try {
      if (typeof(el) === 'string')  {
        let content = JSON.parse(el);
        console.log(content);

        if(content.age) {
          sumAge += parseInt(content.age)
        }
      }
    } catch (e) {}
  });
  console.log(sumAge);
}
argumentParameter(15, '{"name":"John"}', "", '{"age":"30"}', '{"age":"40"}');
