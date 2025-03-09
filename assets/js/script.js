const sliders = [
  document.getElementById("slider1"),
  document.getElementById("slider2"),
];
// Query slides from both slider1 and slider2
const slides = document.querySelectorAll("#slider1 .slide, #slider2 .slide");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
const pagination = document.querySelector(".pagination");
const progressBar = document.querySelector(".progress");
let currentIndex = 0;
const totalSlides = document.querySelectorAll("#slider1 .slide").length; // Keep based on slider1 count
const slidesToShow = 1;
const maxIndex = totalSlides - slidesToShow;

// Initialize pagination
const updatePagination = () => {
  pagination.textContent = `${String(currentIndex + 1).padStart(
    2,
    "0"
  )}/${String(totalSlides).padStart(2, "0")}`;
};

// Update progress bar
const updateProgressBar = () => {
  const progressPercentage = (currentIndex / totalSlides) * 100;
  progressBar.style.left = `${progressPercentage}%`;
};

// Update slide opacity in both sliders
const updateSlideOpacity = () => {
  slides.forEach((slide, index) => {
    slide.style.opacity = index % totalSlides === currentIndex ? "1" : "0.5";
  });
};

updatePagination(); // Initial state
updateProgressBar();
updateSlideOpacity();

// Move both sliders and update pagination, progress bar & opacity
const goToSlide = (index) => {
  currentIndex = index;
  sliders.forEach((slider) => {
    slider.style.transform = `translateX(${-100 * currentIndex}%)`;
  });
  updatePagination();
  updateProgressBar();
  updateSlideOpacity();
};

nextBtn.addEventListener("click", () => {
  if (currentIndex < maxIndex) {
    goToSlide(currentIndex + 1);
  }
});

prevBtn.addEventListener("click", () => {
  if (currentIndex > 0) {
    goToSlide(currentIndex - 1);
  }
});



const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const modalClose = document.getElementById("modalClose");

// Add click event to each image inside items
document.querySelectorAll(".imagesZoom").forEach((img) => {
  img.addEventListener("click", () => {
    modalImg.src = img.src;
    modal.classList.add("open");
  });
});

// Close modal on clicking the close button or outside the image
modalClose.addEventListener("click", () => {
  modal.classList.remove("open");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("open");
  }
});
