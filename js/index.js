const dropdownLink = document.querySelector('.dropdown-link');
const dropdownText = document.querySelector('.dropdown-text');
const educationColumns = document.querySelectorAll('.education-column');
const overlay = document.querySelector('.overlay');

dropdownLink.addEventListener('click', function() {
  educationColumns.forEach(function(column) {
    column.classList.toggle('expanded');
  });
  
  dropdownText.textContent = educationColumns[0].classList.contains('expanded') ? 'Thu gọn' : 'Tất cả nghành học';
  dropdownLink.querySelector('i').classList.toggle('bi-chevron-down');
  dropdownLink.querySelector('i').classList.toggle('bi-chevron-up');
  overlay.classList.toggle('active');

  if (!educationColumns[0].classList.contains('expanded')) {
    const allCourses = document.querySelectorAll('#educationList li');
    allCourses.forEach(function(course, index) {
      setTimeout(function() {
        course.style.transform = 'translateY(0)';
        course.style.opacity = '1';
      }, index * 100);
    });
  }
  
});

