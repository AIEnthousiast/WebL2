var spans = document.getElementsByTagName("span")

var xhr;
var checkUsername = false;
var checkBirthdate = false;
var checkUserpwd = false;
var checkUseremail = false;
var isConnected = false;


function submitForm(xhr)
{ 


    var formData = new FormData(document.getElementById("register"));

    xhr.onreadystatechange  = function() 
    { 
        if(xhr.readyState  == 4)
        {
            if(xhr.status  == 200){
                document.getElementsByTagName("html")[0].innerHTML = xhr.response;
                console.log(xhr.response);
            }else
            {
                alert(xhr.status);
            }
        }
    }; 
 

    
   xhr.open("POST", "./htbin/register.py",  true); 
   xhr.send(formData); 

} 

document.getElementById("register").addEventListener("submit", function(e) {    
    
    e.preventDefault()

    document.getElementById("username").dispatchEvent(new Event("blur"))
    document.getElementById("birthdate").dispatchEvent(new Event("blur"))
    document.getElementById("useremail").dispatchEvent(new Event("blur"))
    document.getElementById("userpwd").dispatchEvent(new Event("blur"))

    if (!(checkUserpwd && checkBirthdate && checkUsername && checkUseremail))
    {
        console.log(checkUseremail,checkUserpwd,checkBirthdate,checkUsername);
    }
    else{

        try
        {
            xhr = new ActiveXObject("Microsoft.XMLHTTP"); // Essayer IE 
        }
        catch(e)   // Echec, utiliser l'objet standard 
        {
            xhr = new XMLHttpRequest();
        }

        submitForm(xhr);
    }
    

});


document.getElementById("username").addEventListener("blur",function() {
    let username = document.getElementById("username");

    if (username.value.length < 6)
    {
        spans[1].innerText = "Nom d'utilisateur trop court";
        spans[1].style.color = "red";
        checkUsername = false;
    }
    else
    {
        spans[1].innerText = "";
        checkUsername = true;
    }

});

document.getElementById("birthdate").addEventListener("blur",function() {
    let birthdate = document.getElementById("birthdate");

    let birthDateString = birthdate.value.split("/").reverse().join("-");

    if (isNaN(Date.parse(birthDateString)))
    {
        spans[0].innerHTML = "Format incorrect";
        spans[0].style.color = "red";
        checkBirthdate = false;
    }
    else
    {
        spans[0].innerText = "";
        checkBirthdate = true;
    }
});


document.getElementById("useremail").addEventListener("blur", function() {

    let useremail = document.getElementById("useremail");
    const emailRegex = RegExp("^[A-Za-z0-9]+.[A-Za-z0-9]+@[A-Za-z0-9]+.[A-Za-z0-9]+$");


    if (!(emailRegex.test(useremail.value)))
    {
        spans[3].innerText = "Email invalide";
        spans[3].style.color = "red";
        checkUseremail = false ;
    }
    else{
        spans[3].innerText = "";
        checkUseremail = true;
    }
});

document.getElementById("userpwd").addEventListener("blur", function() {

    const pwdRegex = RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$")

    if (!pwdRegex.test(userpwd.value) || userpwd.value.length < 8 )
    {
        spans[2].innerText = "Mot de passe invalide";
        spans[2].style.color = "red";
        checkUserpwd = false;
    }
    else
    {
        spans[2].innerText = ""
        checkUserpwd = true;
    }
});

