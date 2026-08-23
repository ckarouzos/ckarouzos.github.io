document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".qual-carousel").forEach((carousel) => {
    const slides = Array.from(carousel.children).filter((child) => child.classList.contains("carousel-slide"));
    const previous = document.querySelector('[data-carousel-prev="' + carousel.id + '"]');
    const next = document.querySelector('[data-carousel-next="' + carousel.id + '"]');
    const status = document.querySelector('[data-carousel-status="' + carousel.id + '"]');

    if (!slides.length || !previous || !next || !status) {
      return;
    }

    let activeIndex = 0;
    let touchStartX = null;

    const render = () => {
      slides.forEach((slide, index) => {
        slide.hidden = index !== activeIndex;
        slide.setAttribute("aria-hidden", String(index !== activeIndex));
      });
      status.textContent = String(activeIndex + 1) + " / " + String(slides.length);
      previous.disabled = activeIndex === 0;
      next.disabled = activeIndex === slides.length - 1;
    };

    const showSlide = (index) => {
      activeIndex = Math.max(0, Math.min(index, slides.length - 1));
      render();
    };

    previous.addEventListener("click", () => showSlide(activeIndex - 1));
    next.addEventListener("click", () => showSlide(activeIndex + 1));
    carousel.addEventListener("keydown", (event) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        showSlide(activeIndex - 1);
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        showSlide(activeIndex + 1);
      }
    });
    carousel.addEventListener(
      "touchstart",
      (event) => {
        touchStartX = event.changedTouches[0].clientX;
      },
      { passive: true }
    );
    carousel.addEventListener(
      "touchend",
      (event) => {
        if (touchStartX === null) {
          return;
        }
        const distance = event.changedTouches[0].clientX - touchStartX;
        if (Math.abs(distance) >= 50) {
          showSlide(activeIndex + (distance < 0 ? 1 : -1));
        }
        touchStartX = null;
      },
      { passive: true }
    );

    carousel.classList.add("carousel-ready");
    const toolbar = carousel.previousElementSibling;
    if (toolbar && toolbar.classList.contains("carousel-toolbar")) {
      toolbar.classList.add("carousel-ready");
    }
    render();
  });
});
