import type { Transition, Variants } from 'framer-motion';

/** Curva de easing "expo-out" usada nas entradas de seções e do header. */
export const EASE_OUT_EXPO = [0.22, 1, 0.36, 1] as const;

/** Mola da pílula deslizante da navbar (layoutId="nav-pill"). */
export const PILL_SPRING: Transition = {
  type: 'spring',
  stiffness: 380,
  damping: 30,
};

/** Micro-interação padrão para botões de ação (CV, e-mail, GitHub, LinkedIn). */
export const buttonMotion = {
  whileHover: { y: -2, scale: 1.02 },
  whileTap: { scale: 0.97 },
} as const;

/** Container com revelação em cascata (staggerChildren). */
export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.04 },
  },
};

/** Item filho: fade + slide-up. */
export const fadeUpItem: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: EASE_OUT_EXPO },
  },
};
