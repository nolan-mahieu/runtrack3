<?php
class User
{
    // Attributs de la classe User
    private $id;
    public $prenom;
    public $nom;
    public $email;
    private $db;

    function __construct()
    {
        $DB_DSN = 'mysql:host=localhost;dbname=utilisateurs';
        $username = 'root';
        $password_db = 'Azerty01';

        try {
            $options =
                [
                    PDO::MYSQL_ATTR_INIT_COMMAND => 'SET NAMES utf8', // BE SURE TO WORK IN UTF8
                    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,//ERROR TYPE
                    PDO::ATTR_EMULATE_PREPARES => false // FOR NO EMULATE PREPARE (SQL INJECTION)
                ];
            $this->db = new PDO($DB_DSN, $username, $password_db, $options); // PDO CONNECT

        } catch (PDOException $e) { //CATCH ERROR IF NOT CONNECTED
            print "Erreur !: " . $e->getMessage() . "</br>";
            die();
        }
    }

    public function register($nom, $prenom, $email, $password)
    {
        $this->nom = $nom;
        $this->prenom = $prenom;
        $this->email = $email;
        $this->password = $password;

        $sql = "INSERT INTO utilisateurs(nom, prenom, email, password) VALUES(:nom, :prenom, :email, :password)";
        $sql_insert_exe = $this->db->prepare($sql);
        $sql_insert_exe->execute(array(
            'nom' => $this->nom,
            'prenom' => $this->prenom,
            'email' => $this->email,
            'password' => $this->password,
        ));

        if ($sql_insert_exe) {
            echo "Inscription réussie";
        } else {
            echo "L'inscription a échoué";
        }
    }

    public function connect($email, $password)
    {
        $this->email = $email;
        $this->password = $password;

        $sql_verify = "SELECT * FROM utilisateurs WHERE email = :email AND password = :password";
        $sql_verify_exe = $this->db->prepare($sql_verify);
        $sql_verify_exe->bindParam(':email', $email);
        $sql_verify_exe->bindParam(':password', $password);// Execute query on the database$sql_verify_exe->fetch(PDO::FETCH_ASSOC);
        $sql_verify_exe->execute();
        $results = $sql_verify_exe->fetch(PDO::FETCH_ASSOC); // fetch results in assoc array

        if ($results !== false) { // if results is not false so user exist
            $hashedPassword = $results["password"]; // stock hashed password stocked in the BDD in this variable
            if (password_verify($password, $hashedPassword)) { //verify matches
                echo "bon password";
                if ($sql_verify_exe->rowCount() != 0) {
                    session_start();
                    $_SESSION['email'] = $email;
                    echo "Connexion réussie" . "<br>";
                    header("Location: accueil.php");

                } else {
                    echo "La connexion a échoué";
                }
            }
        }
    }

    public function isConnected()
    {
        if ($_SESSION['email']) {
            echo "Vous êtes connecté en tant que {$_SESSION['email']}";
        } else {
            header("Location: connexion.php");
        }
    }

}