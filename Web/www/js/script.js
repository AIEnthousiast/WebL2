document.getElementById("register").addEventListener("submit", function(e) {
    
    let lastname = document.getElementById("lastname");
    let firstname = document.getElementById("firstname");
    let birthdate = document.getElementById("birthdate");
    let username = document.getElementById("username");
    let userpwd = document.getElementById("userpwd");
    let useremail = document.getElementById("useremail");
    let spans = document.getElementsByTagName("span")

    const emailRegex = RegExp("^[A-Za-z0-9]+.[A-Za-z0-9]+@[A-Za-z0-9]+.[A-Za-z0-9]+$")
    const pwdRegex = RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).*$")
    let birthDateString = birthdate.value.split("/").reverse().join("-");
    
    console.log(birthDateString)

    if (isNaN(Date.parse(birthDateString)))
    {
        console.log("yolo")
        spans[0].innerHTML = "Format incorrect";
        spans[0].style.color = "red";
        e.preventDefault()
        return false;
    }
    else
    {
        console.log("yo")
        spans[0].innerText = "";
    }

    if (username.value.length < 6)
    {
        spans[1].innerText = "Nom d'utilisateur trop court";
        spans[1].style.color = "red";
        e.preventDefault()
        return false;
    }
    else
    {
        spans[1].innerText = "";
    }

    if (!(emailRegex.test(useremail.value)))
    {
        spans[3].innerText = "Email invalide";
        spans[3].style.color = "red";
        e.preventDefault()
        return false;
    }
    else{
        spans[3].innerText = "";
    }

    if (!pwdRegex.test(userpwd.value))
    {
        spans[2].innerText = "Mot de passe invalide";
        spans[2].style.color = "red";
        e.preventDefault()
        return false;
    }
    else
    {
        spans[2].innerText = ""
    }

});