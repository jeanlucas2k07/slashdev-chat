import { signInWithPopup, getAuth, GithubAuthProvider } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

const provider = new GithubAuthProvider();

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

export async function googleAuth(auth, provider) {
    const result = await signInWithPopup(auth, provider)

    return result.user
}