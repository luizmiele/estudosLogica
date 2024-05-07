


function velas(arr) {
    let contador = 0;
    let maiorVela = 0;

    arr.sort((a,b) => b - a)

    maiorVela = arr[0]

    for (let i = 0; i < arr.length; i++) {
        if(arr[i] == maiorVela){
            contador += 1;
        }
    }
    return contador
}

console.log(velas([3,2,4,4]))