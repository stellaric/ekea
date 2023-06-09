function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}




//--------------Carousel--------------

// Exécute le code une fois que la page HTML est chargée
$(document).ready(function() {
  // Sélectionne tous les éléments HTML qui ont la classe "owl-carousel" et initialise le plugin Owl Carousel
  $(".owl-carousel").owlCarousel({
    // Le carrousel ne montrera qu'un élément à la fois
    items: 1,
    // Le carrousel bouclera lorsqu'il arrive au dernier élément
    loop: true,
    // Le carrousel défilera automatiquement.
    autoplay: true,
    // Définit la vitesse à laquelle les images défilent
    autoplaySpeed: 1000,
    // Définit la vitesse de transition entre les images
    smartSpeed: 500,
    // Arrête le défilement lorsque l'utilisateur passe sa souris sur un élément
    autoplayHoverPause: true,
  });
});

//-----------------DROPDOWN-------------------------------------

/*Quand on clique sur le boutton le toggle cahcé apparait*/
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

//fermé le dropdown si on clique en dehors
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

/*--------------filtre---------*/

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}



// modal crée par stella 

var img_modal
function Modal(img_modal) {
  document.getElementById(img_modal).style.display = 'block'
}

//carrousel

const carousel = document.querySelector('.contener_slideshow');
const slideWidth = carousel.clientWidth;
const slideCount = carousel.children.length;

carousel.style.width = `${slideWidth * slideCount}px`;

// tabs
function selectTab(tabIndex) {
  //Hide All Tabs
  document.getElementById('tab1contenu').style.display = "none";
  document.getElementById('tab2contenu').style.display = "none";

  //Show the Selected Tab
  document.getElementById('tab' + tabIndex + 'contenu').style.display = "block";

}