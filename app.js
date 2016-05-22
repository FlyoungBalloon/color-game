var colors = generateRandomColors(6);

var squares = document.getElementsByClassName('square');
var colorDisplay = document.getElementById('colorDisplay');
var pickedColor = pickColor();
var gameMessage = document.getElementById('gameMessage');
var h1 = document.querySelector('h1');
var resetButton = document.getElementById('reset');

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
  // initial color to squares
  squares[i].style.background = colors[i];
  // add click listeners to squares
  squares[i].addEventListener('click', function(){
    // get color of clicked square
    var clickedColor = this.style.background;
    // compare color to the picked color
    if(clickedColor === pickedColor) {
      gameMessage.textContent = "Correct!";
      changeColors(clickedColor);
      resetButton.textContent = "Play again?";
    } else {
      this.style.background = '#232323';
      gameMessage.textContent = "Try again!";
    }
  });
}

// function to change square colors upon correct choie
function changeColors(color){
  for(var i = 0; i < squares.length; i++){
    squares[i].style.background = color;
  } 
  h1.style.background = color;
}

// function to generate a random number for picking correct color
function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

// function to generate the random game colors
function generateRandomColors(num) {
  // make array
  var arr = [];
  // generate random colors and add to array
  for(var i = 0; i < num; i++) {
    // add random colors to array
    arr.push(randomColor());
  }
  // return the array
  return arr;
}

function randomColor(){
  // pick red 0-255
  var red = Math.floor(Math.random() * 256);
  // pick green 0-255
  var green = Math.floor(Math.random() * 256);
  // pick blue 0-255
  var blue = Math.floor(Math.random() * 256);
  var randColor = "rgb(" + red + ", " + green + ", " + blue + ")";
  return randColor;
}

// reset button
resetButton.addEventListener('click', function(){
  // generate new colors
  colors = generateRandomColors(6);
  // pick new color from array
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  // change color of squares
  for(var i = 0; i < squares.length; i++){
    squares[i].style.background = colors[i];
  }
  h1.style.background = "#232323";
  this.textContent = "New Colors";
});