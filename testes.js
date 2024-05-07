
const arr = [
    [5, 7, 9],
    [2, 5, 8],
    [11, 3, 6]
  ]
    let somaDiagonalDireita = 0;

for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        if(i === j) {
            somaDiagonalDireita += arr[i][j]
        }
    }
}
console.log("soma diagonal Direita", somaDiagonalDireita)

    let somaDiagonalEsquerda = 0;

for (let k = 0 ; k < arr.length; k++) {
    for (let l = arr.length - 1; l >= 0 ; l--) {
        if(l === arr.length - 1 - k){
        somaDiagonalEsquerda += arr[k][l]
        }
    }
}
console.log("Soma diagonal ESQUERDA", somaDiagonalEsquerda)

console.log("Valor Absoluto", Math.abs(somaDiagonalDireita - somaDiagonalEsquerda))