function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "username1" && password == "password1") {
        alert("Login successfully");
    }
    else if (username == "" && password == "") {
        alert("Enter Username and Password!")
    }
    else {
        alert("Invalid username or password");
    }
    return false;
}