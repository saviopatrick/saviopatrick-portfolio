export type Language = 'pt' | 'en';

export type ProjectCategoryId =
  | 'all'
  | 'ai-ml'
  | 'microservices-backend'
  | 'frontend-web'
  | 'mobile-health-iot';

export interface ProjectCategoryOption {
  id: ProjectCategoryId;
  label: string;
}

export interface ArchitectureNode {
  id: string;
  title: string;
  layer: string;
  tech: string;
  badge: string;
  description: string;
  details: string[];
}

export interface ArchitectureADR {
  id: string;
  title: string;
  status: string;
  context: string;
  decision: string;
  consequence: string;
}

export interface ArchitectureCodeSnippet {
  title: string;
  language: string;
  filename: string;
  code: string;
}

export interface ProjectItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  organization: string;
  /** Badge curto de contexto exibido no topo do card (ex: "BTG Pactual · PUC-Rio"). */
  contextBadge: string;
  /** Stack completa agrupada por categoria (exibida no modal de arquitetura). */
  stackGroups: {
    label: string;
    items: string[];
  }[];
  period: string;
  location: string;
  flagship?: boolean;
  categories: ProjectCategoryId[];
  tags: string[];
  summary: string;
  impactMetrics: {
    label: string;
    value: string;
    detail: string;
  }[];
  architecture: {
    overview: string;
    securityAndScale: string;
    dataFlowSummary: string;
    nodes: ArchitectureNode[];
    adrs: ArchitectureADR[];
    snippets: ArchitectureCodeSnippet[];
  };
}

export interface EducationItem {
  id: string;
  institution: string;
  shortName: string;
  degree: string;
  field: string;
  location: string;
  status: string;
  badge: string;
  highlights: string[];
}

export interface StackCategoryItem {
  id: string;
  title: string;
  subtitle: string;
  command: string;
  colSpan: string;
  items: {
    name: string;
    context?: string;
    isLanguageHighlight?: boolean;
  }[];
}

export interface ExperienceItem {
  id: string;
  period: string;
  role: string;
  company: string;
  location: string;
  modality: string;
  summary: string;
  architectureHighlights: string[];
  stack: string[];
}

export interface ProfileData {
  name: string;
  shortName: string;
  handle: string;
  npxCommand: string;
  role: string;
  headline: string;
  subheadline: string;
  email: string;
  phone: string;
  github: string;
  linkedin: string;
  resumeUrl: string;
  location: string;
  availability: string;
}
