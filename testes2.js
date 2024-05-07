// um array com nº +,- e 0.
// ver quantos +, - e 0 tem. dividir pelo numero de elementos do array e retornar os resultados

function plusMinus(arr) {
    // Write your code here
    let positivos = 0;
    let negativos = 0;
    let zeros = 0;
    let tamanhoArray = arr.length;

    for (let i = 0; i < tamanhoArray; i++) {
        if (arr[i] > 0) {
            positivos += 1;
        } else if (arr[i] < 0) {
            negativos += 1;
        } else {
            zeros += 1;
        }
    }

    let resultadoPositivos = positivos/arr.length
    let resultadoNegativos = negativos/arr.length
    let resultadoZeros = zeros/arr.length
    
    console.log(resultadoPositivos.toFixed(6), resultadoNegativos.toFixed(6), resultadoZeros.toFixed(6))
    
}

plusMinus([1,1,0,-1,-1])