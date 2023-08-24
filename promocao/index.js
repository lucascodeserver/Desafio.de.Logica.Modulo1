function solucao(precos) {
let soma = 0;
let totalAPagar = 0;
let menorValor = precos[0];
    if(precos.length >= 3 && precos.length <=100){
      
      
      for(let item = 0;item<precos.length;item++){
        const valorAtual = precos[item];
        if(valorAtual < menorValor){
          menorValor = valorAtual;
        }
        soma += precos[item];
        totalAPagar = soma - menorValor*0.5;
      }
      console.log(totalAPagar);
      
    }else if(precos.length < 3 && precos.length <=100){
      for(let item = 0;item<precos.length;item++){
        soma += precos[item];
        totalAPagar = soma;
        }
      console.log(totalAPagar)  ;
    }
};

const valores = [200, 150, 50, 100];
solucao(valores);