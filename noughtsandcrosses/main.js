var player;

var box = document.getElementById("a1")
this.addEventListener("click", function(){
  if (player === 'x'){
  player ='o';
  this.innerHTML = "o";
  console.log("hi");
} else {
  player = 'x';
  this.innerHTML = 'x';
  console.log('this X');
}
console.log('this ?')
});


// var box2 = document.addEventListener("click", function(){
//   var square = document.getElementById("a2");
//   player === "X" ? "O" :"X";
//   square.innerHTML = player;
    
// });




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





