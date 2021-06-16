let currentPlayer = "X";

//
// STEP THREE: is there a winner yet?
//
function checkForVictory(newSquare) {
  // each type of victory defaults to true
  // any contrary evidence flips that fragile state
  // so that the conclusion can be returned at the end
  // after checking all possibilities

  let rowWin = true;
  let columnWin = true;
  let firstDiagonalWin = true;
  let otherDiagonalWin = true;

  // if any victory type is true, return true
  // return ( rowWin === true 
  //   || columnWin === true
  //   || firstDiagonalWin === true
  //   || otherDiagonalWin === true
  //   );

  return false; // just for now, since this is a stub
}

//
// STEP TWO: toggle which player clicks next
// 

function toggleNextPlay() {
  if ("X" === currentPlayer) {
    currentPlayer = "O";
  } else {
    currentPlayer = "X";
  }
  document.getElementById("currentPlayer").innerHTML = currentPlayer;
}

//
// STEP ONE: on each turn, this event handler will run
//

document.querySelectorAll('td').forEach(item => {
  item.addEventListener('click', event => {
    console.log(event);
    event.srcElement.classList.add(currentPlayer);
    if (checkForVictory(this)) {
      document.getElementById("currentPlayer").innerHTML(' <a href="">Play Again.</a>');
    // TODO: remove the event listeners from all .square elements
    // see https://stackoverflow.com/questions/48414382/removing-all-eventlisteners-by-class
    } else {
      toggleNextPlay();
    // TODO: remove the event listener from this element
    }
  })
});
