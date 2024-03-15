const password = document.querySelector('#password');
const confirmPassword = document.querySelector('#confirm-password');
const errorMessage = document.querySelector('span.error');

confirmPassword.addEventListener('input', (e)=>{
    if(password.value != confirmPassword.value){
        errorMessage.textContent = "*Passwords do not match";
    } else {
        errorMessage.textContent = "";
    }
});

