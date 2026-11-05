# JF Cartas

Landing page estática no estilo link na bio para a **JF Cartas – Baralho Cigano**. A página apresenta a marca e um único botão de CTA que abre uma conversa no WhatsApp.

## Estrutura

```
.
├── index.html
├── src/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── script.js
│   └── img/
│       ├── background.webp
│       ├── background-mobile.webp
│       ├── favicon.webp
│       └── logo.webp
├── LICENSE
└── README.md
```

## Stacks

- **HTML5** — página única e semântica.
- **CSS3** — variáveis, Flexbox, media queries e unidades de viewport (`svh`); sem framework.
- **JavaScript puro** — monta o link do WhatsApp e atualiza o ano do footer.
- **WebP** — formato das imagens.
- **Fontes do sistema** — Georgia/serifada, sem carregamento externo.

Sem etapa de build, gerenciador de pacotes ou dependências.

## Como visualizar

Abra `index.html` no navegador ou sirva a pasta localmente:

```bash
python3 -m http.server 8000
```

Acesse `http://localhost:8000`.

## Configuração

O número e a mensagem do WhatsApp ficam nas constantes de `src/js/script.js`.
