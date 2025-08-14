const swiper = new Swiper(".swiper", {
  loop: true,
    navigation: {
    nextEl: '.swiper-button-next-custom',
    prevEl: '.swiper-button-prev-custom',
  },
  keyboard: { enabled: true, onlyInViewport: true },
  pagination: { el: ".swiper-pagination", clickable: true },
  autoplay: { delay: 3000, disableOnInteraction: true },
  speed: 800,
  slidesPerView: 4,
  spaceBetween: 40,
  breakpoints: {
    1280: { slidesPerView: 4 },
    1024: { slidesPerView: 3 },
    640: { slidesPerView: 2 },
    0: { slidesPerView: 1 },
  },
});

