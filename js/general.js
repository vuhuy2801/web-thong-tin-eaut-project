(function() {
    "use strict";
  
    // đang có bug
    // Thanh NAV Khi Cuộn
    var prevScrollpos = window.pageYOffset;
    window.addEventListener("scroll", function () {
      var currentScrollPos = window.pageYOffset;
      var header = document.getElementById("header");
      if (prevScrollpos > currentScrollPos) {
        header.style.transform = "translateY(0)";
        header.style.opacity = "1";
      } else {
        header.style.transform = "translateY(-100%)";
        header.style.opacity = "0";
      }
      prevScrollpos = currentScrollPos;
    });
  // End Thanh NAV Khi Cuộn
  
  // Moblie nav
    $('.mobile-nav-toggle').on('click', function(e) {
      $('#navbar').toggleClass('navbar-mobile');
      $(this).toggleClass('bi-list bi-x');
    });
  
  // để sau này thêm chưa biết thêm gì
  // var hr = document.querySelector(' ');
  // var navbarMobile = document.querySelector('.navbar-mobile');
  // navbarMobile.appendChild(hr);
  
    
    
  })()
  