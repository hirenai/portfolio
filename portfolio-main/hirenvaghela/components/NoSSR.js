import { useClientOnly } from "@/hooks/useClientOnly";

export default function NoSSR({ children, fallback = null }) {
  const hasMounted = useClientOnly();
  
  if (!hasMounted) {
    return fallback;
  }
  
  return children;
}
