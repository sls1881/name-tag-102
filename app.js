//Declare name changing 
const addName = document.getElementById('name');
const clickButton = document.getElementById('button');
const myName = document.getElementById('updated');


//Declare color buttons
const changeColor = document.getElementById('backg-color');
const lightGreen = document.getElementById('lgreen');
const lightBlue = document.getElementById('lblue');
const lightPink = document.getElementById('lpink');

//Declare pronoun 
const myPronoun = document.getElementById('pronoun-input');
const pronounButton = document.getElementById('pronoun-button');
const pronounPlacement = document.getElementById('pronoun-placement');

//Declare count
const myCount = document.getElementById('count');

//Event for name change
clickButton.addEventListener('click', () => {

    myName.textContent = addName.value;
    addName.value = '';

})

//Event for background color change
lightGreen.addEventListener('click', () => {

    changeColor.style.background = 'green';

})

lightBlue.addEventListener('click', () => {

    changeColor.style.background = 'blue';

})

lightPink.addEventListener('click', () => {

    changeColor.style.background = 'pink';

})

//Event for pronoun button

pronounButton.addEventListener('click', () => {

    pronounPlacement.textContent = myPronoun.value;
})

//Event for click count
let count = 0

clickButton.addEventListener('click', () => {

    myCount.textContent = count++;

})