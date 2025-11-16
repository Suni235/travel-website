document.addEventListener('DOMContentLoaded', () => {
  // ------------------ Mobile Menu Toggle ------------------
  const menuIcon = document.querySelector('.menu-icon');
  const navList = document.querySelector('.nav-list');

  if (menuIcon && navList) {
    menuIcon.addEventListener('click', () => {
      navList.classList.toggle('active');

      // Toggle icon ☰ / ✖
      if (navList.classList.contains('active')) {
        menuIcon.innerHTML = '&times;'; // ✖
      } else {
        menuIcon.innerHTML = '&#9776;'; // ☰
      }
    });

    // Close menu after clicking a link
    navList.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navList.classList.remove('active');
        menuIcon.innerHTML = '&#9776;';
      });
    });
  }
});


