import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {
  LocalizedPortfolioContent,
  PORTFOLIO_CONTENT,
} from '../data/portfolioData';
import { Language } from '../types/portfolio';

const STORAGE_KEY = 'savio-portfolio-lang';

export interface UITranslations {
  nav: {
    home: string;
    projects: string;
    stack: string;
    education: string;
    experience: string;
    copyEmail: string;
    copied: string;
    copiedTooltip: string;
    resumeFile: string;
    commandsTitle: string;
    commandsLabel: string;
    backToTopAria: string;
    openMenuAria: string;
    closeMenuAria: string;
    switchLangTitle: string;
  };
  hero: {
    titlePrefix: string;
    titleHighlight: string;
    copyBtnPrefix: string;
    copiedEmailPrefix: string;
    pucTitle: string;
    pucSub: string;
    ufmaTitle: string;
    ufmaSub: string;
    cliCopied: string;
    runLabel: string;
    emptyBufferMsg: string;
    inputPlaceholder: string;
    termVerified: string;
    termMasterLabel: string;
    termMasterValue: string;
    termGradLabel: string;
    termGradValue: string;
    termRoleLabel: string;
    termRoleValue: string;
    termContactLabel: string;
    termHintPrefix: string;
    termHintSuffix: string;
    helpProfile: string;
    helpEdu: string;
    helpBtg: string;
    helpMama: string;
    helpStack: string;
    helpContact: string;
    inspectFullArch: string;
    emailCopiedTerminal: string;
    phoneLabel: string;
    locationLabel: string;
    unknownCmdPrefix: string;
    unknownCmdSuffix: string;
  };
  projects: {
    sectionKicker: string;
    sectionTitle: string;
    sectionSubtitle: string;
    domainFilterLabel: string;
    filteringByTag: string;
    filterByTitle: string;
    archLayersTitle: string;
    moduleSingular: string;
    modulePlural: string;
    viewDetailedArch: string;
  };
  modal: {
    closeAria: string;
    tab1: string;
    tab2Prefix: string;
    tab3: string;
    escToClose: string;
    overviewTitle: string;
    securityScaleTitle: string;
    pillarsTitle: string;
    diagramTitle: string;
    connectedLayersSuffix: string;
    dataFlowTitle: string;
    categorizedStackTitle: string;
    contextLabel: string;
    decisionLabel: string;
    resultLabel: string;
    copied: string;
    copy: string;
    closeInspection: string;
  };
  bento: {
    sectionKicker: string;
    sectionTitle: string;
    sectionSubtitle: string;
  };
  educationAndExp: {
    eduKicker: string;
    eduTitle: string;
    eduSubtitle: string;
    expKicker: string;
    expTitle: string;
    expSubtitle: string;
    contactKicker: string;
    contactTitle: string;
    officialEmailLabel: string;
    copyEmailBtn: string;
    copiedBtn: string;
    phoneWhatsappLabel: string;
    githubCardTitle: string;
    linkedinCardTitle: string;
    resumeCardTitle: string;
    resumeCardSubtitle: string;
    downloadPdfBtn: string;
    cliCardTitle: string;
    copyCliBtn: string;
  };
  commandPalette: {
    placeholder: string;
    noResultsPrefix: string;
    escToClose: string;
    switchLangActionTitle: string;
    switchLangCategory: string;
    inspectFlagshipTitle: string;
    projectsCategory: string;
    copyEmailTitlePrefix: string;
    contactCategory: string;
    gotoEduTitle: string;
    academicCategory: string;
    gotoStackTitle: string;
    navCategory: string;
    copyCliTitle: string;
    terminalCategory: string;
    downloadCvTitle: string;
    docCategory: string;
    openGithubTitle: string;
    openLinkedinTitle: string;
    socialCategory: string;
  };
  toast: {
    emailCopiedTitle: string;
    emailCopiedSub: string;
    cliCopiedTitle: string;
    cliCopiedSub: string;
    langSwitchedTitle: string;
    langSwitchedSub: string;
  };
  footer: {
    educationBadge: string;
  };
}

