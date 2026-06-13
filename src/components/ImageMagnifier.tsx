'use client';
import React, { useState, useRef } from 'react';

interface Props {
  src: string;
  alt: string;
  zoomLevel?: number;
}

export default function ImageMagnifier({ src, alt, zoomLevel = 2.5 }: Props) {
  const [showMagnifier, setShowMagnifier] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const imgRef = useRef<HTMLImageElement>(null);

  const handleMouseEnter = () => {
    setShowMagnifier(true);
  };

  const handleMouseLeave = () => {
    setShowMagnifier(false);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLImageElement>) => {
    const el = e.currentTarget;
    const { left, top, width, height } = el.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    // Calculate background position
    const bgX = (x / width) * 100;
    const bgY = (y / height) * 100;

    setPosition({ x: bgX, y: bgY });
    setCursorPosition({ x, y });
  };

  return (
    <div className="relative w-full h-full overflow-hidden rounded-xl border border-[var(--color-primary)]/10 group cursor-crosshair bg-white flex items-center justify-center">
      <img
        ref={imgRef}
        src={src}
        alt={alt}
        className={`w-full h-full object-contain transition-all duration-300 ${showMagnifier ? 'blur-[3px] scale-95' : 'scale-100'}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
      />
      {showMagnifier && (
        <div className="fixed inset-0 z-[200] pointer-events-none flex items-center justify-center">
          <div
            className="border-[4px] border-white/20 rounded-[2rem] shadow-[0_20px_60px_rgba(0,0,0,0.8)] bg-no-repeat bg-white w-[90vw] h-[90vw] sm:w-[450px] sm:h-[450px]"
            style={{
              backgroundImage: `url('${src}')`,
              backgroundPosition: `${position.x}% ${position.y}%`,
              backgroundSize: `${imgRef.current ? imgRef.current.width * zoomLevel : 0}px ${
                imgRef.current ? imgRef.current.height * zoomLevel : 0
              }px`,
            }}
          />
        </div>
      )}
    </div>
  );
}
