document.addEventListener('DOMContentLoaded', function loaded() {

    // alert('hey');

   window.addEventListener('load', function(){
        var element = document.getElementById("myprogressBar");   
        var width = 1;
        var identity = setInterval(scene, 40);
        var footer = document.querySelector('footer');
        function scene() {
          if (width >= 100) {
            clearInterval(identity);
          } else {
            width++; 
            element.style.width = width + '%'; 
            console.log(width);

            if(width == 10)
            {
                footer.style.backgroundColor = 'red'; 
            }
            else if (width == 30) 
            {
                footer.style.backgroundColor = 'yellow';
            }
            else if (width == 50) 
            {
                footer.style.backgroundColor = 'white';
            }
            else if (width == 70) 
            {
                footer.style.backgroundColor = 'magenta';
            }
            else if (width == 90) 
            {
                footer.style.backgroundColor = 'pink';
            }        
          }
        }
   })
 

      
})

