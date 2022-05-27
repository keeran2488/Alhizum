
// var slider = tns({
//     container: ".my-slider-2",
//     items: 5,
//     gutter: 20,
//     slideBy: 1,
//     mouseDrag: true,
//     autoplay: true,
//     autoplayButtonOutput: false,
//     // mode: 'gallery',
//     speed: 1500,
//     // animateIn: "scale",
//     // controls: false,
//     controlsContainer: "#custom-control-2",
//     nav: false,
//     // edgePadding: 20,
//     // loop: false,
//   });


new Glide('.glide', {
  type: 'carousel',
  startAt: 0,
  perView: 3,
  // gap: 40,
  focusAt: 'center',
}).mount()
