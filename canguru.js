let x1 = 0;
let v1 = 3;
let x2 = 4;
let v2 = 2;

function encontro(x1, v1, x2, v2){
    
    let encontro = 0;
    for (let i = 0; i < 1000; i++) {
        x1 += v1;
        x2 += v2;
        
        if(x1 === x2){
            encontro += 1;
        }

    }
    
    if (encontro > 0){
     return console.log('YES')
    } else {
     return console.log('NO')
    }
    

    

}
encontro(x1,v1, x2, v2)