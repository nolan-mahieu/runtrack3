<?php
include "src/User.php";
?>


<html lang="fr">
<body>
<form id="connection" method="post">
    <label for="email">Email</label>
    <input id="email" type="text" name="email">
    <label for="password">Password</label>
    <input id="password" type="password" name="password">
    <input type="submit" id="connect_form_button" name="submit" value="Se connecter">
</form>
</body>
</html>

<?php
if (isset($_POST['submit'])) {
    $email = $_POST['email'];
    $password = $_POST['password'];

    $connection = new User();
    $connection->connect($email, $password);
}



