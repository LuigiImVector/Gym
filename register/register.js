function Validazione()
{
    var email = document.getElementById("register-email").value;
    var password = document.getElementById("register-password").value;
    var confirmPassword = document.getElementById("register-confirm-password").value;
    var checkbox = document.getElementById("register-checkbox").value;

    var error="";

    if(email == "")
    {
        error += "Devi inserire un'Email.</br>";
    }

    if(password == "")
    {
        error += "Devi inserire una password.</br>";
    } else if (password.length < 12)
    {
        error += "La password deve avere almeno 12 caratteri.</br>";
    } else if (!password.value.match(/[0-9]/g))
    {
        error += "La password deve contenere almeno un numero.</br>";
    } else if (!password.value.match(/[A-Z]/g))
    {
        error += "La password deve contenere almeno un carattere maiuscolo.</br>";
    } else if (!password.value.match(/[a-z]/g))
    {
        error  += "La password deve contenere almeno un carattere minuscolo.</br>";
    } else if (!password.value.match(/[\W]/g))
    {
        error  += "La password deve contenere almeno un carattere speciale.</br>";
    } else if (password.length > 65535)
    {
        error += "La password deve avere meno di 65535 caratteri.</br>";
    }
    if (password != confirmPassword)
    {
        error += "Le password non sono uguali.</br>";
    } else if (password != confirmPassword)
    {
        error += "Le password non sono uguali.</br>";
    }

    if(error != "")
    {
        document.getElementById("error-message").style.display="flex";
        document.getElementById("error-message").innerHTML = error;
        return false;
    } else {
        document.getElementById("error-message").style.display="none";
        return true;
    }
}

/* Appena la pagina viene caricata */

/* MarginLeft automatico: repeat-checkbox */
    /* Valore: timer-form */
    element = document.getElementById("register-form");
    tempValue = window.getComputedStyle(element).getPropertyValue("width");
    timerFormWidth = tempValue.replace(/[^0-9\.]+/g, "");

    /* Valore: time */
    element = document.getElementById("register-email");
    tempValue = window.getComputedStyle(element).getPropertyValue("width");
    inputWidth = tempValue.replace(/[^0-9\.]+/g, "");
    inputWidth = parseFloat(inputWidth) + 18;     /* (1 padding left + 8 border left) * 2 (right) */

    /* Totale margine checkbox + Margine automatico */
    marginCheckbox = (timerFormWidth-inputWidth)/2;
    document.getElementById("register-checkbox").style.marginLeft = marginCheckbox + "px";


    
/* Appena viene ridimensionata la pagina */
window.addEventListener('resize', function(event){

    /* Valore: timer-form */
    element = document.getElementById("register-form");
    tempValue = window.getComputedStyle(element).getPropertyValue("width");
    timerFormWidth = tempValue.replace(/[^0-9\.]+/g, "");

    /* Valore: time */
    element = document.getElementById("register-email");
    tempValue = window.getComputedStyle(element).getPropertyValue("width");
    inputWidth = tempValue.replace(/[^0-9\.]+/g, "");
    inputWidth = parseFloat(inputWidth) + 18;     /* (1 padding left + 8 border left) * 2 (right) */

    /* Totale margine checkbox + Margine automatico*/
    marginCheckbox = (timerFormWidth-inputWidth)/2;
    document.getElementById("register-checkbox").style.marginLeft = marginCheckbox + "px";    
});

