"""Generate the static blog pages for frontend/blog from the homepage chrome.

Header, mobile menu, floating WhatsApp button and footer are copied from
frontend/index.html so every page stays identical to the homepage.
"""
import json
import os
import re
from urllib.parse import quote

ROOT = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..", "frontend")
SITE = "https://drluanaamaral.com.br"
DATE = "2026-09-27"
DATE_BR = "27 de setembro de 2026"
WA = "https://wa.me/555198493543?text="

home = open(os.path.join(ROOT, "index.html"), encoding="utf-8").read()


def between(start, end):
    i = home.index(start)
    j = home.index(end, i) + len(end)
    return home[i:j]


def absolutize(html):
    html = re.sub(r'href="#(?!conteudo)', 'href="/#', html)
    html = html.replace('href="#topo"', 'href="/"')
    return html


chrome_top = absolutize(between("<!-- WHATSAPP FLUTUANTE -->", '<main id="conteudo">').replace('<main id="conteudo">', ""))
chrome_footer = absolutize(between('<footer class="footer">', "</footer>"))

ARTICLES = [
    {
        "slug": "toxina-botulinica-quanto-tempo-dura",
        "tag": "Facial",
        "title": "Toxina botulínica: quanto tempo dura e quando refazer",
        "desc": "Quando o efeito aparece, quanto tempo dura em média, os cuidados depois da aplicação e quando a toxina botulínica não é indicada.",
        "read": 4,
        "wa": "Olá, Luana! Li o artigo sobre toxina botulínica e gostaria de agendar uma avaliação.",
        "body": """
<p>A toxina botulínica é um dos procedimentos mais procurados da harmonização facial. Ela relaxa temporariamente os músculos responsáveis pelas linhas de expressão, como as da testa, entre as sobrancelhas e ao redor dos olhos. Quando bem indicada e aplicada na dose certa, suaviza as rugas sem tirar a naturalidade do rosto.</p>

<h2>Quando o efeito aparece</h2>
<p>O efeito não é imediato. Os primeiros sinais costumam aparecer entre 2 e 3 dias após a aplicação, e o resultado completo é visto por volta de 15 dias. Por isso é comum marcar um retorno nesse período, para avaliar se o resultado ficou equilibrado.</p>

<h2>Quanto tempo dura</h2>
<p>Em média, o efeito dura de 4 a 6 meses. Esse tempo varia de pessoa para pessoa e depende de fatores como:</p>
<ul>
  <li>metabolismo e idade;</li>
  <li>força da musculatura da região tratada;</li>
  <li>dose e técnica utilizadas;</li>
  <li>prática frequente de atividade física intensa;</li>
  <li>intervalo e regularidade entre as aplicações.</li>
</ul>
<p>Com o passar dos meses, o movimento volta de forma gradual. Não existe um “efeito rebote”: as rugas não ficam piores do que eram antes.</p>

<h2>Cuidados nas primeiras horas</h2>
<ul>
  <li>Evite deitar nas primeiras 4 horas.</li>
  <li>Não massageie nem pressione a região tratada.</li>
  <li>Evite exercícios intensos, sauna e calor excessivo no dia da aplicação.</li>
  <li>Siga as orientações passadas pela profissional no dia do procedimento.</li>
</ul>

<h2>Quando não é indicada</h2>
<p>A aplicação deve ser adiada ou evitada em algumas situações, como gestação e amamentação, doenças neuromusculares, infecção ou inflamação no local e alergia a algum componente da fórmula. Por isso a avaliação e a anamnese sempre vêm antes de qualquer aplicação.</p>

<h2>Como manter um resultado natural</h2>
<p>O objetivo não é “congelar” o rosto. A dose é ajustada para cada região e para cada pessoa, preservando a expressão e suavizando apenas o que incomoda. Um bom planejamento considera a anatomia, a idade e a forma como você se expressa.</p>
""",
    },
    {
        "slug": "preenchimento-labial-natural",
        "tag": "Facial",
        "title": "Preenchimento labial natural: o que esperar antes, durante e depois",
        "desc": "Como o preenchimento labial com ácido hialurônico funciona, o que esperar nos primeiros dias, quanto tempo dura e como manter a naturalidade.",
        "read": 4,
        "wa": "Olá, Luana! Li o artigo sobre preenchimento labial e gostaria de agendar uma avaliação.",
        "body": """
<p>O preenchimento labial com ácido hialurônico pode devolver volume, definir o contorno e melhorar a hidratação dos lábios. O ácido hialurônico é uma substância que já existe no nosso corpo, o que ajuda na integração com os tecidos.</p>

<h2>O que torna um preenchimento natural</h2>
<p>Resultado natural é aquele que combina com o seu rosto. Para isso, o planejamento considera:</p>
<ul>
  <li>a proporção entre o lábio superior e o inferior;</li>
  <li>a anatomia e o formato original dos seus lábios;</li>
  <li>o equilíbrio com o restante do rosto;</li>
  <li>volume aplicado de forma gradual, sem exageros.</li>
</ul>

<h2>Antes do procedimento</h2>
<p>Tudo começa por uma avaliação: conversamos sobre o que você deseja, seu histórico de saúde e o que faz sentido para o seu caso. Algumas condições, como gestação, amamentação, herpes labial ativa ou infecção na região, exigem que o procedimento seja adiado.</p>

<h2>Nos primeiros dias</h2>
<p>É normal que os lábios fiquem inchados e que apareçam pequenos hematomas nos primeiros dias. Esse inchaço diminui aos poucos, e o resultado final costuma ser avaliado depois de cerca de 15 dias. Nesse período, siga as orientações recebidas, como evitar calor intenso e exercícios pesados logo após a aplicação.</p>

<h2>Quanto tempo dura</h2>
<p>Em média, o preenchimento labial dura de 6 a 12 meses. O ácido hialurônico é absorvido gradualmente pelo organismo, e a duração varia conforme o produto, a quantidade aplicada e o metabolismo de cada pessoa.</p>

<h2>E se eu não gostar?</h2>
<p>Uma característica do ácido hialurônico é que ele pode ser dissolvido quando há indicação, com uma enzima específica. Mesmo assim, o melhor caminho é um planejamento cuidadoso desde o início, com volume adequado e expectativas alinhadas na avaliação.</p>
""",
    },
    {
        "slug": "bioestimulador-de-colageno",
        "tag": "Facial e corporal",
        "title": "Bioestimulador de colágeno: como funciona e quando aparece o resultado",
        "desc": "O que é o bioestimulador de colágeno, como ele age na pele, em quanto tempo o resultado aparece, quanto dura e a diferença para o preenchimento.",
        "read": 4,
        "wa": "Olá, Luana! Li o artigo sobre bioestimulador de colágeno e gostaria de agendar uma avaliação.",
        "body": """
<p>O colágeno dá firmeza e sustentação à pele. Com o passar dos anos, o corpo produz cada vez menos colágeno, e isso aparece como flacidez, perda de contorno e pele mais fina. O bioestimulador de colágeno é um tratamento que estimula o próprio organismo a voltar a produzir colágeno.</p>

<h2>Como funciona</h2>
<p>São substâncias aplicadas na pele, como o ácido poli-L-láctico e a hidroxiapatita de cálcio, que ativam a produção natural de colágeno. Diferente do preenchimento, o objetivo não é dar volume imediato, e sim melhorar a qualidade, a firmeza e a sustentação da pele ao longo do tempo.</p>

<h2>Quando o resultado aparece</h2>
<p>O resultado é gradual, porque depende da resposta do seu organismo. As primeiras mudanças costumam ser percebidas após algumas semanas, e o efeito mais visível aparece por volta de 2 a 3 meses. Em geral o tratamento é feito em mais de uma sessão, com intervalo definido na avaliação.</p>

<h2>Quanto tempo dura</h2>
<p>Como o colágeno produzido é do próprio corpo, o resultado costuma ser duradouro, em geral de 1 a 2 anos. A duração varia conforme a idade, a qualidade da pele, os hábitos (como sol e tabagismo) e o produto utilizado.</p>

<h2>Onde pode ser aplicado</h2>
<ul>
  <li><strong>Rosto:</strong> flacidez, contorno da mandíbula e qualidade da pele.</li>
  <li><strong>Pescoço e colo:</strong> firmeza e textura.</li>
  <li><strong>Corpo:</strong> áreas como glúteos, braços, abdômen e parte interna das coxas.</li>
</ul>

<h2>Bioestimulador ou preenchimento?</h2>
<p>O preenchimento repõe volume em pontos específicos e tem efeito imediato. O bioestimulador trata a qualidade da pele de forma gradual e mais ampla. Muitas vezes os dois se complementam, e a indicação certa depende da sua avaliação individual.</p>
""",
    },
]

