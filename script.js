const slideRadioButtons = document.querySelectorAll("input[name=slides]");
const slideElements = document.querySelectorAll(".slide-wrapper");

const SLIDE_INTERVAL_IN_MILLISECONDS = 6000;

let currentSlideIndex = 0;

function slide(duration) {
  const interval = setInterval(() => {
    [...slideRadioButtons].map((slide, index) => {
      if (currentSlideIndex === index) {
        slide.checked = true;
      } else {
        slide.checked = false;
      }
    });

    [...slideElements].map((slide, index) => {
      if (index === currentSlideIndex) {
        slide.classList.add("visible");
        slide.classList.remove("hidden");
      } else {
        slide.classList.remove("visible");
        slide.classList.add("hidden");
      }
    });

    if (currentSlideIndex > 1) {
      currentSlideIndex = 0;
    } else {
      currentSlideIndex += 1;
    }
    // Slide
  }, duration);

  return interval;
}

const interval = slide(SLIDE_INTERVAL_IN_MILLISECONDS);

[...slideRadioButtons].forEach((btn, index) => {
  btn.addEventListener("click", (e) => {
    btn.checked = true;
    currentSlideIndex = index;
    [...slideElements].map((slide, index) => {
      if (index === currentSlideIndex) {
        slide.classList.add("visible");
        slide.classList.remove("hidden");
      } else {
        slide.classList.remove("visible");
        slide.classList.add("hidden");
      }
    });
  });
});
