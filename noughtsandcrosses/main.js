var player1 = [];
var player2 = [];


var player;

//row1
var square = document.getElementById("a1");
square.addEventListener("click", function(){
  if (player === 'x'){
  player ='o';
  this.innerHTML = player;
  player1.push(player)
  } else {
  player = 'x';
  this.innerHTML = player;
  player2.push(player)
  }
});

var square2 = document.getElementById("a2");
square2.addEventListener("click", function(){
  if (player === 'x'){
  player ='o';
  square2.innerHTML = player;
  player1.push(player)

  } else {
    player = 'x';
    square2.innerHTML = player;
    player2.push(player)

  }
});

var square3 = document.getElementById("a3");
square3.addEventListener("click", function(){
    if (player === 'x'){
    player ='o';
    square3.innerHTML = player;
    player1.push(player)
  } else {
    player = 'x';
    square3.innerHTML = player;
    player2.push(player)
  }
});
//row 2
var square4 = document.getElementById("b1");
square4.addEventListener("click", function(){
  if (player === 'x'){
  player ='o';
  square4.innerHTML = player;
  player1.push(player)
  } else {
    player = 'x';
    square4.innerHTML = player;
    player2.push(player)
  }
});
var square5 = document.getElementById("b2");
square5.addEventListener("click", function(){
  if (player === 'x'){
  player ='o';
  square5.innerHTML = player;
  player1.push(player)
  } else {
    player = 'x';
    square5.innerHTML = player;
    player2.push(player)
  }
});
var square6 = document.getElementById("b3");
square6.addEventListener("click", function(){
  if (player === 'x'){
  player ='o';
  square6.innerHTML = player;
  player1.push(player)
  } else {
    player = 'x';
    square6.innerHTML = player;
    player2.push(player)
  }
});
//row 3
var square7 = document.getElementById("c1");
square7.addEventListener("click", function(){
  if (player === 'x'){
  player ='o';
  square7.innerHTML = player;
  player1.push(player)
  } else {
    player = 'x';
    square7.innerHTML = player;
    player2.push(player)
  }
});
var square8 = document.getElementById("c2");
square8.addEventListener("click", function(){
  if (player === 'x'){
  player ='o';
  square8.innerHTML = player;
  player1.push(player)
  } else {
    player = 'x';
    square8.innerHTML = player;
    player2.push(player)
  }
});
var square9 = document.getElementById("c3");
square9.addEventListener("click", function(){
  if (player === 'x'){
  player ='o';
  square9.innerHTML = player;
  player1.push(player)
  } else {
    player = 'x';
    square9.innerHTML = player;
    player2.push(player)
  }
});


var winning = 





//Who won?

//playerOne and playerTwo
//push the clicked divs into each of those arrays
//create another variable of winning combinations
//which lists arrays of all the possible winning combos, and then compare your player array variables against that to see if there's a match





//PlayAgainButton
// create a function that will iterate through every index of the box/grid and
// wipe the contents
function playAgain(){
var box = document.getElementsByClassName("grid");
//loop through an array of boxes
  for (var i = 0; i < box.length; i ++){
    box[i].innerHTML = "";
  }
}
//THEN call the event listener on your function, gurrrrl
var playAgainButton = document.getElementById("play-more");
playAgainButton.addEventListener("click", playAgain);



  



// //put this in an if statement or something
// /// this is wrong because you are calling
// var board = document.getElementsByClassName("grid");
// for (var i = 0; i < board.length; i ++){
//   this.addEventListener("click", function(){
//   board.innerHTML = " ";

// });
// }

// var playAgainButton = document.getElementsByClassName("play-again")
// addEventListener("click", function(){
//   var board = document.getElementsByClassName("grid");
//   box[0].innerHTML = “”;;  // Replaces body content with an empty string.
// });


// var playAgainButton = document.getElementsByName("play-again");
// playAgainButton.addEventListener("click", function(){
//    square1.innerHTML = "";
//     square2.innerHTML = "";
//     square3.innerHTML = "";
//     square4.innerHTML = "";
//     square5.innerHTML = "";
//     square6.innerHTML = "";
//     square7.innerHTML = "";
//     square8.innerHTML = "";
//     square9.innerHTML = "";
// });




// //
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





