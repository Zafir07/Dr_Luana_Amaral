# Site — Dra. Luana Amaral

Site estático de apresentação da Luana Amaral, Biomédica Esteta (CRBM 10922-5), em Montenegro, RS. Todo o agendamento é feito pelo WhatsApp.

```
frontend/            → site estático (o que o visitante vê)
├── index.html
├── css/style.css
├── js/main.js
└── assets/          → foto da profissional e fontes (Spectral + Hanken Grotesk)
```

O visual (cores, fontes, espaçamentos e regras) está documentado em `DESIGN.md`. O contexto do produto e o que é conteúdo confirmado estão em `PRODUCT.md`.

## Como visualizar

Não precisa de instalação. Abra `frontend/index.html` no navegador ou use um servidor local simples:

```bash
cd frontend
npx serve .
# ou: python3 -m http.server 5500
```

## Contato e mapa

- WhatsApp: (51) 9849-3543. Todos os botões de agendamento usam `https://wa.me/555198493543` com uma mensagem inicial pronta.
- Endereço: Rua João Pessoa, 1018, Centro, Montenegro, RS, 95780-000.
- O mapa da seção "Agende sua avaliação" é um embed público do Google Maps (não precisa de chave de API). Se o mapa não carregar, o quadro mostra o endereço e um link para abrir no Google Maps.

Para trocar o número, procure por `555198493543` e `9849-3543` em `frontend/index.html`.

## Antes de publicar (pendências de conteúdo)

- Lista de procedimentos: hoje é uma lista de exemplo, a confirmar com a profissional.
- Depoimentos: a seção foi retirada até existirem depoimentos reais autorizados.
- Horários de atendimento e redes sociais: não aparecem no site até serem informados.

## Deploy sugerido

Netlify, Vercel ou GitHub Pages, publicando só a pasta `frontend/`.
