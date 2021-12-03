let inteiros = [2, 4, 6, 7, 10, 0, 1];
let indiceInicial = 0;

function arrayInteiros (array){
  for(let index in array){

    if(array[indiceInicial] > array[index]){
      indiceInicial = index;
    }
  }
}


arrayInteiros(inteiros);
console.log(indiceInicial);