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

    $query = "SELECT `password` FROM `gymUsers` WHERE email=('".mysqli_real_escape_string($db, $email)."')";
    $result = mysqli_query($db, $query);
    $row = mysqli_fetch_assoc($result);
    $databasePassword = $row['password'];

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
        $query = "SELECT id FROM gymUsers WHERE email=('".mysqli_real_escape_string($db, $email)."')";
        $result = mysqli_query($db, $query);
        $row = mysqli_fetch_assoc($result);
        $userID = $row['id'];
        /*
        echo $salt;     -- Serve per testare
        */

        session_start();    /* L'ID serve? */
        if ($checkbox == "1")
        {
            setCookie("gymCookie", "", time() + 60*60*24*30, "/", "", "TRUE", "TRUE");  /* L'ID serve? */
        }
    }
}


?> 
