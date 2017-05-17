// #  # # # # # # # # #
// Left Slider
// #  # # # # # # # # #

var swiperLeft = new Swiper(".ins-left", {
    // pagination: '.swiper-pagination',
    // prevButton: ".swiper-button-prev",
    noSwipingClass: 'swiper-no-swiping',
    onSlideNextStart: function() {
      swiperRight.slidePrev(false);
    },

    onSlidePrevStart: function() {
      swiperRight.slideNext(false);
    },

});

swiperLeft.slideTo(10, 0, false);
swiperLeft.lockSwipes(true);

// # # # # # # # # # #
// Right Slider
// #  # # # # # # # # #

var swiperRight = new Swiper(".ins-right", {
    pagination: ".swiper-pagination",
    nextButton: ".swiper-button-next",
    prevButton: ".swiper-button-prev",
    paginationType: "progress",

    onSlideNextStart: function() {
      swiperLeft.unlockSwipes(true);
      swiperLeft.slidePrev(false);
      swiperLeft.lockSwipes(true);
    },

    onSlidePrevStart: function() {
      swiperLeft.unlockSwipes(true);
      swiperLeft.slideNext(false);
      swiperLeft.lockSwipes(true);
    },
});
