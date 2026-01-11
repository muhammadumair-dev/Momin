/* =======================
   NAVBAR SCROLL EFFECT
======================= */
window.addEventListener("scroll", () => {
  const navbar = document.querySelector(".site-header");
  if (!navbar) return;

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});


/* =======================
   FULL PAGE SLIDER
======================= */
const slides = document.querySelectorAll(".slide");
const sliderWrapper = document.querySelector(".slider-wrapper");
const slideNextBtn = document.querySelector(".next");
const slidePrevBtn = document.querySelector(".prev");

let currentIndex = 0;
let isTransitioning = false;

function showSlide(index) {
  if (isTransitioning || slides.length === 0) return;
  isTransitioning = true;

  slides.forEach(slide => slide.classList.remove("active"));

  currentIndex = (index + slides.length) % slides.length;
  slides[currentIndex].classList.add("active");

  setTimeout(() => {
    isTransitioning = false;
  }, 700);
}

slideNextBtn?.addEventListener("click", () => showSlide(currentIndex + 1));
slidePrevBtn?.addEventListener("click", () => showSlide(currentIndex - 1));

sliderWrapper?.addEventListener(
  "wheel",
  (e) => {
    e.preventDefault();
    e.deltaY > 0
      ? showSlide(currentIndex + 1)
      : showSlide(currentIndex - 1);
  },
  { passive: false }
);


/* =======================
   CATEGORY CARD SLIDER
======================= */
const cardSlider = document.getElementById("slider");
const cardNextBtn = document.getElementById("nextBtn");
const cardPrevBtn = document.getElementById("prevBtn");

function updateActiveCard() {
  const cards = document.querySelectorAll(".category-card");
  cards.forEach((card, index) => {
    card.classList.toggle("active", index === 0);
  });
}

cardNextBtn?.addEventListener("click", () => {
  const cards = document.querySelectorAll(".category-card");
  if (!cards.length) return;

  cardSlider.appendChild(cards[0]);
  updateActiveCard();
});

cardPrevBtn?.addEventListener("click", () => {
  const cards = document.querySelectorAll(".category-card");
  if (!cards.length) return;

  cardSlider.prepend(cards[cards.length - 1]);
  updateActiveCard();
});

updateActiveCard();
const moninData = [
  {
    title: "MONIN Cup 2024 (AP)",
    subtitle: "*Timeless-Twists_",
    img: "https://images.unsplash.com/photo-1551024709-8f23befc6f87"
  },
  {
    title: "Refreshing Reinventions: Crafting the Perfect Lemonade",
    subtitle: "",
    img: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd"
  },
  {
    title: "Mindful Mixology: Low to No-ABV",
    subtitle: "",
    img: "https://images.unsplash.com/photo-1536935338788-846bb9981813"
  },
  {
    title: "Summer Flavors: Exotic Syrups",
    subtitle: "*Tropical-Vibes_",
    img: "https://images.unsplash.com/photo-1470337458703-46ad1756a187"
  }
];

let moninIndex = 0;

function moninUpdate() {
  document.querySelectorAll('.monin-card').forEach((card, i) => {
    const data = moninData[(moninIndex + i) % moninData.length];
    card.querySelector('.monin-img').src = data.img;
    card.querySelector('.monin-title').textContent = data.title;
    const sub = card.querySelector('.monin-subtitle');
    sub.textContent = data.subtitle;
    sub.style.display = data.subtitle ? 'block' : 'none';
  });
}

function moninMove(dir) {
  moninIndex = (moninIndex + dir + moninData.length) % moninData.length;
  moninUpdate();
}

moninUpdate();
// Simple entrance animation
window.addEventListener('DOMContentLoaded', () => {
  const hero = document.getElementById('hero');

  // Trigger animation after a short delay
  setTimeout(() => {
    hero.style.transition = 'opacity 1.2s ease, transform 1.2s ease';
    hero.style.opacity = '1';
    hero.style.transform = 'translateY(0)';
  }, 200);
});

// Optional: Parallax effect on the background image for extra polish
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const bg = document.querySelector('.image-container');
  bg.style.backgroundPositionY = (scrolled * 0.1) + 'px';
});
