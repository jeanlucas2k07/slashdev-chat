// auth.js
import {
  signInWithPopup,
  getAuth,
  GithubAuthProvider,
  signInWithEmailAndPassword
} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

const provider = new GithubAuthProvider();

// Login com GitHub
export async function githubAuth() {
  const auth = getAuth();

  try {
    const result = await signInWithPopup(auth, provider);
    const credential = GithubAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;

    console.log("Usuário logado:", user);
    console.log("Token de acesso:", token);

    return user;
  } catch (error) {
    console.error("Erro no login:", error);
    return null;
  }
}

// Login com Google
export async function googleAuth(auth, provider) {
  try {
    const result = await signInWithPopup(auth, provider);
    return result.user;
  } catch (error) {
    console.error("Erro no login com Google:", error);
    return null;
  }
}

// Login com email e senha
export async function loginEmailAndPassword(email, password) {
  const auth = getAuth();

  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);

    const user = userCredential.user;

    window.alert(`Bem-vindo, ${user.email}`);

    return user;
  } catch (error) {
    console.error("Erro no login com email e senha:", error.code, error.message);

    switch (error.code) {
      case "auth/user-not-found":
        window.alert("Usuário não encontrado. Verifique o email digitado")
        break;

      case "auth/wrong-password":
        window.alert("Senha incorreta. Tente novamente.");
        break;
      
      case "auth/invalid-email":
        window.alert("Email inválido. Verifique o email, e tente novamente.")

        break

      case "auth/too-many-requests":
        window.alert("Muitas tentativas de login. Tente novamente mais tarde.");
        break
      
      case "auth/invalid-credential":
        window.alert("Credênciais inválidas. Caso não tenha conta, crie uma.")
        break

      
      default:
        window.alert("Erros ao fazer login: " + error.message);
        break
        
    }
    return null;
  }
}
