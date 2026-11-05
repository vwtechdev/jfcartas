# JF Cartas

Landing page estática no estilo link na bio para a **JF Cartas – Baralho Cigano**. A página apresenta a marca e um único botão de CTA que abre uma conversa no WhatsApp.

## Estrutura

```
.
├── index.html
├── manifest.webmanifest
├── robots.txt
├── sitemap.xml
├── src/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── script.js
│   └── img/
│       ├── apple-touch-icon.png
│       ├── background.webp
│       ├── background-mobile.webp
│       ├── favicon.webp
│       ├── icon-192.png
│       ├── icon-512.png
│       ├── logo.webp
│       └── og-image.jpg
├── LICENSE
└── README.md
```

## Stacks

- **HTML5** — página única e semântica.
- **CSS3** — variáveis, Flexbox, media queries e unidades de viewport (`svh`); sem framework.
- **JavaScript puro** — atualiza o ano do footer.
- **WebP/PNG/JPEG** — formatos das imagens.
- **Fontes do sistema** — Georgia/serifada, sem carregamento externo.

Sem etapa de build, gerenciador de pacotes ou dependências.

## Como visualizar

Abra `index.html` no navegador ou sirva a pasta localmente:

```bash
python3 -m http.server 8000
```

Acesse `http://localhost:8000`.

**VWTech Dev** - Soluções em Tecnologia
