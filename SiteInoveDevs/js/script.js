// Seleciona o ícone de menu e a barra de navegação
const menuIcon = document.getElementById('menu-icon');
const navbar = document.getElementById('navbar');

// Abre ou fecha o menu ao clicar no ícone
menuIcon.addEventListener('click', function() {
  navbar.classList.toggle('active');
});

// Fecha o menu quando um item for clicado
const navItems = document.querySelectorAll('.nav-item');
navItems.forEach(item => {
  item.addEventListener('click', function() {
    navbar.classList.remove('active');
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


        