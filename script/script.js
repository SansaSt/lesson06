'use strict'
let x = Math.floor(Math.random() * 100) + 1;
let isNumber = function(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

function getNumber(){
  let z = +prompt('Угадай число от 1 до 100');
  return z;
}; 

const guessNumber = function() {
  let y = getNumber();
    if (!isNumber(y)) {
      alert('Введи число');
      return guessNumber (); 
    } else {
      if (x < y) {
        alert('Загаданное число меньше');
        return guessNumber(); 
      } if (x > y) {
        alert('Загаданное число больше');
        return guessNumber(); 
      } else {
        alert('You win!')
      }
    }
  };

const game = function() {
  let question = confirm('Хочешь поиграть?');
  if (question === true) {
    return guessNumber();
  } else {
    alert('Конец игры');
  }
};

game();




