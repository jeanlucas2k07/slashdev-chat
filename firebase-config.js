// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";

// Sua configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDWo0dDCZyMGjHN7TfPFeCjwYGRoszpkN8",
  authDomain: "slashdev-chat.firebaseapp.com",
  projectId: "slashdev-chat",
  storageBucket: "slashdev-chat.appspot.com",
  messagingSenderId: "455862184147",
  appId: "1:455862184147:web:c8a8b013c838b278718c26",
  measurementId: "G-B9W5N1RPH9"
};

// Inicializa o Firebase App
const app = initializeApp(firebaseConfig);

// Configura a autenticação com Google
const auth = getAuth(app);
const providerGoogle = new GoogleAuthProvider();
const providerGit = new GithubAuthProvider();

export { auth, providerGoogle, providerGit };
