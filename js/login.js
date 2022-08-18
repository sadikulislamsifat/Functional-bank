/**
 * 1. add event listener to the submit button
 * 2. get email address from the email input field
 * 2.5 get password from the email input field
 * 
 * 3. Clear the email input field after getting the value
 * 3.5 Clear the password input field after getting the value
 * 4. set the login condition
 * 5. set another html page 
 * 
 
 * 
 */

    // step 1

document.getElementById('login-btn').addEventListener('click', function(){

    // step 2
    const emailField = document.getElementById('email-field');
    const email = emailField.value;
    
    // step 3
    const passwordField = document.getElementById('password-field');
    const password = passwordField.value;

    // step 3
    emailField.value = '';
    // step 3.5
    passwordField.value = '';

    // step 4
    if(email == 'sifat@gmail.com' && password == 'sifat'){
        // step 5
        window.location.href = "bank.html";
    }
    else{
        console.log('Invalid info');
    }
        
    
})