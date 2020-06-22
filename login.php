<?php
if(isset($_POST['submit']))
{   
    $email = $_POST['email'];
    $password = $_POST['password'];
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

    $query = "SELECT `password` FROM `gymUsers` WHERE email='".mysqli_real_escape_string($db, $email)."'";
    $result = mysqli_query($db, $query);
    $row = mysqli_fetch_assoc($result);
    $databasePassword = $row['id'];

    if (mysqli_num_rows($result)==0)
    {
        $error .= "L'email inserita non è corretta.</br>";
    } else if(hash('sha256', $salt . $password . hash('sha256', $salt)) != $databasePassword)
    {
        $error .= "La password non è corretta.</br>";
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
