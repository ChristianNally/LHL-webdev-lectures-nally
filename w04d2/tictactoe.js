$(document).ready(function(){  

  function checkForVictory(){
    return false;
  }

  $('td').on('click',function(event){
    // Set the square to this player's symbol

    // Is there a winner yet?
    if (checkForVictory()) {
      // someone has won!
    } else {
      // Toggle which player clicks next
    }
  });
});
