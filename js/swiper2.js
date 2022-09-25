// swiper for section ARTICLES
let slider = document.querySelector('#slider');
console.log(slider);
const mySlide = new Swiper( '.slider', {
  slideClass: 'slide',
  wrepperClass: 'slider-wrapper',
  direction: "horizontal",
  centeredSlides: true,
  loop: true,
  slidesPerView: 3,
  spaceBetween: 20,
  
})