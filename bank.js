document.getElementById('login-btn').addEventListener('click' , function(){

    
    const email = document.getElementById('user-email');

    const password = document.getElementById('user-pass');
    const E = email.value;
    const p = password.value;

    if(E =='Sayid@abba.com' && p=='1234'){
        window.location.href = 'sucess.html';
    }

});



