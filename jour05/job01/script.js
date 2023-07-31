const body = document.querySelector('body');
const div = document.createElement("div");
document.querySelector("div");
body.appendChild(div);


const button_inscription = document.querySelector('#inscription');

button_inscription.addEventListener("click", () => {
    fetch('inscription.php')
        .then((response) => {
            return response.text();

        })
        .then((content) => {
            div.innerHTML = content;
            let myForm = document.getElementById('register');
            const button_submit = document.querySelector('#envoie')

            button_submit.addEventListener('click', (ev) => {
                ev.preventDefault()
                fetch('inscription.php', {
                    method: "POST",
                    body: new FormData(myForm)
                })
                    .then(response => {
                        return response;

                    })
            })

        })
})

const button_connection = document.getElementById('connexion');
button_connection.addEventListener("click", () => {

    fetch('connexion.php')
        .then((response) => {
            return response.text();
        })
        .then((content) => {
            div.innerHTML = content;
            let connectForm = document.getElementById('connection');
            const button_connect = document.getElementById('connect_form_button')
            button_connect.addEventListener('click', (e) => {
                e.preventDefault()
                fetch('connexion.php', {
                    method: "POST",
                    body: new FormData(connectForm)

                })
                    .then((response_connect) =>{
                        return response_connect;
                    })
            })
        })
})