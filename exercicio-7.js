// Crie uma função que receba um array de objetos contendo nome e sobrenome e transforme-o em um array de nome completo, retorne esse array e mostre no console.

const arrayNames = [
    {firstName: 'José', lastName: 'Augusto'},
    {firstName: 'Bruno', lastName: 'Germano'},
    {firstName: 'Bruce', lastName: 'Lee'},
]

function concatName(element) {
    let name = element.firstName.concat(' ',element.lastName);
    return name;
}

let nameComplete = arrayNames.map(concatName);

console.log(nameComplete);