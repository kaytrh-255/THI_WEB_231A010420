
// Khi click logo → về trang chủ
document.addEventListener("DOMContentLoaded", () => {
    const logo = document.querySelector('.logo');
    logo.addEventListener('click', () => {
      window.location.href = "index.html";
    });
  });
  
  // Fade-in when scrolling into view
  const fadeElements = document.querySelectorAll('.fade-in');
  
  function handleFadeIn() {
    fadeElements.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add('show');
      }
    });
  }
  
  window.addEventListener('scroll', handleFadeIn);
  window.addEventListener('load', handleFadeIn);