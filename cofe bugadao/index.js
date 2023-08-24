function processData(input) {
    let senhaCorreta = '';
  let palavraDigitada = '';
  let novaLinhaEncontrada = false;

  for (let i = 0; i < input.length; i++) {
    if (input[i] === '\n') {
      novaLinhaEncontrada = true;
    } else if (novaLinhaEncontrada) {
      palavraDigitada += input[i];
    } else {
      senhaCorreta += input[i];
    }
  }

  let senhaIndex = 0;
  let senhaEncontrada = '';

  for (let i = 0; i < palavraDigitada.length; i++) {
    if (senhaCorreta[senhaIndex] === palavraDigitada[i]) {
      senhaEncontrada += palavraDigitada[i];
      senhaIndex++;

      if (senhaEncontrada === senhaCorreta) {
        console.log("SIM");
        return;
      }
    }
  }

  console.log("NAO");
};

const input = 'cunbkjosj';

processData(input);
