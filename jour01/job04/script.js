function getValue() {
    // Sélectionner l'élément input et récupérer sa valeur
    var input = document.getElementById("year").value;
    // console.log(input);

    if(input % 4 == 0){
        alert('true');
    }else{
        alert('false');
    }
}