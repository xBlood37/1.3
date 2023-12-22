const swiper = new Swiper('.swiper', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    320: {
      enabled: true,
      slidesPerView: 'auto',
      spaceBetween: 30,
    },
    768: {
      enabled: false,
      slidesPerView: 'auto',
    },
  },
});