ICON = """<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><path d="M12 3.5c.9 3.7 2.6 5.4 6.3 6.3-3.7.9-5.4 2.6-6.3 6.3-.9-3.7-2.6-5.4-6.3-6.3 3.7-.9 5.4-2.6 6.3-6.3Z" stroke-linejoin="round"/></svg>"""
ARROW = """<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" stroke-linecap="round" stroke-linejoin="round"/></svg>"""


def head(title, desc, url, extra_ld):
    return f"""<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>{title}</title>
<meta name="description" content="{desc}">
<meta name="robots" content="index, follow">
<meta name="theme-color" content="#FAF8F5">
<link rel="canonical" href="{url}">
<link rel="icon" href="/favicon.ico" sizes="any">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="/apple-touch-icon.png">
<link rel="manifest" href="/site.webmanifest">
<meta property="og:title" content="{title}">
<meta property="og:description" content="{desc}">
<meta property="og:type" content="article">
<meta property="og:url" content="{url}">
<meta property="og:image" content="{SITE}/assets/luana-amaral-hero.jpg">
<meta property="og:locale" content="pt_BR">
<script type="application/ld+json">
{json.dumps(extra_ld, ensure_ascii=False, indent=2)}
</script>
<link rel="preload" href="/assets/fonts/hanken-grotesk-400-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="preload" href="/assets/fonts/spectral-500-latin.woff2" as="font" type="font/woff2" crossorigin>
<link rel="stylesheet" href="/assets/fonts.css">
<link rel="stylesheet" href="/css/style.css">
</head>
<body class="page-blog">

<a class="skip-link" href="#conteudo">Pular para o conteúdo</a>

{chrome_top}
<main id="conteudo">
"""


