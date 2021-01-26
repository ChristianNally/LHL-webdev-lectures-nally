$("document").ready(() => {
  let nextPlay = "X";

  //
  // STEP THREE: is there a winner yet?
  //
  function checkForVictory(newSquare) {
    // evidence of non-victory clobbers these fragile defaults
    // the opposite method doesn't work
    let rowVictory = true;
    let columnVictory = true;
    let diagonalVictory = true;

    // check row this new square is in
    $(newSquare).siblings().each(function( index ){
      if (!$(this).hasClass(nextPlay)){
        rowVictory = false;
      };
    });

    // check column this new square is in
    columnNum = $(newSquare).index() + 1;
    $(".row")
      .children(".square:nth-of-type(" + columnNum + ")")
      .each(function( index ){
      if (!$(this).hasClass(nextPlay)){
        columnVictory = false;
      };
    });

    // check any diagonal this news square is a part of
    // this is left as an exercise to the curious

    // if any victory type is true, return true
    return ( rowVictory === true || columnVictory === true);
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
      $("#nextPlay").html(' not needed because we have a winner. <a href="">Play Again.</a>');
      $(".square").off("click");
    } else {
      toggleNextPlay();
      $(this).off("click");
    }
  });
});
