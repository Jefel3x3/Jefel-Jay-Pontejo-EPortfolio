import { useEffect, useRef } from 'react';

export default function CursorSpotlight() {
  const overlayRef = useRef(null);

  useEffect(() => {
    const el = overlayRef.current;
    if (!el) return;

    const onMove = ({ clientX: x, clientY: y }) => {
      el.style.background = `radial-gradient(650px circle at ${x}px ${y}px, rgba(139,92,246,0.07), rgba(59,130,246,0.03) 40%, transparent 70%)`;
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  return <div ref={overlayRef} className="fixed inset-0 pointer-events-none z-[2]" />;
}
