function sommenombrespremiers(var1)
{
    var nbdiviseurs = 0;

    for(var i=2; i<=var1; i++){
        
        if (i % var1==0) {
            nbdiviseurs++;  
        }

        console.log(nbdiviseurs);

        if(nbdiviseurs == 2)
        {
            console.log('ok')
        }  
    }
}

sommenombrespremiers(8); 