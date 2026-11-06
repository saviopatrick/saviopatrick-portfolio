import {
  EducationItem,
  ExperienceItem,
  Language,
  ProfileData,
  ProjectCategoryOption,
  ProjectItem,
  StackCategoryItem,
} from '../types/portfolio';

export interface LocalizedPortfolioContent {
  profile: ProfileData;
  education: EducationItem[];
  projectCategories: ProjectCategoryOption[];
  projects: ProjectItem[];
  stackCategories: StackCategoryItem[];
  experience: ExperienceItem[];
}

const PT_CONTENT: LocalizedPortfolioContent = {
  profile: {
    name: 'Sávio Patrick Costa Câmara',
    shortName: 'Sávio Patrick',
    handle: 'saviopatrick',
    npxCommand: 'npx savio-dev',
    role: 'Engenheiro de Software | Full Stack Developer & AI Software Engineer',
    headline:
      'Engenharia de Software, Arquitetura Distribuída & Inteligência Artificial Aplicada.',
    subheadline:
      'Mestrando em Informática (Engenharia de Software) na PUC-Rio e Bacharel em Ciência da Computação pela UFMA. Atuação em pesquisa aplicada e desenvolvimento de sistemas de missão crítica em Machine Learning em tempo real (cooperação BTG Pactual), plataformas de saúde em larga escala e arquiteturas de microsserviços.',
    email: 'saviopatrickc@gmail.com',
    phone: '(98) 97010-8797',
    github: 'https://github.com/saviopatrick',
    linkedin: 'https://linkedin.com/in/saviopatrick',
    resumeUrl: '/curriculo-savio-patrick.pdf',
    location: 'Rio de Janeiro, RJ',
    availability:
      'AI Software Engineer & Pesquisador Mestrado @ TeleMídia Lab — PUC-Rio',
  },
  education: [
    {
      id: 'puc-rio-mestrado',
      institution:
        'Pontifícia Universidade Católica do Rio de Janeiro (PUC-Rio)',
      shortName: 'PUC-Rio',
      degree: 'Mestrado em Informática (Engenharia de Software)',
      field: 'Área de Concentração: Engenharia de Software',
      location: 'Rio de Janeiro, RJ',
      status: 'Previsão: 2027',
      badge: 'Mestrado · Em andamento',
      highlights: [
        'Pesquisador no laboratório TeleMídia Lab (PUC-Rio) em projeto de cooperação com o banco BTG Pactual.',
        'Pesquisa aplicada com técnicas avançadas de Inteligência Artificial e Machine Learning voltadas ao setor financeiro, focando na escalabilidade da infraestrutura e na precisão dos modelos preditivos em tempo real.',
      ],
    },
    {
      id: 'ufma-ciencia-computacao',
      institution: 'Universidade Federal do Maranhão (UFMA)',
      shortName: 'UFMA',
      degree: 'Bacharelado em Ciência da Computação',
      field: 'Graduação Completa em Ciência da Computação',
      location: 'São Luís, MA',
      status: 'Concluído',
      badge: 'Bacharelado · Concluído',
      highlights: [
        'Pesquisador de Graduação no TeleMídia Lab (UFMA) como Bolsista FAPEMA e no Projeto Mama (UFMA).',
        'Sólida base em engenharia de software, sistemas distribuídos, microsserviços, visão computacional médica, segurança criptográfica (AES-256-GCM) e desenvolvimento full stack.',
      ],
    },
  ],
  projectCategories: [
    { id: 'all', label: 'Todos' },
    { id: 'ai-ml', label: 'AI & Machine Learning' },
    { id: 'microservices-backend', label: 'Microsserviços & Backend' },
    { id: 'frontend-web', label: 'Frontend & Web' },
    { id: 'mobile-health-iot', label: 'Mobile & Saúde/IoT' },
  ],
  projects: [
    {
      id: 'btg-telemidia-pucrio',
      slug: 'cooperacao-btg-pactual-telemidia-puc-rio',
      title:
        'Hiperpersonalização Financeira com ML em Tempo Real (Cooperação BTG Pactual)',
      subtitle:
        'TeleMídia Lab — PUC-Rio · Pipelines de Dados, Machine Learning & IA Aplicada ao Setor Financeiro',
      organization: 'TeleMídia Lab - PUC-Rio (Cooperação BTG Pactual)',
      contextBadge: 'BTG Pactual · PUC-Rio',
      stackGroups: [
        {
          label: 'IA & Machine Learning',
          items: ['Machine Learning', 'Inteligência Artificial', 'Python'],
        },
        {
          label: 'Dados & Processamento',
          items: ['Data Pipelines', 'Real-Time Processing'],
        },
        {
          label: 'Engenharia de Software',
          items: ['TypeScript', 'Engenharia de Software'],
        },
      ],
      period: 'Abr/2026 – Presente',
      location: 'Rio de Janeiro, RJ',
      flagship: true,
      categories: ['ai-ml', 'microservices-backend'],
      tags: [
        'Machine Learning',
        'Inteligência Artificial',
        'Python',
        'TypeScript',
        'Data Pipelines',
        'Real-Time Processing',
        'Engenharia de Software',
      ],
      summary:
        'Desenvolvimento de soluções de Machine Learning em cooperação com o banco BTG Pactual para a hiperpersonalização do atendimento e dos serviços oferecidos aos clientes. Implementação de pipelines de dados e integração de modelos preditivos para processamento de informações em tempo real com foco em escalabilidade e precisão.',
      impactMetrics: [
        {
          label: 'Cooperação',
          value: 'BTG Pactual',
          detail: 'TeleMídia Lab · PUC-Rio',
        },
        {
          label: 'Processamento',
          value: 'Tempo Real',
          detail: 'Pipelines de dados & inferência ML',
        },
        {
          label: 'Domínio',
          value: 'FinTech & IA',
          detail: 'Hiperpersonalização de serviços',
        },
        {
          label: 'Foco Técnico',
          value: 'Alta Escala',
          detail: 'Precisão de modelos preditivos',
        },
      ],
      architecture: {
        overview:
          'Arquitetura voltada para ingestão e processamento de eventos em tempo real, conectando pipelines de dados escaláveis a modelos de aprendizado de máquina para hiperpersonalização do atendimento e recomendação contextualizada de serviços financeiros.',
        securityAndScale:
          'Infraestrutura projetada para alta disponibilidade, baixa latência na inferência em tempo real e rigor no tratamento de dados do setor financeiro.',
        dataFlowSummary:
          'Eventos e Contexto do Cliente → Pipeline de Ingestão e Feature Engineering em Tempo Real → Integração de Modelos de Machine Learning → Motor de Hiperpersonalização de Atendimento e Serviços.',
        nodes: [
          {
            id: 'btg-node-1',
            title: '1. Pipelines de Dados em Tempo Real',
            layer: 'DATA ENGINEERING & STREAMING',
            tech: 'Python · Pipelines de Dados · Processamento Real-Time',
            badge: 'Real-Time Ingestion',
            description:
              'Captura, transformação e disponibilização contínua de sinais e informações operacionais para alimentar os modelos de Machine Learning em tempo real.',
            details: [
              'Processamento contínuo de informações com foco em baixa latência',
              'Padronização e validação de atributos para consumo pelos modelos preditivos',
            ],
          },
          {
            id: 'btg-node-2',
            title: '2. Integração de Modelos de Machine Learning',
            layer: 'AI & PREDICTIVE ENGINE',
            tech: 'Machine Learning · Inteligência Artificial · Python',
            badge: 'Predictive ML',
            description:
              'Acoplamento de modelos preditivos ao fluxo transacional e de atendimento, permitindo inferência rápida e contextualizada por perfil de cliente.',
            details: [
              'Foco direto na precisão dos modelos preditivos em cenários reais do setor financeiro',
              'Arquitetura modular facilitando evolução e experimentação científica',
            ],
          },
          {
            id: 'btg-node-3',
            title: '3. Camada de Hiperpersonalização & Escalabilidade',
            layer: 'SERVICE DELIVERY & SCALE',
            tech: 'Engenharia de Software · Infraestrutura Escalável',
            badge: 'High Scalability',
            description:
              'Entrega de recomendações e personalização dinâmica de serviços e atendimento aos clientes com alta resiliência.',
            details: [
              'Pesquisa aplicada unindo rigor acadêmico (PUC-Rio) e demandas reais de escala bancária',
              'Monitoramento de performance e escalabilidade da infraestrutura de IA',
            ],
          },
        ],
        adrs: [
          {
            id: 'ADR-BTG-01',
            title:
              'Pipelines de Processamento em Tempo Real para Hiperpersonalização',
            status: 'Em Produção',
            context:
              'A hiperpersonalização efetiva no setor financeiro exige que o contexto atualizado do cliente seja processado no momento exato da interação.',
            decision:
              'Implementamos pipelines de dados integrados diretamente aos modelos de aprendizado de máquina para processamento e inferência em tempo real.',
            consequence:
              'Elevação da capacidade de resposta contextualizada e da precisão preditiva na oferta de serviços e atendimento.',
          },
        ],
        snippets: [
          {
            title:
              'Pipeline de Integração e Inferência em Tempo Real (Arquitetura)',
            language: 'python',
            filename: 'pipeline/realtime_personalization.py',
            code: `from dataclasses import dataclass
from typing import Any, Protocol

@dataclass(frozen=True)
class ClientInteractionEvent:
    client_id: str
    channel: str
    timestamp_ms: int
    features: dict[str, Any]

class PredictiveModelPort(Protocol):
    def predict_personalization(self, feature_vector: dict[str, Any]) -> dict[str, Any]:
        ...

class RealTimePersonalizationPipeline:
    def __init__(self, model: PredictiveModelPort) -> None:
        self._model = model

    def process_event(self, event: ClientInteractionEvent) -> dict[str, Any]:
        enriched_features = {
            **event.features,
            "channel": event.channel,
            "event_ts": event.timestamp_ms,
        }
        prediction = self._model.predict_personalization(enriched_features)
        return {
            "client_id": event.client_id,
            "personalized_services": prediction.get("recommended_actions", []),
            "confidence_score": prediction.get("score", 0.0),
        }`,
          },
        ],
      },
    },
    {
      id: 'projeto-mama-ufma',
      slug: 'projeto-mama-ufma-visao-computacional',
      title:
        'Projeto Mama — Ecossistema Distribuído de Visão Computacional Médica',
      subtitle:
        'UFMA · React Native, Node.js (NestJS), Python (Flask/FastAPI), RabbitMQ & AES-256-GCM',
      organization: 'Projeto Mama - UFMA',
      contextBadge: 'UFMA · Visão Computacional',
      stackGroups: [
        { label: 'Mobile & Frontend', items: ['React Native'] },
        {
          label: 'Backend & IA',
          items: [
            'Node.js (NestJS)',
            'Python (Flask/FastAPI)',
            'Visão Computacional',
          ],
        },
        {
          label: 'Mensageria & DevOps',
          items: ['RabbitMQ', 'Docker', 'Docker Compose'],
        },
        {
          label: 'Segurança & Banco de Dados',
          items: ['AES-256-GCM (DICOM)', 'PostgreSQL', 'Object Storage'],
        },
      ],
      period: 'Jun/2024 – Jun/2025',
      location: 'São Luís, MA (Híbrido)',
      flagship: true,
      categories: ['ai-ml', 'microservices-backend', 'mobile-health-iot'],
      tags: [
        'React Native',
        'Node.js (NestJS)',
        'Python (Flask/FastAPI)',
        'Visão Computacional',
        'AES-256-GCM (DICOM)',
        'RabbitMQ',
        'Docker Compose',
        'PostgreSQL',
      ],
      summary:
        'Fundação distribuída para apoio ao planeamento cirúrgico e análise de imagens médicas. Desacopla o módulo de Visão Computacional (segmentação em Python Flask/FastAPI) dos serviços de gestão de metadados e autenticação (NestJS), utilizando RabbitMQ para processamento assíncrono e cifragem AES-256-GCM para ficheiros DICOM.',
      impactMetrics: [
        {
          label: 'Segurança Médica',
          value: 'AES-256-GCM',
          detail: 'Cifragem DICOM em repouso e trânsito',
        },
        {
          label: 'Mensageria',
          value: 'RabbitMQ',
          detail: 'Exames alta resolução assíncronos',
        },
        {
          label: 'Backend Híbrido',
          value: 'NestJS + Python',
          detail: 'APIs resilientes + Segmentação IA',
        },
        {
          label: 'Infraestrutura',
          value: 'Docker + PG',
          detail: 'PostgreSQL + Object Storage',
        },
      ],
      architecture: {
        overview:
          'Ecossistema distribuído que separa o plano de controle clínico (autenticação, metadados relacionais no PostgreSQL e aplicação mobile em React Native) do motor pesado de Visão Computacional em Python (Flask/FastAPI).',
        securityAndScale:
          'Serviço de segurança centralizado aplicando cifragem autenticada AES-256-GCM em ficheiros médicos (DICOM/Imagens) tanto em repouso quanto em trânsito, aliado a filas RabbitMQ para não bloquear a interface do utilizador.',
        dataFlowSummary:
          'App Mobile (React Native) → API Gateway & Core (Node.js / NestJS) → Serviço de Cifragem AES-256-GCM → Broker RabbitMQ → Worker Python (Flask/FastAPI · Segmentação de Imagem) → PostgreSQL + Object Storage.',
        nodes: [
          {
            id: 'mama-node-1',
            title: '1. Aplicação Mobile Clínica (React Native)',
            layer: 'MOBILE FRONTEND',
            tech: 'React Native · TypeScript',
            badge: 'Mobile App',
            description:
              'Interface móvel para submissão e acompanhamento de exames e apoio ao planeamento cirúrgico sem bloqueio de UI durante o processamento pesado.',
            details: [
              'Fluxo assíncrono orientado a eventos para visualização de imagens segmentadas',
              'Comunicação segura com as APIs de backend',
            ],
          },
          {
            id: 'mama-node-2',
            title: '2. Backend Core & Segurança DICOM (NestJS + AES-256-GCM)',
            layer: 'CORE API & CRYPTOGRAPHY',
            tech: 'Node.js (NestJS) · AES-256-GCM · PostgreSQL',
            badge: 'Security Core',
            description:
              'Gerencia autenticação, metadados clínicos no PostgreSQL e executa o serviço centralizado de cifragem de ficheiros médicos (DICOM/Imagens).',
            details: [
              'Cifragem AES-256-GCM em repouso e em trânsito para proteção rigorosa de imagens médicas',
              'Persistência relacional em PostgreSQL combinada com Object Storage para imagens',
            ],
          },
          {
            id: 'mama-node-3',
            title:
              '3. Mensageria RabbitMQ & Segmentação IA (Python Flask/FastAPI)',
            layer: 'ASYNC BROKER & COMPUTER VISION',
            tech: 'RabbitMQ · Python (Flask / FastAPI) · Docker Compose',
            badge: 'Computer Vision',
            description:
              'Desacopla o processamento de exames de alta resolução via filas RabbitMQ, acionando os modelos de segmentação de imagem em Python.',
            details: [
              'Evita timeouts e bloqueios na interface do utilizador durante a inferência de visão computacional',
              'Ambiente integralmente orquestrado com Docker e Docker Compose',
            ],
          },
        ],
        adrs: [
          {
            id: 'ADR-MAMA-01',
            title: 'Desacoplamento de Visão Computacional via RabbitMQ',
            status: 'Implementado',
            context:
              'O processamento síncrono de exames médicos de alta resolução nos modelos de segmentação bloquearia as requisições HTTP e a interface mobile.',
            decision:
              'Desacoplamos o serviço de gestão de metadados (NestJS) do módulo de Visão Computacional (Python Flask/FastAPI) utilizando mensageria assíncrona com RabbitMQ.',
            consequence:
              'Processamento resiliente em background sem bloquear a interface do utilizador e escalabilidade independente dos workers de IA.',
          },
          {
            id: 'ADR-MAMA-02',
            title:
              'Serviço Centralizado de Cifragem AES-256-GCM para Ficheiros DICOM',
            status: 'Implementado',
            context:
              'Ficheiros médicos DICOM e imagens cirúrgicas exigem confidencialidade e integridade estritas em armazenamento de objetos e tráfego interno.',
            decision:
              'Implementamos um serviço centralizado de segurança com cifragem autenticada AES-256-GCM em repouso e em trânsito.',
            consequence:
              'Proteção criptográfica verificável contra acesso não autorizado ou adulteração de ficheiros médicos.',
          },
        ],
        snippets: [
          {
            title:
              'Cifragem Autenticada AES-256-GCM para Ficheiros Médicos (DICOM)',
            language: 'typescript',
            filename: 'security/dicom-encryption.service.ts',
            code: `import { createCipheriv, createDecipheriv, randomBytes } from 'crypto';

export class DicomEncryptionService {
  private readonly algorithm = 'aes-256-gcm';

  encryptMedicalBuffer(plainBuffer: Buffer, masterKey: Buffer) {
    const iv = randomBytes(12);
    const cipher = createCipheriv(this.algorithm, masterKey, iv);
    const encrypted = Buffer.concat([cipher.update(plainBuffer), cipher.final()]);
    const authTag = cipher.getAuthTag();

    return {
      iv: iv.toString('hex'),
      authTag: authTag.toString('hex'),
      payload: encrypted,
    };
  }

  decryptMedicalBuffer(encrypted: Buffer, masterKey: Buffer, ivHex: string, tagHex: string) {
    const decipher = createDecipheriv(this.algorithm, masterKey, Buffer.from(ivHex, 'hex'));
    decipher.setAuthTag(Buffer.from(tagHex, 'hex'));
    return Buffer.concat([decipher.update(encrypted), decipher.final()]);
  }
}`,
          },
        ],
      },
    },
    {
      id: 'conecta-santa-rita',
      slug: 'conecta-santa-rita-saude-digital',
      title:
        'Conecta Santa Rita — Plataforma Digital de Saúde (Web, Android e iOS)',
      subtitle:
        'Prefeitura de Santa Rita - MA · Digitalização de Consultas e Exames para +4.000 Utilizadores Ativos',
      organization: 'Prefeitura de Santa Rita - MA',
      contextBadge: 'Prefeitura de Santa Rita',
      stackGroups: [
        {
          label: 'Frontend & Mobile',
          items: ['React.js', 'Web', 'Android', 'iOS'],
        },
        { label: 'Backend', items: ['Node.js', 'TypeScript', 'Full Stack'] },
        {
          label: 'Segurança & Dados',
          items: ['Segurança de Dados de Saúde', 'Banco Relacional'],
        },
      ],
      period: 'Jun/2025 – Dez/2025',
      location: 'Remoto',
      flagship: false,
      categories: ['frontend-web', 'mobile-health-iot', 'microservices-backend'],
      tags: [
        'Web',
        'Android',
        'iOS',
        'Full Stack',
        'TypeScript',
        'React.js',
        'Node.js',
        'Segurança de Dados de Saúde',
      ],
      summary:
        'Desenvolvimento do Conecta Santa Rita, plataforma multiplataforma (Web, Android e iOS) responsável por digitalizar o agendamento de consultas e exames para mais de 4.000 utilizadores ativos, substituindo processos manuais por fluxos digitais seguros e performáticos.',
      impactMetrics: [
        {
          label: 'Utilizadores Ativos',
          value: '+4.000',
          detail: 'Cidadãos atendidos na plataforma',
        },
        {
          label: 'Plataformas',
          value: 'Web · iOS · Android',
          detail: 'Ecossistema multiplataforma completo',
        },
        {
          label: 'Transformação',
          value: '100% Digital',
          detail: 'Agendamento de consultas e exames',
        },
        {
          label: 'Segurança',
          value: 'Dados de Saúde',
          detail: 'Arquitetura robusta e performática',
        },
      ],
      architecture: {
        overview:
          'Arquitetura unificada atendendo clientes Web, Android e iOS para gestão de agendamentos clínicos e exames municipais, projetada para suportar picos de acesso e garantir a integridade dos dados sensíveis de saúde.',
        securityAndScale:
          'Controlo rigoroso de acesso, proteção de dados sensíveis de pacientes e otimização de performance para redes móveis variadas.',
        dataFlowSummary:
          'Aplicações Web, Android & iOS → API de Agendamento e Regulação → Validação de Regras e Segurança de Dados de Saúde → Persistência Transacional.',
        nodes: [
          {
            id: 'csr-node-1',
            title: '1. Ecossistema Cliente (Web, Android e iOS)',
            layer: 'MULTI-PLATFORM CLIENT',
            tech: 'Web · Android · iOS',
            badge: '+4.000 Utilizadores',
            description:
              'Experiência acessível e intuitiva permitindo que mais de 4.000 utilizadores ativos agendem consultas e exames diretamente pelo telemóvel ou navegador.',
            details: [
              'Transição fluida de processos manuais presenciais para fluxos digitais',
              'Interface otimizada para usabilidade e baixo consumo de dados',
            ],
          },
          {
            id: 'csr-node-2',
            title: '2. Backend de Agendamento & Dados Sensíveis de Saúde',
            layer: 'CORE HEALTH SERVICE',
            tech: 'Full Stack Architecture · APIs Seguras · Banco Relacional',
            badge: 'Health Data Security',
            description:
              'Motor de alocação de vagas, gestão de filas de exames e proteção de prontuários/agendamentos.',
            details: [
              'Prevenção de conflitos de concorrência em agendamentos simultâneos',
              'Tratamento seguro e auditável de informações sensíveis de saúde pública',
            ],
          },
        ],
        adrs: [
          {
            id: 'ADR-CSR-01',
            title: 'Arquitetura Multiplataforma Unificada (Web, Android e iOS)',
            status: 'Em Produção',
            context:
              'A população precisava de acesso amplo ao agendamento de consultas e exames independentemente do dispositivo utilizado.',
            decision:
              'Construímos o Conecta Santa Rita cobrindo Web, Android e iOS sobre uma arquitetura de backend centralizada, performática e segura.',
            consequence:
              'Adesão rápida superando 4.000 utilizadores ativos e eliminação de filas manuais.',
          },
        ],
        snippets: [
          {
            title:
              'Controlo Transacional de Agendamento de Exames e Consultas',
            language: 'typescript',
            filename: 'scheduling/appointment-booking.service.ts',
            code: `export interface AppointmentRequest {
  citizenId: string;
  specialtyId: string;
  slotId: string;
  platform: 'web' | 'android' | 'ios';
}

export async function bookHealthAppointment(req: AppointmentRequest, db: any) {
  return db.transaction(async (trx: any) => {
    const slot = await trx('health_slots')
      .where({ id: req.slotId, available: true })
      .forUpdate()
      .first();

    if (!slot) {
      throw new Error('Vaga já preenchida. Por favor, selecione outro horário.');
    }

    await trx('health_slots').where({ id: req.slotId }).update({ available: false });
    return trx('appointments').insert({
      citizen_id: req.citizenId,
      specialty_id: req.specialtyId,
      slot_id: req.slotId,
      origin_platform: req.platform,
      created_at: new Date().toISOString(),
    });
  });
}`,
          },
        ],
      },
    },
    {
      id: 'plataforma-cosmo-ufma',
      slug: 'plataforma-educacional-cosmo-microsservicos',
      title:
        'Plataforma Educacional Cosmo — Migração de Monólito para Microsserviços',
      subtitle:
        'TeleMídia Lab — UFMA (Bolsista FAPEMA) · RabbitMQ, Docker, Clean Architecture, DDD, SOLID & React/TS',
      organization: 'TeleMídia Lab - UFMA (Bolsista FAPEMA)',
      contextBadge: 'TeleMídia Lab · UFMA',
      stackGroups: [
        { label: 'Frontend', items: ['React.js', 'TypeScript'] },
        {
          label: 'Backend & Arquitetura',
          items: ['Microsserviços', 'Clean Architecture', 'DDD', 'SOLID'],
        },
        {
          label: 'Mensageria & DevOps',
          items: ['RabbitMQ', 'Docker', 'GitHub Actions (CI/CD)'],
        },
      ],
      period: 'Abr/2023 – Mar/2026',
      location: 'Remoto',
      flagship: false,
      categories: ['microservices-backend', 'frontend-web'],
      tags: [
        'Microsserviços',
        'RabbitMQ',
        'Docker',
        'GitHub Actions (CI/CD)',
        'Clean Architecture',
        'DDD',
        'SOLID',
        'React.js',
        'TypeScript',
      ],
      summary:
        'Liderança na refatoração crítica da plataforma educacional Cosmo, migrando um monólito legado para uma arquitetura distribuída baseada em microsserviços. Implementação de comunicação assíncrona com RabbitMQ, containerização com Docker, CI/CD via GitHub Actions e frontend em React.js e TypeScript.',
      impactMetrics: [
        {
          label: 'Arquitetura',
          value: 'Microsserviços',
          detail: 'Migração completa de monólito legado',
        },
        {
          label: 'Design',
          value: 'DDD & Clean Arch',
          detail: 'Aplicação rigorosa de princípios SOLID',
        },
        {
          label: 'Mensageria & DevOps',
          value: 'RabbitMQ + CI/CD',
          detail: 'Docker & GitHub Actions automatizados',
        },
        {
          label: 'Frontend',
          value: 'React + TS',
          detail: 'Interfaces performáticas e acessíveis',
        },
      ],
      architecture: {
        overview:
          'Decomposição estratégica de um sistema monolítico legado em microsserviços independentes orientados a domínio (DDD) e estruturados segundo Clean Architecture e princípios SOLID.',
        securityAndScale:
          'Comunicação assíncrona resiliente via RabbitMQ, isolamento em containers Docker e entregas contínuas validadas por pipelines de CI/CD no GitHub Actions.',
        dataFlowSummary:
          'Frontend Acessível (React.js + TypeScript) → Microsserviços Desacoplados (Clean Architecture / DDD) ↔ Mensageria Assíncrona (RabbitMQ) → Deploy Automatizado (Docker + GitHub Actions).',
        nodes: [
          {
            id: 'cosmo-node-1',
            title: '1. Frontend Complexo e Acessível (React.js + TypeScript)',
            layer: 'PRESENTATION LAYER',
            tech: 'React.js · TypeScript · Tailwind CSS',
            badge: 'Accessible UI',
            description:
              'Desenvolvimento de interfaces educacionais interativas, performáticas e acessíveis com tipagem estrita em TypeScript.',
            details: [
              'Componentização modular e foco em acessibilidade e performance de renderização',
            ],
          },
          {
            id: 'cosmo-node-2',
            title: '2. Microsserviços com Clean Architecture, DDD & SOLID',
            layer: 'DOMAIN & APPLICATION SERVICES',
            tech: 'Node.js · TypeScript · Clean Architecture · DDD · SOLID',
            badge: 'Domain-Driven',
            description:
              'Separação clara entre regras de negócio puras (Domain), casos de uso (Application) e adaptadores externos (Infrastructure).',
            details: [
              'Eliminação do acoplamento do monólito legado permitindo evolução independente de cada contexto delimitado',
            ],
          },
          {
            id: 'cosmo-node-3',
            title: '3. Eventos RabbitMQ, Docker & CI/CD GitHub Actions',
            layer: 'MESSAGING & DEVOPS',
            tech: 'RabbitMQ · Docker · GitHub Actions',
            badge: 'Automated CI/CD',
            description:
              'Integração assíncrona entre microsserviços via RabbitMQ e esteira automatizada de build, testes e containerização.',
            details: [
              'Containerização completa com Docker garantindo paridade entre desenvolvimento e produção',
            ],
          },
        ],
        adrs: [
          {
            id: 'ADR-COSMO-01',
            title:
              'Migração de Monólito Legado para Microsserviços com DDD e Clean Architecture',
            status: 'Implementado',
            context:
              'O monólito legado da plataforma Cosmo dificultava a escalabilidade, a manutenção evolutiva e o isolamento de falhas.',
            decision:
              'Lideramos a refatoração para microsserviços aplicando Domain-Driven Design (DDD), Clean Architecture, SOLID e comunicação assíncrona via RabbitMQ.',
            consequence:
              'Alta manutenibilidade, desacoplamento entre módulos educacionais e automação completa de deploy via Docker e GitHub Actions.',
          },
        ],
        snippets: [
          {
            title:
              'Caso de Uso Desacoplado (Clean Architecture + Evento RabbitMQ)',
            language: 'typescript',
            filename: 'domain/use-cases/complete-lesson.usecase.ts',
            code: `export interface DomainEventPublisher {
  publish(routingKey: string, payload: Record<string, unknown>): Promise<void>;
}

export class CompleteLessonUseCase {
  constructor(
    private readonly progressRepo: { saveCompletion(studentId: string, lessonId: string): Promise<void> },
    private readonly eventBroker: DomainEventPublisher
  ) {}

  async execute(input: { studentId: string; lessonId: string }): Promise<void> {
    await this.progressRepo.saveCompletion(input.studentId, input.lessonId);
    await this.eventBroker.publish('cosmo.lesson.completed', {
      studentId: input.studentId,
      lessonId: input.lessonId,
      completedAt: new Date().toISOString(),
    });
  }
}`,
          },
        ],
      },
    },
    {
      id: 'autodomo-smart-home',
      slug: 'autodomo-automacao-residencial-iot',
      title:
        'AutoDomo — Soluções de Automação Residencial & Controlo de Dispositivos',
      subtitle:
        'AutoDomo · Node.js, React.js (Web), Flutter (Mobile), Docker & APIs de Baixa Latência',
      organization: 'AutoDomo',
      contextBadge: 'AutoDomo · IoT',
      stackGroups: [
        { label: 'Web & Mobile', items: ['React.js', 'Flutter', 'Dart'] },
        { label: 'Backend', items: ['Node.js', 'APIs de Baixa Latência'] },
        { label: 'DevOps', items: ['Docker', 'Git'] },
      ],
      period: 'Abr/2021 – Dez/2022',
      location: 'São Luís, MA (Presencial)',
      flagship: false,
      categories: ['mobile-health-iot', 'frontend-web', 'microservices-backend'],
      tags: [
        'Node.js',
        'React.js',
        'Flutter',
        'Dart',
        'Docker',
        'Baixa Latência',
        'Git',
      ],
      summary:
        'Arquitetura e desenvolvimento de soluções de automação residencial com Node.js e React.js na web e Flutter no mobile. Containerização de serviços com Docker e criação de APIs de baixa latência e alta disponibilidade para controlo em tempo real de dispositivos inteligentes.',
      impactMetrics: [
        {
          label: 'Latência de Comando',
          value: 'Baixa Latência',
          detail: 'Acionamento imediato de dispositivos',
        },
        {
          label: 'Web & Mobile',
          value: 'React + Flutter',
          detail: 'Controlo residencial multiplataforma',
        },
        {
          label: 'Backend',
          value: 'Node.js + Docker',
          detail: 'Serviços containerizados de alta disp.',
        },
        {
          label: 'Disponibilidade',
          value: 'Alta Disp.',
          detail: 'Operação contínua para Smart Home',
        },
      ],
      architecture: {
        overview:
          'Plataforma integrada para controlo e monitoramento de ambientes e dispositivos inteligentes, unindo painel web em React.js, aplicação nativa em Flutter e backend de baixa latência em Node.js.',
        securityAndScale:
          'Serviços isolados em containers Docker projetados para alta disponibilidade e resposta instantânea aos comandos do utilizador.',
        dataFlowSummary:
          'Painel Web (React.js) & App Mobile (Flutter) → API de Baixa Latência (Node.js em Docker) → Controlo e Sincronização de Dispositivos Inteligentes.',
        nodes: [
          {
            id: 'autodomo-node-1',
            title:
              '1. Aplicações de Controlo (React.js Web & Flutter Mobile)',
            layer: 'CLIENT INTERFACES',
            tech: 'React.js · Flutter · Dart',
            badge: 'Web & Mobile',
            description:
              'Interfaces responsivas na web e nativas no mobile para acionamento de cenas, iluminação e sensores residenciais.',
            details: [
              'Sincronização imediata do estado dos dispositivos entre múltiplos clientes',
            ],
          },
          {
            id: 'autodomo-node-2',
            title: '2. APIs de Baixa Latência & Containers Docker',
            layer: 'IOT GATEWAY & BACKEND',
            tech: 'Node.js · Docker · Git',
            badge: 'Low Latency API',
            description:
              'Serviços em Node.js empacotados com Docker garantindo alta disponibilidade e tempo de resposta mínimo no envio de comandos.',
            details: [
              'Padronização do ambiente de execução com Docker e controlo de versão com Git',
            ],
          },
        ],
        adrs: [
          {
            id: 'ADR-AUTO-01',
            title:
              'Stack Node.js + React.js + Flutter Containerizada com Docker',
            status: 'Implementado',
            context:
              'O controlo de dispositivos residenciais exige baixa latência no backend e experiência fluida tanto em painéis web quanto em smartphones.',
            decision:
              'Desenvolvemos APIs enxutas de baixa latência em Node.js containerizadas com Docker, consumidas por clientes em React.js e Flutter.',
            consequence:
              'Acionamento rápido e confiável de dispositivos inteligentes com alta disponibilidade.',
          },
        ],
        snippets: [
          {
            title:
              'Dispatcher de Comandos de Baixa Latência para Dispositivos',
            language: 'javascript',
            filename: 'controllers/device-command.controller.js',
            code: `export async function dispatchDeviceCommand(req, res) {
  const { deviceId, action, payload } = req.body;
  const startedAt = performance.now();

  await deviceGateway.sendCommand(deviceId, { action, payload });
  const elapsedMs = Math.round((performance.now() - startedAt) * 100) / 100;

  return res.status(200).json({
    status: 'ACK',
    deviceId,
    action,
    latencyMs: elapsedMs,
  });
}`,
          },
        ],
      },
    },
  ],
  stackCategories: [
    {
      id: 'linguagens',
      title: 'Linguagens',
      subtitle: 'Poliglotismo técnico para Web, Backend, IA e Mobile',
      command: 'savio --stack languages',
      colSpan: 'lg:col-span-6',
      items: [
        { name: 'TypeScript', context: 'Tipagem estrita Full Stack' },
        { name: 'JavaScript', context: 'ESNext & Node/Web' },
        { name: 'Python', context: 'Machine Learning, IA, Flask & FastAPI' },
        { name: 'Dart', context: 'Aplicações Mobile com Flutter' },
        { name: 'Java', context: 'Sistemas Corporativos & JUnit' },
        { name: 'PHP', context: 'Sistemas Web & APIs' },
        { name: 'Kotlin', context: 'Desenvolvimento Android' },
        { name: 'Swift', context: 'Desenvolvimento iOS' },
      ],
    },
    {
      id: 'backend-arquitetura',
      title: 'Backend & Arquitetura',
      subtitle: 'Sistemas distribuídos, desacoplamento e engenharia de domínio',
      command: 'savio --stack architecture',
      colSpan: 'lg:col-span-6',
      items: [
        { name: 'Node.js', context: 'NestJS, Express & APIs de baixa latência' },
        { name: 'Microsserviços', context: 'Sistemas distribuídos escaláveis' },
        { name: 'Clean Architecture', context: 'Separação estrita de camadas' },
        { name: 'SOLID', context: 'Design orientado a objetos sustentável' },
        { name: 'DDD', context: 'Modelagem estratégica de domínio' },
      ],
    },
    {
      id: 'frontend',
      title: 'Frontend',
      subtitle: 'Interfaces performáticas, acessíveis e experiências 3D/Reativas',
      command: 'savio --stack frontend',
      colSpan: 'lg:col-span-4',
      items: [
        { name: 'React.js', context: 'SPAs complexas e acessíveis' },
        { name: 'Next.js', context: 'SSR, Rotas & Performance Web' },
        { name: 'Three.js', context: 'Gráficos e visualização 3D na Web' },
        { name: 'Tailwind CSS', context: 'Design Systems de alto contraste' },
        { name: 'Zustand', context: 'Gestão de estado reativa e enxuta' },
        { name: 'HTML5', context: 'Semântica & Acessibilidade' },
        { name: 'CSS3', context: 'Layouts responsivos & animações' },
      ],
    },
    {
      id: 'databases-baas',
      title: 'Bancos de Dados & BaaS',
      subtitle: 'Persistência relacional, NoSQL, cache em memória e BaaS',
      command: 'savio --stack databases',
      colSpan: 'lg:col-span-4',
      items: [
        { name: 'PostgreSQL', context: 'Relacional de missão crítica' },
        { name: 'MySQL', context: 'Banco de dados relacional' },
        { name: 'MongoDB', context: 'Documentos NoSQL escaláveis' },
        { name: 'Redis', context: 'Cache em memória & baixa latência' },
        { name: 'Supabase', context: 'Backend-as-a-Service & Postgres' },
      ],
    },
    {
      id: 'mobile',
      title: 'Mobile',
      subtitle: 'Apps multiplataforma para Saúde, Cidadania e IoT',
      command: 'savio --stack mobile',
      colSpan: 'lg:col-span-4',
      items: [
        { name: 'Flutter', context: 'Apps nativos multiplataforma em Dart' },
        {
          name: 'React Native',
          context: 'Apps móveis iOS/Android em TypeScript',
        },
        {
          name: 'SQLite',
          context: 'Persistência local embarcada offline-first',
        },
      ],
    },
    {
      id: 'cloud-devops-messaging',
      title: 'Cloud, DevOps & Mensageria',
      subtitle: 'Infraestrutura cloud, orquestração de containers, filas e CI/CD',
      command: 'savio --stack cloud-devops',
      colSpan: 'lg:col-span-7',
      items: [
        { name: 'AWS', context: 'Amazon Web Services' },
        { name: 'GCP', context: 'Google Cloud Platform' },
        { name: 'Azure', context: 'Microsoft Azure' },
        { name: 'Docker', context: 'Containerização & Docker Compose' },
        { name: 'Kubernetes', context: 'Orquestração de containers' },
        {
          name: 'RabbitMQ',
          context: 'Mensageria assíncrona entre microsserviços',
        },
        {
          name: 'GitHub Actions (CI/CD)',
          context: 'Pipelines automatizados de build e deploy',
        },
        { name: 'Git', context: 'Versionamento distribuído' },
        { name: 'Linux', context: 'Administração de ambientes e servidores' },
      ],
    },
    {
      id: 'testes-idiomas',
      title: 'Testes & Idiomas',
      subtitle:
        'Automação de testes unitários/E2E e comunicação técnica internacional',
      command: 'savio --stack qa-lang',
      colSpan: 'lg:col-span-5',
      items: [
        { name: 'Jest', context: 'Testes unitários e de integração JS/TS' },
        { name: 'Cypress', context: 'Testes End-to-End (E2E) automatizados' },
        { name: 'JUnit', context: 'Testes automatizados no ecossistema Java' },
        {
          name: 'Inglês Avançado',
          context: 'Leitura técnica fluente e documentação',
          isLanguageHighlight: true,
        },
      ],
    },
  ],
  experience: [
    {
      id: 'exp-telemidia-puc-rio',
      period: 'Abr/2026 – Presente',
      role: 'AI Software Engineer & Pesquisador Mestrado',
      company: 'TeleMídia Lab - PUC-Rio',
      location: 'Rio de Janeiro, RJ',
      modality: 'Pesquisa Aplicada & Cooperação BTG Pactual',
      summary:
        'Atuação em projeto de cooperação com o banco BTG Pactual no desenvolvimento de soluções de Machine Learning para a hiperpersonalização do atendimento e dos serviços oferecidos aos clientes.',
      architectureHighlights: [
        'Atuação em projeto de cooperação com o banco BTG Pactual no desenvolvimento de soluções de Machine Learning para a hiperpersonalização do atendimento e dos serviços oferecidos aos clientes.',
        'Implementação de pipelines de dados e integração de modelos de aprendizado de máquina para o processamento de informações em tempo real.',
        'Condução de pesquisas aplicadas com técnicas avançadas de Inteligência Artificial voltadas ao setor financeiro, focando diretamente na escalabilidade da infraestrutura e na precisão dos modelos preditivos.',
      ],
      stack: [
        'Machine Learning',
        'Inteligência Artificial',
        'Python',
        'Data Pipelines',
        'Real-Time Processing',
        'Engenharia de Software',
      ],
    },
    {
      id: 'exp-prefeitura-santa-rita',
      period: 'Jun/2025 – Dez/2025',
      role: 'Full Stack Developer',
      company: 'Prefeitura de Santa Rita - MA',
      location: 'Santa Rita, MA',
      modality: 'Remoto',
      summary:
        'Desenvolvimento do Conecta Santa Rita, plataforma Web, Android e iOS responsável por digitalizar o agendamento de consultas e exames para mais de 4.000 utilizadores ativos.',
      architectureHighlights: [
        'Desenvolvimento do Conecta Santa Rita, plataforma Web, Android e iOS responsável por digitalizar o agendamento de consultas e exames para mais de 4.000 utilizadores ativos.',
        'Construção de uma arquitetura robusta, performática e segura para o tratamento de dados sensíveis de saúde, executando a transição de processos manuais para fluxos digitais eficientes.',
      ],
      stack: [
        'TypeScript',
        'React.js',
        'Node.js',
        'Web',
        'Android',
        'iOS',
        'PostgreSQL',
      ],
    },
    {
      id: 'exp-projeto-mama-ufma',
      period: 'Jun/2024 – Jun/2025',
      role: 'Desenvolvedor de Software & Pesquisador Graduação',
      company: 'Projeto Mama - UFMA',
      location: 'São Luís, MA',
      modality: 'Híbrido',
      summary:
        'Desenvolvimento da fundação do ecossistema distribuído para visão computacional médica e planeamento cirúrgico, unindo React Native, Node.js (NestJS), Python (Flask/FastAPI), RabbitMQ e segurança AES-256-GCM.',
      architectureHighlights: [
        'Desenvolvimento da fundação do ecossistema com abordagem distribuída, desacoplando o módulo de processamento de imagens (Visão Computacional) dos serviços de gestão de metadados e autenticação.',
        'Construção da aplicação mobile em React Native e APIs resilientes no backend em Node.js (NestJS) integradas com Python (Flask/FastAPI) para executar modelos de segmentação de imagem.',
        'Implementação de serviço de segurança centralizado para cifragem de ficheiros médicos (DICOM/Imagens) com AES-256-GCM em repouso e em trânsito.',
        'Estruturação de comunicação entre microsserviços via RabbitMQ para processamento assíncrono de exames de alta resolução sem bloquear a interface do utilizador.',
        'Orquestração de ambiente com Docker e Docker Compose para o planeamento cirúrgico, banco de dados PostgreSQL para informações relacionais e estratégias de armazenamento de objetos para as imagens segmentadas.',
      ],
      stack: [
        'React Native',
        'Node.js (NestJS)',
        'Python (Flask/FastAPI)',
        'Visão Computacional',
        'AES-256-GCM',
        'DICOM',
        'RabbitMQ',
        'Docker',
        'Docker Compose',
        'PostgreSQL',
      ],
    },
    {
      id: 'exp-telemidia-ufma',
      period: 'Abr/2023 – Mar/2026',
      role: 'Full Stack Developer & Pesquisador Graduação (Bolsista FAPEMA)',
      company: 'TeleMídia Lab - UFMA',
      location: 'São Luís, MA',
      modality: 'Remoto',
      summary:
        'Liderança na refatoração crítica da plataforma educacional Cosmo, migrando um monólito legado para uma arquitetura distribuída baseada em microsserviços.',
      architectureHighlights: [
        'Liderança na refatoração crítica da plataforma educacional Cosmo, migrando um monólito legado para uma arquitetura distribuída baseada em microsserviços.',
        'Implementação de comunicação assíncrona com RabbitMQ, containerização completa com Docker e configuração de pipelines de CI/CD via GitHub Actions aplicando Clean Architecture, DDD e princípios SOLID.',
        'Desenvolvimento de interfaces complexas, performáticas e acessíveis com React.js e TypeScript.',
      ],
      stack: [
        'React.js',
        'TypeScript',
        'Node.js',
        'Microsserviços',
        'RabbitMQ',
        'Docker',
        'GitHub Actions (CI/CD)',
        'Clean Architecture',
        'DDD',
        'SOLID',
      ],
    },
    {
      id: 'exp-autodomo',
      period: 'Abr/2021 – Dez/2022',
      role: 'Desenvolvedor Full Stack Junior',
      company: 'AutoDomo',
      location: 'São Luís, MA',
      modality: 'Presencial',
      summary:
        'Arquitetura e desenvolvimento de soluções de automação residencial com Node.js e React.js na web e Flutter no mobile.',
      architectureHighlights: [
        'Arquitetura e desenvolvimento de soluções de automação residencial com Node.js e React.js na web e Flutter no mobile.',
        'Containerização de serviços com Docker, criação de APIs de baixa latência e alta disponibilidade para controlo de dispositivos inteligentes e versionamento com Git.',
      ],
      stack: ['Node.js', 'React.js', 'Flutter', 'Dart', 'Docker', 'Git'],
    },
  ],
};

