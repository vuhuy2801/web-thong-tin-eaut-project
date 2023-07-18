
var navContainer = document.getElementById('pills-tab');
navContainer.addEventListener('click', function(event) {
  if (event.target.classList.contains('nav-link')) {
    var navLinks = navContainer.querySelectorAll('.nav-link');
    navLinks.forEach(function(navLink) {
      navLink.classList.remove('active', 'underline');
    });
    event.target.classList.add('active', 'underline');
    var targetId = event.target.getAttribute('data-bs-target');
    var targetContent = document.querySelector(targetId);
    document.querySelectorAll('.tab-pane').forEach(function(content) {
      content.classList.remove('show', 'active');
    });
    targetContent.classList.add('show', 'active');
  }
});
