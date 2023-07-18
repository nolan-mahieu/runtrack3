<?php
// Connexion à la base de données
$servername = "localhost";
$username = "root";
$password = "Azerty01";
$dbname = "utilisateurs";

$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Récupération des utilisateurs depuis la base de données²
$sql = "SELECT * FROM utilisateurs";
$result = $conn->query($sql);

// Création d'un tableau associatif contenant les utilisateurs
$utilisateurs = array();
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $utilisateurs[] = $row;
    }
}

// Fermeture de la connexion à la base de données
$conn->close();

// Converstion du tableau en format JSON
$json = json_encode($utilisateurs);

// Affichage du JSON
header('Content-Type: application/json');
echo $json;
?>