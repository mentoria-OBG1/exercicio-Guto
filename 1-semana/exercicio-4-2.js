// Crie uma outra função que receba um texto como parâmetro e retorne o número de palavras que tem nesse texto.


function contadorPalavras(text) {
    const countText = text.split(' ');
    return `Nesse texto tem ${countText.length} palavras`
}

console.log(contadorPalavras('Mentoria do Bruno Germano'));