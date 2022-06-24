const arr = ['A','B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J','K','L',
              'M', 'N', 'O', 'P', 'Q', 'R','S','T','U','V','W','X',
              'Y','Z'];

const character = document.querySelector('#character');
const inputText = document.querySelector('input')
const ms = document.querySelector('#ms');
const sec = document.querySelector('#second');
// taking input in text and changing character
inputText.addEventListener('keyup', (e)=>{
           let upChar =  e.key.toUpperCase().charCodeAt(0);
           console.log(upChar.charCodeAt(0));
  //  console.log(e.target.value.toUpperCase() + " " + e.key);
    let innerChar = arr[Math.floor(Math.random()*arr.length)];
    console.log(innerChar.charCodeAt(0));
    if(innerChar.charCodeAt(0) === upChar){
        console.log("good");
    }
    character.innerHTML = innerChar;
    
//start the game
//startGame();
})


let startTime = Date.now();
let elapsedTime;
// function startGame(){
// let interval = setInterval(()=>{
//     elapsedTime = Date.now() - startTime;
//     let tim = (elapsedTime/1000).toFixed(3);
//     ms.innerHTML = tim;
// }, 100);
// }









