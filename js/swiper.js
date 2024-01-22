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

var dynamicSwiper = new Swiper('.mySwiper2', {
    pagination: {
        el: '.swiper-dynamic',
        dynamicBullets: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
        clickable: true,
    },
});

swiper.controller.control = pagingSwiper;
