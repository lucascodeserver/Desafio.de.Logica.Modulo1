function processData(input) {
    if (input === input.toUpperCase()) {
    console.log(input.toLowerCase());
  } else if (
    input.charAt(0) === input.charAt(0).toLowerCase() &&
    input.slice(1) === input.slice(1).toUpperCase()
  ) {
    console.log(input.charAt(0).toUpperCase() + input.slice(1).toLowerCase());
  } else {
    console.log(input);
  }
};

const input = 'cAPS';
processData(input);
