let fruit = [3, 4, 10, 1, 12];
let soma = 0;


for(index = 0; index < fruit.length; index += 1){

  soma += fruit[index];
}

if (soma > 15){
console.log(soma);
} else {
  console.log('Valor menor que 16');
}