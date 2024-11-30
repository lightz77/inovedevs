function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "assents/menu_white.png";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "assents/close_white.png";
    }
}

const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

window.addEventListener("scroll", function () {
     
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) { // Troque 50 para ajus
        navbar.classList.add("scrolled");
            } else {
                navbar.classList.remove("scrolled");
        
    }
        });


        