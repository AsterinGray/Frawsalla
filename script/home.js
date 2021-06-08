$('.active').animate({
  opacity: 1,
});

const nextImg = () => {
  let currImg = $('.carousel-image.active');
  let nextImg = currImg.next();
  let firstImg = currImg.prevAll().last();
  let currDot = $('.dot.active');
  let nextDot = currDot.next();
  let firstDot = currDot.prevAll().last();

  if (nextImg.length) {
    currImg.removeClass('active').animate({ opacity: 0 });
    nextImg.addClass('active').animate({ opacity: 1 });
    currDot.removeClass('active');
    nextDot.addClass('active');
  } else {
    currImg.removeClass('active').animate({ opacity: 0 });
    firstImg.addClass('active').animate({ opacity: 1 });
    currDot.removeClass('active');
    firstDot.addClass('active');
  }
};

const prevImg = () => {
  let currImg = $('.carousel-image.active');
  let prevImg = currImg.prev();
  let firstImg = currImg.nextAll().last();
  let currDot = $('.dot.active');
  let prevDot = currDot.prev();
  let firstDot = currDot.nextAll().last();

  if (prevImg.length) {
    currImg.removeClass('active').animate({ opacity: 0 });
    prevImg.addClass('active').animate({ opacity: 1 });
    currDot.removeClass('active');
    prevDot.addClass('active');
  } else {
    currImg.removeClass('active').animate({ opacity: 0 });
    firstImg.addClass('active').animate({ opacity: 1 });
    currDot.removeClass('active');
    firstDot.addClass('active');
  }
};
