
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


// new Glide('.glide', {
//   type: 'carousel',
//   startAt: 0,
//   perView: 3,
//   // gap: 40,
//   focusAt: 'center',
// }).mount()
let current_comment_index = 0;
let numb = document.getElementById("all-comments").children.length;

function nextComment() {
  comment = document.getElementById('comment-'+current_comment_index)

  // current_comment_index = (current_comment_index + 1)%numb
  next_comment_index = (current_comment_index + 1)%numb
  console.log("current:"+current_comment_index)
  console.log("Next index:"+ next_comment_index)

  
  next_comment = document.getElementById('comment-'+next_comment_index)
  comment.classList.toggle('hidden')
  next_comment.classList.toggle('hidden')
  next_comment.classList.toggle('block')

  current_comment_index = next_comment_index
}

function prevComment() {
  comment = document.getElementById('comment-' + Math.abs(current_comment_index))
  comment.classList.toggle('hidden')
  
  console.log("current:"+ current_comment_index)

  if (current_comment_index == 0){
    current_comment_index = numb
  }
  prev_comment_index = (current_comment_index - 1)%numb
  prev_comment_index = (Math.abs(prev_comment_index))

  
  console.log("prev index:"+ prev_comment_index)

  prev_comment = document.getElementById('comment-' + prev_comment_index)
  
  prev_comment.classList.toggle('hidden')
  prev_comment.classList.toggle('block')

  current_comment_index = prev_comment_index
}