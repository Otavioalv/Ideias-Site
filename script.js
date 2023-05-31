function show(id) {
    var divImagens = document.getElementById(id);
    divImagens.classList.toggle('d-none');
}

function like(className) {
    var heartIcons = document.querySelectorAll(className);
  
    if (heartIcons[0].classList.contains('bi-heart')) {
      heartIcons.forEach(function (icon) {
        icon.classList.remove('bi-heart');
        icon.classList.add('bi-heart-fill');
      });
    } else {
      heartIcons.forEach(function (icon) {
        icon.classList.remove('bi-heart-fill');
        icon.classList.add('bi-heart');
      });
    }
  }