'use strict';

let score0 = document.getElementById('score--0');
let score1 = document.getElementById('score--1');
let currentScore = 0;
let activePlayer = 0;
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const diceImg = document.querySelector('.dice');
const newGameBtn = document.querySelector('.btn--new');
const rollBtn = document.querySelector('.btn--roll');
const holdBtn = document.querySelector('.btn--hold');
let playing = true;

let scores = [0, 0];

score0.textContent = 0;
score1.textContent = 0;
diceImg.classList.add('hidden');

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

rollBtn.addEventListener('click', function () {
  if (playing) {
    // Generating a random number for the dice
    let randomNum = Math.trunc(Math.random() * 6 + 1);
    console.log(randomNum);

    //displaying the dice image
    diceImg.classList.remove('hidden');
    diceImg.src = 'dice-' + randomNum + '.png';

    //if dice roll is 1, switching the players
    //   if (randomNum == 1 && player0.classList.contains('player--active')) {
    //     player0.classList.remove('player--active');
    //     player1.classList.add('player--active');
    //     currentScore = 0;
    //     document.querySelector('#current--0').textContent = 0;
    //   } else if (randomNum == 1 && player1.classList.contains('player--active')) {
    //     player1.classList.remove('player--active');
    //     player0.classList.add('player--active');
    //     currentScore = 0;
    //     document.querySelector('#current--1').textContent = 0;
    //   }

    //   // adding dice rolls to current score
    //   if (player0.classList.contains('player--active')) {
    //     currentScore += randomNum;
    //     document.querySelector('#current--0').textContent = currentScore;
    //   } else {
    //     currentScore += randomNum;
    //     document.querySelector('#current--1').textContent = currentScore;
    //   }

    if (randomNum != 1) {
      currentScore += randomNum;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      // switching to next player
      switchPlayer();
    }
  }
});

holdBtn.addEventListener('click', function () {
  if (playing) {
    // document.getElementById(`score--${activePlayer}`).textContent = currentScore;
    // document.getElementById(`current--${activePlayer}`).textContent = 0;
    // currentScore = 0;
    // activePlayer = activePlayer === 0 ? 1 : 0;
    // player0.classList.toggle('player--active');
    // player1.classList.toggle('player--active');

    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 100) {
      playing = false;
      diceImg.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});

newGameBtn.addEventListener('click', function () {
  playing = true;
  currentScore = 0;
  scores = [0, 0];
  score0 = 0;
  score1 = 0;
  activePlayer = 0;
  document.getElementById('score--0').textContent = 0;
  document.getElementById('score--1').textContent = 0;
  document.querySelector('#current--0').textContent = 0;
  document.querySelector('#current--1').textContent = 0;
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');

  diceImg.classList.add('hidden');
});
