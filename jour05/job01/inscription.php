<?php
include "src/User.php";
?>

<html lang="fr">
<body>
<form id="register" method="post">
    <label for="nom">Nom</label>
    <input id="nom" type="text" name="nom">
    <label for="prenom">Prénom</label>
    <input id="prenom" type="text" name="prenom">
    <label for="email">Email</label>
    <input id="email" type="email" name="email">
    <label for="password">Password</label>
    <input id="password" type="password" name="password">
    <input type="submit" id="envoie" name="submit" value="S'inscrire">
</form>
</body>
</html>

<?php

if (isset($_POST['nom'])) {
    $nom = htmlspecialchars($_POST['nom']);
    $prenom = htmlspecialchars($_POST['prenom']);
    $email = htmlspecialchars($_POST['email']);
    $password = password_hash($_POST['password'], PASSWORD_BCRYPT);

    $new_user = new User();
    $new_user->register($prenom, $nom, $email, $password);
}
?>

