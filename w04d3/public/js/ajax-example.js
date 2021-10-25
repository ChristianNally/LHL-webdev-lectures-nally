$(document).ready(function () {

  function resultTurnedIntoDOM(data){
    const $elementsForDisplay = $('<div class="canada-covid-data"></div>');
    const $infected = $('<div class="infected">Infected: ' + data.infected + '</div>');
    $elementsForDisplay.append($infected);

    const setOfRegions = data.infectedByRegion;
    const $regions = $(`
    <table class="regions">
      <tr>
        <th>Region</th>
        <th>Infected</th>
        <th>Deceased</th>
      </tr>
    </table>
    `);

    jQuery.each(setOfRegions, (key) => {
      $regions.append(`
      <tr>
      <td>${setOfRegions[key].region}</td>
      <td>${setOfRegions[key].infectedCount}</td>
      <td>${setOfRegions[key].deceasedCount}</td>
      </tr>
      `);
    });

    $regions.appendTo($elementsForDisplay);
    // Same As: $elementsForDisplay.append($regions);

    return $elementsForDisplay;
  }

  $("form").on("submit", function (event) {
    event.preventDefault();
    console.log("the default event result has been prevented");
    let url = "https://api.apify.com/v2/key-value-stores/fabbocwKrtxSDf96h/records/LATEST?disableRedirect=true";

    $.ajax({
      url: url,
      method: "GET", // POST, PUT, DELETE, ... 
    })
    .then((result) => {
      console.log('ajax callback called');
      console.log('result:',result);
      $('#display').html(resultTurnedIntoDOM(result));
      history.pushState(null,"Stats Retrieved",'/#data');
    })
    .catch(err => {
      console.log('ajax error caught');
      console.log(err); // related error
    });

  });

});
