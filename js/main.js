lightbox.option({
  resizeDuration: 200,
  wrapAround: true,
  disableScrolling: true,
});

$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
      nav: true
    },
    600: {
      items: 3,
      nav: true
    },
    1000: {
      items: 4,
      nav: true,
      loop: true,
      autoplay: true,
      autoplayTimeout: 2000,
      autoplayHoverPause: true
    }
  }
})
$('.play').on('click', function () {
  owl.trigger('play.owl.autoplay', [2000])
})
$('.stop').on('click', function () {
  owl.trigger('stop.owl.autoplay')
})