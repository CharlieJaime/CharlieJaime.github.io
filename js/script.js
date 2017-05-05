$(document).ready(function($) {
  //Create a select and append to #menu
  var $select = $("<select></select>");
  $("#navbar").append($select);

  //Cycle over menu links
  $("#navbar-links a").each(function(){
    var $anchor = $(this);
    //Create an option
    var $option = $("<option></option>");

    //option's value is the href
    $option.val($anchor.attr("href"));
    //option's text is the text of link
    $option.text($anchor.text());
    //append option to select
    $select.append($option);
  });

  //Bind change listener to the select
  $select.change(function(){
  //Go to select's location
  window.location = $select.val();
  });


  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 1000, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
