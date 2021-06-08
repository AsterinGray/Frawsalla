const nextImg = () => {
  let currImg = $('.active');
  let nextImg = $(currImg).next();
  let firstImg = currImg.prevAll().last();

  if (nextImg.length) {
    currImg.removeClass('active').css('z-index', '-3');
    nextImg.addClass('active').css('z-index', '3');
  } else {
    currImg.removeClass('active').css('z-index', '-3');
    nextImg.addClass('active').css('z-index', '3');
  }
};
