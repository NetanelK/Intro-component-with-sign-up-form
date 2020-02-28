// function validateForm() {
//     var c = 0;
//     if (document.forms["main-form"]["fname"].value == "") {
//         document.getElementById("fnameError").style.display = "block";
//         c++;
//     } else {document.getElementById("fnameError").style.display = "none"}

//     if (document.forms["main-form"]["lname"].value == "") {
//         document.getElementById("lnameError").style.display = "block";
//         c++;
//     } else {document.getElementById("lnameError").style.display = "none"}

//     if (document.forms["main-form"]["email"].value == "") {
//         document.getElementById("emailError").style.display = "block";
//         c++;
//     } else {document.getElementById("emailError").style.display = "none"}

//     if (document.forms["main-form"]["pass"].value == "") {
//         document.getElementById("passError").style.display = "block";
//         c++;
//     } else {document.getElementById("passError").style.display = "none"}

//     if(c > 0)
//         return false;
// }

function validateForm(){
    if (document.forms["main-form"]["fname"].value == "") 
        return false;

    if (document.forms["main-form"]["lname"].value == "") 
        return false;
    
    if (document.forms["main-form"]["email"].value == "") 
        return false;

    if (document.forms["main-form"]["pass"].value == "") 
        return false;

    return true;
}

function outFocus(n) {
    if(document.forms["main-form"][n].value == ""){
        
        var x = document.getElementsByClassName("input " + n);
        x[0].style.borderColor = "hsl(0, 100%, 74%)";
        document.getElementById(n).placeholder = "";
        if(n == "fname"){ 
            document.getElementById(n + "Text").innerHTML = "First Name cannot be empty"; 
        }
        if(n == "lname"){ 
            document.getElementById(n + "Text").innerHTML = "Last Name cannot be empty";
        }
        if(n == "email"){ 
            document.getElementById(n + "Text").innerHTML = "Looks like this is not an email";
            document.getElementById(n).placeholder = "email@example.com";
        }
        if(n == "pass"){
            document.getElementById(n + "Text").innerHTML = "Password cannot be empty";
        }
        document.getElementById(n + "Error").style.display = "block";
        return false;
    }
}

function changeValue(n){
    if(document.forms["main-form"][n].value != ""){
        document.getElementById(n + "Error").style.display = "none";
        document.getElementById(n).style.color = "hsl(249, 10%, 26%) "
        var x = document.getElementsByClassName("input " + n);
        x[0].style.borderColor = "";
        document.getElementById(n + "Text").innerHTML = "";
    }
}
