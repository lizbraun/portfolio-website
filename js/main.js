// var for modal
var datamap = new Map([
    [document.getElementById("portfolio1"), document.getElementById("homeModal1")],
    [document.getElementById("portfolio2"), document.getElementById("homeModal2")],
    [document.getElementById("portfolio3"), document.getElementById("homeModal3")],
    [document.getElementById("portfolio4"), document.getElementById("homeModal4")],
    [document.getElementById("portfolio5"), document.getElementById("homeModal5")],
    [document.getElementById("portfolio6"), document.getElementById("homeModal6")],
    [document.getElementById("portfolio7"), document.getElementById("homeModal7")],
    [document.getElementById("portfolio8"), document.getElementById("homeModal8")],
    [document.getElementById("portfolio9"), document.getElementById("homeModal9")],
    [document.getElementById("portfolio10"), document.getElementById("homeModal10")]
    

]);

datamap.forEach((value, key) => {
    doModal(key, value);
});

function doModal(anchor, popupbox) {

    // Get the <span> element that closes the modal
    var span = popupbox.getElementsByClassName("close")[0];

    anchor.addEventListener("click", function (event) {
        popupbox.style.display = "block";
    });

    span.addEventListener("click", function (event) {
        popupbox.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target == popupbox) {
            popupbox.style.display = "none";
        }
    });
}

//$("button").click(function() {
    //$('html,body').animate({
       // scrollTop: $(".second").offset().top},
       // 'slow');
//});

$(function() {
    $('a#page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$(function() {
    $(".video").click(function () {
      var theModal = $(this).data("target"),
          videoSRC = $(this).attr("data-video"),
          videoSRCauto = videoSRC + "";
      $(theModal + ' source').attr('src', videoSRCauto);
      $(theModal + ' video').load();
      $(theModal + ' button.close').click(function () {
        $(theModal + ' source').attr('src', videoSRC);
      });
    });
  });

