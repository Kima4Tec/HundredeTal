let max = 90;
let min = 10;
let result = 0;
let interval;
let name = "";

function newPlayer(){
    document.querySelector('#userName').value = "";
    document.querySelector('.number-container').style.display = "none";
    document.querySelector('.getNames').style.display = "inline";
}


function spil() {
    name = document.querySelector('#userName').value;
    console.log(name);
    if(name==="")
    {    
        showNameAlert();
        newPlayer();
    } else{
    document.querySelector('title').innerHTML= `${name} spiller hundrede tal`;
    document.querySelector('.number-container').style.display = "flex";
    document.querySelector('.getNames').style.display = "none";
}
}
function showNameAlert() {
    alert("Du skal skrive et navn");
}
function showAlert() {
    alert("Tryk på start og så er du igang! Du får et tal. Nu skal du udregne, hvad tallet er, hvis du trækker 1 eller 10 fra, eller hvis du lægger 1 eller 10 til. Du har 30 sekunder til at indtaste de 4 tal. Du får 1 point for hver gang, du har 4 rigtige og nye 30 sekunder. Får du en fejl stopper spillet.");
}


function getRandomInt(){
    document.querySelector('.btn-start').style.display = "none";
    const number = Math.floor(Math.random() * (max - min + 1)) + min;
    showNumber(number);
}

function showNumber(number) {
    document.querySelector('#input1-more-answer').style.display = "none";
    document.querySelector('#input10-more-answer').style.display = "none";
    document.querySelector('#input1-less-answer').style.display = "none";
    document.querySelector('#input10-less-answer').style.display = "none";
    document.querySelector('.random-number').value = number;
    document.querySelector('#input1-more').value = "";
    document.querySelector('#input10-more').value = "";
    document.querySelector('#input1-less').value = "";
    document.querySelector('#input10-less').value = "";
    document.querySelector('#input10-less').focus();
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

    clearInterval(interval);

    interval = setInterval(() => {
        seconds = parseInt(timer % 60, 10);
        timerDisplay.textContent = `Tid: ${seconds < 10 ? "0" + seconds : seconds} sekunder`;

        if (--timer < 0) {
            clearInterval(interval);
            timerDisplay.textContent = "Tiden er gået!";
            document.querySelector('.result-info').style.display = "flex";
            if(result > 0)
            document.querySelector('.result-info').innerHTML = `Flot ${name}! Du fik ${result} point`
            
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
    document.querySelector('#input1-more-answer').style.display = "inline";
    document.querySelector('#input10-more-answer').value = input10More;
    document.querySelector('#input10-more-answer').style.display = "inline";
    document.querySelector('#input1-less-answer').value = input1Less;
    document.querySelector('#input1-less-answer').style.display = "inline";
    document.querySelector('#input10-less-answer').value = input10Less;
    document.querySelector('#input10-less-answer').style.display = "inline";

    const userInput1More = parseInt(document.querySelector('#input1-more').value, 10);
    const userInput10More = parseInt(document.querySelector('#input10-more').value, 10);
    const userInput1Less = parseInt(document.querySelector('#input1-less').value, 10);
    const userInput10Less = parseInt(document.querySelector('#input10-less').value, 10);

    if (userInput1More === input1More) {
        document.querySelector('#input1-more').style.backgroundColor = 'lightgreen';
    } else {
        document.querySelector('#input1-more').style.backgroundColor = 'red';
    }
    if (userInput10More === input10More) {
        document.querySelector('#input10-more').style.backgroundColor = 'lightgreen';
    } else {
        document.querySelector('#input10-more').style.backgroundColor = 'red';
    }
    if (userInput1Less === input1Less) {
        document.querySelector('#input1-less').style.backgroundColor = 'lightgreen';
    } else {
        document.querySelector('#input1-less').style.backgroundColor = 'red';
    }
    if (userInput10Less === input10Less) {
        document.querySelector('#input10-less').style.backgroundColor = 'lightgreen';
    } else {
        document.querySelector('#input10-less').style.backgroundColor = 'red';
    }
if(userInput1More === input1More && userInput10More === input10More && userInput1Less === input1Less && userInput10Less === input10Less)
{
    result = result + 1;
    document.querySelector('.btn-result').innerHTML = `Antal fire rigtige: ${result}`
    getRandomInt()
    document.querySelector('.timer').innerHTML='';
} else {
    startTimer(0)
    document.querySelector('.result-info').innerHTML = `Flot ${name}! Du fik ${result} point`}

}
