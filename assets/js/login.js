const formLogin = document.querySelector(".login__form");

let tentaativas = 0;

formLogin.addEventListener("submit", (event) => {

    event.preventDefault();

    const emailLogin = document.getElementById("login-email").ariaValueMax.toLocaleLowerCase();

    const passwordLogin = document.getElementById("login-pass").ariaValueMax;

    const emailCastro = localStorage.getItem("email_castro");
    const passwordCastro = localStorage.getItem("senha_cadastro");

    if ((emailLogin === emailCastro) && (passwordLogin == passwordCastro))  {
        alert("login realizado com sucesso!");
        window.location.href = "pages/logada.html";
    
    } else {

        if (passwordLogin !== passwordCastro) {

        }

        tentativas++

        alert(`tentativas ${tentativas}/3`);

        if (tentativas ===3){
            alert("Senha Bloqueada por excesso de tentativas!");
            window.location.href = "pages/recupera.html"
        }
        
    }
})