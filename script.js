'use strict';
/*
console.log(document.querySelector('.message').
textContent);

document.querySelector('.message').textContent = 
'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value;
document.querySelector('.guess').value = 24;
*/

let secretNumber = Math.trunc(Math.random()*20)+1;

let score = 20;

let heighscore = 0;

document.querySelector('.check').
addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').
    value);
    console.log(guess);

    if(!guess) {
        document.querySelector('.message').textContent = 
        'No Number!';

    } else if(guess === secretNumber){
        document.querySelector('.message').textContent = 
        'Correct Number!';
        document.querySelector('.number').textContent = 
        secretNumber; 

        document.querySelector('body').style.
        backgroundColor = '#60b347';
        document.querySelector('.number').style.width =
        '30rem';

        if(score > heighscore){
            heighscore = score;
            document.querySelector('.highscore').textContent = 
            heighscore;
        }

    } else if(guess !== secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent = 
            guess > secretNumber ? 'Too high!' : 'Too low!';
            score = score - 1 ;
            document.querySelector('.score').textContent = score;
            }else{
                document.querySelector('.message').textContent = 
                'You lost the game!';
                document.querySelector('.score').textContent = 0;
            }
    }
    
    /*else if(guess > secretNumber){
        if(score > 1){
        document.querySelector('.message').textContent = 
        'Too high!';
        score = score - 1 ;
        document.querySelector('.score').textContent = score;
        }else{
            document.querySelector('.message').textContent = 
            'You lost the game!';
            document.querySelector('.score').textContent = 0;
        }
    } else if (guess < secretNumber){
        if(score > 1){
            document.querySelector('.message').textContent = 
            'Too low!';
            score = score - 1 ;
            document.querySelector('.score').textContent = score;
            }else{
                document.querySelector('.message').textContent = 
                'You lost the game!';
                document.querySelector('.score').textContent = 0;
            }
    }*/
});
//BTN again
document.querySelector('.again').addEventListener('click',function(){
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';
    secretNumber = Math.trunc(Math.random()*20)+1;

});
