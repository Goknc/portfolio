document.addEventListener("DOMContentLoaded", () => {
    "use strict";
    const splide = new Splide('.ticker-1', {
        perPage: 3,
        arrows: false,
        pagination: false,
        type: 'loop',
        drag: 'free',
        focus: 'center',
        perPage: 4,
        autoScroll: {
            speed: 2,
        },
    });
    splide.mount(window.splide.Extensions);

    new Splide('.ticker-2', {
        perPage: 3,
        arrows: false,
        pagination: false,
        type: 'loop',
        drag: 'free',
        focus: 'center',
        perPage: 4,
        autoScroll: {
            speed: -2,
        },
    }).mount(window.splide.Extensions);
});