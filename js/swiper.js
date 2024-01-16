var swiper = new Swiper('.mySwiper', {
    loop: true,
    pagination: {
        el: '.swiper-progressbar',
        type: 'progressbar',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        clickable: true,
    },
});

var pagingSwiper = new Swiper('.mySwiper', {
    loop: true,
    pagination: {
        el: '.swiper-fraction',
        type: 'fraction',
    },
});

swiper.controller.control = pagingSwiper;
