document.addEventListener('DOMContentLoaded', () => {
  const sections  = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('nav ul li a');

  function setActiveLink() {
    const scrollY = window.pageYOffset;

    sections.forEach(sec => {
      const top  = sec.offsetTop - 120;     
      const end  = top + sec.offsetHeight;
      const id   = sec.getAttribute('id');

      if (scrollY >= top && scrollY < end) {
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href').includes(id));
        });
      }
    });
  }

  setActiveLink();              
  window.addEventListener('scroll', setActiveLink);
});

