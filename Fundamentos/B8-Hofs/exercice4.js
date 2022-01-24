const numbers = [32, 15, 3, 2, -5, 56, 10];

const minima = numbers.reduce((number, acumulator) => {

  return acumulator + number;

})

console.log(minima);