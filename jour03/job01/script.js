// Récupérer le bouton et le texte par leur ID
const afficherBtn = document.getElementById('afficherBtn');
const texte = document.getElementById('texte');
const cacherBtn = document.getElementById('cacherBtn');

// Ajouter un écouteur d'événements pour afficher le texte
afficherBtn.addEventListener('click', function() {
  texte.style.display = 'block';
});

// Ajouter un écouteur d'événements pour cacher le texte
cacherBtn.addEventListener('click', function() {
  texte.style.display = 'none';
});
