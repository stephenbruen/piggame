/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScores, activePlayer;

scores = [0,0];
roundScores = 0;
ActivePlayer = 1;

dice = math.floor(math.random() * 6) + 1;
console.log(dice);

document.querySelector('.dice').getElementsByClassName.display = 'none';

document.getElementById('score-0').textContent = '0';
document.getElementById('score-1').textContent = '0';
document.getElementById('current-0').textContent = '0';
document.getElementById('current-1').textContent = '0';
function btn() {

}
btn();

document.querySelector('.btn-roll').addEventListener('click', function(){
    var dice = math.floor(math.random() * 6) + 1;

    var diceDom = document.querySelector('.dice')
    diceDom.style.display = 'block';
    diceDom.src = 'dice-' + dice + '.png';

    if (dice !== 1) {
        roundScores += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScores;
    } else {
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
        roundScores = 0;

        document.getElementById('current-0').textContent = '0';
        document.getElementById('current-1').textContent = '0';

    }
});






//document.querySelector('#current-' + activePlayer).textContent = dice;

//var  x = document.querySelector('#score-0').textContent;
//console.log(x);