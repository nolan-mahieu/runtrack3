document.addEventListener('DOMContentLoaded', function loaded() {
    let textarea = document.getElementById('keylogger');

    let test = window.addEventListener('keydown', function (event){

        if(event)
        {
            let key = event.key;
            textarea.innerHTML = key;
        }
    })
})