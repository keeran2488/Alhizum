new Glide('.glide', {
  type: 'carousel',
  startAt: 0,
  perView: 3,
  // gap: 40,
  autoplay: 2000,
  focusAt: 'center',
  breakpoints: {
    720: {
      perView: 1,
    }
  },
}).mount()