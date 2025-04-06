// script.js
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".container, .card, .hero, .sobre, .depoimentos, .contato");
  
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("mostrar");
        }
      });
    }, {
      threshold: 0.1
    });
  
    elements.forEach(el => {
      el.classList.add("escondido");
      observer.observe(el);
    });
  });
  
  