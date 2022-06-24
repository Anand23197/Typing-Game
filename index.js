const str = 'ABCDEFGHIJKLMNOPQRST';
var charlen = str.length;
const character = document.querySelector('#character');
const inputText = document.querySelector('input')
const ms = document.querySelector('#ms');
const sec = document.querySelector('#second');
const myBestTime = document.querySelector('#my-best-time');
let count = 0;
// taking input in text and changing character
function generateRandomCharacter(){
    let innerChar = str.charAt(Math.floor(Math.random()*charlen));
    return innerChar;
}
character.innerHTML = generateRandomCharacter();

let start = 0;
inputText.addEventListener('keydown', (e)=>{
    //start the game
    if(start <= 0){
        startGame();
        start++;
    }
    

    let keyText = e.key.toUpperCase();
    let divChar = character.innerHTML.charAt(0);
    if(divChar === keyText ){
        character.innerHTML = generateRandomCharacter();
        count++;
    }else{
       
    }

    //stop game and store best score
 if(count >= 5){
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


const startTime = Date.now();
 var elapsedTime;
var interval;
function startGame(){
 interval = setInterval(()=>{
    elapsedTime = Date.now() - startTime;
    let tim = (elapsedTime/1000).toFixed(3);
    ms.innerHTML = tim;
}, 100);
}








