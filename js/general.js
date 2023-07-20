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
  
  
  const giớiThiệuDropdownMenu = document.getElementById("giới-thiệu-dropdown-menu");
  const tinTứcDropdownMenu = document.getElementById("tin-tức-dropdown-menu");
  const subnavLinks = document.querySelectorAll("#sub-navbar ul li a");
  let isGiớiThiệuDropdownVisible = false;
  let isTinTứcDropdownVisible = false;
  document.getElementById("giới-thiệu-dropdown").addEventListener("click", (event) => {
    event.preventDefault(); 
    if (isTinTứcDropdownVisible) {
      tinTứcDropdownMenu.style.display = "none";
      isTinTứcDropdownVisible = false;
    }
    if (isGiớiThiệuDropdownVisible) {
      giớiThiệuDropdownMenu.style.display = "none";
      isGiớiThiệuDropdownVisible = false;
    } else {
      giớiThiệuDropdownMenu.style.display = "block";
      isGiớiThiệuDropdownVisible = true;
    }
    subnavLinks.forEach(link => {
      link.classList.remove("active");
    });
    event.target.classList.add("active");
  });

  document.getElementById("tin-tức-dropdown").addEventListener("click", (event) => {
    event.preventDefault(); 
    if (isGiớiThiệuDropdownVisible) {
      giớiThiệuDropdownMenu.style.display = "none";
      isGiớiThiệuDropdownVisible = false;
    }
    if (isTinTứcDropdownVisible) {
      tinTứcDropdownMenu.style.display = "none";
      isTinTứcDropdownVisible = false;
    } else {
      tinTứcDropdownMenu.style.display = "block";
      isTinTứcDropdownVisible = true;
    }
    subnavLinks.forEach(link => {
      link.classList.remove("active");
    });
    event.target.classList.add("active");
  });


  
  })()
  