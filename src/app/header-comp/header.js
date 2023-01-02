// Récupérer l'élément d'en-tête
const header = document.querySelector('header');

// Récupérer la distance depuis le haut de la page jusqu'au haut de l'élément d'en-tête
const headerTop = header.offsetTop;

// Ajouter un écouteur d'événement de défilement à la fenêtre
window.addEventListener('scroll', function() {
  // Vérifier si la position de défilement de la fenêtre est supérieure à la distance depuis le haut de la page jusqu'au haut de l'élément d'en-tête
  if (window.scrollY > headerTop) {
    // Si c'est le cas, ajouter la classe "fixed" à l'élément d'en-tête pour le fixer en haut de la page
    header.classList.add('fixed');
 
  } }
)