function solucao(numeros) {
 let s = 0;
     let posicao = 0;
     for (let i = 0; i < numeros.length; i++) {
       s += numeros[i];
     }
     s = s % numeros.length;
    
     if (s===0){
         console.log( numeros.length);
     } else {
       console.log(s);
     }
  
};

const num = [1, 3, 2, 1];
solucao(num);