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
        window.alert(`Erro: ${error.message}`);
        return null;
    }
}

const SiginUpButton = document.getElementById("btn")

SiginUpButton.addEventListener("click", function(event) {
    try{
        event.preventDefault();

        const email = document.getElementById("e").value;
        const password = document.getElementById("s").value;

        console.log("email:", email)
        console.log('password', password)

        CreateUserWithEmailAndPassword(email, password)
    }catch(error){
        console.log(error)
    }
})