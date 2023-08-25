function scrollToElement(element) {
  window.scrollTo({
    behavior: 'smooth',
    top: element.offsetTop
  });
}


document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('nav a');

  navLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault(); 
      const targetId = link.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      scrollToElement(targetElement);
    });
  });
});


document.addEventListener('DOMContentLoaded', function() {
  const backToTopLink = document.getElementById('backToTop');

  backToTopLink.addEventListener('click', function(event) {
    event.preventDefault();
    scrollToElement(document.body);
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const modalLinks = document.querySelectorAll('[data-modal-target]');
  const modals = document.querySelectorAll('.modal-overlay');

  modalLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const targetModalId = link.getAttribute('data-modal-target');
      const modal = document.getElementById(targetModalId);
      modal.style.display = 'block';
    });
  });

  modals.forEach(function(modal) {
    modal.addEventListener('click', function(event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  });
});