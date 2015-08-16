var player;
//row1
var square = document.getElementById("a1");
square.addEventListener("click", function(){
  if (player === 'x'){
  player ='o';
  this.innerHTML = player;
  } else {
  player = 'x';
  this.innerHTML = player;
  }
});

var square2 = document.getElementById("a2");
square2.addEventListener("click", function(){
  if (player === 'x'){
  player ='o';
  square2.innerHTML = player;

  } else {
    player = 'x';
    square2.innerHTML = player;

  }
});

var square3 = document.getElementById("a3");
square3.addEventListener("click", function(){
    if (player === 'x'){
    player ='o';
    square3.innerHTML = player;
  } else {
    player = 'x';
    square3.innerHTML = player;
  }
});
//row 2
var square4 = document.getElementById("b1");
square4.addEventListener("click", function(){
  if (player === 'x'){
  player ='o';
  square4.innerHTML = player;
  } else {
    player = 'x';
    square4.innerHTML = player;
  }
});
var square5 = document.getElementById("b2");
square5.addEventListener("click", function(){
  if (player === 'x'){
  player ='o';
  square5.innerHTML = player;
  } else {
    player = 'x';
    square5.innerHTML = player;
  }
});
var square6 = document.getElementById("b3");
square6.addEventListener("click", function(){
  if (player === 'x'){
  player ='o';
  square6.innerHTML = player;
  } else {
    player = 'x';
    square6.innerHTML = player;
  }
});
//row 3
var square7 = document.getElementById("c1");
square7.addEventListener("click", function(){
  if (player === 'x'){
  player ='o';
  square7.innerHTML = player;
  } else {
    player = 'x';
    square7.innerHTML = player;
  }
});
var square8 = document.getElementById("c2");
square8.addEventListener("click", function(){
  if (player === 'x'){
  player ='o';
  square8.innerHTML = player;
  } else {
    player = 'x';
    square8.innerHTML = player;
  }
});
var square9 = document.getElementById("c3");
square9.addEventListener("click", function(){
  if (player === 'x'){
  player ='o';
  square9.innerHTML = player;
  } else {
    player = 'x';
    square9.innerHTML = player;
  }
});



  





// //put this in an if statement or something
// var playAgain = document.getElementsByClassName("play-again");
// var board = document.getElementsByClassName("grid");
// for (var i = 0; i < board.length; i ++){
//   this.addEventListener("click", function(){
//   board.innerHTML = " ";

// });
// }

var playAgainButton = document.getElementsByClassName("play-again")
addEventListener("click", function(){
  var board = document.getElementsByClassName("grid");
  board.innerHTML = "";  // Replaces body content with an empty string.
});







// //get an array of boxes 
// var box = document.getElementsByClassName("grid");
// //loop through an array of boxes
// for (var i = 0; i < box.length; i ++){
// //add Event Listener- If box is clicked
// box.addEventListener("click", function(){
// var player = ['X','O']; 
// //either insert X or O. Insert X if player 1's turn else insert 0
// //Player 1 is always even,
//   if (player.length % 2 === 0){
//     box.innerHTML = "X";
//     console.log('x');
//   //player 2 is odd
//   }else if (player.length % 2 !== 0){
//     box.innerHTML ="O";
//     console.log('o');
//   }

// });
// }





