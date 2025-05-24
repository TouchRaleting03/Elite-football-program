new Swiper('.card-wrapper', {
  loop: true,
  spaceBetween: 30,

  // pagination bullets
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

    // Responsive breakpoints
  breakpoints: {
    0: { 
      slidesPerView: 1,
    },
     768: { 
      slidesPerView: 2,
    },
     1024: { 
      slidesPerView: 3,
    },
}
});

// Custom horizontal loop motion for .card-wrapper
const wrapper = document.querySelector('.card-wrapper');
const cards = document.querySelectorAll('.card-item');
let current = 0;
const total = cards.length;

function updateCards() {
  cards.forEach((card, i) => {
    card.style.transition = 'transform 0.3s cubic-bezier(.77,0,.18,1), opacity 0.3s';
    if (i === current) {
      card.style.transform = 'translateX(0) scale(1)';
      card.style.opacity = '1';
      card.style.zIndex = '2';
    } else {
      card.style.transform = 'translateX(0) scale(0.6)';
      card.style.opacity = '0';
      card.style.zIndex = '0';
    }
  });
}

// Initial state
updateCards();

// Auto-advance in a continuous loop, always showing one card in front
setInterval(() => {
  current = (current + 1) % total;
  updateCards();
}, 3000);

// Optionally, add navigation (uncomment if you want buttons)
// document.querySelector('.next-btn').onclick = () => {
//   current = (current + 1) % total;
//   updateCards();
// };
// document.querySelector('.prev-btn').onclick = () => {
//   current = (current - 1 + total) % total;
//   updateCards();
// };
