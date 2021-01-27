$(document).ready(function () {

  $("form").on("submit", function (event) {
    event.preventDefault();
  
    $.ajax({
      url: url,
      method: "GET",
    }).then((result) => {
      console.log('ajax callback called');
    });

  });

});
