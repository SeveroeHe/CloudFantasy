var cur = "#fl-1";
var id_map = {
  "film1" : "#243b44",
  "film2" : "white",
  "film3" : "white",
  "film4" : "white",
  "film5" : "white"
}
var origin_nav_color = null;

function update_cur(fid) {
  $(cur).removeClass("cur_sec");
  $(fid).addClass("cur_sec");
  cur = fid;
}

function update_bar(scroll, origin_nav_color) {
  if(scroll > 825) {
    $("#nav-wrapper").css("background-color", "#f1f3f0");
    $("#logo-container-1").css("background-color", "#f1f3f0");
    $(".nav-link-1").css("color", "#243b44");
    $("#logo-black").css("display", "block");
    $("#logo-white").css("display", "none");
  }else{
    $("#nav-wrapper").css("background-color", "transparent");
    $("#logo-container-1").css("background-color", "transparent");
    $(".nav-link-1").css("color", origin_nav_color);
    $("#logo-black").css("display", "none");
    $("#logo-white").css("display", "block");
  }
}

function update_side_fix(scroll) {
  if(scroll > 430) {
    $("#float-nav").css("display", "inline");  
  }else{
    $("#float-nav").css("display", "none");
  }
  
}
$(document).ready(function(){
  origin_nav_color = id_map[$('.image-full').attr("id")];
  console.log(origin_nav_color)
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
    console.log(scroll);
    //update basic style
    update_side_fix(scroll);
    update_bar(scroll, origin_nav_color);
    //redirect section
    if(scroll < 1500 && cur != "#fl-1") {
      update_cur("#fl-1");
    }
    if(scroll >= 1500 && cur != "#fl-2") {
      update_cur("#fl-2");
    }
    if (scroll >= 2500 && cur != "#fl-3") {
      update_cur("#fl-3");
    }
  });

});