const UI_DICTIONARY: Record<Language, UITranslations> = {
  pt: {
    nav: {
      home: 'Início',
      projects: 'Projetos',
      stack: 'Stack',
      education: 'Educação',
      experience: 'Experiência',
      copyEmail: 'Copiar e-mail',
      copied: 'Copiado!',
      copiedTooltip: 'Copiado para a área de transferência',
      resumeFile: 'CV.pdf',
      commandsTitle: 'Abrir paleta de comandos (⌘K)',
      commandsLabel: 'Comandos',
      backToTopAria: 'Sávio Patrick — voltar ao início',
      openMenuAria: 'Abrir menu',
      closeMenuAria: 'Fechar menu',
      switchLangTitle: 'Alternar idioma (Português / Inglês)',
    },
    hero: {
      titlePrefix: 'Engenheiro de Software',
      titleHighlight: 'Full Stack & AI Software Engineer.',
      copyBtnPrefix: 'Copiar:',
      copiedEmailPrefix: 'E-mail Copiado',
      pucTitle: 'PUC-Rio · Mestrado em Informática',
      pucSub: 'Engenharia de Software (Previsão: 2027)',
      ufmaTitle: 'UFMA · Ciência da Computação',
      ufmaSub: 'Bacharelado Concluído · São Luís, MA',
      cliCopied: 'CLI Copiado',
      runLabel: 'Run:',
      emptyBufferMsg:
        'Buffer limpo. Digite help ou clique em um comando acima.',
      inputPlaceholder:
        'Comandos: educacao, btg-ml, projeto-mama, stack, contato...',
      termVerified: '✔ perfil verificado',
      termMasterLabel: 'Mestrado:',
      termMasterValue:
        'PUC-Rio — Informática (Eng. de Software · Prev. 2027)',
      termGradLabel: 'Graduação:',
      termGradValue: 'UFMA — Bacharelado em Ciência da Computação',
      termRoleLabel: 'Atuação:',
      termRoleValue: 'TeleMídia Lab (PUC-Rio) · Cooperação BTG Pactual',
      termContactLabel: 'Contacto:',
      termHintPrefix: 'Digite',
      termHintSuffix:
        'ou clique em um comando abaixo para inspecionar os projetos reais.',
      helpProfile: 'Perfil & resumo',
      helpEdu: 'PUC-Rio (Mestrado) & UFMA',
      helpBtg: 'Cooperação BTG Pactual / PUC-Rio',
      helpMama: 'Visão Computacional & AES-256',
      helpStack: 'Stack completa e idiomas',
      helpContact: 'Copiar e-mail e telefone',
      inspectFullArch: 'Inspecionar Arquitetura Completa',
      emailCopiedTerminal: '✔ E-mail copiado:',
      phoneLabel: 'Telefone:',
      locationLabel: 'Localização:',
      unknownCmdPrefix: 'Comando não reconhecido:',
      unknownCmdSuffix: 'Digite help para listar os comandos.',
    },
    projects: {
      sectionKicker: '01 // Cases Reais de Engenharia & Pesquisa Aplicada',
      sectionTitle: 'Projetos & Arquiteturas em Destaque',
      sectionSubtitle:
        'Sistemas reais desenvolvidos em cooperação bancária (BTG Pactual / PUC-Rio), saúde pública (+4.000 utilizadores), visão computacional médica (UFMA), plataformas educacionais em microsserviços e IoT.',
      domainFilterLabel: 'Domínio:',
      filteringByTag: 'Filtrando pela tecnologia:',
      filterByTitle: 'Filtrar por',
      archLayersTitle: 'Camadas da Arquitetura (Clique para inspecionar)',
      moduleSingular: 'módulo de arquitetura',
      modulePlural: 'módulos de arquitetura',
      viewDetailedArch: 'Visualizar Arquitetura Detalhada',
    },
    modal: {
      closeAria: 'Fechar modal de arquitetura',
      tab1: '1. Diagrama de Camadas, Métricas & Stack',
      tab2Prefix: '2. Decisões Arquiteturais',
      tab3: '3. Implementação & Código',
      escToClose: 'ESC para fechar',
      overviewTitle: 'Visão Geral da Arquitetura',
      securityScaleTitle: 'Segurança, Resiliência & Escalabilidade',
      pillarsTitle: 'Pilares & Métricas de Engenharia',
      diagramTitle:
        'Diagrama em Blocos Conectados das Camadas da Arquitetura',
      connectedLayersSuffix: 'camadas conectadas',
      dataFlowTitle: 'Pipeline de Dados & Comunicação',
      categorizedStackTitle: 'Stack Completa Categorizada do Projeto',
      contextLabel: 'Contexto',
      decisionLabel: 'Decisão de Engenharia',
      resultLabel: 'Resultado',
      copied: 'Copiado',
      copy: 'Copiar',
      closeInspection: 'Fechar Inspeção',
    },
    bento: {
      sectionKicker: '02 // Bento Grid · Stack Tecnológica & Idiomas',
      sectionTitle: 'Ecossistema Técnico & Arquitetura',
      sectionSubtitle:
        'Domínio de linguagens, frameworks web e mobile, arquitetura de microsserviços, bancos de dados, mensageria assíncrona, cloud e testes automatizados.',
    },
    educationAndExp: {
      eduKicker: '03 // Formação Académica & Pesquisa Científica',
      eduTitle: 'Educação: PUC-Rio & UFMA',
      eduSubtitle:
        'Formação de excelência em Ciência da Computação e pós-graduação stricto sensu em Engenharia de Software com pesquisa aplicada à indústria.',
      expKicker: '04 // Trajetória Profissional & Pesquisa',
      expTitle: 'Experiência Profissional (Timeline Técnica)',
      expSubtitle:
        'Histórico de atuação em engenharia de software, inteligência artificial aplicada, saúde digital e arquiteturas distribuídas.',
      contactKicker: '05 // Contacto Direto & Links Oficiais',
      contactTitle: 'Contacto & Redes',
      officialEmailLabel: 'E-mail Oficial',
      copyEmailBtn: 'Copiar E-mail',
      copiedBtn: 'Copiado!',
      phoneWhatsappLabel: 'Telefone / WhatsApp:',
      githubCardTitle: 'GitHub — Repositórios & Projetos',
      linkedinCardTitle: 'LinkedIn — Perfil Profissional',
      resumeCardTitle: 'Currículo Completo em PDF',
      resumeCardSubtitle: 'Sávio Patrick Costa Câmara · PUC-Rio & UFMA',
      downloadPdfBtn: 'Baixar PDF',
      cliCardTitle: 'Comando rápido do portfólio:',
      copyCliBtn: 'Copiar CLI',
    },
    commandPalette: {
      placeholder:
        'Pesquisar ação (ex: idioma, BTG, PUC-Rio, e-mail, GitHub)...',
      noResultsPrefix: 'Nenhum comando encontrado para',
      escToClose: 'ESC para fechar',
      switchLangActionTitle: 'Switch Language to English (PT → EN)',
      switchLangCategory: 'Idioma / Language',
      inspectFlagshipTitle:
        'Inspecionar Arquitetura: Cooperação BTG Pactual (TeleMídia PUC-Rio)',
      projectsCategory: 'Projetos & Arquitetura',
      copyEmailTitlePrefix: 'Copiar E-mail',
      contactCategory: 'Contacto',
      gotoEduTitle:
        'Ir para Educação (Mestrado PUC-Rio & Bacharelado UFMA)',
      academicCategory: 'Académico',
      gotoStackTitle: 'Ir para Stack Tecnológica & Idiomas (Bento Grid)',
      navCategory: 'Navegação',
      copyCliTitle: 'Copiar Comando CLI: npx savio-dev',
      terminalCategory: 'Terminal',
      downloadCvTitle: 'Baixar Currículo em PDF (CV.pdf)',
      docCategory: 'Documento',
      openGithubTitle: 'Abrir GitHub (github.com/saviopatrick)',
      openLinkedinTitle: 'Abrir LinkedIn (linkedin.com/in/saviopatrick)',
      socialCategory: 'Social',
    },
    toast: {
      emailCopiedTitle: 'E-mail copiado para a área de transferência',
      emailCopiedSub: 'Pronto para colar no seu cliente de e-mail.',
      cliCopiedTitle: 'Comando CLI copiado!',
      cliCopiedSub: 'Execute no seu terminal ou no simulador interativo.',
      langSwitchedTitle: 'Idioma alterado para Português (PT-BR)',
      langSwitchedSub: 'Preferência salva automaticamente.',
    },
    footer: {
      educationBadge: 'PUC-Rio (Mestrado) & UFMA (Ciência da Computação)',
    },
  },
  en: {
    nav: {
      home: 'Home',
      projects: 'Projects',
      stack: 'Stack',
      education: 'Education',
      experience: 'Experience',
      copyEmail: 'Copy email',
      copied: 'Copied!',
      copiedTooltip: 'Copied to clipboard',
      resumeFile: 'Resume.pdf',
      commandsTitle: 'Open Command Palette (⌘K)',
      commandsLabel: 'Commands',
      backToTopAria: 'Sávio Patrick — back to top',
      openMenuAria: 'Open menu',
      closeMenuAria: 'Close menu',
      switchLangTitle: 'Switch language (Portuguese / English)',
    },
    hero: {
      titlePrefix: 'Software Engineer',
      titleHighlight: 'Full Stack & AI Software Engineer.',
      copyBtnPrefix: 'Copy:',
      copiedEmailPrefix: 'Email Copied',
      pucTitle: 'PUC-Rio · M.Sc. in Informatics',
      pucSub: 'Software Engineering (Expected: 2027)',
      ufmaTitle: 'UFMA · B.Sc. in Computer Science',
      ufmaSub: 'Completed · São Luís, Brazil',
      cliCopied: 'CLI Copied',
      runLabel: 'Run:',
      emptyBufferMsg:
        'Buffer cleared. Type help or click a command above.',
      inputPlaceholder:
        'Commands: educacao, btg-ml, projeto-mama, stack, contact...',
      termVerified: '✔ profile verified',
      termMasterLabel: 'M.Sc.:',
      termMasterValue:
        'PUC-Rio — Informatics (Software Engineering · Exp. 2027)',
      termGradLabel: 'B.Sc.:',
      termGradValue: 'UFMA — Bachelor of Science in Computer Science',
      termRoleLabel: 'Current Role:',
      termRoleValue: 'TeleMídia Lab (PUC-Rio) · BTG Pactual Cooperation',
      termContactLabel: 'Contact:',
      termHintPrefix: 'Type',
      termHintSuffix:
        'or click a command below to inspect real engineering projects.',
      helpProfile: 'Profile & summary',
      helpEdu: 'PUC-Rio (M.Sc.) & UFMA (B.Sc.)',
      helpBtg: 'BTG Pactual / PUC-Rio R&D',
      helpMama: 'Computer Vision & AES-256-GCM',
      helpStack: 'Full tech stack & languages',
      helpContact: 'Copy email & phone number',
      inspectFullArch: 'Inspect Full Architecture',
      emailCopiedTerminal: '✔ Email copied:',
      phoneLabel: 'Phone:',
      locationLabel: 'Location:',
      unknownCmdPrefix: 'Command not recognized:',
      unknownCmdSuffix: 'Type help to list available commands.',
    },
    projects: {
      sectionKicker: '01 // Real Engineering Case Studies & Applied R&D',
      sectionTitle: 'Featured Projects & Architectures',
      sectionSubtitle:
        'Production systems built across banking R&D (BTG Pactual / PUC-Rio), digital public healthcare (4,000+ active users), medical computer vision (UFMA), educational microservices platforms, and IoT.',
      domainFilterLabel: 'Domain:',
      filteringByTag: 'Filtering by technology:',
      filterByTitle: 'Filter by',
      archLayersTitle: 'Architecture Layers (Click to inspect)',
      moduleSingular: 'architecture module',
      modulePlural: 'architecture modules',
      viewDetailedArch: 'View Detailed Architecture',
    },
    modal: {
      closeAria: 'Close architecture modal',
      tab1: '1. Layer Diagram, Metrics & Stack',
      tab2Prefix: '2. Architecture Decisions',
      tab3: '3. Implementation & Code',
      escToClose: 'ESC to close',
      overviewTitle: 'Architecture Overview',
      securityScaleTitle: 'Security, Resilience & Scalability',
      pillarsTitle: 'Engineering Pillars & Metrics',
      diagramTitle: 'Connected Block Diagram of Architecture Layers',
      connectedLayersSuffix: 'connected layers',
      dataFlowTitle: 'End-to-End Data & Communication Pipeline',
      categorizedStackTitle: 'Complete Categorized Project Stack',
      contextLabel: 'Context',
      decisionLabel: 'Engineering Decision',
      resultLabel: 'Outcome',
      copied: 'Copied',
      copy: 'Copy',
      closeInspection: 'Close Inspection',
    },
    bento: {
      sectionKicker: '02 // Bento Grid · Tech Stack & Languages',
      sectionTitle: 'Technical Ecosystem & Architecture',
      sectionSubtitle:
        'Proficiency across programming languages, web and mobile frameworks, microservices architecture, databases, asynchronous messaging, cloud, and automated testing.',
    },
    educationAndExp: {
      eduKicker: '03 // Academic Background & Scientific Research',
      eduTitle: 'Education: PUC-Rio & UFMA',
      eduSubtitle:
        'Excellence in Computer Science and graduate Software Engineering research with direct industry impact.',
      expKicker: '04 // Professional Trajectory & R&D',
      expTitle: 'Professional Experience (Technical Timeline)',
      expSubtitle:
        'Track record in software engineering, applied artificial intelligence, digital healthcare, and distributed architectures.',
      contactKicker: '05 // Direct Contact & Official Links',
      contactTitle: 'Contact & Networks',
      officialEmailLabel: 'Official Email',
      copyEmailBtn: 'Copy Email',
      copiedBtn: 'Copied!',
      phoneWhatsappLabel: 'Phone / WhatsApp:',
      githubCardTitle: 'GitHub — Repositories & Projects',
      linkedinCardTitle: 'LinkedIn — Professional Profile',
      resumeCardTitle: 'Full Resume in PDF (Resume.pdf)',
      resumeCardSubtitle: 'Sávio Patrick Costa Câmara · PUC-Rio & UFMA',
      downloadPdfBtn: 'Download PDF',
      cliCardTitle: 'Quick portfolio CLI command:',
      copyCliBtn: 'Copy CLI',
    },
    commandPalette: {
      placeholder:
        'Search command (e.g., language, BTG, PUC-Rio, email, GitHub)...',
      noResultsPrefix: 'No commands found for',
      escToClose: 'ESC to close',
      switchLangActionTitle: 'Switch Language to Portuguese (EN → PT)',
      switchLangCategory: 'Language / Idioma',
      inspectFlagshipTitle:
        'Inspect Architecture: BTG Pactual Cooperation (TeleMídia PUC-Rio)',
      projectsCategory: 'Projects & Architecture',
      copyEmailTitlePrefix: 'Copy Email',
      contactCategory: 'Contact',
      gotoEduTitle: 'Go to Education (M.Sc. PUC-Rio & B.Sc. UFMA)',
      academicCategory: 'Academic',
      gotoStackTitle: 'Go to Tech Stack & Languages (Bento Grid)',
      navCategory: 'Navigation',
      copyCliTitle: 'Copy CLI Command: npx savio-dev',
      terminalCategory: 'Terminal',
      downloadCvTitle: 'Download PDF Resume (Resume.pdf)',
      docCategory: 'Document',
      openGithubTitle: 'Open GitHub (github.com/saviopatrick)',
      openLinkedinTitle: 'Open LinkedIn (linkedin.com/in/saviopatrick)',
      socialCategory: 'Social',
    },
    toast: {
      emailCopiedTitle: 'Email copied to clipboard',
      emailCopiedSub: 'Ready to paste into your email client.',
      cliCopiedTitle: 'CLI command copied!',
      cliCopiedSub: 'Run it in your terminal or interactive simulator.',
      langSwitchedTitle: 'Language switched to English (EN-US)',
      langSwitchedSub: 'Preference saved automatically.',
    },
    footer: {
      educationBadge: 'PUC-Rio (M.Sc.) & UFMA (B.Sc. Computer Science)',
    },
  },
};

