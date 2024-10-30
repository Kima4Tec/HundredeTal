let max = 90
let min = 10
let result = 0;

function showAlert() {
    alert("Tryk på start og så er du igang! Du får et tal. Nu skal du udregne, hvad tallet er, hvis du trækker 1 eller 10 fra. Eller hvis du lægger 1 eller 10 til. Du har 30 sekunder til at indtaste de 4 tal.");
}


function getRandomInt(){

    const number = Math.floor(Math.random() * (max - min + 1)) + min;
    showNumber(number);
}

function showNumber(number) {

    document.querySelector('.random-number').value = number;
    document.querySelector('#input1-more').value = "";
    document.querySelector('#input10-more').value = "";
    document.querySelector('#input1-less').value = "";
    document.querySelector('#input10-less').value = "";
    document.querySelector('#input1-more-answer').value = "";
    document.querySelector('#input10-more-answer').value = "";
    document.querySelector('#input1-less-answer').value = "";
    document.querySelector('#input10-less-answer').value = "";
    const inputs = document.querySelectorAll('input');

    inputs.forEach(input => {
        input.style.backgroundColor = '';
    });

    startTimer(30);
}

function startTimer(duration) {
    let timer = duration, seconds;
    const timerDisplay = document.querySelector('.timer'); 

    const interval = setInterval(() => {
        seconds = parseInt(timer % 60, 10);
        timerDisplay.textContent = `Tid: ${seconds < 10 ? "0" + seconds : seconds} sekunder`;

        if (--timer < 0) {
            clearInterval(interval);
            timerDisplay.textContent = "Tiden er gået!";
        }
    }, 1000);
}
function checkAnswer(){
    no = parseInt(document.querySelector('.random-number').value, 10)
    const input1More = no + 1;
    const input10More = no + 10;
    const input1Less = no - 1;
    const input10Less = no - 10;
    document.querySelector('#input1-more-answer').value = input1More;
    document.querySelector('#input10-more-answer').value = input10More;
    document.querySelector('#input1-less-answer').value = input1Less;
    document.querySelector('#input10-less-answer').value = input10Less;

    const userInput1More = parseInt(document.querySelector('#input1-more').value, 10);
    const userInput10More = parseInt(document.querySelector('#input10-more').value, 10);
    const userInput1Less = parseInt(document.querySelector('#input1-less').value, 10);
    const userInput10Less = parseInt(document.querySelector('#input10-less').value, 10);

    if (userInput1More === input1More) {
        document.querySelector('#input1-more').style.backgroundColor = 'lightgreen';
        result = result+1;
    } else {
        document.querySelector('#input1-more').style.backgroundColor = 'red';
    }
    if (userInput10More === input10More) {
        document.querySelector('#input10-more').style.backgroundColor = 'lightgreen';
        result = result+1;
    } else {
        document.querySelector('#input10-more').style.backgroundColor = 'red';
    }
    if (userInput1Less === input1Less) {
        document.querySelector('#input1-less').style.backgroundColor = 'lightgreen';
        result = result+1;
    } else {
        document.querySelector('#input1-less').style.backgroundColor = 'red';
    }
    if (userInput10Less === input10Less) {
        document.querySelector('#input10-less').style.backgroundColor = 'lightgreen';
        result = result+1;
    } else {
        document.querySelector('#input10-less').style.backgroundColor = 'red';
    }
    document.querySelector('.btn-white').innerHTML = `Antal rigtige: ${result}`
}
