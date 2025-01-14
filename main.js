
var Password = document.getElementById('userPassword');

var Email = document.getElementById('userEmail');

var loginButton = document.getElementById('loginButton');

// Actual email and password

var actualEmail = "test@example.com"

var actualPassword = 123456;

function login () {
 
    // i save the value of email and passwords which user enters in the input fields
    
    var userEmail = Email.value;
    var userPassword = Password.value;

    if ( userEmail === actualEmail && userPassword == actualPassword ) {

        alert("Login successful! WELCOME TO THE WEBSITE");
    }
    
    else {
            alert("Login failed! TRY AGAIN");
        }
    }

loginButton.addEventListener('click', login);
