
let jogos = 10;
let pontos = "10 5 20 20 4 5 2 25 1";
//esperado [2, 4]

function quebraRecordes(jogos, pontos){
    
    
    let pontosMax = arrPontos[0] 
    let pontosMin = arrPontos [0]

    let contadorRecordMax = 0;
    let contadorRecordMin = 0;

    for (let i = 0; i < arrPontos.length; i++) {
        const pontosJogoAtual = arrPontos[i];
        if(+pontosJogoAtual > +pontosMax){
            contadorRecordMax++
            pontosMax = pontosJogoAtual
        }
        if(+pontosJogoAtual < +pontosMin){
            contadorRecordMin++
            pontosMin = pontosJogoAtual
        }
        console.log("=================================")
        console.log(`pontosJogoAtual ${pontosJogoAtual} / MAX: ${pontosMax} / MIN ${pontosMin}`)
    }
    console.log(contadorRecordMax, contadorRecordMin)
}

quebraRecordes(jogos, pontos);