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
