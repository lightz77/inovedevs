// Seleciona os elementos do menu
const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.nav-links');
const menuLinks = document.querySelectorAll('.nav-links a');

// Abre/fecha o menu ao clicar no botão
menuToggle.addEventListener('click', () => {
  nav-Links.classList.toggle('active');
});

// Fecha o menu ao clicar em qualquer link
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    nav-links.classList.remove('active');
  });
});

window.addEventListener("scroll", function () {
     
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) { // Troque 50 para ajus
        navbar.classList.add("scrolled");
            } else {
                navbar.classList.remove("scrolled");
        
    }
});


        