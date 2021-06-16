$(document).ready(function(){  

  function checkForVictory(newSquare){

    const currentPlayer = $('#currentPlayer').html();

    let rowWin = true; // this is fragile state
    // if any sibling in this row is NOT owned by the current player
    // then there is no win in this row.
    $(newSquare).siblings().each(function(index){
      if (  !$(this).hasClass(currentPlayer)   ) {
        rowWin = false;
      }
    });

    let columnWin = true; // this is fragile state
    // only need to check the column this new square is in
    const columnNum = $(newSquare).index() + 1;
    console.log(`columnNum:${columnNum}`);

    // the next jquery selector returns all three rows, so 
    // the .children call will select from the children of each
    // row in succession
    $("tr").children("td:nth-of-type(" + columnNum + ")").each(function( index ){
      if (!$(this).hasClass(currentPlayer)){
        columnWin = false;
      };
    });

    const rowNum = $(newSquare).parent().index() + 1;
    console.log(`rowNum:${rowNum}`);

    let backSlashDiagonalWin = false;
    // if newSquare is on the backslash \ diagonal, check the backslash diagonal.
    if (rowNum === columnNum){
      console.log('backslash diagonal');
      if ( $("tr:nth-child(1) td:nth-child(1)").hasClass(currentPlayer) 
        && $("tr:nth-child(2) td:nth-child(2)").hasClass(currentPlayer)
        && $("tr:nth-child(3) td:nth-child(3)").hasClass(currentPlayer)
      ){
        backSlashDiagonalWin = true;
      }
    }

    let forwardSlashDiagonalWin = false;
    // if newSquare is on the forward slash / diagonal, check it.
    if ( (rowNum + columnNum) === 4){
      console.log('forwardslash diagonal');
      if ( $("tr:nth-child(1) td:nth-child(3)").hasClass(currentPlayer) 
        && $("tr:nth-child(2) td:nth-child(2)").hasClass(currentPlayer)
        && $("tr:nth-child(3) td:nth-child(1)").hasClass(currentPlayer)
      ){
        forwardSlashDiagonalWin = true;
      }
    }

    // if any victory type is still true, return true
    console.log(`rowWin:${rowWin} columnWin:${columnWin} backSlashDiagonalWin:${backSlashDiagonalWin} forwardSlashDiagonalWin:${forwardSlashDiagonalWin}`);
    return ( rowWin || columnWin || backSlashDiagonalWin || forwardSlashDiagonalWin );
  }

  $('td').on('click',function(event){

    // Set the square to this player's symbol
    const currentPlayer = $('#currentPlayer').html();
    $(this).addClass(currentPlayer);

    // Is there a winner yet?
    if (checkForVictory(this)) {
      // someone has won!
      $('h2').html(`${currentPlayer} won! <a href="">Play Again.</a>`);
      $('td').off('click');
    } else {
      $(this).off('click');
      // Toggle which player clicks next
      if ('X' === currentPlayer){
        $('#currentPlayer').html('O');
      } else {
        $('#currentPlayer').html('X');
      }
    }

  });

});
