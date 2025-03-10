document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('year').textContent = new Date().getFullYear();

    const swiper = new Swiper(".card-swiper", {
        centeredSlides: false,
        spaceBetween: 0,
        slidesPerView: 'auto'
    });
});
