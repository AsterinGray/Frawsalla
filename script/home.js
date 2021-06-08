let next = $('#next');
let prev = $('#prev');

let image = $('.carousel-image');

let active = $('.carousel-image.active');

console.log(image);
// console.log(active);

$(next).click(() => {
  nextImage();
  console.log('next');
});

const nextImage = () => {
  let nextActive = $(active).next('.carousel-image');
};
