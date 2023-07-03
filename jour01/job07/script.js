function getValue()
{
    var input = document.getElementById("date").value;
    // console.log(input)

    function jourtravaille(date)
    {
        // console.table(date);

        //permet de traduire la datatime en français et en string, dans les options je peux rajouter year: 'numeric' si je voulais aussi 
            var options = { month: 'long', day: 'numeric', weekday: 'long' };
            var dateFR = new Date(date);
            var stringFR = dateFR.toLocaleDateString("fr-FR", options);
            // console.log(stringFR);


        //je peux split en mot mais aussi lettres :
            //const str = 'The quick brown fox jumps over the lazy dog.';

                // const words = str.split(' ');
                // console.log(words[3]);
                // expected output: "fox"

                // const chars = str.split('');
                // console.log(chars[8]);
                // expected output: "k"

            //j'utilise les weekday pour savoir si week-end

            const words = stringFR.split(' ');
            var jourString = words[0];
            var jourInt = words[1];
            var mois = words[2];

            var jourMois = jourInt + " " + mois;
            // console.log(jourMois);

            var joursFeries = ['1 janvier', '13 avril', '1 mai', '8 mai', '21 mai', '1 juin', '14 juillet', '15 août', '1 novembre', '11 novembre', '25 décembre'];
            
            if((jourString == 'samedi') || (jourString == 'dimanche'))
            {
                console.log('Le' + " " + jourInt + " " + mois + " " + 'est un week-end');
            }
            else if (joursFeries.includes(jourMois))
            {
                console.log('Le' + " " + jourInt + " " + mois + " " + 'est un jour férié.');
            }
            else 
            {
                console.log('Le' + " " + jourInt + " " + mois + " " + 'est un jour de travail.');
            }
    }
    
    jourtravaille(input);
}