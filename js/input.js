const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')
const dropdown_btn = document.getElementById('dropdown-btn')
const dropdown = document.getElementById('dropdown-menu')


btn.addEventListener('click', () => {
  btn.classList.toggle('open')
  nav.classList.toggle('flex')
  nav.classList.toggle('hidden')
  console.log(dropdown)
})

dropdown_btn.addEventListener('click',()=>{
    dropdown.classList.toggle('block')
    dropdown.classList.toggle('hidden')
    
})

var slider = tns({
  container: ".my-slider",
  items: 5,
  gutter: 20,
  slideBy: 1,
  mouseDrag: true,
  autoplay: true,
  autoplayButtonOutput: false,
  // mode: 'gallery',
  speed: 1500,
  // animateIn: "scale",
  // controls: false,
  controlsContainer: "#custom-control",
  nav: false,
  // edgePadding: 20,
  loop: false,
  responsive:{
    250:{
      items:2,
    },
    720:{
      items:4,
    },
    960:{
      items:5,
    }
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
  speed: 1500,
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