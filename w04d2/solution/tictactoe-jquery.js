const checkForVictory = (player) => {

  const listOfValidVictorySets = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let victorySet of listOfValidVictorySets) {
    let victory = true;
    for (let squareId of victorySet) {
      console.log(`squareId:`, squareId);
      $elementBeingTested = $(`td[data-cn=${squareId}]`);
      const checkID = $elementBeingTested.attr('data-cn');
      console.log('checkID', checkID);
      if (!$elementBeingTested.hasClass(player)) { // a square does NOT have player as a class then victory => false 
        victory = false;
      }
    }
    if (victory) {
      return true;
    }
  }
  return false;
};

$(document).ready(function () {

  $('td').on('click', function () {
    const player = $('#player').html();
    // alert(`player is ${player}`);
    $(this).addClass(player);
    $(this).off();

    const playerDidWin = checkForVictory(player);
    // const playerDidWin = false;
    if (!playerDidWin) {
      if (player === 'X') {
        $('#player').html('O');
      } else {
        $('#player').html('X');
      }  
    } else { // playerDidWin
      $('#message').html(`Player ${player} has won! Click <a href="">here</a> to play again!`);
    }
  });
});
