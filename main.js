
window.onscroll = function () {
    if (window.scrollY < 50) document.querySelector('header').classList.remove('tiny');
    else document.querySelector('header').classList.add('tiny');
};

const swiper = new Swiper('.about .swiper', {
    // Optional parameters
    direction: 'horizontal',
    spaceBetween: 10,
    slidesPerView: 3,
    loop: false,
    breakpoints: {
        280: {
            slidesPerView: 1,
        },
        560: {
            slidesPerView: 1,
        },
        768: {
            slidesPerView: 2
        },
        1199: {
            slidesPerView: 2
        },
        1400: {
            slidesPerView: 3
        },
        1440: {
            slidesPerView: 3
        }
    },

    // If we need pagination
    pagination: {
        el: '.about .swiper-pagination',
        clickable: true
    },


});