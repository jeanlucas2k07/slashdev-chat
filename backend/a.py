import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

def enviar_email(codigo_verificacao, email_destino, nome_usuario):
    remetente = 'jeanlucas2k07@gmail.com'
    senha = 'zpxj9l7t'  # OU a senha de app, se for o caso

    try:
        # Configurar o servidor de email (para Gmail)
        server = smtplib.SMTP('smtp.gmail.com', 587)
        server.starttls()  # Inicia a conexão segura
        server.login(remetente, senha)
        
        # Criar o email
        mensagem = MIMEMultipart()
        mensagem['From'] = remetente
        mensagem['To'] = email_destino
        mensagem['Subject'] = 'Código de Verificação'
        
        # Corpo do email com substituição do nome e do código
        corpo_email = f'''
            <!DOCTYPE html>
            <html lang="pt-br">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Verificação de Senha</title>
                <style>
                    body {{
                        font-family: Arial, sans-serif;
                        color: #333;
                        padding: 20px;
                    }}
                    .email-container {{
                        background-color: #f8f8f8;
                        border-radius: 8px;
                        padding: 20px;
                        max-width: 600px;
                        margin: 0 auto;
                    }}
                    .button {{
                        background-color: #007bff;
                        color: #fff;
                        padding: 10px 20px;
                        text-decoration: none;
                        border-radius: 5px;
                        font-weight: bold;
                    }}
                </style>
            </head>
            <body>
                <div class="email-container">
                    <h2>Olá, {nome_usuario}!</h2>
                    <p>Você solicitou a recuperação de sua senha. Para continuar, insira o código de verificação abaixo:</p>
                    <h3 style="text-align: center; font-size: 24px;">{codigo_verificacao}</h3>
                    <p>Se você não solicitou essa alteração, pode ignorar este email.</p>
                    <p>Atenciosamente, <br> Sua Empresa</p>
                </div>
            </body>
            </html>
        '''
        
        # Adicionar o corpo do email
        mensagem.attach(MIMEText(corpo_email, 'html'))
        
        # Enviar o email
        server.sendmail(remetente, email_destino, mensagem.as_string())
        server.quit()

        print("Email enviado com sucesso!")

    except smtplib.SMTPAuthenticationError:
        print("Erro de autenticação! Verifique seu email e senha.")
    except smtplib.SMTPException as e:
        print(f"Ocorreu um erro ao enviar o email: {e}")
