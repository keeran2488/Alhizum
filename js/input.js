var slider = tns({
  container: ".my-slider",
  items: 5,
  gutter: 20,
  slideBy: 1,
  mouseDrag: true,
  autoplay: true,
  autoplayButtonOutput: false,
  // mode: 'gallery',
  speed: 1000,
  // animateIn: "scale",
  // controls: false,
  controlsContainer: "#custom-control",
  nav: false,
  // edgePadding: 20,
  // loop: false,
  responsive:{
    250:{
      items:2,
    },
    720:{
      items:4,
    },
    960:{
      items:5,
    },
  }
});

var slider2 = tns({
  container: ".my-slider-2",
  items: 3,
  gutter: 20,
  slideBy: 1,
  mouseDrag: true,
  autoplay: true,
  autoplayButtonOutput: false,
  // mode: 'gallery',
  speed: 1000,
  // animateIn: "scale",
  // controls: false,
  controlsContainer: "#custom-control-2",
  nav: false,
  // edgePadding: 20,
  // loop: false,
  responsive:{
    250:{
      items: 2,
    },
    720:{
      items:3,
    },
  }
});

