

// reponsive for education program
$(window).bind("resize load", function () {
  if ($(this).width() <= 1200) {
    $(".education-program h5").attr("data-bs-toggle", "collapse");
    $(".education-program .accordion-collapse").addClass("collapse");
  } else {
    $(".education-program h5").attr("data-bs-toggle", "");
    $(".education-program .accordion-collapse").removeClass("collapse");
  }
});
// reponsive for education program
