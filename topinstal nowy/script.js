function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
      x.className += " responsive";
  } else {
      x.className = "topnav";
  }
}

// Dodajmy kod, który będzie zamykał menu po kliknięciu na linki w menu
var menuLinks = document.querySelectorAll(".topnav .links a");
for (var i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener("click", function() {
        var x = document.getElementById("myTopnav");
        x.className = "topnav";
    });
}


const galleryImages = document.querySelectorAll('.gallery-image');
const modal = document.querySelector('.modal');
const modalImage = document.getElementById('modal-image');
const closeModal = document.querySelector('.close');

galleryImages.forEach((image) => {
    image.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImage.src = image.src;
    });
});

closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
});

modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});