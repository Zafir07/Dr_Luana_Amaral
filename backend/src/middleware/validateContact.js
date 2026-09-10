const isValidEmail = (value) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);

function validateContact(req, res, next) {
  const { name, email, phone, procedure, message } = req.body || {};
  const errors = [];

  if (!name || typeof name !== "string" || name.trim().length < 2) {
    errors.push("Informe um nome válido.");
  }
  if (!email || typeof email !== "string" || !isValidEmail(email.trim())) {
    errors.push("Informe um e-mail válido.");
  }
  if (!phone || typeof phone !== "string" || phone.replace(/\D/g, "").length < 10) {
    errors.push("Informe um telefone válido, com DDD.");
  }
  if (!procedure || typeof procedure !== "string" || procedure.trim().length === 0) {
    errors.push("Selecione um procedimento de interesse.");
  }
  if (!message || typeof message !== "string" || message.trim().length < 10) {
    errors.push("A mensagem deve ter pelo menos 10 caracteres.");
  }

  if (errors.length > 0) {
    return res.status(400).json({ message: errors.join(" ") });
  }

  req.body.name = name.trim();
  req.body.email = email.trim();
  req.body.phone = phone.trim();
  req.body.procedure = procedure.trim();
  req.body.message = message.trim();

  next();
}

module.exports = { validateContact };
