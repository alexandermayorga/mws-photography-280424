// components/FadeInUpWhenVisible.tsx
import {
  motion,
  Target,
  TargetAndTransition,
  Transition,
  VariantLabels,
} from "framer-motion";

interface FadeInUpWhenVisibleProps {
  children: React.ReactNode;
  className?: string;
  initialVariant?: boolean | Target | VariantLabels;
  whileInViewVariant?: VariantLabels | TargetAndTransition;
  transitionVariant?: Transition;
}

const FadeInUpWhenVisible: React.FC<FadeInUpWhenVisibleProps> = ({
  children,
  className,
  initialVariant = { opacity: 0, y: 100 },
  whileInViewVariant = { opacity: 1, y: 0 },
  transitionVariant = { type: "easeInOut", duration: "0.5", delay: 0.3 },
}) => {
  return (
    <motion.div
      initial={initialVariant}
      whileInView={whileInViewVariant}
      viewport={{ once: true }}
      className={className}
      transition={transitionVariant}
    >
      {children}
    </motion.div>
  );
};

export default FadeInUpWhenVisible;
