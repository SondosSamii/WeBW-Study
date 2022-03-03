// $(document).ready(function () {
//   $(".overview-carousel").owlCarousel();
// });

$(document).ready(function () {
  $(".overview-carousel").owlCarousel({
    loop: true,
    dots: true,
    responsive: {
      0: {
        items: 1,
      },
    },
  });
  $(".overview-carousel").draggable();
});
