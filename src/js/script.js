import { auth, providerGoogle } from "./firebase-config.js";
import { githubAuth, googleAuth, loginEmailAndPassword} from "../../auth/auth.js"

console.log("Script chamado!!!!!!!!!!!!!")

const loginGoolge = document.getElementById("login-google"); // "document.getElementById()" -> já é bem auto-explicativo, pega um elemento do documento HTML pelo id.

const loginGithub = document.getElementById("login-git")

const submitButton = document.getElementById("submit-button")

const userDiv = document.getElementById("user"); // Basicamente, a mesma coisa do de cima


// Checa se o botão foi pressioado e, se for, dispara a função assíncorina:
loginGoolge.addEventListener("click", async () => {
  try {
    const user = await googleAuth(auth, providerGoogle)

    userDiv.innerHTML = `
      <p>Olá, ${user.displayName}!</p>
      <img src="${user.photoURL}" width="100" />
      <p>Email: ${user.email}</p>
    `; // modifica a div para exibir as informações

    const idToken = await user.getIdToken(); // Pede para o Firebade o ID TOken JWT do usuário - Um token de autrnticação válido que pode ser enviado para o backende como comprovação de login

    console.log("ID Token:", idToken);

    window.alert(`ID Token: ${idToken}`)

  } catch (error) {
    console.error("Erro ao logar:", error.message);
  } // a excessão

});

loginGithub.addEventListener("click", async () => {
    const user = await githubAuth();

    if (user) {
      userDiv.innerHTML = `
        <p>Olá, ${user.displayName || user.email || "usuário desconhecido"}!</p>
        <img src="${user.photoURL}" width="100" />
        <p>Email: ${user.email}</p>
      `;
    } else {
      window.alert("Usuário não retornado pelo login.");
    }
  });

submitButton.addEventListener("click", function (event) {
  try{

    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    if (!email || !password){
      window.alert("As entradas de email ou senha estão vazias")
      return null
    }else{
      console.log("Email:", email)
      console.log("Senha:", password)

      loginEmailAndPassword(email, password)
    };

  } catch(error){
    console.log("Erro ao capturar as informações de email e senha:", error)

  };

});


document.getElementById("eye").addEventListener('change', function () {
  const passwordField = document.getElementById('password');

  if (this.checked) {
    passwordField.type = 'text'
  } else{
    passwordField.type = 'password'
  }
})