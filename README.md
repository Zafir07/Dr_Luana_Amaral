# Site — Dra. Luana Amaral

Projeto reorganizado em **front-end** (site) e **back-end** (API do formulário de contato).

```
.
├── frontend/          → site estático (o que o visitante vê)
│   ├── index.html
│   ├── css/style.css
│   ├── js/main.js
│   └── assets/foto-luana.png
│
└── backend/           → API Node/Express que envia o e-mail do formulário
    ├── server.js
    ├── package.json
    ├── .env.example
    └── src/
        ├── routes/contact.routes.js
        ├── controllers/contact.controller.js
        ├── services/mailer.service.js
        └── middleware/validateContact.js
```

## O que mudou no visual

- Paleta trocada para **branco + rosa suave** (antes era dourado/bege).
- Tipografia nova: **Fraunces** (títulos, com um toque editorial) + **Manrope** (textos).
- Fotos agora usam uma **moldura orgânica** ("pétala"), o elemento de assinatura visual do site.
- Header com efeito de vidro (glass) que ganha sombra ao rolar a página.
- Menu mobile, FAQ e animações de entrada (scroll reveal) reescritos em CSS/JS puro (sem depender de framework externo pesado).
- Removido o Tailwind via CDN — agora é um único arquivo `style.css` com variáveis (`:root`), mais leve e fácil de ajustar (cores, espaçamentos e fontes ficam centralizados no topo do arquivo).

## Front-end: como visualizar

Não precisa de instalação. Basta abrir `frontend/index.html` no navegador, ou usar um servidor local simples:

```bash
cd frontend
npx serve .
# ou: python3 -m http.server 5500
```

## Back-end: como rodar a API de e-mail

O formulário de contato hoje só abria o WhatsApp. Agora ele **também envia um e-mail de verdade** para o consultório, através de uma API própria.

1. Instale as dependências:
   ```bash
   cd backend
   npm install
   ```

2. Copie o arquivo de variáveis de ambiente e preencha com seus dados de e-mail:
   ```bash
   cp .env.example .env
   ```
   No `.env`, configure `SMTP_USER`, `SMTP_PASS` (senha de app, não a senha normal) e `CONTACT_TO_EMAIL`.
   Funciona com Gmail, Outlook, ou qualquer provedor SMTP (Zoho, SendGrid, etc.).

3. Rode o servidor:
   ```bash
   npm start
   ```
   A API sobe em `http://localhost:3000`.

4. No `frontend/js/main.js`, a constante `API_BASE_URL` já aponta para `http://localhost:3000` em desenvolvimento. Quando publicar o back-end (Render, Railway, VPS etc.), atualize essa URL para o endereço público da API.

### Endpoint disponível

`POST /api/contact`

```json
{
  "name": "Maria",
  "email": "maria@email.com",
  "phone": "11999999999",
  "procedure": "harmonizacao-facial",
  "message": "Gostaria de agendar uma avaliação."
}
```

Retorna `200` com `{ "message": "Mensagem enviada com sucesso." }` em caso de sucesso, ou `400`/`500` com uma mensagem de erro.

## Antes de publicar (pendências de conteúdo)

O conteúdo original tinha vários placeholders que continuam pendentes — vale preencher antes de ir ao ar:

- Número de WhatsApp real (hoje está como `5511XXXXXXXXXX` em vários links).
- Endereço do consultório (seção "Contato").
- Universidade/ano de formação (seção "Formação").
- Fotos reais dos procedimentos (hoje usam imagens de banco de imagens do Unsplash).

## Deploy sugerido

- **Front-end:** Netlify, Vercel ou GitHub Pages (é só a pasta `frontend/`).
- **Back-end:** Render, Railway ou um VPS simples (é a pasta `backend/`, um serviço Node comum).
