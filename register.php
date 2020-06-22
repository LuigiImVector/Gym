<?php
if(isset($_POST['submit']))
{   
    $email = $_POST['email'];
    $password = $_POST['password'];
    $confirmPassword = $_POST['confirm-password'];
    $checkbox = $_POST['checkbox'];
  
/* Analisi dati ricevuti */
    if (!$_POST['email'])
    {
        $error .= "Inserire una EMail.</br>";
    }

    if ($password == "")
    {
        $error .= "Inserire una password.</br>";
    }

    if ($confirmPassword == "")
    {
        $error .= "Inserire la conferma della password.</br>"; /* Frase da migliorare */
    }

    if ($password != $confirmPassword)
    {
        $error .= "Le password non sono uguali.</br>";
    }

    $query = "SELECT `email` FROM `gymUsers` WHERE email='".mysqli_real_escape_string($db, $email)."'";
    $result = mysqli_query($db, $query);

    if (mysqli_num_rows($result)>0)
    {
        $error .= "L'EMail inserita è già stata utilizzata, inserirne un'altra.</br>";
    }

/* Validazione password */
    if (strlen($password) < 12)
    {
        $error .= "La password deve avere almeno 12 caratteri.</br>";
    } else if (!preg_match("#[0-9]+#", $password))
    {
        $error .= "La password deve contenere almeno un numero.</br>";
    } else if (!preg_match("#[A-Z]+#", $password))
    {
        $error .= "La password deve contenere almeno un carattere maiuscolo.</br>";
    } else if (!preg_match("#[a-z]+#", $password))
    {
        $error .= "La password deve contenere almeno un carattere minuscolo.</br>";
    } else if (!preg_match('#[\W]+#', $password))
    {
        $error .= "La password deve contenere almeno un carattere speciale.</br>";
    } else if (strlen($password) > 65535)
    {
        $error .= "La password deve avere meno di 65535 caratteri.</br>";
    }

/* Inizio sessione */
    if ($error == "")
    {
        $query = "INSERT INTO gymUsers (email, password) VALUES ('".mysqli_real_escape_string($db, $email)."', '')";
        mysqli_query($db, $query);
        
        $query = "SELECT id FROM gymUsers WHERE email=('$email')";
        $result = mysqli_query($db, $query);
        $row = mysqli_fetch_assoc($result);
        $salt = $row['id'];
        /*
        echo $salt;     -- Serve per testare
        */

        $hashedPassword = hash('sha256', $salt . $password . hash('sha256', $salt));
        $query = "UPDATE gymUsers SET password='".mysqli_real_escape_string($db, $hashedPassword)."' WHERE email='".mysqli_real_escape_string($db, $email)."'";
        mysqli_query($db, $query);

        session_start();    /* L'ID serve? */
        if ($checkbox == "1")
        {
            setCookie("gymCookie", "", time() + 60*60*24*30, "/", "", "TRUE", "TRUE");  /* L'ID serve? */
        }
    }
}


?> 
