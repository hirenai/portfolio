import { motion } from 'framer-motion';
import { useClientOnly } from '@/hooks/useClientOnly';

// Safe motion component that only animates on client
export default function SafeMotion({ children, ...props }) {
  const hasMounted = useClientOnly();
  
  if (!hasMounted) {
    return <div {...props}>{children}</div>;
  }
  
  return <motion.div {...props}>{children}</motion.div>;
}

// Safe motion button
export function SafeMotionButton({ children, ...props }) {
  const hasMounted = useClientOnly();
  
  if (!hasMounted) {
    return <button {...props}>{children}</button>;
  }
  
  return <motion.button {...props}>{children}</motion.button>;
}

// Safe motion section
export function SafeMotionSection({ children, ...props }) {
  const hasMounted = useClientOnly();
  
  if (!hasMounted) {
    return <section {...props}>{children}</section>;
  }
  
  return <motion.section {...props}>{children}</motion.section>;
}
