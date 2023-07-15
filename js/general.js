(function() {
    "use strict";
  
  // Moblie nav
  $('.mobile-nav-toggle').on('click', function(e) {
    $('#navbar').toggleClass('navbar-mobile');
    $(this).toggleClass('bi-list bi-x');
    $('#sub-navbar').toggleClass('active');
  });
  
  let isScrolling = false;

  function scrollHandler() {
    if (!isScrolling) {
      isScrolling = true;
  
      window.addEventListener('scroll', function() {
        var subNavbar = document.getElementById('sub-navbar');
        var headerHeight = document.getElementById('header').offsetHeight;
        var scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (scrollPosition > headerHeight) {
          subNavbar.style.top = '0';
        } else {
          subNavbar.style.top = headerHeight - scrollPosition + 'px';
        }
      });
      window.requestAnimationFrame(() => {
        isScrolling = false;
      });
    }
  }
  
  window.addEventListener('scroll', scrollHandler);
  
  

 

  
  })()
  