const str = 'ABCDEFGHIJKLMNOPQRST';
var charlen = str.length;
const character = document.querySelector('#character');
const inputText = document.querySelector('input')
const ms = document.querySelector('#ms');
const sec = document.querySelector('#second');
const reset = document.getElementById('reset');
let myBestTime = document.querySelector('#my-best-time');
myBestTime.innerHTML = localStorage.getItem('timing')
let count = 0;


// taking input in text and changing character
function generateRandomCharacter(){
    let innerChar = str.charAt(Math.floor(Math.random()*charlen));
    return innerChar;
}
character.innerHTML = generateRandomCharacter();

let start = true;


var increase = 0;
 var startTime ;
 var elapsedTime;
var interval;
function startGame(){
console.log(increase);
   startTime = Date.now();
   interval = setInterval(()=>{
     elapsedTime = (Date.now()-startTime) + increase;
     let tim = (elapsedTime/1000).toFixed(3);
   ms.innerHTML = tim;
}, 100);
}


inputText.addEventListener('keydown', (e)=>{
    //start the game
    if(start){
        startGame();
        start = false;
    }
    
    let keyText = e.key.toUpperCase();
    let divChar = character.innerHTML.charAt(0);
    if(divChar === keyText ){
        character.innerHTML = generateRandomCharacter();
        count++;
    }else{
        increase = 0.500;
    }

    //stop game and store best score
 if(count >= 20){
    clearInterval(interval);
    const oldScore = Number(localStorage.getItem('timing'));
    if(oldScore == 0 || oldScore > Number(ms.innerHTML)){   
         localStorage.setItem('timing' , ms.innerHTML );
                
          character.innerHTML = "Success!";
    }else{
        character.innerHTML = "Failure!";
    }
 }
})





reset.addEventListener('click',()=>{
 location.reload();
})





