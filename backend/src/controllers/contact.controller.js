const { sendContactEmail } = require("../services/mailer.service");

async function submitContact(req, res) {
  try {
    await sendContactEmail(req.body);
    return res.status(200).json({ message: "Mensagem enviada com sucesso." });
  } catch (error) {
    console.error("Falha ao enviar e-mail de contato:", error.message);
    return res.status(500).json({
      message: "Não foi possível enviar sua mensagem agora. Tente novamente em instantes.",
    });
  }
}

module.exports = { submitContact };