const EN_CONTENT: LocalizedPortfolioContent = {
  profile: {
    name: 'Sávio Patrick Costa Câmara',
    shortName: 'Sávio Patrick',
    handle: 'saviopatrick',
    npxCommand: 'npx savio-dev',
    role: 'Software Engineer | Full Stack Developer & AI Software Engineer',
    headline:
      'Software Engineering, Distributed Architecture & Applied Artificial Intelligence.',
    subheadline:
      'M.Sc. in Informatics (Software Engineering) candidate at PUC-Rio and B.Sc. in Computer Science from UFMA. Focused on applied AI R&D and mission-critical software systems — including real-time Machine Learning pipelines (BTG Pactual cooperation), large-scale healthcare platforms, and microservices architectures.',
    email: 'saviopatrickc@gmail.com',
    phone: '(98) 97010-8797',
    github: 'https://github.com/saviopatrick',
    linkedin: 'https://linkedin.com/in/saviopatrick',
    resumeUrl: '/curriculo-savio-patrick.pdf',
    location: 'Rio de Janeiro, Brazil',
    availability:
      'AI Software Engineer & M.Sc. Researcher @ TeleMídia Lab — PUC-Rio',
  },
  education: [
    {
      id: 'puc-rio-mestrado',
      institution:
        'Pontifical Catholic University of Rio de Janeiro (PUC-Rio)',
      shortName: 'PUC-Rio',
      degree: 'M.Sc. in Informatics (Software Engineering)',
      field: 'Concentration Area: Software Engineering',
      location: 'Rio de Janeiro, Brazil',
      status: 'Expected: 2027',
      badge: 'M.Sc. Degree · In Progress',
      highlights: [
        'M.Sc. Researcher at TeleMídia Lab (PUC-Rio) collaborating on an R&D project with BTG Pactual bank.',
        'Conducting applied AI and Machine Learning research tailored to the financial sector, focusing on infrastructure scalability and real-time predictive model accuracy.',
      ],
    },
    {
      id: 'ufma-ciencia-computacao',
      institution: 'Federal University of Maranhão (UFMA)',
      shortName: 'UFMA',
      degree: 'B.Sc. in Computer Science',
      field: 'Bachelor of Science in Computer Science',
      location: 'São Luís, Brazil',
      status: 'Completed',
      badge: 'B.Sc. Degree · Completed',
      highlights: [
        'Undergraduate Researcher at TeleMídia Lab (UFMA) as a FAPEMA Scholar and at the Mama Project (UFMA).',
        'Strong foundation in software engineering, distributed systems, microservices, medical computer vision, cryptographic security (AES-256-GCM), and full stack development.',
      ],
    },
  ],
  projectCategories: [
    { id: 'all', label: 'All' },
    { id: 'ai-ml', label: 'AI & Machine Learning' },
    { id: 'microservices-backend', label: 'Microservices & Backend' },
    { id: 'frontend-web', label: 'Frontend & Web' },
    { id: 'mobile-health-iot', label: 'Mobile & Health/IoT' },
  ],
  projects: [
    {
      id: 'btg-telemidia-pucrio',
      slug: 'cooperacao-btg-pactual-telemidia-puc-rio',
      title:
        'Real-Time Financial Hyper-Personalization with ML (BTG Pactual Cooperation)',
      subtitle:
        'TeleMídia Lab — PUC-Rio · Real-Time Data Pipelines, Machine Learning & Applied Financial AI',
      organization: 'TeleMídia Lab - PUC-Rio (BTG Pactual Cooperation)',
      contextBadge: 'BTG Pactual · PUC-Rio',
      stackGroups: [
        {
          label: 'AI & Machine Learning',
          items: ['Machine Learning', 'Artificial Intelligence', 'Python'],
        },
        {
          label: 'Data & Streaming',
          items: ['Data Pipelines', 'Real-Time Processing'],
        },
        {
          label: 'Software Engineering',
          items: ['TypeScript', 'Software Engineering'],
        },
      ],
      period: 'Apr/2026 – Present',
      location: 'Rio de Janeiro, Brazil',
      flagship: true,
      categories: ['ai-ml', 'microservices-backend'],
      tags: [
        'Machine Learning',
        'Artificial Intelligence',
        'Python',
        'TypeScript',
        'Data Pipelines',
        'Real-Time Processing',
        'Software Engineering',
      ],
      summary:
        'Collaborating on an R&D project with BTG Pactual bank to develop Machine Learning solutions for hyper-personalization of customer service and financial products. Implementing real-time data pipelines and integrating machine learning models for low-latency information processing, focusing on infrastructure scalability and predictive accuracy.',
      impactMetrics: [
        {
          label: 'R&D Partner',
          value: 'BTG Pactual',
          detail: 'TeleMídia Lab · PUC-Rio',
        },
        {
          label: 'Processing',
          value: 'Real-Time',
          detail: 'Low-latency ML data pipelines',
        },
        {
          label: 'Domain',
          value: 'FinTech & AI',
          detail: 'Customer & product personalization',
        },
        {
          label: 'Core Focus',
          value: 'High Scale',
          detail: 'Predictive model accuracy',
        },
      ],
      architecture: {
        overview:
          'Architecture designed for real-time event ingestion and feature processing, connecting scalable data pipelines with machine learning models for hyper-personalized customer service and financial product recommendations.',
        securityAndScale:
          'Infrastructure engineered for high availability, low-latency real-time inference, and strict financial-grade data governance.',
        dataFlowSummary:
          'Customer Events & Context → Real-Time Ingestion & Feature Engineering Pipeline → Machine Learning Model Integration → Hyper-Personalization Delivery Engine.',
        nodes: [
          {
            id: 'btg-node-1',
            title: '1. Real-Time Data Pipelines',
            layer: 'DATA ENGINEERING & STREAMING',
            tech: 'Python · Data Pipelines · Real-Time Processing',
            badge: 'Real-Time Ingestion',
            description:
              'Continuous capture, transformation, and delivery of operational signals and customer features to feed Machine Learning models in real time.',
            details: [
              'Low-latency continuous stream processing for instant context enrichment',
              'Feature validation and normalization for predictive model consumption',
            ],
          },
          {
            id: 'btg-node-2',
            title: '2. Machine Learning Model Integration',
            layer: 'AI & PREDICTIVE ENGINE',
            tech: 'Machine Learning · Artificial Intelligence · Python',
            badge: 'Predictive ML',
            description:
              'Coupling predictive models into transactional and customer service workflows, enabling fast and context-aware inference per client profile.',
            details: [
              'Direct focus on predictive model accuracy across real financial scenarios',
              'Modular architecture supporting rapid experimentation and production rollout',
            ],
          },
          {
            id: 'btg-node-3',
            title: '3. Hyper-Personalization & Scalable Delivery Layer',
            layer: 'SERVICE DELIVERY & SCALE',
            tech: 'Software Engineering · Scalable Infrastructure',
            badge: 'High Scalability',
            description:
              'Delivers dynamic recommendations and tailored financial service experiences with high resilience.',
            details: [
              'Applied R&D bridging academic rigor (PUC-Rio) and enterprise banking scale',
              'Continuous monitoring of AI infrastructure throughput and latency',
            ],
          },
        ],
        adrs: [
          {
            id: 'ADR-BTG-01',
            title:
              'Real-Time Processing Pipelines for Financial Hyper-Personalization',
            status: 'In Production',
            context:
              'Effective hyper-personalization in banking requires processing up-to-the-second customer context at the exact moment of interaction.',
            decision:
              'Implemented real-time data pipelines directly integrated with machine learning models for low-latency feature extraction and inference.',
            consequence:
              'Higher contextual relevance and predictive accuracy when delivering tailored customer service and financial products.',
          },
        ],
        snippets: [
          {
            title:
              'Real-Time Feature Enrichment & Inference Pipeline (Architecture)',
            language: 'python',
            filename: 'pipeline/realtime_personalization.py',
            code: `from dataclasses import dataclass
from typing import Any, Protocol

@dataclass(frozen=True)
class ClientInteractionEvent:
    client_id: str
    channel: str
    timestamp_ms: int
    features: dict[str, Any]

class PredictiveModelPort(Protocol):
    def predict_personalization(self, feature_vector: dict[str, Any]) -> dict[str, Any]:
        ...

class RealTimePersonalizationPipeline:
    def __init__(self, model: PredictiveModelPort) -> None:
        self._model = model

    def process_event(self, event: ClientInteractionEvent) -> dict[str, Any]:
        enriched_features = {
            **event.features,
            "channel": event.channel,
            "event_ts": event.timestamp_ms,
        }
        prediction = self._model.predict_personalization(enriched_features)
        return {
            "client_id": event.client_id,
            "personalized_services": prediction.get("recommended_actions", []),
            "confidence_score": prediction.get("score", 0.0),
        }`,
          },
        ],
      },
    },
    {
      id: 'projeto-mama-ufma',
      slug: 'projeto-mama-ufma-visao-computacional',
      title: 'Mama Project — Distributed Medical Computer Vision Ecosystem',
      subtitle:
        'UFMA · React Native, Node.js (NestJS), Python (Flask/FastAPI), RabbitMQ & AES-256-GCM',
      organization: 'Mama Project - UFMA',
      contextBadge: 'UFMA · Computer Vision',
      stackGroups: [
        { label: 'Mobile & Frontend', items: ['React Native'] },
        {
          label: 'Backend & AI',
          items: [
            'Node.js (NestJS)',
            'Python (Flask/FastAPI)',
            'Computer Vision',
          ],
        },
        {
          label: 'Messaging & DevOps',
          items: ['RabbitMQ', 'Docker', 'Docker Compose'],
        },
        {
          label: 'Security & Databases',
          items: ['AES-256-GCM (DICOM)', 'PostgreSQL', 'Object Storage'],
        },
      ],
      period: 'Jun/2024 – Jun/2025',
      location: 'São Luís, Brazil (Hybrid)',
      flagship: true,
      categories: ['ai-ml', 'microservices-backend', 'mobile-health-iot'],
      tags: [
        'React Native',
        'Node.js (NestJS)',
        'Python (Flask/FastAPI)',
        'Computer Vision',
        'AES-256-GCM (DICOM)',
        'RabbitMQ',
        'Docker Compose',
        'PostgreSQL',
      ],
      summary:
        'Architected a distributed foundation decoupling the Computer Vision image processing module (Python Flask/FastAPI segmentation) from metadata management and authentication services (NestJS). Implemented centralized AES-256-GCM encryption for medical DICOM files and asynchronous RabbitMQ messaging.',
      impactMetrics: [
        {
          label: 'Medical Security',
          value: 'AES-256-GCM',
          detail: 'DICOM encryption at rest & in transit',
        },
        {
          label: 'Messaging',
          value: 'RabbitMQ',
          detail: 'Async high-res exam processing',
        },
        {
          label: 'Hybrid Backend',
          value: 'NestJS + Python',
          detail: 'Resilient APIs + AI Segmentation',
        },
        {
          label: 'Infrastructure',
          value: 'Docker + PG',
          detail: 'PostgreSQL + Object Storage',
        },
      ],
      architecture: {
        overview:
          'Distributed ecosystem separating the clinical control plane (authentication, relational metadata in PostgreSQL, and React Native mobile app) from the heavy Computer Vision segmentation engine in Python (Flask/FastAPI).',
        securityAndScale:
          'Centralized security service enforcing authenticated AES-256-GCM encryption on medical files (DICOM/Images) both at rest and in transit, paired with RabbitMQ queues to prevent UI blocking.',
        dataFlowSummary:
          'Clinical Mobile App (React Native) → Core API Gateway (Node.js / NestJS) → AES-256-GCM Encryption Service → RabbitMQ Broker → Python Worker (Flask/FastAPI · Image Segmentation) → PostgreSQL + Object Storage.',
        nodes: [
          {
            id: 'mama-node-1',
            title: '1. Clinical Mobile Application (React Native)',
            layer: 'MOBILE FRONTEND',
            tech: 'React Native · TypeScript',
            badge: 'Mobile App',
            description:
              'Mobile interface for submitting and tracking medical exams and surgical planning without blocking the UI during heavy segmentation tasks.',
            details: [
              'Event-driven asynchronous workflow for viewing segmented medical images',
              'Secure communication with backend APIs',
            ],
          },
          {
            id: 'mama-node-2',
            title: '2. Core Backend & DICOM Security (NestJS + AES-256-GCM)',
            layer: 'CORE API & CRYPTOGRAPHY',
            tech: 'Node.js (NestJS) · AES-256-GCM · PostgreSQL',
            badge: 'Security Core',
            description:
              'Manages authentication, clinical metadata in PostgreSQL, and runs the centralized encryption service for medical files (DICOM/Images).',
            details: [
              'AES-256-GCM encryption at rest and in transit protecting sensitive medical imagery',
              'Relational persistence in PostgreSQL paired with Object Storage for segmented images',
            ],
          },
          {
            id: 'mama-node-3',
            title:
              '3. RabbitMQ Messaging & AI Segmentation (Python Flask/FastAPI)',
            layer: 'ASYNC BROKER & COMPUTER VISION',
            tech: 'RabbitMQ · Python (Flask / FastAPI) · Docker Compose',
            badge: 'Computer Vision',
            description:
              'Decouples high-resolution exam processing via RabbitMQ queues, triggering Python image segmentation models asynchronously.',
            details: [
              'Eliminates HTTP timeouts and UI blocking during computer vision inference',
              'Full environment orchestrated with Docker and Docker Compose',
            ],
          },
        ],
        adrs: [
          {
            id: 'ADR-MAMA-01',
            title: 'Decoupling Computer Vision Processing via RabbitMQ',
            status: 'Implemented',
            context:
              'Synchronous processing of high-resolution medical exams in segmentation models would block HTTP requests and freeze the mobile UI.',
            decision:
              'Decoupled metadata management (NestJS) from the Computer Vision module (Python Flask/FastAPI) using asynchronous RabbitMQ messaging.',
            consequence:
              'Resilient background processing without blocking the user interface and independent scaling of AI workers.',
          },
          {
            id: 'ADR-MAMA-02',
            title:
              'Centralized AES-256-GCM Encryption Service for Medical DICOM Files',
            status: 'Implemented',
            context:
              'Medical DICOM files and surgical planning images require strict confidentiality and integrity in object storage and internal transit.',
            decision:
              'Implemented a centralized security service using authenticated AES-256-GCM encryption at rest and in transit.',
            consequence:
              'Verifiable cryptographic protection against unauthorized access or tampering of medical files.',
          },
        ],
        snippets: [
          {
            title:
              'Authenticated AES-256-GCM Encryption for Medical Files (DICOM)',
            language: 'typescript',
            filename: 'security/dicom-encryption.service.ts',
            code: `import { createCipheriv, createDecipheriv, randomBytes } from 'crypto';

export class DicomEncryptionService {
  private readonly algorithm = 'aes-256-gcm';

  encryptMedicalBuffer(plainBuffer: Buffer, masterKey: Buffer) {
    const iv = randomBytes(12);
    const cipher = createCipheriv(this.algorithm, masterKey, iv);
    const encrypted = Buffer.concat([cipher.update(plainBuffer), cipher.final()]);
    const authTag = cipher.getAuthTag();

    return {
      iv: iv.toString('hex'),
      authTag: authTag.toString('hex'),
      payload: encrypted,
    };
  }

  decryptMedicalBuffer(encrypted: Buffer, masterKey: Buffer, ivHex: string, tagHex: string) {
    const decipher = createDecipheriv(this.algorithm, masterKey, Buffer.from(ivHex, 'hex'));
    decipher.setAuthTag(Buffer.from(tagHex, 'hex'));
    return Buffer.concat([decipher.update(encrypted), decipher.final()]);
  }
}`,
          },
        ],
      },
    },
    {
      id: 'conecta-santa-rita',
      slug: 'conecta-santa-rita-saude-digital',
      title:
        'Conecta Santa Rita — Digital Healthcare Platform (Web, Android & iOS)',
      subtitle:
        'Municipality of Santa Rita - MA · Digitized Medical Appointments & Exams for 4,000+ Active Users',
      organization: 'Municipality of Santa Rita - MA',
      contextBadge: 'Municipality of Santa Rita',
      stackGroups: [
        {
          label: 'Frontend & Mobile',
          items: ['React.js', 'Web', 'Android', 'iOS'],
        },
        { label: 'Backend', items: ['Node.js', 'TypeScript', 'Full Stack'] },
        {
          label: 'Security & Data',
          items: ['Healthcare Data Security', 'Relational Database'],
        },
      ],
      period: 'Jun/2025 – Dec/2025',
      location: 'Remote',
      flagship: false,
      categories: ['frontend-web', 'mobile-health-iot', 'microservices-backend'],
      tags: [
        'Web',
        'Android',
        'iOS',
        'Full Stack',
        'TypeScript',
        'React.js',
        'Node.js',
        'Healthcare Data Security',
      ],
      summary:
        'Developed Conecta Santa Rita, a cross-platform ecosystem (Web, Android, and iOS) that digitized medical appointment and exam scheduling for over 4,000 active users. Designed a robust, high-performance, and secure architecture to handle sensitive healthcare data.',
      impactMetrics: [
        {
          label: 'Active Users',
          value: '4,000+',
          detail: 'Citizens served on the platform',
        },
        {
          label: 'Platforms',
          value: 'Web · iOS · Android',
          detail: 'Full cross-platform ecosystem',
        },
        {
          label: 'Transformation',
          value: '100% Digital',
          detail: 'Medical appointment & exam booking',
        },
        {
          label: 'Security',
          value: 'Healthcare Data',
          detail: 'Robust & high-performance architecture',
        },
      ],
      architecture: {
        overview:
          'Unified architecture serving Web, Android, and iOS clients for municipal medical appointment and exam scheduling, engineered to handle traffic spikes and protect sensitive patient records.',
        securityAndScale:
          'Strict access control, protection of sensitive healthcare data, and performance optimization across mobile networks.',
        dataFlowSummary:
          'Web, Android & iOS Applications → Scheduling & Regulation API → Business Rule Validation & Healthcare Data Security → Transactional Persistence.',
        nodes: [
          {
            id: 'csr-node-1',
            title: '1. Cross-Platform Client Ecosystem (Web, Android & iOS)',
            layer: 'MULTI-PLATFORM CLIENT',
            tech: 'Web · Android · iOS',
            badge: '4,000+ Active Users',
            description:
              'Accessible and intuitive experience enabling more than 4,000 active users to schedule medical appointments and exams directly from their phone or browser.',
            details: [
              'Smooth transition from manual in-person queues to efficient digital workflows',
              'Optimized UI for usability and low mobile data consumption',
            ],
          },
          {
            id: 'csr-node-2',
            title: '2. Scheduling Backend & Sensitive Healthcare Data Engine',
            layer: 'CORE HEALTH SERVICE',
            tech: 'Full Stack Architecture · Secure APIs · Relational DB',
            badge: 'Health Data Security',
            description:
              'Slot allocation engine, exam queue management, and protection of sensitive patient scheduling records.',
            details: [
              'Concurrency control preventing double-booking across simultaneous requests',
              'Secure and auditable handling of sensitive public healthcare records',
            ],
          },
        ],
        adrs: [
          {
            id: 'ADR-CSR-01',
            title: 'Unified Cross-Platform Architecture (Web, Android & iOS)',
            status: 'In Production',
            context:
              'Citizens needed broad access to medical appointment and exam scheduling regardless of their device.',
            decision:
              'Built Conecta Santa Rita spanning Web, Android, and iOS backed by a centralized, high-performance, and secure API architecture.',
            consequence:
              'Rapid adoption surpassing 4,000 active users and elimination of manual scheduling queues.',
          },
        ],
        snippets: [
          {
            title:
              'Transactional Concurrency Control for Medical Appointment Booking',
            language: 'typescript',
            filename: 'scheduling/appointment-booking.service.ts',
            code: `export interface AppointmentRequest {
  citizenId: string;
  specialtyId: string;
  slotId: string;
  platform: 'web' | 'android' | 'ios';
}

export async function bookHealthAppointment(req: AppointmentRequest, db: any) {
  return db.transaction(async (trx: any) => {
    const slot = await trx('health_slots')
      .where({ id: req.slotId, available: true })
      .forUpdate()
      .first();

    if (!slot) {
      throw new Error('Slot already booked. Please select another time.');
    }

    await trx('health_slots').where({ id: req.slotId }).update({ available: false });
    return trx('appointments').insert({
      citizen_id: req.citizenId,
      specialty_id: req.specialtyId,
      slot_id: req.slotId,
      origin_platform: req.platform,
      created_at: new Date().toISOString(),
    });
  });
}`,
          },
        ],
      },
    },
    {
      id: 'plataforma-cosmo-ufma',
      slug: 'plataforma-educacional-cosmo-microsservicos',
      title:
        'Cosmo Educational Platform — Legacy Monolith to Microservices Migration',
      subtitle:
        'TeleMídia Lab — UFMA (FAPEMA Scholar) · RabbitMQ, Docker, Clean Architecture, DDD, SOLID & React/TS',
      organization: 'TeleMídia Lab - UFMA (FAPEMA Scholar)',
      contextBadge: 'TeleMídia Lab · UFMA',
      stackGroups: [
        { label: 'Frontend', items: ['React.js', 'TypeScript'] },
        {
          label: 'Backend & Architecture',
          items: ['Microservices', 'Clean Architecture', 'DDD', 'SOLID'],
        },
        {
          label: 'Messaging & DevOps',
          items: ['RabbitMQ', 'Docker', 'GitHub Actions (CI/CD)'],
        },
      ],
      period: 'Apr/2023 – Mar/2026',
      location: 'Remote',
      flagship: false,
      categories: ['microservices-backend', 'frontend-web'],
      tags: [
        'Microservices',
        'RabbitMQ',
        'Docker',
        'GitHub Actions (CI/CD)',
        'Clean Architecture',
        'DDD',
        'SOLID',
        'React.js',
        'TypeScript',
      ],
      summary:
        'Led the critical refactoring of the Cosmo educational platform, migrating a legacy monolith to a scalable microservices architecture. Implemented asynchronous messaging with RabbitMQ, full Docker containerization, automated CI/CD pipelines via GitHub Actions applying Clean Architecture, DDD, and SOLID, and accessible React.js + TypeScript interfaces.',
      impactMetrics: [
        {
          label: 'Architecture',
          value: 'Microservices',
          detail: 'Full legacy monolith migration',
        },
        {
          label: 'Design',
          value: 'DDD & Clean Arch',
          detail: 'Strict SOLID principles applied',
        },
        {
          label: 'Messaging & DevOps',
          value: 'RabbitMQ + CI/CD',
          detail: 'Automated Docker & GitHub Actions',
        },
        {
          label: 'Frontend',
          value: 'React + TS',
          detail: 'Accessible & high-performance UI',
        },
      ],
      architecture: {
        overview:
          'Strategic decomposition of a legacy monolithic platform into independent domain-driven microservices (DDD) structured with Clean Architecture and SOLID principles.',
        securityAndScale:
          'Resilient asynchronous communication via RabbitMQ, isolated Docker containers, and continuous delivery validated by GitHub Actions CI/CD pipelines.',
        dataFlowSummary:
          'Accessible Frontend (React.js + TypeScript) → Decoupled Microservices (Clean Architecture / DDD) ↔ Asynchronous Messaging (RabbitMQ) → Automated Deployment (Docker + GitHub Actions).',
        nodes: [
          {
            id: 'cosmo-node-1',
            title: '1. Complex & Accessible Frontend (React.js + TypeScript)',
            layer: 'PRESENTATION LAYER',
            tech: 'React.js · TypeScript · Tailwind CSS',
            badge: 'Accessible UI',
            description:
              'Development of interactive, accessible, and high-performance educational interfaces using strictly typed TypeScript.',
            details: [
              'Modular component architecture focused on accessibility and rendering performance',
            ],
          },
          {
            id: 'cosmo-node-2',
            title: '2. Microservices with Clean Architecture, DDD & SOLID',
            layer: 'DOMAIN & APPLICATION SERVICES',
            tech: 'Node.js · TypeScript · Clean Architecture · DDD · SOLID',
            badge: 'Domain-Driven',
            description:
              'Clear separation between pure business rules (Domain), application use cases (Application), and external adapters (Infrastructure).',
            details: [
              'Eliminated legacy monolithic coupling, enabling independent evolution of each bounded context',
            ],
          },
          {
            id: 'cosmo-node-3',
            title: '3. RabbitMQ Events, Docker & GitHub Actions CI/CD',
            layer: 'MESSAGING & DEVOPS',
            tech: 'RabbitMQ · Docker · GitHub Actions',
            badge: 'Automated CI/CD',
            description:
              'Asynchronous integration across microservices via RabbitMQ and automated build, test, and containerization pipelines.',
            details: [
              'Full Docker containerization ensuring parity between development and production environments',
            ],
          },
        ],
        adrs: [
          {
            id: 'ADR-COSMO-01',
            title:
              'Migrating Legacy Monolith to Microservices with DDD & Clean Architecture',
            status: 'Implemented',
            context:
              'The legacy monolith of the Cosmo platform hindered scalability, maintainability, and fault isolation.',
            decision:
              'Led the refactoring into microservices applying Domain-Driven Design (DDD), Clean Architecture, SOLID principles, and RabbitMQ messaging.',
            consequence:
              'High maintainability, decoupled educational modules, and automated deployment via Docker and GitHub Actions.',
          },
        ],
        snippets: [
          {
            title:
              'Decoupled Use Case (Clean Architecture + RabbitMQ Domain Event)',
            language: 'typescript',
            filename: 'domain/use-cases/complete-lesson.usecase.ts',
            code: `export interface DomainEventPublisher {
  publish(routingKey: string, payload: Record<string, unknown>): Promise<void>;
}

export class CompleteLessonUseCase {
  constructor(
    private readonly progressRepo: { saveCompletion(studentId: string, lessonId: string): Promise<void> },
    private readonly eventBroker: DomainEventPublisher
  ) {}

  async execute(input: { studentId: string; lessonId: string }): Promise<void> {
    await this.progressRepo.saveCompletion(input.studentId, input.lessonId);
    await this.eventBroker.publish('cosmo.lesson.completed', {
      studentId: input.studentId,
      lessonId: input.lessonId,
      completedAt: new Date().toISOString(),
    });
  }
}`,
          },
        ],
      },
    },
    {
      id: 'autodomo-smart-home',
      slug: 'autodomo-automacao-residencial-iot',
      title: 'AutoDomo — Smart Home Automation (IoT) & Real-Time Device Control',
      subtitle:
        'AutoDomo · Node.js, React.js (Web), Flutter (Mobile), Docker & Low-Latency APIs',
      organization: 'AutoDomo',
      contextBadge: 'AutoDomo · IoT',
      stackGroups: [
        { label: 'Web & Mobile', items: ['React.js', 'Flutter', 'Dart'] },
        { label: 'Backend', items: ['Node.js', 'Low-Latency APIs'] },
        { label: 'DevOps', items: ['Docker', 'Git'] },
      ],
      period: 'Apr/2021 – Dec/2022',
      location: 'São Luís, Brazil (On-site)',
      flagship: false,
      categories: ['mobile-health-iot', 'frontend-web', 'microservices-backend'],
      tags: [
        'Node.js',
        'React.js',
        'Flutter',
        'Dart',
        'Docker',
        'Low Latency',
        'Git',
      ],
      summary:
        'Architected and developed smart home automation (IoT) solutions using Node.js and React.js for the web and Flutter for mobile. Containerized services with Docker and built low-latency, high-availability APIs for real-time smart device control.',
      impactMetrics: [
        {
          label: 'Command Latency',
          value: 'Low Latency',
          detail: 'Instant smart device actuation',
        },
        {
          label: 'Web & Mobile',
          value: 'React + Flutter',
          detail: 'Cross-platform home control',
        },
        {
          label: 'Backend',
          value: 'Node.js + Docker',
          detail: 'Containerized high-avail. services',
        },
        {
          label: 'Availability',
          value: 'High Avail.',
          detail: 'Continuous Smart Home operation',
        },
      ],
      architecture: {
        overview:
          'Integrated platform for controlling and monitoring smart environments and IoT devices, combining a React.js web dashboard, a native Flutter mobile app, and a low-latency Node.js backend.',
        securityAndScale:
          'Docker-containerized services engineered for high availability and instantaneous response to user commands.',
        dataFlowSummary:
          'Web Dashboard (React.js) & Mobile App (Flutter) → Low-Latency API (Node.js on Docker) → Real-Time Smart Device Control & State Sync.',
        nodes: [
          {
            id: 'autodomo-node-1',
            title: '1. Control Applications (React.js Web & Flutter Mobile)',
            layer: 'CLIENT INTERFACES',
            tech: 'React.js · Flutter · Dart',
            badge: 'Web & Mobile',
            description:
              'Responsive web and native mobile interfaces for triggering smart home scenes, lighting, and residential sensors.',
            details: [
              'Real-time synchronization of smart device states across multiple client devices',
            ],
          },
          {
            id: 'autodomo-node-2',
            title: '2. Low-Latency APIs & Docker Containers',
            layer: 'IOT GATEWAY & BACKEND',
            tech: 'Node.js · Docker · Git',
            badge: 'Low Latency API',
            description:
              'Node.js services packaged in Docker containers ensuring high availability and minimal response time when dispatching device commands.',
            details: [
              'Standardized runtime environment with Docker and version control via Git',
            ],
          },
        ],
        adrs: [
          {
            id: 'ADR-AUTO-01',
            title: 'Containerized Node.js + React.js + Flutter IoT Stack',
            status: 'Implemented',
            context:
              'Controlling residential smart devices requires low backend latency and a fluid UX across both web dashboards and mobile phones.',
            decision:
              'Built lean low-latency APIs in Node.js containerized with Docker, consumed by React.js and Flutter applications.',
            consequence:
              'Fast and reliable actuation of smart home devices with high availability.',
          },
        ],
        snippets: [
          {
            title: 'Low-Latency Smart Device Command Dispatcher',
            language: 'javascript',
            filename: 'controllers/device-command.controller.js',
            code: `export async function dispatchDeviceCommand(req, res) {
  const { deviceId, action, payload } = req.body;
  const startedAt = performance.now();

  await deviceGateway.sendCommand(deviceId, { action, payload });
  const elapsedMs = Math.round((performance.now() - startedAt) * 100) / 100;

  return res.status(200).json({
    status: 'ACK',
    deviceId,
    action,
    latencyMs: elapsedMs,
  });
}`,
          },
        ],
      },
    },
  ],
  stackCategories: [
    {
      id: 'linguagens',
      title: 'Languages',
      subtitle: 'Polyglot engineering across Web, Backend, AI, and Mobile',
      command: 'savio --stack languages',
      colSpan: 'lg:col-span-6',
      items: [
        { name: 'TypeScript', context: 'Strict Full Stack typing' },
        { name: 'JavaScript', context: 'ESNext & Node/Web' },
        { name: 'Python', context: 'Machine Learning, AI, Flask & FastAPI' },
        { name: 'Dart', context: 'Cross-platform Mobile with Flutter' },
        { name: 'Java', context: 'Enterprise Systems & JUnit' },
        { name: 'PHP', context: 'Web Systems & APIs' },
        { name: 'Kotlin', context: 'Android Development' },
        { name: 'Swift', context: 'iOS Development' },
      ],
    },
    {
      id: 'backend-arquitetura',
      title: 'Backend & Architecture',
      subtitle: 'Distributed systems, decoupling, and domain engineering',
      command: 'savio --stack architecture',
      colSpan: 'lg:col-span-6',
      items: [
        { name: 'Node.js', context: 'NestJS, Express & Low-latency APIs' },
        { name: 'Microservices', context: 'Scalable distributed architectures' },
        { name: 'Clean Architecture', context: 'Strict separation of layers' },
        { name: 'SOLID', context: 'Maintainable object-oriented design' },
        { name: 'DDD', context: 'Strategic Domain-Driven Design' },
      ],
    },
    {
      id: 'frontend',
      title: 'Frontend',
      subtitle: 'High-performance, accessible UIs and 3D/reactive experiences',
      command: 'savio --stack frontend',
      colSpan: 'lg:col-span-4',
      items: [
        { name: 'React.js', context: 'Complex & accessible SPAs' },
        { name: 'Next.js', context: 'SSR, Routing & Web Performance' },
        { name: 'Three.js', context: '3D graphics & visualization on the Web' },
        { name: 'Tailwind CSS', context: 'High-contrast Design Systems' },
        { name: 'Zustand', context: 'Lean reactive state management' },
        { name: 'HTML5', context: 'Semantics & Accessibility' },
        { name: 'CSS3', context: 'Responsive layouts & animations' },
      ],
    },
    {
      id: 'databases-baas',
      title: 'Databases & BaaS',
      subtitle: 'Relational persistence, NoSQL, in-memory caching, and BaaS',
      command: 'savio --stack databases',
      colSpan: 'lg:col-span-4',
      items: [
        { name: 'PostgreSQL', context: 'Mission-critical relational DB' },
        { name: 'MySQL', context: 'Relational database' },
        { name: 'MongoDB', context: 'Scalable NoSQL documents' },
        { name: 'Redis', context: 'In-memory cache & low latency' },
        { name: 'Supabase', context: 'Backend-as-a-Service & Postgres' },
      ],
    },
    {
      id: 'mobile',
      title: 'Mobile',
      subtitle: 'Cross-platform apps for Healthcare, Public Services, and IoT',
      command: 'savio --stack mobile',
      colSpan: 'lg:col-span-4',
      items: [
        { name: 'Flutter', context: 'Native cross-platform apps in Dart' },
        { name: 'React Native', context: 'iOS/Android mobile apps in TS' },
        { name: 'SQLite', context: 'Embedded offline-first local storage' },
      ],
    },
    {
      id: 'cloud-devops-messaging',
      title: 'Cloud, DevOps & Messaging',
      subtitle: 'Cloud infrastructure, container orchestration, queues & CI/CD',
      command: 'savio --stack cloud-devops',
      colSpan: 'lg:col-span-7',
      items: [
        { name: 'AWS', context: 'Amazon Web Services' },
        { name: 'GCP', context: 'Google Cloud Platform' },
        { name: 'Azure', context: 'Microsoft Azure' },
        { name: 'Docker', context: 'Containerization & Docker Compose' },
        { name: 'Kubernetes', context: 'Container orchestration' },
        { name: 'RabbitMQ', context: 'Async microservice messaging' },
        {
          name: 'GitHub Actions (CI/CD)',
          context: 'Automated build, test & deployment pipelines',
        },
        { name: 'Git', context: 'Distributed version control' },
        { name: 'Linux', context: 'Server & environment administration' },
      ],
    },
    {
      id: 'testes-idiomas',
      title: 'Testing & Languages',
      subtitle:
        'Automated unit/E2E testing and international technical communication',
      command: 'savio --stack qa-lang',
      colSpan: 'lg:col-span-5',
      items: [
        { name: 'Jest', context: 'JS/TS unit and integration testing' },
        { name: 'Cypress', context: 'Automated End-to-End (E2E) testing' },
        { name: 'JUnit', context: 'Automated testing in the Java ecosystem' },
        {
          name: 'Advanced English',
          context: 'Fluent technical reading and documentation',
          isLanguageHighlight: true,
        },
      ],
    },
  ],
  experience: [
    {
      id: 'exp-telemidia-puc-rio',
      period: 'Apr/2026 – Present',
      role: 'AI Software Engineer & M.Sc. Researcher',
      company: 'TeleMídia Lab - PUC-Rio',
      location: 'Rio de Janeiro, Brazil',
      modality: 'Applied R&D & BTG Pactual Cooperation',
      summary:
        'Collaborating on an R&D project with BTG Pactual bank to develop Machine Learning solutions for hyper-personalization of customer service and financial products.',
      architectureHighlights: [
        'Collaborating on an R&D project with BTG Pactual bank to develop Machine Learning solutions for hyper-personalization of customer service and financial products.',
        'Implementing real-time data pipelines and integrating machine learning models for low-latency information processing.',
        'Conducting applied AI research tailored to the financial sector, focusing on infrastructure scalability and predictive model accuracy.',
      ],
      stack: [
        'Machine Learning',
        'Artificial Intelligence',
        'Python',
        'Data Pipelines',
        'Real-Time Processing',
        'Software Engineering',
      ],
    },
    {
      id: 'exp-prefeitura-santa-rita',
      period: 'Jun/2025 – Dec/2025',
      role: 'Full Stack Developer',
      company: 'Municipality of Santa Rita - MA',
      location: 'Santa Rita, Brazil',
      modality: 'Remote',
      summary:
        'Developed Conecta Santa Rita, a cross-platform ecosystem (Web, Android, and iOS) that digitized medical appointment and exam scheduling for over 4,000 active users.',
      architectureHighlights: [
        'Developed Conecta Santa Rita, a cross-platform ecosystem (Web, Android, and iOS) that digitized medical appointment and exam scheduling for over 4,000 active users.',
        'Designed a robust, high-performance, and secure architecture to handle sensitive healthcare data, transitioning manual workflows into efficient digital processes.',
      ],
      stack: [
        'TypeScript',
        'React.js',
        'Node.js',
        'Web',
        'Android',
        'iOS',
        'PostgreSQL',
      ],
    },
    {
      id: 'exp-projeto-mama-ufma',
      period: 'Jun/2024 – Jun/2025',
      role: 'Software Developer & Undergraduate Researcher',
      company: 'Mama Project - UFMA',
      location: 'São Luís, Brazil',
      modality: 'Hybrid',
      summary:
        'Architected a distributed foundation decoupling the Computer Vision image processing module from metadata management and authentication services.',
      architectureHighlights: [
        'Architected a distributed foundation decoupling the Computer Vision image processing module from metadata management and authentication services.',
        'Built the clinical mobile app in React Native and resilient backend APIs in Node.js (NestJS) integrated with Python (Flask/FastAPI) for medical image segmentation models.',
        'Implemented a centralized security service for medical file encryption (DICOM/Images) using AES-256-GCM, protecting sensitive data at rest and in transit.',
        'Structured asynchronous microservice communication via RabbitMQ for high-resolution exam processing without blocking the UI, orchestrated with Docker Compose, PostgreSQL, and Object Storage.',
      ],
      stack: [
        'React Native',
        'Node.js (NestJS)',
        'Python (Flask/FastAPI)',
        'Computer Vision',
        'AES-256-GCM',
        'DICOM',
        'RabbitMQ',
        'Docker',
        'Docker Compose',
        'PostgreSQL',
      ],
    },
    {
      id: 'exp-telemidia-ufma',
      period: 'Apr/2023 – Mar/2026',
      role: 'Full Stack Developer & Undergraduate Researcher - FAPEMA Scholar',
      company: 'TeleMídia Lab - UFMA',
      location: 'São Luís, Brazil',
      modality: 'Remote',
      summary:
        'Led the critical refactoring of the Cosmo educational platform, migrating a legacy monolith to a scalable microservices architecture.',
      architectureHighlights: [
        'Led the critical refactoring of the Cosmo educational platform, migrating a legacy monolith to a scalable microservices architecture.',
        'Implemented asynchronous messaging with RabbitMQ, full Docker containerization, and automated CI/CD pipelines via GitHub Actions strictly applying Clean Architecture, DDD, and SOLID principles.',
        'Developed complex, accessible, and high-performance frontend interfaces using React.js and TypeScript.',
      ],
      stack: [
        'React.js',
        'TypeScript',
        'Node.js',
        'Microservices',
        'RabbitMQ',
        'Docker',
        'GitHub Actions (CI/CD)',
        'Clean Architecture',
        'DDD',
        'SOLID',
      ],
    },
    {
      id: 'exp-autodomo',
      period: 'Apr/2021 – Dec/2022',
      role: 'Junior Full Stack Developer',
      company: 'AutoDomo',
      location: 'São Luís, Brazil',
      modality: 'On-site',
      summary:
        'Architected and developed smart home automation (IoT) solutions using Node.js and React.js for the web and Flutter for mobile.',
      architectureHighlights: [
        'Architected and developed smart home automation (IoT) solutions using Node.js and React.js for the web and Flutter for mobile.',
        'Containerized services with Docker and built low-latency, high-availability APIs for real-time smart device control.',
      ],
      stack: ['Node.js', 'React.js', 'Flutter', 'Dart', 'Docker', 'Git'],
    },
  ],
};

export const PORTFOLIO_CONTENT: Record<Language, LocalizedPortfolioContent> = {
  pt: PT_CONTENT,
  en: EN_CONTENT,
};

// Default exports for backward compatibility
export const PROFILE_DATA = PT_CONTENT.profile;
export const EDUCATION_DATA = PT_CONTENT.education;
export const PROJECT_CATEGORIES = PT_CONTENT.projectCategories;
export const PROJECTS_DATA = PT_CONTENT.projects;
export const STACK_BENTO_CATEGORIES = PT_CONTENT.stackCategories;
export const EXPERIENCE_TIMELINE = PT_CONTENT.experience;
