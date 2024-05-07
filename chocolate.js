

 let s = [2,2,1,3,2]
 let d = 4
 let m = 2


function chocolate(s, d, m) {

    
    let contador = 0;
    let sum = 0;
    for (let i = 0; i <= (s.length - m); i++) {
            for (let j = 0; j < m; j++) {
               sum =  sum + s[i + j]
                
                
            }
            if(sum === d){
                contador++ ;
            }
        sum = 0
        
    }
    console.log(contador)



}

chocolate(s,d,m)