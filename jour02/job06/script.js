// Code konami : Haut, Haut, Bas, Bas, Gauche, Droite, Gauche, Droite, B, A
var konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
var konamiCodePosition = 0;

document.addEventListener('keydown', function(event) {
  // Vérifier si la touche pressée correspond au code konami
  if (event.keyCode === konamiCode[konamiCodePosition]) {
    konamiCodePosition++;
    // Si le code konami est entièrement saisi
    if (konamiCodePosition === konamiCode.length) {
      // Ajouter la classe CSS "la-plateforme" au body
      document.body.classList.add('la-plateforme');
      konamiCodePosition = 0; // Réinitialiser la position du code konami
    }
  } else {
    konamiCodePosition = 0; // Réinitialiser la position si la touche ne correspond pas
  }
});