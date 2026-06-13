'use client';

import React, { useEffect, useState } from 'react';
import type { TraitMeta, Language } from '@/types';
import { Lock } from 'lucide-react';

interface Props {
  meta: TraitMeta;
  value: number;
  language: Language;
  onChange: (value: number) => void;
  recentlyAutoAdjusted: boolean;
}

export default function TraitSlider({ meta, value, language, onChange, recentlyAutoAdjusted }: Props) {
  const [isHovered, setIsHovered] = useState(false);
  const [internalValue, setInternalValue] = useState(value);

  // Sync with external value when it changes (especially for auto-adjustments)
  useEffect(() => {
    setInternalValue(value);
  }, [value]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseInt(e.target.value, 10);
    setInternalValue(val);
    onChange(val);
  };

  const percentage = ((internalValue - 1) / 9) * 100;

  return (
    <div 
      className={`relative p-4 rounded-xl border transition-all duration-300 ${
        recentlyAutoAdjusted 
          ? 'bg-amber-100 border-amber-300 shadow-[0_0_15px_rgba(245,158,11,0.1)]' 
          : 'bg-white border-[var(--color-primary)]/10 hover:bg-[var(--color-secondary)]/20 hover:shadow-md hover:border-[var(--color-primary)]/20'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-bold text-lg text-[var(--color-primary)] flex items-center gap-2">
            {meta.label[language]}
            {recentlyAutoAdjusted && (
              <Lock size={14} className="text-amber-500 animate-pulse" />
            )}
          </h3>
          <p className="text-xs text-[var(--color-primary)]/60 mt-1 max-w-[200px]">
            {meta.description[language]}
          </p>
        </div>
        
        {/* Value Badge */}
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold shadow-sm transition-colors ${
          recentlyAutoAdjusted ? 'bg-amber-500 text-white' : 'bg-[var(--color-secondary)] text-[var(--color-primary)] border border-[var(--color-primary)]/10'
        }`}>
          {internalValue}
        </div>
      </div>

      {/* Slider Track Container */}
      <div className="relative h-8 flex items-center">
        {/* Background track (Secondary color) */}
        <div 
          className="absolute inset-x-0 h-2 rounded-full bg-[var(--color-secondary)] opacity-50"
        />
        
        {/* Active fill (Primary color) */}
        <div 
          className="absolute left-0 h-2 rounded-full transition-all duration-200 bg-[var(--color-primary)]"
          style={{ width: `${percentage}%` }}
        />

        {/* The actual range input */}
        <input
          type="range"
          min="1"
          max="10"
          step="1"
          value={internalValue}
          onChange={handleChange}
          className="absolute inset-x-0 w-full z-10 cursor-pointer opacity-0"
        />

        {/* Custom Thumb (visual only) */}
        <div 
          className="absolute h-6 w-6 rounded-full bg-white border-4 border-[var(--color-primary)] shadow-sm pointer-events-none transition-transform duration-200 flex items-center justify-center z-0"
          style={{ 
            left: `calc(${percentage}% - 12px)`,
            transform: isHovered ? 'scale(1.1)' : 'scale(1)'
          }}
        />
      </div>

      {/* Min/Max Labels */}
      <div className="flex justify-between mt-2 text-xs font-bold text-[var(--color-primary)]/50 uppercase tracking-wider">
        <span className="w-1/3 text-left">{meta.lowLabel[language]}</span>
        <span className="w-1/3 text-right">{meta.highLabel[language]}</span>
      </div>
    </div>
  );
}
