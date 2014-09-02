//pull.js file
$.getJSON('http://data.cityofchicago.org/resource/8pix-ypme.json', function(busstops){
  $('#busstoplist').each();
  
  $.each(lstops, function(i, busstop){
    $('#busstoplist').append(generateLStopLink(lstop));
  
  });
  
  $('#busstoplist').refresh();
})