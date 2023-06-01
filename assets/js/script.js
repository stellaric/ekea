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