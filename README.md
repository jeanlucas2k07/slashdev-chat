🧠 /dev/chat

Bem-vindo ao /dev/chat, uma plataforma moderna de autenticação com suporte a login via e-mail/senha, Google e GitHub, construída com Firebase.

    Este projeto tem como objetivo evoluir para um SaaS completo, incluindo futuramente um sistema de chat em tempo real.

🚀 Como rodar localmente

Para testar o sistema corretamente — especialmente os logins via popup (Google e GitHub) — é necessário rodar o projeto neste endereço:

http://127.0.0.1:5500/

    O Firebase exige que esse endereço esteja cadastrado como domínio autorizado no painel do projeto. Por isso, não use localhost, use 127.0.0.1.

🔐 Configuração do Firebase (passo a passo)

    ⚠️ Este projeto não inclui uma configuração pronta do Firebase.
    Para que tudo funcione corretamente, você precisará criar seu próprio projeto no Firebase.

🛠️ 1. Criando um projeto no Firebase

    Acesse o Firebase Console.

    Clique em Adicionar projeto.

    Escolha um nome e siga os passos até a finalização.

🌐 2. Registrando seu app (Web)

    Após criar o projeto, clique em Adicionar app > Web.

    Dê um nome ao app (ex: devchat-web) e copie a configuração Firebase que será exibida, como abaixo:

const firebaseConfig = {
  apiKey: "SUA_API_KEY",
  authDomain: "SEU_DOMÍNIO.firebaseapp.com",
  projectId: "SEU_PROJECT_ID",
  storageBucket: "SEU_BUCKET.appspot.com",
  messagingSenderId: "SEU_MESSAGING_ID",
  appId: "SEU_APP_ID"
};

    Substitua essa configuração no arquivo JavaScript do projeto onde está o firebaseConfig.

🔐 3. Habilitando métodos de login

No menu lateral do Firebase:

    Vá até Authentication > Método de login.

    Ative os seguintes provedores:

        E-mail/Senha

        Google

        GitHub (será necessário configurar o Client ID e Secret do GitHub [ver abaixo])

🌍 4. Autorizando domínios

    Ainda em Authentication > Configurações, vá em Domínios autorizados.

    Adicione:

    127.0.0.1

🧑‍💻 Configurando o login com GitHub

    Vá até o GitHub Developer Settings.

    Clique em "OAuth Apps" > "New OAuth App".

    Preencha os campos:

        Application name: dev/chat (ou outro de sua preferência)

        Homepage URL: http://127.0.0.1:5500

        Authorization callback URL: http://127.0.0.1:5500

    Após criar, copie o Client ID e Client Secret, e cole no painel do Firebase, em Authentication > GitHub.

📦 Tecnologias utilizadas

    HTML, CSS, JavaScript

    Firebase Authentication

    Firebase SDK v10.11.0

Métodos de login:

    E-mail/Senha

    Google

    GitHub

✨ Em breve

    ✅ Chat em tempo real

    ✅ Armazenamento de mensagens

    ✅ Interface responsiva

    ✅ Tema escuro/claro automático

    ✅ Sistema de perfis

Feito com carinho (e muito café ☕) por
Jean Lucas
