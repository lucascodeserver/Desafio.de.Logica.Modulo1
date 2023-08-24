const jogadores = [
  {
    "nome": "Herman",
    "jogada": 1
  },
  {
    "nome": "Rhodes",
    "jogada": 1
  },
  {
    "nome": "Beach",
    "jogada": 0
  },
  {
    "nome": "Laurel",
    "jogada": 0
  },
  {
    "nome": "Beatrice",
    "jogada": 0
  },
  {
    "nome": "Alison",
    "jogada": 0
  },
  {
    "nome": "Saundra",
    "jogada": 0
  },
  {
    "nome": "Klein",
    "jogada": 0
  }
];

function solucao(jogadores) {
    
    const result = jogadores.filter((jogador)=>{
    return jogador.jogada===0;
    });
    
    const result2 = jogadores.filter((jogador)=>{
    return jogador.jogada===1;
    });
    

      if(result.length===1){
        console.log(result[0].nome);
      }else if(result2.length===1){
        console.log(result2[0].nome);
      }else{
        console.log('NINGUEM');
      }
  
};

solucao(jogadores);