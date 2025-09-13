import dynamic from 'next/dynamic';
import { useClientOnly } from '@/hooks/useClientOnly';

// Create a dynamic wrapper that only renders on client
export default function DynamicWrapper({ children, fallback = null }) {
  const hasMounted = useClientOnly();
  
  if (!hasMounted) {
    return fallback;
  }
  
  return children;
}

// Dynamic import wrapper for components that cause hydration issues
export const DynamicComponent = dynamic(() => Promise.resolve(DynamicWrapper), {
  ssr: false,
  loading: () => null
});
