require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { Resend } = require('resend');
const { createClient } = require('@supabase/supabase-js'); 

const app = express();

// IMPORTANTE PARA O RENDER: Usa a porta definida pelo ambiente ou 3001
const port = process.env.PORT || 3001; 

// 1. Configuração dos Serviços (Supabase + Resend)
// Certifique-se que o .env tem as chaves corretas
const resend = new Resend(process.env.RESEND_API_KEY);
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_SERVICE_KEY
);

// --- CONFIGURAÇÃO FINAL (COM DOMÍNIO VERIFICADO) ---
// Como você já verificou o domínio, usamos o e-mail oficial:
const emailRemetente = 'contato@cnmcontabilidade.com.br'; 

// Seu email (onde você recebe os avisos)
const emailAdmin = 'luizgustavo1970@gmail.com';
// -------------------------------------

app.use(cors());
app.use(express.json());

// Rota de teste (Útil para o Render saber que o site está no ar)
app.get('/', (req, res) => {
  res.send('Backend CNM Contabilidade está online e rodando!');
});

app.post('/api/enviar-email', async (req, res) => {
  console.log('Backend recebeu requisição:', req.body);
  
  const { name, email, phone, message } = req.body;

  if (!name || !email) {
    return res.status(400).json({ error: 'Nome e Email são obrigatórios.' });
  }

  try {
    // ETAPA 1: SALVAR NO SUPABASE
    const { data: dbData, error: dbError } = await supabase
      .from('leads_contato') 
      .insert([{ 
          nome_completo: name, 
          email: email,        
          telefone: phone,     
          mensagem: message    
      }]);
      
    if (dbError) {
      console.error('Erro ao salvar no Supabase:', dbError);
      throw new Error(`Erro no banco de dados: ${dbError.message}`);
    }
    console.log('Contato salvo no Supabase com sucesso.');

    // ETAPA 2: ENVIAR E-MAILS (AGORA OFICIAIS)

    // A. Notificação para a Empresa (Você)
    const { error: errorNotificacao } = await resend.emails.send({
      from: `Site CNM <${emailRemetente}>`,
      to: emailAdmin,
      reply_to: email, // Se clicar em responder, vai para o cliente
      subject: `Novo Lead do Site: ${name}`,
      html: `
        <h3>Nova mensagem recebida de ${name}</h3>
        <p><strong>Nome:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Telefone:</strong> ${phone}</p>
        <p><strong>Mensagem:</strong> ${message}</p>
        <br>
        <p><small>Este lead já foi salvo no Supabase.</small></p>
      `
    });

    if (errorNotificacao) console.error('Erro ao notificar admin:', errorNotificacao);

    // B. Auto-resposta para o Cliente (FUNCIONA PARA QUALQUER E-MAIL AGORA!)
    const { error: errorCliente } = await resend.emails.send({
      from: `CNM Contabilidade <${emailRemetente}>`,
      to: email, // Envia para o e-mail que o cliente digitou
      subject: 'Recebemos sua mensagem! | CNM Contabilidade',
      html: `
        <p>Olá, <strong>${name}</strong>.</p>
        <p>Recebemos sua mensagem com sucesso.</p>
        <p>Nossa equipe de consultores analisará sua solicitação e entrará em contato o mais breve possível.</p>
        <p>Obrigado por escolher a CNM Contabilidade.</p>
        <br>
        <p>Atenciosamente,</p>
        <p><strong>Equipe CNM</strong></p>
        <p><a href="https://cnmcontabilidade.com.br">cnmcontabilidade.com.br</a></p>
      `
    });

    if (errorCliente) {
      console.error('Erro ao enviar auto-resposta:', errorCliente);
    }

    console.log('Processo finalizado com sucesso!');
    res.status(200).json({ message: 'Mensagem enviada e salva com sucesso!' });

  } catch (error) {
    console.error('Erro crítico:', error.message);
    res.status(500).json({ error: 'Erro interno ao processar solicitação.' });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});