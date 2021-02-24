"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var _jquery = _interopRequireWildcard(require("jquery"));

var _main = _interopRequireDefault(require("./main.js"));

var _swiper = _interopRequireDefault(require("swiper"));

var _aos = _interopRequireDefault(require("aos"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

(0, _jquery["default"])(document).ready(function () {
  var app = new _main["default"]();
  inAos();
  burger();
  parallax();
  indexSlider();
  institSlider();
  gallery();
  mediaSlider();
  performSlider();
  headerScroll();
  search();
  close();
  indexTooltip();
  infoScroll();
  greetingInit(); // initSlider();

  youtube();
  modal();
  eye();
  configGallery();
  galSlider(); // indSlider();
  // perSlider();
});

function inAos() {
  _aos["default"].init({
    // Global settings:
    disable: false,
    // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: 'DOMContentLoaded',
    // name of the event dispatched on the document, that AOS should initialize on
    initClassName: 'aos-init',
    // class applied after initialization
    animatedClassName: 'aos-animate',
    // class applied on animation
    useClassNames: false,
    // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false,
    // disables automatic mutations' detections (advanced)
    debounceDelay: 50,
    // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99,
    // the delay on throttle used while scrolling the page (advanced)
    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 50,
    // offset (in px) from the original trigger point
    delay: 0,
    // values from 0 to 3000, with step 50ms
    duration: 400,
    // values from 0 to 3000, with step 50ms
    easing: 'ease',
    // default easing for AOS animations
    once: false,
    // whether animation should happen only once - while scrolling down
    mirror: false,
    // whether elements should animate out while scrolling past them
    anchorPlacement: 'top-bottom' // defines which position of the element regarding to window should trigger the animation

  });
}

function burger() {
  (0, _jquery["default"])('.burger-btn').on('click', function () {
    (0, _jquery["default"])('.burger-btn').toggleClass('burger-btn--active');
    (0, _jquery["default"])('.burger-menu').toggleClass('burger-menu--active');
  });
}

function parallax() {
  (0, _jquery["default"])(window).on('scroll', function () {
    var scroll = (0, _jquery["default"])(this).scrollTop();
    (0, _jquery["default"])('.parallax').css({
      'transform': 'translate(0%, ' + -scroll / 5 + '%)'
    });
    (0, _jquery["default"])('.index__start-phone').css({
      'transform': 'translate(-50%, ' + (-50 + scroll / 80) + '%)'
    });
  });
}

function search() {
  var searchOn = (0, _jquery["default"])('.header__search');
  var searchOff = (0, _jquery["default"])('.search-close');
  var searchBl = (0, _jquery["default"])('.search');
  searchOn.on('click', function () {
    searchBl.addClass('search--active');
  });
  searchOff.on('click', function () {
    searchBl.removeClass('search--active');
  });
}

close = function close() {
  var searchBl = (0, _jquery["default"])('.search');
  (0, _jquery["default"])(window).on('click', function (event) {
    if (searchBl.hasClass('search--active') && event.pageY > 155) {
      searchBl.removeClass('search--active');
    }
  });
  (0, _jquery["default"])(document).on('keydown', function (event) {
    if (event.keyCode == 27) {
      searchBl.removeClass('search--active');
    }
  });
};

function indexTooltip() {
  // $('.sup-img').on('mouseenter', function(){
  //     $('.tooltip').addClass('tooltip--active');
  // });
  // $('.sup-img').on('mouseleave', function(){
  //   $('.tooltip').removeClass('tooltip--active');
  // });
  (0, _jquery["default"])('.sup-img').on('click', function () {
    (0, _jquery["default"])('.tooltip').toggleClass('tooltip--active');
  });
  (0, _jquery["default"])(window).on('click', function (event) {
    if ((0, _jquery["default"])(event.target).hasClass('tooltip--active') || (0, _jquery["default"])(event.target).hasClass('sup-img') || (0, _jquery["default"])(event.target).hasClass('text')) {} else {
      (0, _jquery["default"])('.tooltip').removeClass('tooltip--active');
    }
  });
}

function infoScroll() {
  (0, _jquery["default"])('.index__start-mouse').on('click', function () {
    if ((0, _jquery["default"])('#info').length) {
      var top = (0, _jquery["default"])('#info').offset().top;
      (0, _jquery["default"])('body,html').animate({
        scrollTop: top
      }, 1000);
    }
  });
}

function headerScroll() {
  var header = (0, _jquery["default"])('header'),
      prevScroll = 0,
      total = 0;
  (0, _jquery["default"])(window).on('scroll', function () {
    var winScroll = (0, _jquery["default"])(this).scrollTop();
    total = winScroll - prevScroll;
    prevScroll = winScroll;

    if ((0, _jquery["default"])(this).scrollTop() <= 150) {
      header.removeClass('header--active');
      header.removeClass('header--top');
      (0, _jquery["default"])('.white').css('display', 'none');
      (0, _jquery["default"])('.black').css('display', 'block');
      (0, _jquery["default"])('.link-b').css('color', 'black');
    } else {
      if (total < 0 && (0, _jquery["default"])(this).scrollTop() !== 0) {
        header.addClass('header--active');
        (0, _jquery["default"])('.white').css('display', 'block');
        (0, _jquery["default"])('.black').css('display', 'none');
        (0, _jquery["default"])('.link-b').css('color', 'white');
      } else {
        header.addClass('header--top');
        header.removeClass('header--active');
        (0, _jquery["default"])('.white').css('display', 'none');
        (0, _jquery["default"])('.black').css('display', 'block');
        (0, _jquery["default"])('.link-b').css('color', 'black');
      }
    }
  });
}

function indexSlider() {
  var indexSlide = new _swiper["default"]('.index__slider-conteiner', {
    slidesPerView: 'auto',
    centerSlides: true,
    // effect: 'fade',
    // slidesPerColumn: 1,
    grabCursor: true,
    loop: true,
    speed: 1000,
    loopAdditionalSlides: 10,
    watchSlidesProgress: true,
    pagination: {
      el: '.index__slider-pagination',
      type: 'fraction'
    },
    navigation: {
      nextEl: '.index__next',
      prevEl: '.index__prev'
    },
    on: {
      init: function init() {},
      imagesReady: function imagesReady() {},
      progress: function progress() {
        var swiper = this;

        for (var i = 0; i < swiper.slides.length; i++) {
          var slideProgress = swiper.slides[i].progress;
          var innerOffset = swiper.width * 0.5;
          var innerTranslate = slideProgress * innerOffset;
          swiper.slides[i].querySelector('.slide-bgimg').style.transform = 'translateX(' + innerTranslate + 'px)';
        }
      },
      touchStart: function touchStart() {
        var swiper = this;

        for (var i = 0; i < swiper.slides.length; i++) {
          swiper.slides[i].style.transition = '';
        }
      },
      setTransition: function setTransition() {
        var swiper = this;

        for (var i = 0; i < swiper.slides.length; i++) {
          swiper.slides[i].style.transition = 1000 + 'ms';
          swiper.slides[i].querySelector('.slide-bgimg').style.transition = 1000 + 'ms';
        }
      }
    }
  });
}

function institSlider() {
  var institSlide = new _swiper["default"]('.index__instit-slider', {
    slidesPerView: 'auto',
    centerSlides: true,
    grabCursor: true,
    loop: true,
    speed: 1000,
    loopAdditionalSlides: 10,
    watchSlidesProgress: true,
    pagination: {
      el: '.index__instit-pagination',
      type: 'fraction'
    },
    navigation: {
      nextEl: '.instit__next',
      prevEl: '.instit__prev'
    },
    on: {
      init: function init() {},
      imagesReady: function imagesReady() {},
      progress: function progress() {
        var swiper = this;

        for (var i = 0; i < swiper.slides.length; i++) {
          var slideProgress = swiper.slides[i].progress;
          var innerOffset = swiper.width * 0.5;
          var innerTranslate = slideProgress * innerOffset;
          swiper.slides[i].querySelector('.slide-bgimg').style.transform = 'translateX(' + innerTranslate + 'px)';
        }
      },
      touchStart: function touchStart() {
        var swiper = this;

        for (var i = 0; i < swiper.slides.length; i++) {
          swiper.slides[i].style.transition = '';
        }
      },
      setTransition: function setTransition() {
        var swiper = this;

        for (var i = 0; i < swiper.slides.length; i++) {
          swiper.slides[i].style.transition = 1000 + 'ms';
          swiper.slides[i].querySelector('.slide-bgimg').style.transition = 1000 + 'ms';
        }
      }
    }
  });
}

function gallery() {
  var gallerySlide = new _swiper["default"]('.index__gallery-conteiner', {
    // effect: 'coverflow',
    grabCursor: true,
    centeredSlides: false,
    slidesPerView: 'auto',
    breakpoints: {
      990: {
        centeredSlides: true
      }
    },
    // coverflowEffect: {
    //   rotate: 0,
    //   stretch: 0,
    //   depth: 1000,
    //   modifier: 1,
    //   slideShadows: false,
    // },
    navigation: {
      nextEl: '.gallery-next',
      prevEl: '.gallery-prev'
    }
  });
}

function mediaSlider() {
  var institSlide = new _swiper["default"]('.index__media-conteiner', {
    slidesPerView: 'auto',
    centerSlides: true,
    navigation: {
      nextEl: '.media-prev',
      prevEl: '.media-next'
    }
  });
}

function performSlider() {
  var performSlide = new _swiper["default"]('.perfom__picture-slider-conteiner', {
    loop: true,
    speed: 1000,
    loopAdditionalSlides: 10,
    grabCursor: true,
    watchSlidesProgress: true,
    pagination: {
      el: '.perfom__picture-pagination',
      type: 'fraction'
    },
    navigation: {
      nextEl: '.perform__next',
      prevEl: '.perform__prev'
    },
    on: {
      init: function init() {},
      imagesReady: function imagesReady() {},
      progress: function progress() {
        var swiper = this;

        for (var i = 0; i < swiper.slides.length; i++) {
          var slideProgress = swiper.slides[i].progress;
          var innerOffset = swiper.width * 0.5;
          var innerTranslate = slideProgress * innerOffset;
          swiper.slides[i].querySelector('.slide-bgimg').style.transform = 'translateX(' + innerTranslate + 'px)';
        }
      },
      touchStart: function touchStart() {
        var swiper = this;

        for (var i = 0; i < swiper.slides.length; i++) {
          swiper.slides[i].style.transition = '';
        }
      },
      setTransition: function setTransition() {
        var swiper = this;

        for (var i = 0; i < swiper.slides.length; i++) {
          swiper.slides[i].style.transition = 1000 + 'ms';
          swiper.slides[i].querySelector('.slide-bgimg').style.transition = 1000 + 'ms';
        }
      }
    }
  });
}

function greetingSlider() {
  var greetSlide = new _swiper["default"]('.index__greeting-wrap', {
    slidesPerView: 'auto',
    centerSlides: true,
    pagination: {
      el: '.perfom__picture-pagination',
      type: 'fraction'
    },
    navigation: {
      nextEl: '.greeting__next',
      prevEl: '.greeting__prev'
    }
  });
}

function greetingInit() {
  var count = 0;
  (0, _jquery["default"])('.index__greeting-wrap').find('.swiper-slide').each(function () {
    count = count + 1;
  });

  if (count <= 1) {
    (0, _jquery["default"])('.grear-btn').css('display', 'none');
  } else {
    greetingSlider();
  }
}

function modal() {
  (0, _jquery["default"])('.js--modal').on('click', function () {
    var data = (0, _jquery["default"])(this).data('name'); // $('.modal').each(function(){
    //   if ( $(this).data('name') == data){
    //     $(this).addClass('modal--active');
    //   }
    // });

    (0, _jquery["default"])('.modal').addClass('modal--active');
  });
  (0, _jquery["default"])('.modal__wrapper-close').on('click', function () {
    (0, _jquery["default"])('.modal').removeClass('modal--active');
  });
  (0, _jquery["default"])(document).on('keydown', function (event) {
    if (event.keyCode == 27 && (0, _jquery["default"])('.modal').hasClass('modal--active')) {
      (0, _jquery["default"])('.modal').removeClass('modal--active');
    }
  });
}

function youtube() {
  (0, _jquery["default"])('.index__video-play').on('click', function () {
    (0, _jquery["default"])('.video').addClass('video--active');
  });
  (0, _jquery["default"])('.video-close').on('click', function () {
    (0, _jquery["default"])('.video').removeClass('video--active');
  });
  (0, _jquery["default"])(document).on('keydown', function (event) {
    if (event.keyCode == 27 && (0, _jquery["default"])('.video').hasClass('video--active')) {
      (0, _jquery["default"])('.video').removeClass('video--active');
    }
  });
} // function initSlider() {
//   $('.js--modal').on('click', function(){
//     let data = $('.js--modal').data('name');
//     switch(data){
//       case 'gallery-gal':
//         galSlider()
//         break;
//       case 'index-gal':
//         indSlider();
//         break;
//       case 'performance-gal':
//         perSlider();
//         break;
//     }
//   });
// }


function galSlider() {
  var galThumbs = new _swiper["default"]('.gal-bottom', {
    spaceBetween: 10,
    observer: true,
    observeParents: true,
    slidesPerView: 'auto'
  });
  var galSlide = new _swiper["default"]('.gal-top', {
    slidesPerView: 'auto',
    centerSlides: true,
    observer: true,
    observeParents: true,
    // spaceBetween: 50,
    navigation: {
      nextEl: '.gal-next',
      prevEl: '.gal-prev'
    },
    thumbs: {
      swiper: galThumbs
    }
  });
} // function perSlider() {
//   var perThumbs = new Swiper('.per-bottom', {
//     spaceBetween: 10,
//     observer: true,
//     observeParents: true,
//     slidesPerView: 'auto',
//   });
//   var perSlide = new Swiper('.per-top', {
//     slidesPerView: 'auto',
//     centerSlides: true,
//     spaceBetween: 50,
//     observer: true,
//     observeParents: true,
//     navigation: {
//       nextEl: '.per-next',
//       prevEl: '.per-perv',
//     },
//     thumbs: {
//       swiper: perThumbs
//     },
//   });
// }
// function indSlider() {
//   var indThumbs = new Swiper('.ind-bottom', {
//     spaceBetween: 10,
//     observer: true,
//     observeParents: true,
//     slidesPerView: 'auto',
//   });
//   var indSlide = new Swiper('.ind-top', {
//     slidesPerView: 'auto',
//     centerSlides: true,
//     spaceBetween: 50,
//     observer: true,
//     observeParents: true,
//     navigation: {
//       nextEl: '.ind-next',
//       prevEl: '.ind-prev',
//     },
//     thumbs: {
//       swiper: indThumbs
//     },
//   });
// }


function eye() {
  (0, _jquery["default"])('.specialButton').on('click', function () {
    (0, _jquery["default"])('#specialButton').click();
  });
  (0, _jquery["default"])('#specialButton').on('click', function () {}); // let cloneMob = $('.btn-mob').clone();
  // let cloneNmob = $('.btn-nmob').clone();
  // $('.btn-mob').remove();
  // $('.btn-nmob').remove();
  // if ($(window).width() >= '1150'){
  //   $('.nmob').append(cloneNmob);
  // }else{
  //   $('.mob').append(cloneMob);
  // }
  // if ($(this).attr('id') !== 'specialButton'){
  //   $(this).attr('id', 'specialButton');
  // }
}

function configGallery() {
  (0, _jquery["default"])('.js--modal').on('click', function () {
    var way = (0, _jquery["default"])(this).data('way');
    var description = (0, _jquery["default"])(this).data('description');
    var arrayWays = way.split(';');

    if ((0, _jquery["default"])('.top').has('.swiper-slide') || (0, _jquery["default"])('.bottom').has('.swiper-slide')) {
      (0, _jquery["default"])('.top').empty();
      (0, _jquery["default"])('.bottom').empty();
    }

    for (var i = 0; i < arrayWays.length; i++) {
      (0, _jquery["default"])('.modal').find('.top').append("<div class=\"swiper-slide gallery-top-slide\"> <div class=\"img-contein\"> <img src=\"./images/".concat(arrayWays[i], "\"/> </div> <p class=\"text text--regal24-14\">").concat(description, "</p> </div>"));
      (0, _jquery["default"])('.modal').find('.bottom').append("<div class=\"swiper-slide\"> <div class=\"find\"></div> <img src=\"./images/".concat(arrayWays[i], "\"/> </div>"));
    }
  });
}