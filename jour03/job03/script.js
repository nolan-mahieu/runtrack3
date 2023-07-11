const containers = $('.img-container');
const cells = $('.cell');
const imgIndexes = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let count = 1;

for (let i of containers) {
    let img = document.createElement('img');
    img.setAttribute('src', `./img/${count}.jpg`);
    i.append(img);
    count++;
}

function shuffle(min, max) {
    containers[Math.floor(Math.random() * (max - min) + min)].innerHTML = '';
    for (let i of cells) {
        i.style.order = Math.floor(Math.random() * (max - min) + min);
    }
}

$('#start').click(() => {
    shuffle(0, 8);
});

$('.img-container').click((e) => {
    
})