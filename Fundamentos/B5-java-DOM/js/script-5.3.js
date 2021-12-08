function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();
const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

let ulDays = document.getElementById("days");
createDays();
function createDays(){
  for(let index in dezDaysList){
    let dias = document.createElement('li');
    dias.className = "day";
    if(dezDaysList[index] === 24 || dezDaysList[index] === 25 || dezDaysList[index] === 31){
      dias.className += " holiday"
    }

    if(dezDaysList[index] === 4 || dezDaysList[index] === 11 || dezDaysList[index] === 18 || dezDaysList[index] === 25){
      dias.className += " friday"
    }

    dias.innerText = dezDaysList[index];
    ulDays.appendChild(dias);
  }
}
function createHolidayButton(buttonName) {
  let buttonContainer = document.querySelector('.buttons-container');
  let newButton = document.createElement('button');
  let newButtonID = 'btn-holiday';

  newButton.innerHTML = buttonName;
  newButton.id = newButtonID;
  buttonContainer.appendChild(newButton);
};

createHolidayButton('Feriados');

function displayFridays(fridaysArray) {
  let getFridayButton = document.getElementById('btn-holiday');
  let fridays = document.getElementsByClassName("friday");
  let newFridayText = 'SEXTOU o/';

  getFridayButton.addEventListener('click', function() {
  for (let index = 0; index < fridays.length; index += 1) {
    if (fridays[index].innerHTML !== newFridayText) {
        fridays[index].innerHTML = newFridayText;
    } else {
        fridays[index].innerHTML = fridaysArray[index];
      }
    }
  })
};

let dezFridays = [ 4, 11, 18, 25 ];
displayFridays(dezFridays);



function dayZoom (){
let days = document.querySelector('#days');


days.addEventListener("mouseover", function(event){
  event.target.style.fontSize = "40px";
  event.target.style.fontWeigth = '600';
})
};

function dayMouseOut () {
  let days = document.querySelector('#days');
  days.addEventListener("mouseout", function(event){
    event.target.style.fontSize = "20px";
    event.target.style.fontWeigth = '200';
  })
};

dayZoom();
dayMouseOut();


function myTask(task){
  let taskContaint = document.querySelector('.my-tasks');
  let taskName = document.createElement('span');

  taskName.innerHTML = task;
  taskContaint.appendChild(taskName);

}

myTask("Projeto:");

function newTaskDiv(color){
  let taskContainer = document.querySelector('.my-tasks');
  let newTask = document.createElement('div');

  newTask.className = "task";
  newTask.style.backgroundColor = color;
  taskContainer.appendChild(newTask);
}

newTaskDiv("green");

function selectDiv(){
  let selectedTask = document.getElementsByClassName('task selected');
  let myTasks = document.querySelector('.task');

  myTasks.addEventListener('click', function(event){
    if(selectedTask.length === 0){
      event.target.className = 'task selected';
    } else {
      event.target.className = 'task';
    }
  });
};

selectDiv();