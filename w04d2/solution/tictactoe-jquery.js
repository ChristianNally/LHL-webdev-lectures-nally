$("document").ready(function(){
  let nextPlay = "X";

  //
  // STEP THREE: is there a winner yet?
  //
  function checkForVictory(newSquare) {
    // each type of victory defaults to true
    // any contrary evidence flips that fragile state
    // so that the conclusion can be returned at the end
    // after checking all possibilities

    let rowWin = true;
    // only need to check the row this new square is in
    $(newSquare).siblings().each(function( index ){
      if (!$(this).hasClass(nextPlay)){
        rowWin = false;
      };
    });

    let columnWin = true;
    // only need to check the column this new square is in
    let columnNum = $(newSquare).index() + 1;
    $(".row")
      .children(".square:nth-of-type(" + columnNum + ")")
      .each(function( index ){
      if (!$(this).hasClass(nextPlay)){
        columnWin = false;
      };
    });

    // check first diagonal
    let firstDiagonalWin = true;
    if ( !$(".row:nth-of-type(" + 1 + ")").children('.square:nth-of-type(' + 1 + ')').hasClass(nextPlay)
    || !$(".row:nth-of-type(" + 2 + ")").children('.square:nth-of-type(' + 2 + ')').hasClass(nextPlay)
    || !$(".row:nth-of-type(" + 3 + ")").children('.square:nth-of-type(' + 3 + ')').hasClass(nextPlay)
    ){ // upper-left to lower-right lacks nextPlay
      firstDiagonalWin = false;
    }

    let otherDiagonalWin = true;
    if ( !$(".row:nth-of-type(" + 1 + ")").children('.square:nth-of-type(' + 3 + ')').hasClass(nextPlay)
    || !$(".row:nth-of-type(" + 2 + ")").children('.square:nth-of-type(' + 2 + ')').hasClass(nextPlay)
    || !$(".row:nth-of-type(" + 3 + ")").children('.square:nth-of-type(' + 1 + ')').hasClass(nextPlay)
    ){ // upper-right to lower-left has any non-nextPlay
      otherDiagonalWin = false;
    }

    // if any victory type is true, return true
    return ( rowWin === true 
      || columnWin === true
      || firstDiagonalWin === true
      || otherDiagonalWin === true
      );
  }

  //
  // STEP TWO: toggle which player clicks next
  // 

  function toggleNextPlay() {
    if ("X" === nextPlay) {
      nextPlay = "O";
    } else {
      nextPlay = "X";
    }
    $("#nextPlay").html(nextPlay);
  }

  //
  // STEP ONE: on each turn, this event handler will run
  //

  $(".square").on("click", function (event) {
    $(this).addClass(nextPlay);
    if (checkForVictory(this)) {
      $("#nextPlay").html(' <a href="">Play Again.</a>');
      $(".square").off("click");
    } else {
      toggleNextPlay();
      $(this).off("click");
    }
  });
});
