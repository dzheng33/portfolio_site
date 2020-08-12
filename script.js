const send = document.querySelector("#send-button");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const msg = document.querySelector("#message");
const form = document.querySelector("form");

send.addEventListener("click", function(){
    if(name.value === "" && email.value === "" && msg.value === ""){
        alert("Please fill in form");
    }
    else if(name.value === ""){
        alert("Please enter your name");
    }
    else if(email.value === "" || email.value.includes("@") === false){
        alert("Please enter a valid email");
    }
    else if(msg.value === ""){
        alert("Please leave a message");
    }
    else {
        name.value = "";
        email.value = "";
        msg.value = "";
        alert("Message successfully sent!");
    }
});
