const mySlide = new Swiper(".swiper", {
  navigation: {
    nextEl: ".swiper-button-forward",
    prevEl: ".swiper-button-rearward",
  },
  direction: "horizontal",
  loop: true,
  spaceBetween: 20,
  rewind: true,
  loopFillGroupWithBlank: true,
  breakpoints: {
    320:{
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },
    968: {
      slidesPerView: 3,
    },
  },
});
