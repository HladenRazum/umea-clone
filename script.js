const slideRadioButtons = document.querySelectorAll("input[name=slides]");
const slideElements = document.querySelectorAll(".slide-wrapper");

const SLIDE_INTERVAL_IN_MILLISECONDS = 7000;

let currentSlideIndex = 0;

function slide(duration) {
  setInterval(() => {
    slideRadioButtons.forEach((slide, index) => {
      if (currentSlideIndex === index) {
        slide.checked = true;
      } else {
        slide.checked = false;
      }
    });

    updateSlides(currentSlideIndex);
    currentSlideIndex > 1 ? (currentSlideIndex = 0) : (currentSlideIndex += 1);
  }, duration);
}

// slide(SLIDE_INTERVAL_IN_MILLISECONDS);
slideRadioButtons.forEach((btn, index) => {
  btn.addEventListener("click", (e) => {
    btn.checked = true;
    currentSlideIndex = index;
    updateSlides(currentSlideIndex);
  });
});

function updateSlides(currentIndex) {
  slideElements.forEach((slide, index) => {
    if (index === currentIndex) {
      slide.classList.add("visible-slide");
    } else {
      slide.classList.remove("visible-slide");
    }
  });
}
