let local = document.getElementById('first');
let titulo = document.createElement('h1');
titulo.className = "title";
  titulo.innerText = 'Exercício 5.2 - JavaScript DOM';
  local.appendChild(titulo);


let main = document.createElement('main');
 main.classList.add("main-content");
 local.appendChild(main);


let section = document.createElement("section");
section.className = "center-content"
 main.appendChild(section);

let p = document.createElement("p");
section.appendChild(p);
p.innerText = "Olá eu sou o java script!"

let sectionLeft = document.createElement("section");
sectionLeft.className = "left-content";
main.appendChild(sectionLeft);

let sectionRight = document.createElement("section");
sectionRight.className = "right-content";
main.appendChild(sectionRight);



let image = document.createElement("img");
image.className = "small-image";
image.src = "https://picsum.photos/200";
sectionLeft.appendChild(image);



let list = document.createElement("ul");
sectionRight.appendChild(list);

let listItem1 = document.createElement("li");
sectionRight.appendChild(listItem1);
listItem1.innerText = "um";

let listItem2 = document.createElement("li");
sectionRight.appendChild(listItem2);
listItem2.innerText = "dois";

let listItem3 = document.createElement("li");
sectionRight.appendChild(listItem3);
listItem3.innerText = "tres";

let listItem4 = document.createElement("li");
sectionRight.appendChild(listItem4);
listItem4.innerText = "quatro";

let listItem5 = document.createElement("li");
sectionRight.appendChild(listItem5);
listItem5.innerText = "cinco";

let listItem6 = document.createElement("li");
sectionRight.appendChild(listItem6);
listItem6.innerText = "seis";

let listItem7 = document.createElement("li");
sectionRight.appendChild(listItem7);
listItem7.innerText = "sete";

let listItem8 = document.createElement("li");
sectionRight.appendChild(listItem8);
listItem8.innerText = "oito";

let listItem9 = document.createElement("li");
sectionRight.appendChild(listItem9);
listItem9.innerText = "nove";

let listItem10 = document.createElement("li");
sectionRight.appendChild(listItem10);
listItem10.innerText = "dez";



let titulo1 = document.createElement("h3");
main.appendChild(titulo1);
titulo1.className = "description"
titulo1.innerText = "titulo H3";

let titulo2 = document.createElement("h3");
main.appendChild(titulo2);
titulo2.className = "description"
titulo2.innerText = "titulo H3";

let titulo3 = document.createElement("h3");
main.appendChild(titulo3);
titulo3.className = "description"
titulo3.innerText = "titulo H3";



let no = document.getElementsByClassName("sectionRight");
main.removeChild(no);





