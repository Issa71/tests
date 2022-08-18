function reverseFac(num) {
    let product = 1;
    let n = 1;
  
    while (product <= num) {
      if (product === num) return `${n}!`;
      product *= ++n;
    }
    return 'None';
  }
  console.log(reverseFactorial(24));
  console.log(reverseFactorial(120));
  console.log(reverseFactorial(150));

  module.exports.reverseFactorial = reverseFac;