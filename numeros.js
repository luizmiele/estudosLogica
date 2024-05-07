let a = [2,6] // multiplicar
let b = [24,36] //dividir 

function numerosRepetidos(a,b){


    let maiorNumero = Math.max(...b);
    let arrMultiplicacao = [];

    a.forEach(valor => {
        let contador = 0;
        while(contador < maiorNumero) {
            contador += valor
            arrMultiplicacao.push(contador)
        }
    })

    let arrDivisao = [];

    b.forEach(valor => {
        for(let i = valor; i > 0; i--){
            if(valor % i === 0 ){
                arrDivisao.push(i)
            }
        }
    })

    let todosNumeros = [...arrMultiplicacao, ...arrDivisao]

    let obj = {};

    todosNumeros.forEach (valor => {
        obj[valor] = (obj[valor] || 0) + 1
    })

    let contador = 0;
    Object.keys(obj).forEach( chave => {
        if(obj[chave] === a.length + b.length){
            contador++
        }
    })
    console.log(contador)
}

numerosRepetidos(a,b)