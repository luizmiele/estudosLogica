let tamanhoEscada = 5

for (let i = 0 ; i < tamanhoEscada ; i++) {
    let resultado = "";
    for (let j = 0; j < tamanhoEscada; j++) {
        
        if (j + 1 >= tamanhoEscada - i) {
            resultado += "#"
        } else {
            resultado += " "
        } 
    }
    console.log(resultado) 
}