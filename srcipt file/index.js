var randomNumber1 = Math.floor(Math.random() * 6) + 1 ;
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var attribute1Set = document.querySelector('.img1').setAttribute('src', './images/dice'+ randomNumber1 + '.png');
var attribute2Set = document.querySelector('.img2').setAttribute('src', './images/dice'+ randomNumber2 + '.png');

var displayText =document.querySelector('h1');

if (randomNumber1 > randomNumber2){
    displayText.innerHTML = "🚩Player 1 Wins";
} else if (randomNumber2 > randomNumber1){
    displayText.innerHTML = "Player 2 Wins🚩";
} else {
    displayText.innerHTML = "Draw";
}