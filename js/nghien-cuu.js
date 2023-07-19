
// thay đổi dữ liệu từng năm
var yearButtons = document.querySelectorAll('.year-button');
var yearTables = document.querySelectorAll('.year-table');
for (var i = 1; i < yearTables.length; i++) {
  yearTables[i].style.display = 'none';
}
yearButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    var selectedYear = this.getAttribute('data-year');

    yearTables.forEach(function(table) {
      table.style.display = 'none';
    });
    document.getElementById('table-' + selectedYear).style.display = 'block';
  });
});

// active 
var yearButtons = document.querySelectorAll('.year-button');
  yearButtons.forEach(function(button) {
    button.addEventListener('click', function() {
      var selectedYear = this.getAttribute('data-year');
      yearButtons.forEach(function(btn) {
        btn.classList.remove('active');
      });
      this.classList.add('active');
    });
  });


  var pageLinks = document.querySelectorAll('.pagination .page-link');
  pageLinks.forEach(function(link) {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      pageLinks.forEach(function(pageLink) {
        pageLink.parentElement.classList.remove('active');
      });
      this.parentElement.classList.add('active');
    });
  });



  // xử lý bảng moblie
  var yearTables = document.querySelectorAll('.year-table');

  // Xử lý sự kiện khi cửa sổ trình duyệt thay đổi kích thước
  window.addEventListener('resize', handleTableOverflow);

  // Xử lý tràn bảng dữ liệu
  function handleTableOverflow() {
    yearTables.forEach(function(table) {
      var tableContainer = table.parentNode;
      var tableWidth = table.offsetWidth;
      var containerWidth = tableContainer.offsetWidth;

      if (tableWidth > containerWidth) {
        tableContainer.classList.add('overflow');
      } else {
        tableContainer.classList.remove('overflow');
      }
    });
  }

  // Gọi hàm xử lý ban đầu
  handleTableOverflow();