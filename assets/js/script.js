function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }

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

/
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  for (i = 0; i < x.length; i++) {
      if (c === "" || c === "all") {
          x[i].style.display = "block";
      } else if (x[i].classList.contains(c)) {
          x[i].style.display = "block";
      } else {
          x[i].style.display = "none";
      }
  }
}


var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function () {
      var current = document.getElementsByClassName("active");
      current[0].className = current[0].className.replace(" active", "");
      this.className += " active";
  });
}









/*___________________REGEX_______*/


// Fonction de validation du formulaire
function validateForm() {
  // Récupérer les valeurs des champs
  var firstName = document.getElementById("fname").value;
  var lastName = document.getElementsByName("lname")[0].value;
  var email = document.getElementById("email").value;
  var subject = document.getElementsByName("fname")[1].value;
  var message = document.getElementById("message").value;

  // Regex pour les critères de validation
  var nameRegex = /^[A-Z -]+$/;
  var emailRegex = /^[a-z0-9@]+$/i;
  var subjectRegex = /^[A-Z0-9 +-]+$/i;

  // Vérifier les conditions de validation
  if (firstName === "" || !nameRegex.test(firstName)) {
    document.getElementById("error").innerHTML = "Le prénom est invalide";
    return false;
  }

  if (!nameRegex.test(lastName)) {
    document.getElementById("error").innerHTML = "Le nom est invalide";
    return false;
  }

  if (email === "" || !emailRegex.test(email)) {
    document.getElementById("error").innerHTML = "L'email est invalide";
    return false;
  }

  if (!subjectRegex.test(subject)) {
    document.getElementById("error").innerHTML = "Le sujet est invalide";
    return false;
  }

  if (message === "" || !subjectRegex.test(message)) {
    document.getElementById("error").innerHTML = "Le message est invalide";
    return false;
  }

  // Si toutes les conditions sont respectées, le formulaire peut être soumis
  return true;
}

// Écouter l'événement de soumission du formulaire
document.getElementById("myForm").addEventListener("submit", function () {
  // Valider le formulaire
  if (!validateForm()) {
    // Empêcher le comportement par défaut du formulaire
    return false;
  }
});





/*let myForm = document.getElementById('myForm');


myForm.addEventListener('submit', function(e) {
let myInput = document.getElementById('fname');
let myRegex = /^[a-zA-Z-\s]+$/;

if (myInput.value.trim() === "") {
   let myError = document.getElementById('error');
    myError.innerHTML = "Le champs prénom est requis.";
   myError.style.color ='red';
    e.preventDefault();
}

else if(myRegex.test(myInput.value) === false ) {
  let myError = document.getElementById('error');
  myError.innerHTML = " Le prénom doit comporter des lettres des tirest uniquements.";
 myError.style.color ='red';
 e.preventDefault();
}

});*/


/*________page prduits______*/
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
  var slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) { slideIndex = 1; }
  if (n < 1) { slideIndex = slides.length; }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}