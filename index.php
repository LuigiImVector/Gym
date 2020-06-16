<?php

    $error = "";

    $db = mysqli_connect("localhost", "root", "", "gymDatabase");

    if(mysqli_connect_error())
    {
        die("Si è verificato un errore, riprovare più tardi.");
    }

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

        $query = "SELECT `email` FROM `gymDatabase` WHERE email='".mysqli_real_escape_string($db, $email)."'";
        $result = mysqli_query($db, $query);

        if (mysqli_num_rows($result)>0)
        {
            $error .= "L\'EMail inserita è già stata utilizzata, inserirne un\'altra.</br>";
        }

/* Validazione password */
        if (strlen($password) < 12)
        {
            $error .= "La password deve avere almeno 12 caratteri.";
        } else if (!preg_match("#[0-9]+#", $password))
        {
            $error .= "La password deve contenere almeno un numero.";
        } else if (!preg_match("#[A-Z]+#", $password))
        {
            $error .= "La password deve contenere almeno un carattere maiuscolo.";
        } else if (!preg_match("#[a-z]+#", $password))
        {
            $error .= "La password deve contenere almeno un carattere minuscolo.";
        } else if (!preg_match('/[\'^£$%&*()}{@#~?><>,|=_+¬-]/', $password))    /* Testare le alternative [\W] */
        {
            $error .= "La password deve contenere almeno un carattere speciale.";
        } else if (strlen($password) > 65535)
        {
            $error .= "La password deve avere meno di 65535 caratteri.";
        }

        /* Inizio sessione */
        if ($error == "")
        {
            $query = "INSERT INTO `gymDatabase` (`id`, `email`, `password`) VALUES (NULL, $email, $password)";
            mysqli_query($db, $query);
            if(mysqli_query($db, $query))
            {
                echo "Ciao";
            }
            
        }
    }
    
    include("login.html");
?> 


<!-- WikiHow: Come suicidarsi -->
