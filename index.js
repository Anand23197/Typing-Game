const str = 'ABCDEFGHIJKLMNOPQRST';
var charlen = str.length;
const character = document.querySelector('#character');
const inputText = document.querySelector('input')
const ms = document.querySelector('#ms');
const sec = document.querySelector('#second');
const reset = document.getElementById('reset');
let myBestTime = document.querySelector('#my-best-time');

let ls = localStorage.getItem('timing');

//initial value of mybestTime
if(ls === null ){
    myBestTime.innerHTML = "0.000";
}else{
    myBestTime.innerHTML = ls;
}
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
   startTime = Date.now();
   interval = setInterval(()=>{
     elapsedTime = Date.now()-startTime
     let tim = (elapsedTime/1000).toFixed(3);
     ms.innerHTML = (Number(tim) + increase).toFixed(3);
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
        increase += 0.5;
        ms.innerHTML = (Number(ms.textContent)+ increase).toFixed(3);
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


reset.addEventListener('click',()=>{
 location.reload();
})





