(function() {
    "use strict";
  
    // đang có bug
    // Thanh NAV Khi Cuộn
    // var prevScrollpos = window.pageYOffset;
    // window.addEventListener("scroll", function () {
    //   var currentScrollPos = window.pageYOffset;
    //   var header = document.getElementById("header");
    //   if (prevScrollpos > currentScrollPos) {
    //     header.style.transform = "translateY(0)";
    //     header.style.opacity = "1";
    //   } else {
    //     header.style.transform = "translateY(-100%)";
    //     header.style.opacity = "0";
    //   }
    //   prevScrollpos = currentScrollPos;
    // });
  // End Thanh NAV Khi Cuộn
  

  
  

  // Moblie nav
  $('.mobile-nav-toggle').on('click', function(e) {
    $('#navbar').toggleClass('navbar-mobile');
    $(this).toggleClass('bi-list bi-x');
    $('#sub-navbar').toggleClass('active');
  });
  
  

  // để sau này thêm chưa biết thêm gì
  // var hr = document.querySelector(' ');
  // var navbarMobile = document.querySelector('.navbar-mobile');
  // navbarMobile.appendChild(hr);
  
  // bỏ thanh ngang khi lướt ngang

  
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
  