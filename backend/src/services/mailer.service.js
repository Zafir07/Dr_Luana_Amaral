const nodemailer = require("nodemailer");

let transporter = null;

function getTransporter() {
  if (transporter) return transporter;

  transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    secure: Number(process.env.SMTP_PORT) === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  return transporter;
}

const PROCEDURE_LABELS = {
  "harmonizacao-facial": "Harmonização facial",
  "preenchimento-labial": "Preenchimento labial",
  "toxina-botulinica": "Toxina botulínica",
  bioestimulador: "Bioestimulador de colágeno",
  "harmonizacao-corporal": "Harmonização corporal",
  outro: "Ainda não sabe / outro",
};

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

async function sendContactEmail({ name, email, phone, procedure, message }) {
  const to = process.env.CONTACT_TO_EMAIL;
  if (!to) {
    throw new Error("CONTACT_TO_EMAIL não está configurado no .env");
  }

  const procedureLabel = PROCEDURE_LABELS[procedure] || procedure;

  const html = `
    <h2>Nova mensagem pelo site</h2>
    <p><strong>Nome:</strong> ${escapeHtml(name)}</p>
    <p><strong>E-mail:</strong> ${escapeHtml(email)}</p>
    <p><strong>Telefone:</strong> ${escapeHtml(phone)}</p>
    <p><strong>Procedimento de interesse:</strong> ${escapeHtml(procedureLabel)}</p>
    <p><strong>Mensagem:</strong></p>
    <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
  `;

  await getTransporter().sendMail({
    from: `"Site Luana Amaral" <${process.env.SMTP_USER}>`,
    to,
    replyTo: email,
    subject: `Novo contato pelo site — ${name}`,
    html,
  });
}

module.exports = { sendContactEmail };
