var cur = "#fl-1";

function update_cur(fid) {
  $(cur).removeClass("cur_sec");
  $(fid).addClass("cur_sec");
  cur = fid;
}

$(document).ready(function(){
  // Add smooth scrolling to all links
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
      }, 800, function(){
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });

    } // End if
  });

  $(window).scroll(function (event) {
    var scroll = $(window).scrollTop();
    // console.log(scroll);
    // Do something
    if(scroll < 1100 && cur != "#fl-1") {
      update_cur("#fl-1");
    }
    if(scroll >= 1100 && cur != "#fl-2") {
      update_cur("#fl-2");
    }
    if (scroll >= 2800 && cur != "#fl-3") {
      update_cur("#fl-3");
    }
  });

});