def tail():
    return f"""
</main>

{chrome_footer}

<script src="/js/main.js"></script>
</body>
</html>
"""


def card(a, heading="h2"):
    return f"""        <article class="post-card">
          <span class="tag">{a['tag']}</span>
          <{heading}><a href="/blog/{a['slug']}/">{a['title']}</a></{heading}>
          <p>{a['desc']}</p>
          <span class="post-card__more">Ler artigo {ARROW}</span>
        </article>"""


PUBLISHER = {"@type": "Organization", "name": "Luana Amaral — Biomédica Esteta", "url": SITE + "/",
             "logo": {"@type": "ImageObject", "url": SITE + "/icon-512.png"}}

# ---------- Articles ----------
for a in ARTICLES:
    url = f"{SITE}/blog/{a['slug']}/"
    ld = {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": a["title"],
        "description": a["desc"],
        "datePublished": DATE,
        "dateModified": DATE,
        "inLanguage": "pt-BR",
        "mainEntityOfPage": url,
        "image": SITE + "/assets/luana-amaral-hero.jpg",
        "author": PUBLISHER,
        "publisher": PUBLISHER,
    }
    others = [o for o in ARTICLES if o is not a]
    html = head(f"{a['title']} | Luana Amaral — Biomédica Esteta", a["desc"], url, ld)
    html += f"""
  <!-- Conteúdo educativo: revisar com a Luana antes de divulgar amplamente. -->
  <article class="article">
    <div class="container article__container">
      <nav class="breadcrumb" aria-label="Você está em">
        <a href="/">Início</a><span aria-hidden="true">/</span><a href="/blog/">Blog</a><span aria-hidden="true">/</span><span aria-current="page">{a['tag']}</span>
      </nav>
      <p class="eyebrow">{a['tag']}</p>
      <h1>{a['title']}</h1>
      <p class="article__meta">Publicado em <time datetime="{DATE}">{DATE_BR}</time> · {a['read']} min de leitura</p>
      <div class="prose">{a['body']}</div>

      <aside class="article-cta">
        <div>
          <h2>Quer saber se é indicado para você?</h2>
          <p>Cada caso é único. Agende uma avaliação e converse diretamente com a Luana.</p>
        </div>
        <a href="{WA}{quote(a['wa'])}" class="btn btn--accent" target="_blank" rel="noopener">Agendar pelo WhatsApp</a>
      </aside>

      <p class="article__note">Este conteúdo é informativo e não substitui uma avaliação individual com profissional habilitado.</p>
    </div>
  </article>

  <section class="related section-pad-sm">
    <div class="container">
      <h2 class="related__title">Continue lendo</h2>
      <div class="post-grid post-grid--two">
{chr(10).join(card(o, 'h3') for o in others)}
      </div>
    </div>
  </section>
"""
    html += tail()
    os.makedirs(os.path.join(ROOT, "blog", a["slug"]), exist_ok=True)
    open(os.path.join(ROOT, "blog", a["slug"], "index.html"), "w", encoding="utf-8").write(html)

