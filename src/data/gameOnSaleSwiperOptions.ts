const swiperOptions = {
  navigation: {
    prevEl: ".gameonsale-prev",
    nextEl: ".gameonsale-next",
  },
  spaceBetween: 20,
  breakpoints: {
    // when window width is >= 320px
    0: {
      slidesPerGroup: 1,
      slidesPerView: 1,
    },
    480: {
      slidesPerGroup: 1,
      slidesPerView: 2,
    },
    768: {
      slidesPerGroup: 2,
      slidesPerView: 3,
    },
    // when window width is >= 480px
    1024: {
      slidesPerGroup: 3,
      slidesPerView: 4,
    },
    // when window width is >= 640px
    1280: {
      slidesPerGroup: 5,
      slidesPerView: 6,
    },
  },
};

export default swiperOptions;
