


function arredonda(notas) {


    for (let i = 0; i < notas.length; i++) {
        
        if(notas[i] >= 38){
           if(notas[i] % 5 === 3){
            notas[i] += 2;
                
           }else if(notas[i] % 5 === 4){
            notas[i] += 1;
                
           }      
        }
    }
    return notas
}

console.log(arredonda([73, 67, 38, 33]))