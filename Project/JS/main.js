


//get login button

    let login = document.querySelector('.logbutton button');
    let register = document.querySelector('.regbutton button');
    login.style.color="black";
    register.style.color="black";

// onclick register button
    register.onclick=()=>{
        login.classList.remove('active');
        register.classList.add('active');
        document.querySelector('.account-form .login-form').classList.remove('active');
        document.querySelector('.account-form .Register-form').classList.add('active');
    }
    //

    // onclick login button
    login.onclick=()=>{

        register.classList.remove('active');
        login.classList.add('active');
        document.querySelector('.account-form .Register-form').classList.remove('active');
        document.querySelector('.account-form .login-form').classList.add('active');
       
    }
    // active account form
    let accoutform= document.querySelector('.account-form');
    document.querySelector('#account-btn').onclick=()=>{
        accoutform.classList.add('active');
    }

    document.querySelector('#close-form').onclick=()=>{
  
        accoutform.classList.remove('active');
    }