document.addEventListener('DOMContentLoaded', function loaded() {
    let button = document.getElementById('button');

    let article = document.querySelector('article');
    //je lui rajoute du style pour qu'elle ne se voit plus
    article.style.display = 'none';

    button.addEventListener('click', function(){
        if(article.style.display === 'none')
        {
            article.style.display = 'block';
        }
        else
        {
            article.style.display = 'none';
        }
    })
})