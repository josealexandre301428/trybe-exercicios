/*const myFizzBuzz = require('./index')*/

/*describe('Soma dos valores', () => {
  it('sum 4 and 5 to be 9', ()=> {
    expect(sum(4,5)).toEqual(9);
  });
  it('sum 0 and 0 to be 0', ()=> {
    expect(sum(0,0)).toEqual(0);
  });


});*/

/*describe('myRemove check', () => {
  it('Dado os parametros [1, 2, 3, 4], 3 devolve [1, 2, 4]', ()=> {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  });
  it('Dado os parametros [1, 2, 3, 4], 3  não devolve [1, 2, 3, 4]', ()=> {
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
  });
  it('Dado os parametros [1, 2, 3, 4], 5 devolve [1, 2, 3, 4]', ()=> {
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });

});*/

/*describe('FizzBuzz check', () => {
  it('Se divisivel por 3 e 5 retorna fizzbuzz', ()=> {
    expect(myFizzBuzz(15)).toEqual("fizzbuzz");
  });
  it('Se divisivel por 3 retorna fizz', ()=> {
    expect(myFizzBuzz(9)).toEqual("fizz");
  });
  it('Se divisivel por 5 retorna buzz', ()=> {
    expect(myFizzBuzz(10)).toEqual("buzz");
  });
  it('Se não divisivel por 3 e 5 retorna o proprio numero', ()=> {
    expect(myFizzBuzz(7)).toEqual(7);
  });
  it('Se o parametro não for type number retorna false', ()=> {
    expect(myFizzBuzz("bla")).toEqual(false);
  });
});*/

/*const techList = require('./index');

describe('Testa a função techList', () => {
  it('Testa se a função techList é definida', () => {
    expect(techList).toBeDefined();
  });
  it('Testa se techList é uma função', () => {
    expect(typeof techList).toBe('function');
  });
  it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
    expect(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas')).toEqual([
      {
        tech: 'CSS',
        name: 'Lucas'
      },
      {
        tech: 'HTML',
        name: 'Lucas'
      },
      {
        tech: 'JavaScript',
        name: 'Lucas'
      },
      {
        tech: 'Jest',
        name: 'Lucas'
      },
      {
        tech: 'React',
        name: 'Lucas'
      }
    ]);
  });
  it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
    expect(techList([], 'Lucas')).toBe('Vazio!');
  });
});
*/