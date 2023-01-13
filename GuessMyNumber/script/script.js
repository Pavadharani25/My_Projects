const secretnumberEl = document.getElementById('secret-number');
const messageEl = document.getElementById('message');
const labelscoreEl = document.getElementById('label-score');
const highscoreEl = document.getElementById('high-score');
const btnagain = document.getElementById('btn-again');
const btncheck = document.getElementById('btn-check');

let score = 20;
let guessnumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;

function init(){
    labelscoreEl.innerText = score;
    highscoreEl.innerText  = highscore;
}

btncheck.addEventListener('click', () =>{
    const guess = Math.round(Number(secretnumberEl.value));

   if(score > 1) {
        if(!guess || guess < 0){
            messageEl.style.color = '#0b0d8f';
            messageEl.innerText = 'Enter the valid Input⚠️';
        }
        else {
            if(guess === guessnumber){
                messageEl.style.color = '#088808';
                messageEl.innerText = 'You are Correct😍😍';
                highscoreEl.innerText =  score;
                secretnumberEl.value = null;
            }
            else if (guess > guessnumber){
                messageEl.style.color = '#ff0000';
                messageEl.innerText = 'Too High😀';
                secretnumberEl.value = null;
                score--;
            }
            else if (guess < guessnumber){
                messageEl.style.color = '#ff0000';
                messageEl.innerText = 'Too Low😀';
                secretnumberEl.value = null;
                score--;
                labelscoreEl.innerText = score;
            }
            }
        }else{
            messageEl.style.color = '#ff0000';
            messageEl.innerText = 'You lost the Game🙁';
        }
    });

    btnagain.addEventListener('click', () => {
        labelscoreEl.innerText = 5;
        guessnumber = Math.trunc(Math.random() * 20) + 1;
        messageEl.style.color = '#000000';
        messageEl.innerText = 'Start Guessing...😇';
    })

init();