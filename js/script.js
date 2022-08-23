$(document).ready(function($) {
  $(".resume-icon").attr('target', '_blank');
  $(".codepen-icon").attr('target', '_blank');
  $(".linkedin-icon").attr('target', '_blank');
  $(".github-icon").attr('target', '_blank');


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
      }, 900, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  const panels = document.querySelectorAll('.panel')

  panels.forEach((panel)=>{
    panel.addEventListener('click', ()=>{
      removeActiveClasses()
      panel.classList.add('active')
    })
  })

  function removeActiveClasses(){
    panels.forEach(panel => {
      panel.classList.remove('active');
    })
  }
});