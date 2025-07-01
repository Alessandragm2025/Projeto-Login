const formRecupera = document.getElementById("recover-form");
const emailField = document.getElementById("email-field");
const emailInput = document.getElementById("recover-email");
const sendCodeButton = document.getElementById("send-code-button");
const codeEntrySection = document.getElementById("code-entry-section");
const verificationCodeInpuit = document.getElementById("verification-code");
const newPasswordInput = document.getElementById("login-pass");
const confirmNewPasswordInput = document.getElementById("login-pass-confirm");
const verificyCodeButton =  document.getElementById("verify-code-button");

let generateCode = "";

function generateRandomCode() {

    return Math.floor(Math.random() * 1000000).toString();
}

sendCodeButton.addEventListener("click", (event) => {
    event.preventDefault();
    const emailRecover = emailInput.value;

    if (!emailRecover) {
        alert("Por favor, digite eu e-mail para continuar.");
        return;
    }

    const emailCadastro = localStorage.getItem("email_cadastro");

    if (emailCadastro === emailRecover.toLowerCase()) {

        generateCode = generateRandomCode();
        
        alert( `Foi enviado um código ${generateCode}`);
        localStorage.setItem("codigoGerado", generateCode);

        emailField.style.display = "none";
        sendCodeButton.style.display = "none";
        codeEntrySection.style.display ="block";

      
    }else {
         alert( `Foi enviado um código para o e-mail ${emailRecover}`);
    }

    
})

verificyCodeButton.addEventListener("click", (event => {
    event.preventDefault();

    const entereCode = verificationCodeInpuit.value;
    const newPassword = newPasswordInput.value;
    const confirmNewPassword = confirmNewPasswordInput.value;

    const codigoGeradoLS =localStorage.getItem("codigoGerado");

    if (!entereCode || !newPassword || !confirmNewPassword) {
         
        alert("Por favor, preencha todos os campos: código de verificação. nova senha e confirmar nova senha!");

        return;
    }

    if (newPassword !== confirmNewPassword) {
        alert(" As senhas não coincidem. tente novamente.");

        newPasswordInput.value = "";
        confirmNewPasswordInput.value = "";
        return;

        
    }

    if (entereCode === codigoGeradoLS) {
        localStorage.setItem("senha_cadastro", newPassword);
        localStorage.removeItem("codigoGerado");
        window.location.href = "../index.html";

        alert("Senha redefinida com sucesso! voçê já pode fazer o login com sua nova senha");
        
    } else {
        alert("Código de verificação Inválido. Tente novamente")
        
    }
}));

