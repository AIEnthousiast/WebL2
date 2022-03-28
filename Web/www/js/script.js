var spans = document.getElementsByTagName("span")


var checkUsername = false;
var checkBirthdate = false;
var checkUserpwd = false;
var checkUseremail = false;

document.getElementById("register").addEventListener("submit", function(e) {    

    console.log(checkUseremail,checkUserpwd,checkBirthdate,checkUsername);
    if (!(checkUserpwd && checkBirthdate && checkUsername && checkUseremail))
    {
        console.log(checkUseremail,checkUserpwd,checkBirthdate,checkUsername);
        e.preventDefault()
    }
    

});


document.getElementById("username").addEventListener("input",function(e) {
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

document.getElementById("birthdate").addEventListener("input",function() {
    let birthdate = document.getElementById("birthdate");

    let birthDateString = birthdate.value.split("/").reverse().join("-");

    if (isNaN(Date.parse(birthDateString)))
    {
        console.log("yolo")
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


document.getElementById("useremail").addEventListener("input", function() {

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

document.getElementById("userpwd").addEventListener("input", function() {

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
})