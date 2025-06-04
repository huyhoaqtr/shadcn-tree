// src/hooks/use-resize-observer.ts
import { useRef, useState, useLayoutEffect } from "react";

export const useResizeObserver = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState({ width: 0, height: 0 });

  useLayoutEffect(() => {
    if (!ref.current) return;

    const observer = new ResizeObserver(([entry]) => {
      const { width, height } = entry.contentRect;
      setSize({ width, height });
    });

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return { ref, width: size.width, height: size.height };
};
