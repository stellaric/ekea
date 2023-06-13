// Fonctionnalite en js 

//______________________NAVBAR____________________________________
function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0%";
}



//_______________________CARROUSEL___________________________________
//page accueil & service (carrousel)
// obtiens  l'element de  slider
var slider = document.getElementById("slider");

// obtiens  les element de la diapositives
var slides = slider.querySelectorAll(".slide");

// Creation d'un index pour commencer le diapositive
var indice = 0;

// fonction pour montrer le second diapositives 
function next() {
  // Ocultamos todas las diapositivas
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  // Incrementamos el índice
  indice++;

  // Si llegamos al final de la lista de diapositivas, volvemos al principio
  if (indice >= slides.length) {
    indice = 0;
  }

  // Mostramos la diapositiva actual
  slides[indice].style.display = "block";
}

// Mostramos la primera diapositiva
next();

// Establecemos un intervalo para mostrar la siguiente diapositiva cada 3 segundos
setInterval(next, 3000);




//-----------------DROPDOWN-------------------------------------

/*Quand on clique sur le boutton le toggle cahcé apparait*/
function myDropdown() {
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

filterSelection("all");

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
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
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
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}



//-----------------MODAL INSPIRATION-------------------------------------


function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("myImg");
  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}
//-----------------MODAL produits-------------------------------------
function openWindow() {
  document.getElementById("mywind").style.display = "block";
}

function closeWindow() {
  document.getElementById("mywind").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("myProd");
  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

/**_______________tabs_____________ */
function openTab(event, tabId) {
  // Cacher tous les contenus des tabs
  var tabContents = document.getElementsByClassName('tab-content');
  for (var i = 0; i < tabContents.length; i++) {
    tabContents[i].style.display = 'none';
  }

  // Afficher le contenu du tab sélectionné
  var selectedTab = document.getElementById(tabId);
  selectedTab.style.display = 'block';

  // Modifier l'apparence des onglets
  var tabs = document.getElementsByClassName('tab');
  for (var i = 0; i < tabs.length; i++) {
    tabs[i].classList.remove('active');
  }
  event.target.classList.add('active');
}

// Ouvrir la première tab par défaut
document.getElementById('tab1').style.display = 'block';
document.getElementsByClassName('tab')[0].classList.add('active');
