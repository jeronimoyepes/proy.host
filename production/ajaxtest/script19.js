$(function() {
  $('#clickme').click(function() {
       $.ajax({
       url: '/api/lodging-offers/',
       method: "GET",
       dataType: 'jsonp',
       success: function(data) {
          var items = [];

          $.each(data, function(key, val) {

            items.push('<li id="' + key + '">' + val + '</li>');

          });

          $('<ul/>', {
             'class': 'interest-list',
             html: items.join('')
          }).appendTo('body');
          console.log(items)

       },
      statusCode: {
         404: function() {
           alert('There was a problem with the server.  Try again soon!');
         }
       }
    });
  });
});
