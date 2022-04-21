var spans = document.getElementsByTagName("span")

var xhr;
var checkUsername = false;
var checkUseremail = false;
var connected = false;


function submitForm(xhr)
{ 


    var formData = new FormData(document.getElementById("connect"));

    xhr.onreadystatechange  = function() 
    { 
        if(xhr.readyState  == 4)
        {
            if(xhr.status  == 200){
                document.getElementById("connect").hidden = true;
                para = document.createElement("h2");
                para.innerHTML = xhr.response;
                document.getElementsByTagName("body")[0].appendChild(para);
                console.log(xhr.response);
            }else
            {
                alert(xhr.status);
            }
        }
    }; 
 

    
   xhr.open("POST", "./htbin/login.py",  true); 
   xhr.send(formData); 

} 

document.getElementById("connect").addEventListener("submit", function(e) {    
    
    e.preventDefault()

    document.getElementById("username").dispatchEvent(new Event("blur"))
    document.getElementById("userpwd").dispatchEvent(new Event("blur"))

    if (!(checkUserpwd  && checkUsername))
    {
        console.log(checkUserpwd,checkUsername);
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
        spans[0].innerText = "Nom d'utilisateur trop court";
        spans[0].style.color = "red";
        checkUsername = false;
    }
    else
    {
        spans[0].innerText = "";
        checkUsername = true;
    }

});


document.getElementById("userpwd").addEventListener("blur", function() {

    const pwdRegex = RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$")

    if (!pwdRegex.test(userpwd.value) || userpwd.value.length < 8 )
    {
        spans[1].innerText = "Mot de passe invalide";
        spans[1].style.color = "red";
        checkUserpwd = false;
    }
    else
    {
        spans[1].innerText = ""
        checkUserpwd = true;
    }
});

