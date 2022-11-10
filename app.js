let slidePosition = 0;
const slides = document.getElementsByClassName("carousel__item");
const totalSlides = slides.length;

document
  .getElementById("carousel__button--next")
  .addEventListener("click", function () {
    moveToNextSlide();
  });
document
  .getElementById("carousel__button--prev")
  .addEventListener("click", function () {
    moveToPrevSlide();
  });

function updateSlidePosition() {
  for (let slide of slides) {
    slide.classList.remove("carousel__item--visible");
    slide.classList.add("carousel__item--hidden");
  }

  slides[slidePosition].classList.add("carousel__item--visible");
}

function moveToNextSlide() {
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }

  updateSlidePosition();
}

function moveToPrevSlide() {
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }

  updateSlidePosition();
}

let showBtn = document.querySelector(".carousel");
showBtn.addEventListener("mouseenter", show);
function show() {
  document.getElementById("carousel__button--prev").style.display = "inline";
  document.getElementById("carousel__button--next").style.display = "inline";
}
showBtn.addEventListener("mouseleave", function () {
  document.getElementById("carousel__button--prev").style.display = "none";
  document.getElementById("carousel__button--next").style.display = "none";
});
