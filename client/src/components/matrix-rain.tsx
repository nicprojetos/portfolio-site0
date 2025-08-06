import { useEffect, useRef } from "react";

export default function MatrixRain() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@#$%^&*(){}[]|\\~`<>?/:;"\'';
    
    const createMatrixChar = () => {
      const char = document.createElement('div');
      
      // Adicionar variedade nas classes para diferentes intensidades
      const intensity = Math.random();
      if (intensity > 0.7) {
        char.className = 'matrix-char matrix-char-bright';
      } else if (intensity > 0.4) {
        char.className = 'matrix-char matrix-char-medium';
      } else {
        char.className = 'matrix-char matrix-char-dim';
      }
      
      char.style.left = Math.random() * 100 + '%';
      char.style.animationDelay = Math.random() * 10 + 's';
      char.style.animationDuration = (Math.random() * 6 + 6) + 's';
      char.style.fontSize = (Math.random() * 6 + 12) + 'px';
      char.textContent = chars[Math.floor(Math.random() * chars.length)];
      container.appendChild(char);
      
      setTimeout(() => {
        if (char.parentNode) {
          char.remove();
        }
      }, 16000);
    };
    
    // Create initial characters
    for (let i = 0; i < 200; i++) {
      setTimeout(createMatrixChar, i * 20);
    }
    
    // Continue creating characters
    const interval = setInterval(createMatrixChar, 80);
    
    return () => {
      clearInterval(interval);
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return <div ref={containerRef} className="matrix-rain" />;
}
