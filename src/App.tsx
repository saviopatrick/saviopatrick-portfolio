import React, { useState, useEffect, useCallback } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { ProjectsSection } from './components/ProjectsSection';
import { BentoEngineeringSection } from './components/BentoEngineeringSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ArchitectureModal } from './components/ArchitectureModal';
import { CommandPalette } from './components/CommandPalette';
import { Footer } from './components/Footer';
import { Toast, ToastMessage } from './components/ui/Toast';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { ProjectItem } from './types/portfolio';

const PortfolioContentShell: React.FC = () => {
  const { t, content, toggleLang } = useLanguage();
  const profile = content.profile;

  const [cursorPos, setCursorPos] = useState({ x: 600, y: 300 });
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(
    null
  );
  const [selectedNodeId, setSelectedNodeId] = useState<string | undefined>(
    undefined
  );
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [toast, setToast] = useState<ToastMessage | null>(null);

  const triggerToast = useCallback((msg: Omit<ToastMessage, 'id'>) => {
    const id = String(Date.now());
    setToast({ id, ...msg });
  }, []);

  useEffect(() => {
    if (!toast) return;
    const timer = window.setTimeout(() => setToast(null), 3600);
    return () => window.clearTimeout(timer);
  }, [toast]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCommandOpen((prev) => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  const handleCopyEmail = useCallback(() => {
    navigator.clipboard.writeText(profile.email);
    triggerToast({
      title: t.toast.emailCopiedTitle,
      subtitle: t.toast.emailCopiedSub,
      code: profile.email,
    });
  }, [profile.email, t.toast, triggerToast]);

  const handleCopyNpx = useCallback(() => {
    navigator.clipboard.writeText(profile.npxCommand);
    triggerToast({
      title: t.toast.cliCopiedTitle,
      subtitle: t.toast.cliCopiedSub,
      code: profile.npxCommand,
    });
  }, [profile.npxCommand, t.toast, triggerToast]);

  const handleOpenFlagship = useCallback(() => {
    setSelectedProjectId(content.projects[0]?.id ?? null);
    setSelectedNodeId(undefined);
  }, [content.projects]);

  const handleSelectArchitecture = useCallback(
    (project: ProjectItem, initialNodeId?: string) => {
      setSelectedProjectId(project.id);
      setSelectedNodeId(initialNodeId);
    },
    []
  );

  return (
    <div
      onMouseMove={handleMouseMove}
      className="relative min-h-screen bg-obsidian-950 text-zinc-100 bg-grid-pattern"
    >
      {/* Subtle Global Cursor Spotlight */}
      <div
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(800px circle at ${cursorPos.x}px ${cursorPos.y}px, rgba(16, 185, 129, 0.045), transparent 55%)`,
        }}
      />

      <div className="relative z-10">
        <Navbar
          onCopyEmail={handleCopyEmail}
          onOpenCommandPalette={() => setIsCommandOpen(true)}
        />

        {/* pt-20 compensa o header flutuante fixo (top-4 + h-16) */}
        <main className="pt-20">
          <HeroSection
            onCopyNpx={handleCopyNpx}
            onCopyEmail={handleCopyEmail}
            onOpenFlagshipArchitecture={handleOpenFlagship}
          />

          <ProjectsSection
            onSelectArchitecture={handleSelectArchitecture}
          />

          <BentoEngineeringSection />

          <ExperienceSection
            onCopyEmail={handleCopyEmail}
            onCopyNpx={handleCopyNpx}
          />
        </main>

        <Footer />
      </div>

      {/* Interactive Architecture Drawer / Modal */}
      <ArchitectureModal
        projectId={selectedProjectId}
        initialNodeId={selectedNodeId}
        onClose={() => {
          setSelectedProjectId(null);
          setSelectedNodeId(undefined);
        }}
      />

      {/* Raycast / Linear Style Command Palette (⌘K) */}
      <CommandPalette
        isOpen={isCommandOpen}
        onClose={() => setIsCommandOpen(false)}
        onCopyEmail={handleCopyEmail}
        onCopyNpx={handleCopyNpx}
        onOpenFlagshipArchitecture={handleOpenFlagship}
        onSwitchLanguage={toggleLang}
      />

      {/* Toast Notification */}
      <Toast toast={toast} onClose={() => setToast(null)} />
    </div>
  );
};

export const App: React.FC = () => (
  <LanguageProvider>
    <PortfolioContentShell />
  </LanguageProvider>
);

export default App;
