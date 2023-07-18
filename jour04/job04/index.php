<!DOCTYPE html>
<html>
<head>
    <title>Liste des utilisateurs</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js"></script>
    <script>
        $(document).ready(function() {
            // Fonction pour mettre à jour le tableau des utilisateurs
            function updateUsers() {
                $.ajax({
                    url: 'users.php',
                    type: 'GET',
                    dataType: 'json',
                    success: function(data) {
                        var table = $('#users-table');
                        table.empty();

                        // Ajouter les en-têtes du tableau
                        var headers = ['ID', 'Nom', 'Prénom', 'Email'];
                        var headerRow = $('<tr>');
                        for (var i = 0; i < headers.length; i++) {
                            headerRow.append($('<th>').text(headers[i]));
                        }
                        table.append(headerRow);

                        // Ajouter les utilisateurs au tableau
                        for (var i = 0; i < data.length; i++) {
                            var user = data[i];
                            var row = $('<tr>');
                            row.append($('<td>').text(user.id));
                            row.append($('<td>').text(user.nom));
                            row.append($('<td>').text(user.prenom));
                            row.append($('<td>').text(user.email));
                            table.append(row);
                        }
                    },
                    error: function(xhr, status, error) {
                        console.error('Erreur lors de la récupération des utilisateurs:', error);
                    }
                });
            }

            // Mettre à jour le tableau des utilisateurs lors du chargement initial de la page
            updateUsers();

            // Mettre à jour le tableau des utilisateurs lors du clic sur le bouton "update"
            $('#update-button').click(function() {
                updateUsers();
            });
        });
    </script>
</head>
<body>
    <h1>Liste des utilisateurs</h1>
    <button id="update-button">Update</button>
    <table id="users-table"></table>
</body>
</html>
