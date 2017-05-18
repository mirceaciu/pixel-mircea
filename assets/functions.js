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
// swiperRight.watchSlidesProgress(true);

// # # # # # # # # # #
// Right Slider
// #  # # # # # # # # #

var swiperRight = new Swiper(".ins-right", {
    pagination: ".swiper-pagination",
    nextButton: ".pixel-next",
    prevButton: ".pixel-prev",
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

var autoSizeText;

autoSizeText = function() {
  var el, elements, _i, _len, _results;
  elements = $('.resize');
  console.log(elements);
  if (elements.length < 0) {
    return;
  }
  _results = [];
  for (_i = 0, _len = elements.length; _i < _len; _i++) {
    el = elements[_i];
    _results.push((function(el) {
      var resizeText, _results1;
      resizeText = function() {
        var elNewFontSize;
        elNewFontSize = (parseInt($(el).css('font-size').slice(0, -2)) - 1) + 'px';
        return $(el).css('font-size', elNewFontSize);
      };
      _results1 = [];
      while (el.scrollHeight > el.offsetHeight) {
        _results1.push(resizeText());
      }
      return _results1;
    })(el));
  }
  return _results;
};
