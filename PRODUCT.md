# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML/CSS/JS frontend (`frontend/`: `index.html`, `css/style.css`, `js/main.js`, `assets/`), no framework, plus a small Node/Express API (`backend/`) that emails the contact form submission. Documented by the project's own README before this build; not a delegated choice.

## Users

Pessoas buscando harmonização facial e corporal (procedimentos estéticos) que estão avaliando se podem confiar em uma profissional para cuidar da própria aparência e saúde. Chegam via busca/indicação, comparando opções, e precisam decidir rapidamente se agendam uma avaliação. Sensíveis a sinais de confiança (credencial profissional, experiência, resultados) e a sinais de amadorismo (site genérico, sem prova de regulamentação).

## Product Purpose

Site de presença profissional para Luana Amaral, Biomédica Esteta, que existe para converter uma visita em avaliação agendada (WhatsApp ou formulário de contato por e-mail). Sucesso é a visitante entender rapidamente quem é a profissional, o que ela oferece, por que confiar nela, e agir (agendar).

## Positioning

"Biomédica Esteta" com registro profissional ativo (CRBM) e mais de uma década de experiência — o diferencial declarado é rigor clínico/segurança combinado com resultado esteticamente natural, em vez do posicionamento de "influencer estética" comum na categoria. Um concorrente sem registro profissional visível ou sem tempo de experiência comparável não pode reivindicar a mesma posição de forma honesta.

## Operating Context

Visitante chega ao site (mobile, majoritariamente), navega Sobre/Diferenciais/Procedimentos/Depoimentos, e converte por um de dois caminhos: (1) clique direto para WhatsApp, ou (2) formulário de contato que aciona e-mail para a clínica via API própria (`POST /api/contact`). Ambos os caminhos coexistem porque o público de estética geralmente prefere WhatsApp, mas o formulário fica como registro formal e canal alternativo.

## Capabilities and Constraints

- Site estático, sem CMS: qualquer atualização de conteúdo é edição direta de código.
- Backend mínimo (Express + Nodemailer) só para o envio do e-mail do formulário de contato; não há banco de dados nem autenticação.
- Sem geração de imagem disponível neste ambiente de build — o site é construído direto em código (code-first), sem comp visual prévio.
- Conteúdo real ainda pendente de preenchimento pelo cliente antes de publicar (ver Evidence on Hand); o build atual usa placeholders claramente sinalizados para essas lacunas.

## Brand Commitments

- Nome: **Luana Amaral**. Título: **Biomédica Esteta**. Registro profissional: **CRBM 10922-5** (ativo). Confirmados como reais pelo cliente — tratar como fato, não como placeholder.
- Claims de marketing confirmadas como reais pelo cliente: **+10 anos de experiência**, **100% resultados naturais** (usar como está, sem reforçar com números adicionais não confirmados).

## Evidence on Hand

Reais e confirmados (usar como fato): nome, título profissional, número CRBM, "+10 anos de experiência", "100% resultados naturais".

Ainda **não** confirmados — usar placeholder claramente sinalizado, nunca inventar como se fosse real:
- Lista de procedimentos oferecidos (usar lista placeholder típica de harmonização facial/corporal: preenchimento labial, toxina botulínica, bioestimulador de colágeno, contorno facial, harmonização corporal — a revisar pelo cliente).
- Depoimentos de pacientes (não inventar; usar placeholder textual explícito ou omitir a seção de conteúdo até haver depoimentos reais).
- Contato: WhatsApp, e-mail, endereço do consultório, universidade/ano de formação — manter os placeholders que o README já usa (`5511XXXXXXXXXX`, `.env.example`, etc.).
- Fotos reais da profissional e dos procedimentos — usar placeholder visual (não fabricar uma foto de pessoa real).

## Product Principles

1. **Confiança antes de estética.** Todo elemento de credencial real (nome, CRBM, experiência) tem prioridade visual sobre decoração; nenhuma alegação não confirmada é apresentada como fato.
2. **Um clique até a ação.** WhatsApp e formulário de contato ficam sempre acessíveis (header fixo, hero, e seção de contato), nunca escondidos atrás de mais de uma navegação.
3. **Placeholder é honesto, não é fabricação.** Onde falta conteúdo real (procedimentos, depoimentos, fotos, contato), o site sinaliza claramente que é placeholder a ser substituído, em vez de inventar dados como se fossem reais.
4. **Mobile-first.** A maioria das visitantes chega pelo celular; a experiência mobile não é uma versão reduzida da desktop, é a versão principal.

## Accessibility & Inclusion

Nenhum requisito específico informado pelo cliente. Aplicar o piso padrão do skill (contraste AA, alvos de toque ≥44px, hierarquia semântica, navegação por teclado) por ser um site de saúde/estética consultado por público amplo e diverso em idade.
