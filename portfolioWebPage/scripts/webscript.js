// Navigation bar script & interactive gif jquery 

$(document).ready(function(){
  //when nav selcted toggle class to close icon X 
    $('.fa-bars').click(function(){
        $(this).toggleClass('fa-times');
        $('.header').toggleClass('nav-toggle');
    });
  // Window scrolled down remove nav bar
    $(window).on('load scroll',function(){
  
        if($(window).scrollTop() > 100){
          $('header').addClass('header-remove');
        }else{
          $('header').removeClass('header-remove');
        }
      });
});

$(document).ready(function(){
  $("#interactive-img").hover(
    // replace source with gif
    function() 
    {
      $(this).attr("src", "https://i.giphy.com/media/QpVUMRUJGokfqXyfa1/giphy.webp");
    }, 
    // when mouse leaves image, return to frame 
    function()
    {
      $(this).attr("src", "/images/staticGif.png");
    });
})


// End 

// Slides Script vanilla JS // 

// Select all slides
const slides = document.querySelectorAll(".slide"); 

// loop through slides and set each slides translate x property to index * 100%
slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});


const nextSlide = document.querySelector(".btn-next");

// current slide counter
let curSlide = 0; 

// maxium number of slides 
let maxSlide = slides.length -1; 

// add event listener and navigation functionality
nextSlide.addEventListener("click", function () {
  // check current slide is the last and resest current slide
  if (curSlide === maxSlide) {
    curSlide = 0; 
  } else {
    curSlide++;
  }

  // move slide by 100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${500 * (indx - curSlide)}%)`;
  });
});

// select prev slide button 
const prevSlide = document.querySelector(".btn-prev");

// add event listener and navigation functionality 

prevSlide.addEventListener("click", function () {
  // check current slide is the first and reset current slide to next
  if (curSlide === 0){
    curSlide = maxSlide; 
  } else {
    curSlide--; 
  }

  // move slide by 100% 
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${500 * (indx - curSlide)}%)`; 
  });
});

