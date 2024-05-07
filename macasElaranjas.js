// s até t = tamanho da Casa 
// a e b = macieira e laranjeira, respectivamente
// d = arr de unidades que as frutas caem do pé

let s = 7
let t = 10
let a = 4
let b = 12
let macas = [-2, 3, 1]
let laranjas = [5, -6, -4]

function frutas(s,t,a,b,macas,laranjas) {
    let macasDentro = 0;
    for (let i = 0; i < macas.length; i++) {
        const posicaoQuedaMacas = a + macas[i];
        if(posicaoQuedaMacas >= s && posicaoQuedaMacas <= t) {
            macasDentro += 1;
        }
    }

    let laranjasDentro = 0;
    for (let j = 0; j < laranjas.length; j++) {
        const posicaoQuedaLaranjas = b + laranjas[j];
        if (posicaoQuedaLaranjas >= s && posicaoQuedaLaranjas <= t) {
            laranjasDentro += 1;
        }
        
    }
    console.log(macasDentro)
    console.log(laranjasDentro)
}

frutas(s,t,a,b,macas,laranjas)