window.addEventListener("resize", () => {
  const mql = window.matchMedia("(max-width: 920px)");
  const swiper = document.querySelector(".reader-reviews__comments");
  const swiperWrapper = document.querySelector(
    ".reader-reviews__comments-wrapper"
  );
  const allSwiperSlide = document.querySelectorAll(".user-comment");
  if (mql.matches) {
    swiper.classList.add("swiper");
    swiperWrapper.classList.add("swiper-wrapper");
    allSwiperSlide.forEach((e) => {
      e.classList.add("swiper-slide");
    });
    new Swiper(".swiper", {
      slidesPerView: 1,
      grabCursor: true,
      slideToClickedSlide: true,
      // autoplay: {
      //   delay: 4000,
      //   disableOnInteraction: false,
      //   pauseOnMouseEnter: true,
      // },
      keyboard: {
        enabled: true,
      },
    });
  } else {
    swiper.classList.remove("swiper");
    swiperWrapper.classList.remove("swiper-wrapper");
    allSwiperSlide.forEach((e) => {
      e.classList.remove("swiper-slide");
    });
  }
});
