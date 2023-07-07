// Récupérer la référence au bouton de mélange
var melangerBtn = document.getElementById("melangerBtn");

// Récupérer la référence aux images de l'arc-en-ciel
var arcEnCielImages = document.querySelectorAll(".arc-en-ciel-image");

// Récupérer la référence au message de résultat
var message = document.getElementById("message");

// Variables pour stocker les informations sur le déplacement
var dragSrcElement = null;

// Fonction pour mélanger les images
function melangerImages() {
    var parent = arcEnCielImages[0].parentNode;
    for (var i = parent.children.length; i >= 0; i--) {
        parent.appendChild(parent.children[Math.random() * i | 0]);
    }
    message.innerText = "";
}

// Fonction pour vérifier si les images sont dans le bon ordre
function verifierOrdre() {
    var ordreCorrect = true;
    for (var i = 0; i < arcEnCielImages.length; i++) {
        if (arcEnCielImages[i].getAttribute("src") !== "image" + (i + 1) + ".png") {
            ordreCorrect = false;
            break;
        }
    }
    if (ordreCorrect) {
        message.innerText = "Vous avez gagné";
        message.style.color = "green";
    } else {
        message.innerText = "Vous avez perdu";
        message.style.color = "red";
    }
}

// Fonction pour gérer le début du déplacement
function handleDragStart(event) {
    dragSrcElement = this;
    event.dataTransfer.effectAllowed = "move";
    event.dataTransfer.setData("text/html", this.outerHTML);
    this.classList.add("dragging");
}

// Fonction pour gérer le survol lors du déplacement
function handleDragOver(event) {
    if (event.preventDefault) {
        event.preventDefault();
    }
    this.classList.add("over");
    event.dataTransfer.dropEffect = "move";
    return false;
}

// Fonction pour gérer le lâcher lors du déplacement
function handleDrop(event) {
    if (event.stopPropagation) {
        event.stopPropagation();
    }
    if (dragSrcElement !== this) {
        this.parentNode.removeChild(dragSrcElement);
        var dropHTML = event.dataTransfer.getData("text/html");
        this.insertAdjacentHTML("beforebegin", dropHTML);
        var dropElement = this.previousSibling;
        addDragHandlers(dropElement);
    }
    this.classList.remove("over");
    return false;
}

// Fonction pour ajouter les gestionnaires d'événement de déplacement
function addDragHandlers(element) {
    element.addEventListener("dragstart", handleDragStart, false);
    element.addEventListener("dragover", handleDragOver, false);
    element.addEventListener("drop", handleDrop, false);
}

// Ajouter un gestionnaire d'événement pour le bouton de mélange
melangerBtn.addEventListener("click", melangerImages);

// Ajouter des gestionnaires d'événement pour les images pour permettre le déplacement
arcEnCielImages.forEach(function(image) {
    addDragHandlers(image);
});

// Ajouter un gestionnaire d'événement pour vérifier l'ordre une fois les images déplacées
arcEnCielImages[0].parentNode.addEventListener("drop", verifierOrdre, false);