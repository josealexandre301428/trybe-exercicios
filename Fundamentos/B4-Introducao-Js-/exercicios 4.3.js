/*let fruit = [3, 4, 10, 1, 12];
let soma = 0;


for(index = 0; index < fruit.length; index += 1){

  soma += fruit[index];
}

if (soma > 15){
console.log(soma);
} else {
  console.log('Valor menor que 16');
}*/


/* desafio do dia 1 */
/*let iFat = 10;
let fat = 10;
let resultado;

for (let index = 0; index < iFat; index += 1){
  
  if(fat > iFat - 1){ 
    resultado = fat * (fat - 1);
    fat = fat - 2
  } else if(fat >= 1){
    resultado = resultado * fat;  
    fat = fat -1;
  } 
 

}

console.log(resultado);*/

/* desafio do dia 2  */

/*let words = ['java', 'javascript', 'python', 'html', 'css'];
let maiorLinha = words[0];
let menorLinha = words[0];


for(let maiorIndex = 0; maiorIndex < words.length; maiorIndex += 1){
  if(words.length > maiorLinha.length){
    maiorLinha = words[maiorIndex];
  }
}

for(let menorIndex = 0; menorIndex < words.length; menorIndex += 1){
  if(words.length < menorLinha.length){
    menorLinha = words[menorIndex];
  }
}
console.log(maiorLinha);
console.log(menorLinha);*/


/*desafio do dia 3 */


let prime = 50;


for (primeIndex = 0; primeIndex < prime; primeIndex += 1 ) { 

  if(prime / prime === 1){
    console.log('primo', + prime);
  } 
prime = prime - 1;
}
console.log(prime);


/* bonus do dia  */
/*let n = 5;
let symbol = '*';
let inputLine = '';

let midOfMatrix = (n + 1) / 2;
let controlLeft = midOfMatrix;
let controlRight = midOfMatrix;

for (let lineIndex = 0; lineIndex < midOfMatrix; lineIndex += 1) {
  for (let columnIndex = 0; columnIndex <= n; columnIndex += 1) {
    if (columnIndex >= controlLeft && columnIndex <= controlRight) {
      inputLine = inputLine + symbol;
    } else {
      inputLine = inputLine + ' ';
    }
  }
  console.log(inputLine);
  inputLine = '';
  controlRight += 1;
  controlLeft -= 1
};
*/