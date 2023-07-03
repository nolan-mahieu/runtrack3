function fizzbuzz()
{
    for(var i=1; i <= 151; i++)
    {
        // !point intéressant ::: si je fais console.log(i) j'aurai tous les nombres sinon si je fais console.log('i') j'aurai que 151

        if((i % 3 == 0) && (i % 5 == 0))
        {
            console.log('fizzbuzz');
        }
        else if(i % 3 == 0)
        {
            console.log('fizz');
        }
        else if(i % 5 == 0)
        {
            console.log('buzz');
        }
        else
        {
            console.log(i);
        }
    }
}

fizzbuzz();