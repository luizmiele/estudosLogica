//    #
//   ##
//  ###
// ####

 let tamanhoPiramide = 5
 let nEspaco = 0
 let nHastag = 0

for (let i = tamanhoPiramide - 1 ; i >= 0 ; i--) {
        nEspaco = i
    
    for (let j = tamanhoPiramide - i; j <= tamanhoPiramide - i; j++) {
        nHastag = j 
        
    }
    console.log(" ".repeat(nEspaco) + "#".repeat(nHastag))
 
}
