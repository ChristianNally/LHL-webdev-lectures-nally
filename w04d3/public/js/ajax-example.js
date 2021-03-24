$(document).ready(function () {

  $("form").on("submit", function (event) {
    event.preventDefault();
  
    let url = "example.com";

    $.ajax({
      url: url,
      method: "GET",
    }).then((result) => {
      console.log('ajax callback called');
    }).catch(err => {
      console.log('ajax error caught');
      console.log(err); // related error
    });

  });

});