# ---------- Blog index ----------
url = f"{SITE}/blog/"
ld = {"@context": "https://schema.org", "@type": "Blog", "name": "Blog — Luana Amaral", "url": url,
      "publisher": PUBLISHER,
      "blogPost": [{"@type": "BlogPosting", "headline": a["title"], "url": f"{SITE}/blog/{a['slug']}/", "datePublished": DATE} for a in ARTICLES]}
desc = "Conteúdos sobre harmonização facial e corporal: toxina botulínica, preenchimento labial, bioestimulador de colágeno e cuidados antes e depois."
html = head("Blog | Luana Amaral — Biomédica Esteta em Montenegro-RS", desc, url, ld)
html += f"""
  <section class="blog-hero">
    <div class="container">
      <nav class="breadcrumb" aria-label="Você está em">
        <a href="/">Início</a><span aria-hidden="true">/</span><span aria-current="page">Blog</span>
      </nav>
      <p class="eyebrow">Blog</p>
      <h1>Informação clara antes de qualquer procedimento</h1>
      <p class="lead">Como os procedimentos funcionam, quanto tempo duram e quais cuidados tomar, explicado de forma simples.</p>
    </div>
  </section>

  <section class="blog-list section-pad-sm">
    <div class="container">
      <div class="post-grid">
{chr(10).join(card(a) for a in ARTICLES)}
      </div>
    </div>
  </section>
"""
html += tail()
os.makedirs(os.path.join(ROOT, "blog"), exist_ok=True)
open(os.path.join(ROOT, "blog", "index.html"), "w", encoding="utf-8").write(html)

# ---------- Homepage teaser (between markers) ----------
teaser = f"""<!-- BLOG:START -->
  <section class="home-blog section-pad" id="blog">
    <div class="container">
      <div class="section-head section-head--center reveal">
        <p class="eyebrow eyebrow--center">Blog</p>
        <h2>Entenda antes de decidir</h2>
        <p>Conteúdos simples sobre os procedimentos, o que esperar e como cuidar do resultado.</p>
      </div>
      <div class="post-grid reveal">
{chr(10).join(card(a, 'h3') for a in ARTICLES)}
      </div>
      <p class="home-blog__all"><a href="/blog/" class="btn btn--outline">Ver todos os conteúdos</a></p>
    </div>
  </section>
  <!-- BLOG:END -->"""
idx_path = os.path.join(ROOT, "index.html")
idx = open(idx_path, encoding="utf-8").read()
if "<!-- BLOG:START -->" in idx:
    idx = re.sub(r"<!-- BLOG:START -->.*?<!-- BLOG:END -->", teaser, idx, flags=re.S)
else:
    idx = idx.replace("  <!-- FAQ -->", teaser + "\n\n  <!-- FAQ -->", 1)
open(idx_path, "w", encoding="utf-8").write(idx)

# ---------- Sitemap ----------
urls = [SITE + "/", SITE + "/blog/"] + [f"{SITE}/blog/{a['slug']}/" for a in ARTICLES]
sm = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n'
sm += "".join(f"  <url>\n    <loc>{u}</loc>\n    <lastmod>{DATE}</lastmod>\n  </url>\n" for u in urls)
sm += "</urlset>\n"
open(os.path.join(ROOT, "sitemap.xml"), "w", encoding="utf-8").write(sm)
print("ok", [a["slug"] for a in ARTICLES])
