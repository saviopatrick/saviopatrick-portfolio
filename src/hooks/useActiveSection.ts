import { useEffect, useState } from 'react';

/**
 * Scroll-spy baseado em IntersectionObserver.
 * Considera "ativa" a seção que cruza a faixa central da viewport.
 */
export function useActiveSection(
  ids: readonly string[],
  rootMargin = '-45% 0px -50% 0px'
) {
  const [activeId, setActiveId] = useState<string>(ids[0] ?? '');

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin, threshold: [0, 0.25, 0.5, 1] }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids, rootMargin]);

  return [activeId, setActiveId] as const;
}