interface LanguageContextValue {
  lang: Language;
  setLang: (lang: Language) => void;
  toggleLang: () => void;
  t: UITranslations;
  content: LocalizedPortfolioContent;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

function getInitialLanguage(): Language {
  if (typeof window === 'undefined') return 'pt';
  try {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (stored === 'pt' || stored === 'en') return stored;
  } catch {
    // ignore storage errors
  }
  return 'pt';
}

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [lang, setLangState] = useState<Language>(getInitialLanguage);

  const setLang = useCallback((nextLang: Language) => {
    setLangState(nextLang);
    try {
      window.localStorage.setItem(STORAGE_KEY, nextLang);
    } catch {
      // ignore storage errors
    }
  }, []);

  const toggleLang = useCallback(() => {
    setLangState((prev) => {
      const next = prev === 'pt' ? 'en' : 'pt';
      try {
        window.localStorage.setItem(STORAGE_KEY, next);
      } catch {
        // ignore storage errors
      }
      return next;
    });
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en-US';
    document.title =
      lang === 'pt'
        ? 'Sávio Patrick Costa Câmara — Engenheiro de Software | Full Stack & AI'
        : 'Sávio Patrick Costa Câmara — Software Engineer | Full Stack & AI';
  }, [lang]);

  const value = useMemo<LanguageContextValue>(
    () => ({
      lang,
      setLang,
      toggleLang,
      t: UI_DICTIONARY[lang],
      content: PORTFOLIO_CONTENT[lang],
    }),
    [lang, setLang, toggleLang]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export function useLanguage(): LanguageContextValue {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return ctx;
}
