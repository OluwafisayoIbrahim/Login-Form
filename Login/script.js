function MyFunction(){
    var x = document.getElementById("Pass");
    if(x.type === "password"){
        x.type = "text";
    } else{
        x.type = "password";
    }
}

var attempt = 3
function validate(){
    var Uname = document.getElementById("Uname").value;
    var Pass = document.getElementById("Pass").value;
    if ( Uname =="Formget" && Pass == "formget123" ){
        alert("Welcome");
        window.location = "index.html";
        return false;
    }
    else{
        attempt --;
        alert("You have "+attempt+" attempt(s) left ;");
        if ( attempt == 0 ){
            document.getElementById("Uname").disabled = true;
            document.getElementById("Pass").disabled = true;
            document.getElementById("submit").disabled = true;
            return false;
        }
    }
}

    
