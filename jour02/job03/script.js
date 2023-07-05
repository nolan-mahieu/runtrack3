document.addEventListener('DOMContentLoaded', function loaded() {
    let button = document.getElementById('button');

    let compteur = document.getElementById('compteur');
    console.log(compteur);

    var test = 0; 
    
    //j'enlève ce qu'il y a à l'intérieur de mon p       
    // compteur.parentNode.removeChild(compteur);
    // au final pas besoin sinon ça me l'enlève à chaque fois, hors ce n'est pas ce qui est demandé
    
    button.addEventListener('click', function(){
        test++;
        //je remplace l'intérieur par mes nouvelles données
        compteur.innerHTML = test;
        console.log(test);
    })
})