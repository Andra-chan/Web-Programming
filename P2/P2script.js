function p2(){

    let name = document.getElementById('name').value;
    let date = document.getElementById('date').value;
    let age = document.getElementById('age').value;
    let email = document.getElementById('email').value;
    let nr = 0;

    if(name.length == 0 || !isNaN(name)){
        document.getElementById("errName").innerHTML = "Numele nu este introdus corect!";
        document.getElementById('name').setAttribute("style", "border-color: red");
        nr=1;
    }
    else {
        document.getElementById("errName").innerHTML = "";
        document.getElementById('name').setAttribute("style", "border-color: black");
    }

    if(!date){
        document.getElementById("errDate").innerHTML = "Data nu este introdusa corect!";
        nr=1;
        document.getElementById('date').setAttribute("style", "border-color: red");
    }
    else{
        document.getElementById("errDate").innerHTML = "";
        document.getElementById('date').setAttribute("style", "border-color: black");
    }

    if(age<1 || age>100 || (new Date().getFullYear() - new Date(date).getFullYear()).toString() !== age){
        document.getElementById("errAge").innerHTML = "Varsta nu este introdusa corect!";
        nr=1;
        document.getElementById('age').setAttribute("style", "border-color: red");
    }
    else{
        document.getElementById("errAge").innerHTML = "";
        document.getElementById('age').setAttribute("style", "border-color: black");
    }

    if(email.length == 0 || /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/.test(email)){
        document.getElementById("errEmail").innerHTML = "Emailul nu este introdus corect!";
        nr=1;
        document.getElementById('email').setAttribute("style", "border-color: red");
    }
    else{
        document.getElementById("errEmail").innerHTML = "";
        document.getElementById('email').setAttribute("style", "border-color: black");
    }

    if(nr==0) {
        document.getElementById("noErr").innerHTML = "Datele sunt corecte!";
    }
    else{
        document.getElementById("noErr").innerHTML = "";
    }

}
