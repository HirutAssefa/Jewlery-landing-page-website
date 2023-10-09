// Responsive navigation menu
const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');
const menuBtnIcon = menuBtn.querySelector('i');

menuBtn.addEventListener('click', (e) => {
  navLinks.classList.toggle('open');

  const isOpen = navLinks.classList.contains('open');
  menuBtnIcon.setAttribute('class', isOpen ? 'ri-close-line' : 'ri-menu-line');
});

navLinks.addEventListener('click', (e) => {
  navLinks.classList.remove('open');
  menuBtnIcon.setAttribute('class', 'ri-menu-line');
});

const menuButton = document.querySelector('.navbar__menu-btn');
const navbarLinks = document.querySelector('.navbar__links ul');

menuButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active');
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: 'smooth',
      });
    }
  });
});
