  const hamBtn = document.getElementById('ham-btn');
  const navLinks = document.querySelector('.nav-links');

  hamBtn.addEventListener('click', function () {
    const isOpen = navLinks.classList.toggle('open');
    hamBtn.classList.toggle('open');
    hamBtn.setAttribute('aria-expanded', isOpen);
  });

  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('open');
      hamBtn.classList.remove('open');
      hamBtn.setAttribute('aria-expanded', 'false');
    });
  });

  