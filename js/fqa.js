function toggleActive(element) {
    const items = document.querySelectorAll('.list-group-item');
    items.forEach(item => item.classList.remove('active'));
    element.classList.add('active');
  }
  

  