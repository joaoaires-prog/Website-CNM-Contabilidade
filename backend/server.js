// Carrega as variáveis de ambiente do arquivo .env
require('dotenv').config();

// Importa as bibliotecas necessárias
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');

// Inicializa o aplicativo Express
const app = express();
const PORT = process.env.PORT || 3001; // Define a porta do servidor

// Aplica os middlewares
app.use(cors()); // Permite requisições de outras origens (do nosso frontend)
app.use(express.json()); // Permite que o servidor entenda JSON

// Rota principal para testar se o servidor está no ar
app.get('/', (req, res) => {
    res.send('Backend do formulário de contato está no ar!');
});

// Rota para enviar o e-mail (o "endpoint")
app.post('/send-email', (req, res) => {
    // Pega os dados do corpo da requisição (que virão do formulário React)
    const { name, email, phone, message } = req.body;

    // Validação simples para ver se os dados chegaram
    if (!name || !email || !phone) {
        return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
    }

    // Configuração do "transporter" do Nodemailer com as credenciais do .env
    const transporter = nodemailer.createTransport({
        service: 'gmail', // Usando o serviço do Gmail
        auth: {
            user: process.env.EMAIL_USER, // Seu e-mail do arquivo .env
            pass: process.env.EMAIL_PASS, // Sua senha de app do arquivo .env
        },
    });

    // Opções do e-mail que será enviado
    const mailOptions = {
        from: `"CNM Contabilidade" <${process.env.EMAIL_USER}>`, // De: O nome da sua empresa e seu e-mail
        to: email,   // Para: O e-mail do cliente que preencheu o formulário
        subject: 'Recebemos sua solicitação de contato!', // Assunto do e-mail para o cliente
        html: `
            <h1>Olá, ${name}!</h1>
            <p>Obrigado por entrar em contato com a CNM Contabilidade.</p>
            <p>Recebemos sua mensagem e nossa equipe de especialistas entrará em contato com você em breve pelo telefone <strong>${phone}</strong> ou pelo seu e-mail.</p>
            <br>
            <p>Atenciosamente,</p>
            <p><strong>Equipe CNM Contabilidade</strong></p>
        `,
    };

    // Tenta enviar o e-mail
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error('Erro ao enviar e-mail:', error);
            return res.status(500).json({ message: 'Erro ao enviar e-mail. Tente novamente mais tarde.' });
        }
        console.log('Email enviado: ' + info.response);
        // Envia a resposta de sucesso para o frontend
        res.status(200).json({ message: 'E-mail enviado com sucesso! Em breve entraremos em contato.' });
    });
});

// Inicia o servidor para ele ficar "ouvindo" na porta definida
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});