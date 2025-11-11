require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Resend } = require('resend');
const { createClient } = require('@supabase/supabase-js'); 

const app = express();
const port = 3001;

const resend = new Resend(process.env.RESEND_API_KEY);
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

const seuEmail = 'luizgustavo1970@gmail.com';
const emailRemetente = 'onboarding@resend.dev'; 

app.use(cors());
app.use(express.json());

app.post('/api/enviar-email', async (req, res) => {
  console.log('Backend recebeu uma requisição:', req.body);
  
  const { name, email, phone, message } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'Nome e Email são obrigatórios.' });
  }

  try {
    // --- ETAPA 1: SALVAR NO SUPABASE PRIMEIRO ---
    const { data: dbData, error: dbError } = await supabase
      .from('leads_contato') 
      .insert([
        { 
          nome_completo: name, 
          email: email,        // 'email' minúsculo (Corrigido)
          telefone: phone,     
          mensagem: message    
        }
      ]);
      
    if (dbError) {
      console.error('Erro ao salvar no Supabase:', dbError);
      throw new Error(`Erro no banco de dados: ${dbError.message}`);
    }
    
    console.log('Contato salvo no Supabase com sucesso.');
    
    // --- ETAPA 2: ENVIAR OS E-MAILS ---

    // TAREFA A: Enviar notificação para VOCÊ
    //
    // vvvv HTML CORRIGIDO vvvv
    //
    const { data: dataNotificacao, error: errorNotificacao } = await resend.emails.send({
      from: `Contato Site CNM <${emailRemetente}>`,
      to: seuEmail, 
      subject: `Novo Contato do Site: ${name}`,
      html: `
        <h3>Nova mensagem recebida de ${name}</h3>
        <p>(Este lead já foi salvo no Supabase)</p>
        <ul>
          <li><strong>Nome:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Telefone:</strong> ${phone}</li>
          <li><strong>Mensagem:</strong> ${message}</li>
        </ul>
      `
    });
    //
    // ^^^^ HTML CORRIGIDO ^^^^
    //

    if (errorNotificacao) {
      console.error('Erro ao enviar notificação para o admin:', errorNotificacao);
    } else {
      console.log('Notificação para o admin enviada com sucesso.');
    }

    // TAREFA B: Enviar auto-resposta para o CLIENTE
    //
    // vvvv HTML CORRIGIDO vvvv
    //
    const { data: dataCliente, error: errorCliente } = await resend.emails.send({
      from: `CNM Contabilidade <${emailRemetente}>`,
      to: email, 
      subject: 'Recebemos sua mensagem! | CNM Contabilidade',
      html: `
        <p>Olá, ${name}!</p>
        <p>Recebemos sua mensagem com sucesso.</p>
        <p>Nossa equipe de consultores analisará sua solicitação e entrará em contato o mais breve possível.</p>
        <p>Obrigado por escolher a CNM Contabilidade.</p>
        <br>
        <p>Atenciosamente,</p>
        <p>Equipe CNM</p>
      `,
      reply_to: seuEmail 
    });
    //
    // ^^^^ HTML CORRIGIDO ^^^^
    //

    if (errorCliente) {
      console.error('Erro ao enviar auto-resposta para o cliente:', errorCliente);
      throw new Error(`Erro ao enviar ao cliente: ${errorCliente.message}`);
    }

    console.log('Auto-resposta para o cliente enviada com sucesso!');
    
    res.status(200).json({ message: 'Contato salvo e e-mails enviados!' });

  } catch (error) {
    console.error('Erro final pego no catch:', error.message);
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Servidor backend rodando em http://localhost:${port}`);
});