// Fonctionnalite en js 

//______________________NAVBAR____________________________________
// Fonction pour ouvrir le menu de navigation
function openNav() {
    document.getElementById("mySidenav").style.width = "100%"; // Définit la largeur du menu sur 100% pour l'ouvrir complètement
}

// Fonction pour fermer le menu de navigation
function closeNav() {
    console.log("Fermeture du menu"); // Un message de débogage pour vérifier si cette fonction est appelée
    document.getElementById("mySidenav").style.width = "0"; // Réduit la largeur du menu à 0 pour le fermer
}




//_______________________CARROUSEL___________________________________
// Obtention de l'élément du slider
var slider = document.getElementById("slider");

// Obtention des éléments des diapositives
var slides = slider.querySelectorAll(".slide");

// Création d'un index pour commencer la diapositive
var indice = 0;

// Fonction pour afficher la diapositive suivante
function next() {
    // Masquons toutes les diapositives
    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Incrémentation de l'indice
    indice++;

    // Si nous atteignons la fin de la liste des diapositives, revenons au début
    if (indice >= slides.length) {
        indice = 0;
    }

    // Affichage de la diapositive actuelle
    slides[indice].style.display = "block";
}

// Affichage de la première diapositive
next();

// Définition d'un intervalle pour afficher la diapositive suivante toutes les 3 secondes
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








/*___________________REGEX_______*/


function validateForm() {
    // Récupérer les valeurs des champs
    const nom = document.getElementById('nom').value;
    const prenom = document.getElementById('prenom').value;
    const email = document.getElementById('email').value;

    // Regex pour validation
    const nameRegex = /^[A-Za-z\s]+$/; // Permet seulement les lettres et les espaces
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Format d'e-mail valide

    // Réinitialiser les messages d'erreur
    document.getElementById('nom-error').textContent = '';
    document.getElementById('prenom-error').textContent = '';
    document.getElementById('email-error').textContent = '';

    // Valider les champs
    let isValid = true;

    if (!nameRegex.test(nom)) {
        document.getElementById('nom-error').textContent = 'Nom invalide';
        isValid = false;
    }

    if (!nameRegex.test(prenom)) {
        document.getElementById('prenom-error').textContent = 'Prénom invalide';
        isValid = false;
    }

    if (!emailRegex.test(email)) {
        document.getElementById('email-error').textContent = 'E-mail invalide';
        isValid = false;
    }

    if (isValid) {
        alert("Félicitations !! Votre message a bien été envoyé.");
    }

    return isValid;
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