
document.addEventListener("DOMContentLoaded", function () {
    var pageItems = document.querySelectorAll(".page-item");
    for (var i = 0; i < pageItems.length; i++) {
      pageItems[i].addEventListener("click", function () {
        for (var j = 0; j < pageItems.length; j++) {
          pageItems[j].classList.remove("active");
        }
        this.classList.add("active");
      });
    }
  });
  
