import React from 'react';
import { motion } from 'framer-motion';
import { fadeUpItem, staggerContainer } from '../../lib/motion';

interface RevealGroupProps {
  children: React.ReactNode;
  className?: string;
}

/**
 * Revela os filhos diretos em cascata quando o grupo entra na viewport.
 * Cada filho é envolvido automaticamente em um `motion.div` com `fadeUpItem`.
 */
export const RevealGroup: React.FC<RevealGroupProps> = ({
  children,
  className,
}) => (
  <motion.div
    className={className}
    variants={staggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: true, margin: '-80px' }}
  >
    {React.Children.map(children, (child) => {
      if (child === null || child === undefined || typeof child === 'boolean') {
        return null;
      }
      return <motion.div variants={fadeUpItem}>{child}</motion.div>;
    })}
  </motion.div>
);
