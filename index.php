<?php

    $error = "";

    include("login.html");    

    if(isset($_POST['submit']))
    {
        $email = $_POST['email'];
        $password = $_POST['password'];
        $confirmPassword = $_POST['confirm-password'];

        if ($email == "")
        {
            $error .= "Inserire una EMail</br>";
        }

        if ($password == "")
        {
            $error .= "Inserire una password</br>";
        }

        if ($confirmPassword == "")
        {
            $error .= "Inserire la conferma della password</br>"; /* Fa schifo come frase -- Da cambiare */
        }
    }
?> 
