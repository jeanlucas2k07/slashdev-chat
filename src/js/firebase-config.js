import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
import { getAuth, GoogleAuthProvider, GithubAuthProvider} from "https://www.gstatic.com/firebasejs/10.11.0/firebase-auth.js";
import { firebaseConfig } from "../../config/firebase-config-data.js";

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const providerGoogle = new GoogleAuthProvider();
const providerGit = new GithubAuthProvider();

export { auth, providerGoogle, providerGit };
