var javaScriptError = '<?php echo $error; ?>';

document.getElementById("submit").onclick = function ()
{
    if (javaScriptError=="")
    {
        document.getElementById("error-message").style.display = "flex";
    }
}
