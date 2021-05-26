(function($) { $(document).ready(function(){

  const dragHelper = function(e, tr) {
    var $originals = tr.children();
    var $helper = tr.clone();
    $helper.children().each(function(index)
    {
      $(this).width($originals.eq(index).width())
    });
    return $helper;
  };

  // set tables as drag and drop
  $("tbody").sortable({
    helper: dragHelper,
    containment: "parent",
    update: function( event, ui ) {
      var sorted = $( "tbody" ).sortable( "serialize");
      console.log('sort order updated:', sorted);
      $.ajax({
        url: "/neworder", // no, not the 80s electronic music band
        method: "POST",
        data: sorted
      })
      .then((response)=>{
        console.log('saving objectives order response:', response);
      })
      .catch((err)=>{
        console.log("error while saving objectives order:",err);
      });
    },

  }).disableSelection();

  $('.answer').css('color', 'white');;
  $('.answer').click(function(){
    $(this).children('.answer').css('color', 'black');
  });

}); })(jQuery);
