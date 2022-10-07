// swiper for section REVIEWS READERS
window.addEventListener("resize", () => {
  const mql = window.matchMedia("(max-width: 920px)");
  const swiper = document.querySelector(".reader-reviews__comments");
  const swiperWrapper = document.querySelector(
    ".reader-reviews__comments-wrapper"
  );
  const allSwiperSlide = document.querySelectorAll(".user-comment");
  if (mql.matches) {
    swiper.classList.add("slider");
    swiperWrapper.classList.add("slider-wrapper");
    allSwiperSlide.forEach((e) => {
      e.classList.add("slide");
    });
    new Swiper(".slider", {
      slideClass: "slide",
      wrapperClass: "slider-wrapper",
      slidesPerView: 1,
      spaceBetween: 20,
      grabCursor: true,
      slideToClickedSlide: true,
      keyboard: {
        enabled: true,
      },
    });
  } else {
    swiper.classList.remove("slider");
    swiperWrapper.classList.remove("slider-wrapper");
    allSwiperSlide.forEach((e) => {
      e.classList.remove("slide");
    });
  }
});

