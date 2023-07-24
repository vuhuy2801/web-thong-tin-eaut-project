

  // nhận dạng text không dấu
  function removeDiacritics(text) {
    return text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  }

  // tìm kiếm câu hỏi trong accordion-button
  $(document).ready(function () {
    $("#searchInput").on("input", function () {
      let searchValue = removeDiacritics($(this).val().toLowerCase());
      $(".accordion-item").each(function () {
        let questionText = removeDiacritics($(this).find(".accordion-button").text().toLowerCase());
        if (questionText.includes(searchValue)) {
          $(this).show();
        } else {
          $(this).hide();
        }
      });
    });
  });
  

