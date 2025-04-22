import {
    getAuth,
    createUserWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

import {auth} from './firebase-config.js'

async function CreateUserWithEmailAndPassword(email, password) {

    try{
        const userCredential = await createUserWithEmailAndPassword(auth, email, password)
        const user = userCredential.user

        window.alert(`Bem-vindo, ${email}`);
        return user;
    } catch (error) {
        console.error("Erro ao criar conta:", error.code, error.message);

        switch (error.code) {
            case "auth/invalid-email":
                window.alert("Email inválido. Verifique e tente novamente")
                break

            case "auth/email-already-in-use":
                window.alert("Este email já está em uso.")
                break

            case "auth/weak-password":
                window.alert("A senha está muito curta. Ela precisa ter, no mínimo, 6 caracteres.")

                break
            
            default:
                window.alert("Erros ao fazer login: " + error.message);
                break
        }
        return null;
    }
}

document.getElementById("eye").addEventListener('change', function () {
    const passwordField = document.getElementById('s');
    const confirmPasswordField = document.getElementById('cs');
  
    if (this.checked) {
      passwordField.type = 'text'
      confirmPasswordField.type = 'text'
    } else{
      passwordField.type = 'password'
      confirmPasswordField.type = "password"
    }
  })

const SiginUpButton = document.getElementById("btn")

SiginUpButton.addEventListener("click", function(event) {
    try{
        event.preventDefault();

        const email = document.getElementById("e").value;
        const password = document.getElementById("s").value;
        const confirmPassword = document.getElementById('cs').value;

        if (!email || !password || !confirmPassword){
            return alert("As informações de email ou senha estão vazias")
        }

        if (password !== confirmPassword){
            return alert("As senhas não condizem");
        }

        console.log("email:", email)
        console.log('password', password)

        CreateUserWithEmailAndPassword(email, password)
    }catch(error){
        console.log(error)
    }
})