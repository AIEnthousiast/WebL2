scrollDown = function(){
    message_log = document.getElementById("message-log");
    message_log.scroll(0,message_log.scrollHeight);
};


document.getElementById("send-message").addEventListener("submit", function(e) {

    e.preventDefault();

    if (document.getElementById("msg").value.length > 0)
    {
        var xhr = new XMLHttpRequest();


        var formData = new FormData(document.getElementById("send-message"));

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4)
            {
                if (xhr.status === 200)
                {
                    response = JSON.parse(xhr.response)
                    document.getElementById("msg").value = "";
                    scrollDown();
                    
                    
                    
                }else
                {
                    document.getElementById("error-log").firstChild.innerHTML = response.msg;
                }
            }
        }
        xhr.open("POST","./htbin/chatsend.py",true);
        xhr.send(formData);
    }
   
});




window.onload = function()
{
    scrollDown();
};

setInterval(function(){

    xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
        if (xhr.readyState == 4)
        {
            if (xhr.status == 200)
            {
                response = JSON.parse(xhr.response);
                message_log = document.getElementById("message-log");
            
               

                while (message_log.firstChild) {
                    message_log.removeChild(message_log.lastChild);
                }


                for (obj in response)
                {
                    
                    para = document.createElement("p")
                    para.innerHTML = response[obj].date + "-" + response[obj].user + ":" + response[obj].msg
                    message_log.appendChild(para)
                }
                console.log(message_log.clientHeight)
                
                
            }
        }
    }

    xhr.open("GET","./htbin/chatget.py",true);
    xhr.send(null);

},100);