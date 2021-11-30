
/* 1 exercicio */

/*let menu = ['Home', 'Serviços', 'Portifólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);*/


/* 2 exercicio */

/*let menu = ['Home', 'Serviços', 'Portifólio', 'Links'];
let indexOfPortifolio = menu.indexOf('Portifólio');

console.log(indexOfPortifolio);*/

/* 3 exercicio */

/*let menu = ['Home', 'Serviços', 'Portifólio', 'Links'];

menu.push('Contato');

console.log(menu);*/


/* exercicios array concluidos */



/*let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia']


for ( let index = 0; index < groceryList.length; index += 1){

  console.log(groceryList[index]);
}*/


/* exercicios de FOR concluidos */



/*let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for (let string of names){
  console.log(string);
}*/


/* exercicios de for/os concluido */


/* inicio desafio do dia  */

/*let numbers = [];
let div = []

for (i = 0; i < 26; i += 1){

  numbers.push(i);
  
  
}
for(i = 0; i < numbers.length; i += 1){

  div.push(i / 2);
}


console.log("numeros" + numbers);
console.log('divididos' + div);
*/


/* exercicio bonus */

/*let array = [45, 27, 57, 1330, 560, 800, 200, 70, 945, 54];
let numbers = [];

for (let index = 1; index < array.length; index += 1) {
  for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
    if (array[index] < array[secondIndex]) {
      let mult = array[index] * array[secondIndex];
      
      numbers.push(mult);
    }
    
  }
  console.log(numbers);
}*/



let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menor = numbers[0];
let numeroMenor;

for(index = 0; index < numbers.length; index += 1){

  if( menor > numbers[index]){

    menor = numbers[index];
  }
  numeroMenor = menor;

}

console.log(numeroMenor);