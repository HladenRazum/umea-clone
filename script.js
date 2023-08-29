const slideRadioButtons = document.querySelectorAll("input[name=slides]");
const slideElements = document.querySelectorAll(".slide-wrapper");

const SLIDE_INTERVAL_IN_MILLISECONDS = 8000;
const INVISIBLE_CLASS = "opacity-none";

const isHidden = (el) => el.classList.contains(INVISIBLE_CLASS);

let currentSlideIndex = 0;

slideElements.forEach((slide) => {
   slide.addEventListener("transitionend", () => {
      if (isHidden(slide)) {
         slide.style.display = "none";
      }
   });
});

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

      if (currentSlideIndex > 1) {
         currentSlideIndex = 0;
      } else {
         currentSlideIndex += 1;
      }
   }, duration);
}

function updateSlides(currentIndex) {
   slideElements.forEach((slide, index) => {
      if (index === currentIndex) {
         slide.style.removeProperty("display");
         setTimeout(() => {
            slide.classList.remove(INVISIBLE_CLASS);
         }, 0);
      } else {
         slide.classList.add(INVISIBLE_CLASS);
      }
   });
}

slide(SLIDE_INTERVAL_IN_MILLISECONDS);

slideRadioButtons.forEach((btn, index) => {
   btn.addEventListener("click", (e) => {
      btn.checked = true;
      currentSlideIndex = index;
      updateSlides(currentSlideIndex);
   });
});
