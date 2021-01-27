$(document).ready(function () {
  //
  // There are at least two ways to make new HTML elements.
  // 1) via a string (perhaps with dynamic elements)
  //    back ticks with
  // 2) by assembling new DOM elements directly built by jQuery
  // There are a variety of methods. Here's a speed test.
  // https://stackoverflow.com/questions/9415166/best-way-to-create-new-dom-elements
  //

  const debugShowElements = (result,subkey) => {
    console.log("result",result);
    let elementsForDisplay = $('<div class="result"></div>');
    let goodPart = result;
    if (subkey){
      goodPart = result[subkey];
    }
    console.log("goodPart",goodPart);
    for (var key in goodPart) {
        if (goodPart.hasOwnProperty(key)) {
          console.log(key + " -> " + goodPart[key]);
          let newHTMLString = `<div class="${key}">KEY:${key} VALUE:${JSON.stringify(goodPart[key])}</div>`;
          elementsForDisplay.append($(newHTMLString));
      }
    }
    return elementsForDisplay;
  };

  const reallyShowElements = (result) => {
    const elementsForDisplay = $('<div class="canada-covid-data"></div>');
    const infected = $('<div class="infected">Infected: ' + result.infected + '</div>');
    const deceased = $('<div class="infected">Deceased: ' + result.deceased + '</div>');
    const setOfRegions = result.infectedByRegion;
    const regions = $('<table class="regions"></table>');
    regions.append($('<tr><th>Region</th><th>Infected</th></tr>'));
    jQuery.each(setOfRegions,(key)=>{
      regions.append($('<tr><td class="region">' + setOfRegions[key].region + '</td><td class="infected">' + setOfRegions[key].infectedCount + '</td></tr>'));
    });

    elementsForDisplay.append(infected);
    elementsForDisplay.append(deceased);
    elementsForDisplay.append(regions);
    return elementsForDisplay;
  }

  $("form").on("submit", function (event) {
    event.preventDefault();
  
    // could grab a form input here for a filter on the data
    let url = '';
    if (false){ // toggle
      // option 1
      url = "/moretime";
    } else {
      // option 2 for Canadian Covid case statistics
      url = "https://api.apify.com/v2/key-value-stores/fabbocwKrtxSDf96h/records/LATEST?disableRedirect=true";
    }

    $.ajax({
      url: url,
      method: "GET",
    }).then((result) => {
      // const newContent = result.infected + "::" + result.deceased;
      // const newContent = result.year + "::" + result.month;

      // $("#display").append(debugShowElements(result,null));
    //  $("#display").append(debugShowElements(result,"infectedByRegion"));
      $("#display").html(reallyShowElements(result));
    });

    //
    // Or you could do this with a non-promise related syntax
    //
    // $.ajax({
    //   url: "/moretime",
    //   success: function (result) {
    //     const newContent = result.month + "::" + result.year;
    //     $("#timedisplay").html(newContent);
    //   },
    //   method: "GET",
    // });
  });
});
