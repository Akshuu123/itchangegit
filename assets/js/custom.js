/** display images in home banner  */
var images = ["/assets/images/logo4.png", "/assets/images/logo2.png", "/assets/images/logo3.png"];
var x = 0;

setInterval(changeImage, 3000);

function changeImage() {
    // Get the image element by id
    let image = document.getElementById("banner_image");

    // Change the image source
    image.src = images[x]; 
    // Increment the index for the next image
    x++;
    // Reset the index to 0 if it exceeds the array length
    if (x === images.length) {
        x = 0;
    }
}


$(document).ready(function () {
    $("#news-slider").owlCarousel({
      items: 4,
      itemsDesktop: [1199, 3],
      itemsDesktopSmall: [980, 2],
      itemsMobile: [600, 1],
      navigation: true,
      navigationText: ["", ""],
      pagination: true,
      autoPlay: true
    });
  });
  
  $(document).ready(function () {
    $("#tfc_news_slider").owlCarousel({
      items: 4,
      itemsDesktop: [1199, 3],
      itemsDesktopSmall: [980, 2],
      itemsMobile: [600, 1],
      navigation: true,
      navigationText: ["", ""],
      pagination: true,
      autoPlay: true
    });
  });
  