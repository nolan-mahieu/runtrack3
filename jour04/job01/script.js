document.addEventListener('DOMContentLoaded', function loaded() {
    let button = document.querySelector('button');

    button.addEventListener('click', function(){
        fetch('expression.txt')
        //attention j'étais obligée de mettre le string text d'abord sinon j'avais une type error undefined
        //j'étais obligée de traduire l'objet en texte pour le rajouter, le nouveau turned texte remplace le string. donc string devient une string au lieu d'un objet c'est pour ceci que je peux faire = string dans la ligne 9
        .then((string) => string.text())
        .then((string) => document.querySelector('p').innerHTML = string)
        .then((string) => console.log(string))
        .catch((error) => console.log(error))
    })
})