// var for modal
var datamap = new Map([
    [document.getElementById("portfolio1"), document.getElementById("homeModal1")],
    [document.getElementById("portfolio2"), document.getElementById("homeModal2")],
    [document.getElementById("portfolio3"), document.getElementById("homeModal3")],

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