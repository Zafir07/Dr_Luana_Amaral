# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static HTML/CSS/JS frontend (`frontend/`: `index.html`, `css/style.css`, `js/main.js`, `assets/`), no framework and no backend. The earlier Node/Express e-mail API was removed together with the contact form (2026-09-24).

## Users

Pessoas buscando harmonização facial e corporal (procedimentos estéticos) que estão avaliando se podem confiar em uma profissional para cuidar da própria aparência e saúde. Chegam via busca/indicação, comparando opções, e precisam decidir rapidamente se agendam uma avaliação. Sensíveis a sinais de confiança (credencial profissional, experiência, resultados) e a sinais de amadorismo (site genérico, sem prova de regulamentação).

## Product Purpose

Site de presença profissional para Luana Amaral, Biomédica Esteta, que existe para converter uma visita em avaliação agendada (pelo WhatsApp). Sucesso é a visitante entender rapidamente quem é a profissional, o que ela oferece, por que confiar nela, e agir (agendar).

## Positioning

"Biomédica Esteta" com registro profissional ativo (CRBM) e mais de uma década de experiência — o diferencial declarado é rigor clínico/segurança combinado com resultado esteticamente natural, em vez do posicionamento de "influencer estética" comum na categoria. Um concorrente sem registro profissional visível ou sem tempo de experiência comparável não pode reivindicar a mesma posição de forma honesta.

## Operating Context

Visitante chega ao site (mobile, majoritariamente), navega Sobre/Diferenciais/Procedimentos/Dúvidas e converte por um único caminho: clique para o WhatsApp. O formulário por e-mail foi retirado a pedido da cliente (2026-09-24). A seção de contato mostra o endereço do consultório com um mapa do Google Maps incorporado.

## Capabilities and Constraints

- Site estático, sem CMS: qualquer atualização de conteúdo é edição direta de código.
- Sem backend: o mapa é um embed público do Google Maps (sem chave de API) e o agendamento é todo por link `wa.me`.
- Sem geração de imagem disponível neste ambiente de build — o site é construído direto em código (code-first), sem comp visual prévio.
- Conteúdo real ainda pendente de preenchimento pelo cliente antes de publicar (ver Evidence on Hand); o build atual usa placeholders claramente sinalizados para essas lacunas.

## Brand Commitments

- Nome: **Luana Amaral**. Título: **Biomédica Esteta**. Registro profissional: **CRBM 10922-5** (ativo). Confirmados como reais pelo cliente — tratar como fato, não como placeholder.
- Claims de marketing confirmadas como reais pelo cliente: **+10 anos de experiência**, **100% resultados naturais** (usar como está, sem reforçar com números adicionais não confirmados).
- Preferência visual permanente da cliente (2026-09): registro de **clínica estética premium "clean" atual** — base off-white quente, um único acento verde, tipografia sã (serif calma nos títulos, grotesca no texto), cantos moderados (nunca pill), fotografia em destaque. Régua de acabamento: sites de clínicas estéticas premium (Sculpt, Lasch e similares). Substitui o mundo rosa-boutique/pétala anterior; não reintroduzir sem novo pedido da cliente.
- Ajuste de cor (2026-09-09): a cliente achou o verde-sálvia acinzentado "morto" e pediu um acento **mais vivo**. O acento passou a ser uma família **verde-teal/jade viva** (`--teal-*`: fill `#0F766E`, hover/ícones/label `#115E59`, washes `#D2F0EC`, toque de jade `#14B8A6`) — mesma lógica de acento único, contraste AA mantido em todos os fundos. Off-white quente, tipografia, formas e sombras inalterados. Não voltar ao sálvia discreto sem novo pedido.
- Mudança de estrutura visual (2026-09-24, pedido explícito do usuário): o site passa a seguir a **estrutura e o estilo do site da Nádia Fadel** (repositório `Zafir07/Psicologa_Nadia_Fadel`, do mesmo autor): menu transparente que vira vidro ao rolar, formas orgânicas no fundo, foto com máscara orgânica e cartões flutuantes, botões em pílula, eyebrows em caixa alta, números grandes no hero, grades de cartões, faixas verde-escuras, CTA final e botão flutuante do WhatsApp. **As cores continuam as da Luana** (off-white quente + família verde-teal/jade) e as fontes continuam Spectral + Hanken Grotesk. Isso substitui as regras anteriores de "sem pílula / sem eyebrow / sem números grandes / sem forma orgânica".

## Evidence on Hand

Reais e confirmados (usar como fato): nome, título profissional, número CRBM, "+10 anos de experiência", "100% resultados naturais", WhatsApp **(51) 9849-3543** (`wa.me/555198493543`, formato de 8 dígitos confirmado pela cliente), endereço **Rua João Pessoa, 1018, Centro, Montenegro, RS, 95780-000**.

Ainda **não** confirmados — usar placeholder claramente sinalizado, nunca inventar como se fosse real:
- Lista de procedimentos oferecidos (usar lista placeholder típica de harmonização facial/corporal: preenchimento labial, toxina botulínica, bioestimulador de colágeno, contorno facial, harmonização corporal — a revisar pelo cliente).
- Depoimentos de pacientes (não inventar; a seção está omitida até haver depoimentos reais autorizados).
- Horários de atendimento, redes sociais, universidade/ano de formação: não exibir até a cliente informar.
- Fotos reais da profissional e dos procedimentos — usar placeholder visual (não fabricar uma foto de pessoa real).

## Product Principles

1. **Confiança antes de estética.** Todo elemento de credencial real (nome, CRBM, experiência) tem prioridade visual sobre decoração; nenhuma alegação não confirmada é apresentada como fato.
2. **Um clique até a ação.** O WhatsApp fica sempre acessível (header fixo, hero, seção de contato e, no celular, uma barra fixa de agendamento), nunca escondido atrás de mais de uma navegação.
3. **Placeholder é honesto, não é fabricação.** Onde falta conteúdo real (procedimentos, depoimentos, fotos, contato), o site sinaliza claramente que é placeholder a ser substituído, em vez de inventar dados como se fossem reais.
4. **Mobile-first.** A maioria das visitantes chega pelo celular; a experiência mobile não é uma versão reduzida da desktop, é a versão principal.

## Accessibility & Inclusion

Nenhum requisito específico informado pelo cliente. Aplicar o piso padrão do skill (contraste AA, alvos de toque ≥44px, hierarquia semântica, navegação por teclado) por ser um site de saúde/estética consultado por público amplo e diverso em idade.
