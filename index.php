<?php

    $error = "";

    if(isset($_POST['submit']))
    {
        $email = $_POST['email'];
        $password = $_POST['password'];
        $confirmPassword = $_POST['confirm-password'];
        /* $checkbox = $_POST['checkbox']; */
      
        /* Analisi dati ricevuti */
        if (!$_POST['email'])
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

        if ($password != $confirmPassword)
        {
            $error .= "Le password non sono uguali</br>"; /* Frase da migliorare */
        }

        /* Inizio sessione */
        if ($error == "")
        {

        }
    }
    
    include("login.html");
?> 
