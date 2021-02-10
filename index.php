<?php

    $error = "";

    $db = mysqli_connect("localhost", "root", "", "gymDatabase");

    if(mysqli_connect_error())
    {
        die("Si è verificato un errore, riprovare più tardi.");
    }

    print("Ciao");

    include("index.html");
    
    //include("login.php");
    /* include("register.php"); */
?>

<!-- WikiHow: Come suicidarsi -->
