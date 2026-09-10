require("dotenv").config();

const express = require("express");
const cors = require("cors");
const contactRoutes = require("./src/routes/contact.routes");

const app = express();
const PORT = process.env.PORT || 3000;
const allowedOrigins = (process.env.CORS_ORIGIN || "")
  .split(",")
  .map((origin) => origin.trim())
  .filter(Boolean);

app.use(
  cors({
    origin: allowedOrigins.length > 0 ? allowedOrigins : "*",
  })
);
app.use(express.json());

app.get("/health", (req, res) => res.json({ status: "ok" }));
app.use("/api", contactRoutes);

app.use((req, res) => res.status(404).json({ message: "Rota não encontrada." }));

app.listen(PORT, () => {
  console.log(`API do formulário de contato rodando em http://localhost:${PORT}`);
});
