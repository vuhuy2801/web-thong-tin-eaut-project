

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
  


  function toggleAccordion(targetID, targetItem) {
    const isActive = targetItem.classList.contains('active');
    const allItems = document.querySelectorAll('.list-group-item');
  
    // Loops through all items and removes 'active' class
    allItems.forEach(item => item.classList.remove('active'));
  
    // If the target item is not already active, add the 'active' class to it
    if (!isActive) {
      targetItem.classList.add('active');
    }
  
    // Collapse or expand the target accordion element
    $("#" + targetID).collapse("toggle");
  }
  