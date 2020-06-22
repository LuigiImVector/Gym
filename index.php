<?php

    $error = "";

    $db = mysqli_connect("localhost", "root", "", "gymDatabase");

    if(mysqli_connect_error())
    {
        die("Si è verificato un errore, riprovare più tardi.");
    }

    include("register.php");
    
    include("login.html");
?>

<!-- <script type="text/javascript">
    var javaScriptError = '<?php echo $error; ?>';

document.getElementById("submit").onclick = function ()
{
    if (javaScriptError=="")
    {
        document.getElementById("error-message").style.display = "flex";
    }
}

</script> -->

<!-- WikiHow: Come suicidarsi -->
