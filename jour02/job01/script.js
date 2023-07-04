document.addEventListener('DOMContentLoaded', function loaded() {
    let button = document.getElementById('button');

    button.addEventListener('click', function citation() {
        let citation = document.getElementById('citation');
        let string = citation.querySelector('p');
        console.log(string);
    })
})