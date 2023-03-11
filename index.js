const swiper = new Swiper(".mySwiper", {
  sliderPerView: 1,
  loop: true,
  keyboard: {
    enabled: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
