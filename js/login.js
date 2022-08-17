

document.getElementById('login-btn').addEventListener('click', function(){

    const emailField = document.getElementById('email-field');
    const email = emailField.value;
    
    const passwordField = document.getElementById('password-field');
    const password = passwordField.value;

    emailField.value = '';
    passwordField.value = '';

    if(email == 'sifat@gmail.com' && password == 'sifat'){
        window.location.href = "index.html";
    }
    else{
        console.log('Invalid info');
    }
        
    
})