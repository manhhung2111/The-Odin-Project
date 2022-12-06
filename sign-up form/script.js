 
 let submitButton = document.querySelector('.submit-button');
 let password = document.querySelector('#password');
 let password2 = document.querySelector('#password2');

 console.log(password.value);
//  console.log(password2);

 submitButton.addEventListener('click', function(event){
    if(password.value != password2.value){
        alert("Please re-enter a corrent password!")
        event.preventDefault();
        // location.reload();
    } 
 })