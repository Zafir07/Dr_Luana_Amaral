---
version: 1
slug: "frontend-index-html"
primary_target: "frontend/index.html"
related_targets: []
---

## Scope

Single-page site (`frontend/index.html`): header, hero, sobre, diferenciais, procedimentos, depoimentos, FAQ, contato, footer. Visitor mode: Persuade (a visitante decide agendar uma avaliação).

## Audience / job / action / constraints

Pessoas avaliando se confiam nessa profissional para um procedimento estético; precisam ver credencial (CRBM), experiência e resultado natural antes de agir. Ação: WhatsApp ou formulário `POST /api/contact`. Constraints: nenhuma alegação não confirmada (ver PRODUCT.md Evidence on Hand); manter a foto atual da Dra., todo o copy redacional e os dois caminhos de conversão intactos.

## Direction contract

THESIS: Clínica estética premium atual com acabamento de mundo corporativo — grid firme, tipografia sã, um acento discreto — e a foto real mais as credenciais carregando a confiança. Recusa o mundo rosa-boutique anterior: pill buttons, moldura pétala orgânica e o template de três números gigantes.

OWN-WORLD: Base off-white quente (#FAF8F5), cards brancos, tinta carvão quente (nunca cinza puro); acento único verde-sálvia (#54655A / #8B9D87 / wash #EBEEE6) em botões, links, ícones e washes. Spectral (serif calma e discreta) nos títulos; Hanken Grotesk em todo o resto. Cantos moderados (8–20px, nunca pill), sombras neutras com offset+blur real (nunca halo), no máximo um cartão dentro de uma seção.

STORY: Em segundos a visitante vê uma profissional registrada (CRBM ativo), experiente (+10 anos), com resultado natural — e agenda pelo WhatsApp ou pelo formulário.

FIRST VIEWPORT: Header limpo fixo (ganha só uma sombra fina ao rolar). Duas colunas — esquerda: h1 serif de duas linhas, lead, dois botões (primário sólido verde + secundário com contorno), e uma linha de credenciais em lista com ícone de check (CRBM ativo · +10 anos · resultado natural), nunca números gigantes; direita: foto da Dra. em retângulo arredondado (20px) sobre um wash sálvia deslocado, com um card branco de credencial CRBM sobreposto ao canto inferior.

FORM: Standing exit — o padrão da categoria (clínica estética premium, régua Sculpt/Lasch) executado direto, escolhido pela cliente via decisão estruturada; sem sorteio de conceito, sem seed key.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
