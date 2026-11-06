# GEMINI.md — Documentação de Arquitetura do Portfólio (`Sávio Patrick Costa Câmara`)

Este documento descreve a arquitetura técnica, o Design System, a hierarquia de componentes e os contratos de dados do portfólio profissional de **Sávio Patrick Costa Câmara** (`Engenheiro de Software | Full Stack Developer & AI Software Engineer`).

---

## 1. Perfil, Contacto & Formação Académica

- **Nome**: Sávio Patrick Costa Câmara
- **Título**: Engenheiro de Software | Full Stack Developer & AI Software Engineer
- **Localização**: Rio de Janeiro, RJ
- **Telefone**: `(98) 97010-8797`
- **E-mail**: `saviopatrickc@gmail.com`
- **LinkedIn**: `https://linkedin.com/in/saviopatrick`
- **GitHub**: `https://github.com/saviopatrick`
- **Educação**:
  1. **Pontifícia Universidade Católica do Rio de Janeiro (PUC-Rio)** — Mestrado em Informática (Engenharia de Software) | Rio de Janeiro, RJ | Previsão: 2027
  2. **Universidade Federal do Maranhão (UFMA)** — Bacharelado em Ciência da Computação | São Luís, MA | Concluído

---

## 2. Stack Tecnológica do Portfólio

- **Core**: React 19 + TypeScript (`strict: true`)
- **Build & Bundler**: Vite 6
- **Estilização & Animações**: Tailwind CSS 3.4 + Framer Motion + utilitários customizados em `src/index.css`
- **Ícones**: `lucide-react` + `BrandIcons` (GitHub/LinkedIn)

---

## 3. Estrutura de Diretórios

```text
/Users/saviopatrick/portfolio-dev
├── public/
│   ├── curriculo-savio-patrick.pdf   # Currículo técnico em PDF atualizado
│   └── favicon.svg                   # Ícone vetorial estilo terminal
├── src/
│   ├── components/
│   │   ├── ui/
│   │   │   ├── BrandIcons.tsx        # Ícones vetoriais para GitHub e LinkedIn
│   │   │   ├── Reveal.tsx            # RevealGroup: reveal em cascata (whileInView + staggerChildren)
│   │   │   ├── SpotlightCard.tsx     # Card reutilizável com efeito radial de spotlight no cursor
│   │   │   └── Toast.tsx             # Sistema de notificação flutuante para cópia de E-mail/CLI
│   │   ├── Navbar.tsx                # Header flutuante glass: pílula deslizante (layoutId), scroll-spy, drawer mobile
│   │   ├── HeroSection.tsx           # Hero com dados reais, links diretos e terminal interativo
│   │   ├── ProjectsSection.tsx       # Cases reais (BTG Pactual/PUC-Rio, Projeto Mama, Conecta Santa Rita, Cosmo, AutoDomo)
│   │   ├── ArchitectureModal.tsx     # Modal interativo de arquitetura (Topologia, ADRs e Implementação)
│   │   ├── BentoEngineeringSection.tsx # Bento Grid com todas as categorias da stack real e idiomas
│   │   ├── ExperienceSection.tsx     # Secção Académica (PUC-Rio & UFMA) + Timeline Técnica + Contacto
│   │   ├── CommandPalette.tsx        # Barra de comandos estilo Raycast/Linear acionada via ⌘K / Ctrl+K
│   │   └── Footer.tsx                # Rodapé minimalista
│   ├── context/
│   │   └── LanguageContext.tsx       # Contexto de internacionalização (PT-BR / EN-US) com localStorage
│   ├── data/
│   │   └── portfolioData.ts          # Fonte única de verdade (PT e EN) com 100% dos dados reais do perfil
│   ├── hooks/
│   │   └── useActiveSection.ts       # Scroll-spy via IntersectionObserver (seção ativa da navbar)
│   ├── lib/
│   │   └── motion.ts                 # Presets Framer Motion (PILL_SPRING, buttonMotion, stagger/fadeUp)
│   ├── types/
│   │   └── portfolio.ts              # Contratos e interfaces TypeScript
│   ├── App.tsx                       # Orquestração de estado global, modais, atalhos de teclado e spotlight
│   ├── main.tsx                      # Entrypoint React 19
│   └── index.css                     # Tokens visuais, grid pattern e customizações Tailwind
└── GEMINI.md                         # Documentação arquitetural do projeto
```

---

## 4. Comandos de Desenvolvimento, Build & Preview

```bash
# Instalar dependências
npm install

# Rodar servidor de desenvolvimento
npm run dev

# Executar checagem estrita de TypeScript (tsc -b) e build de produção (vite build)
npm run build

# Subir servidor de preview da build de produção
npm run preview
```
