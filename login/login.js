const loginText = document.querySelector(".title-text .login");
const loginForm = document.querySelector("form.login");
const loginBtn = document.querySelector("label.login");
const signupBtn = document.querySelector("label.signup");
const signupLink = document.querySelector("form .signup-link a");
const loginFormFields = document.getElementById("login-form");
const signupForm = document.getElementById("signup-form");
const loginButton = document.getElementById("login-form-submit");
const signupButton = document.getElementById("signup-form-submit");

signupBtn.onclick = (()=>{
	loginForm.style.marginLeft = "-50%";
    loginText.style.marginLeft = "-50%";
});

loginBtn.onclick = (()=>{
	loginForm.style.marginLeft = "0%";
    loginText.style.marginLeft = "0%";
});

signupLink.onclick = (()=>{
	signupBtn.click();
    return false;
});

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginFormFields.username.value;
    const password = loginFormFields.password.value;
    const localUsername = localStorage.getItem('username');
    const localPassword = localStorage.getItem('password');

    if (username === localUsername && password === localPassword) {
        window.location.href="../userdetail/userdetail.html"
    }else{
    	alert("Invalid username or password")
    }
});

signupButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = signupForm.signupusername.value;
    const password = signupForm.signuppassword.value;
    const confirmPassword = signupForm.confirmpassword.value;

    if (password === confirmPassword) {
        alert("User registerd successfully");
        localStorage.setItem('username',username);
        localStorage.setItem('password',password);
    }else{
    	alert("Password mismatched")
    }
});
