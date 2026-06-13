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
          ? 'bg-amber-900/30 border-amber-500/50 shadow-[0_0_15px_rgba(245,158,11,0.2)]' 
          : 'bg-white/5 border-white/10 hover:bg-white/10'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-bold text-lg text-white flex items-center gap-2">
            {meta.label[language]}
            {recentlyAutoAdjusted && (
              <Lock size={14} className="text-amber-400 animate-pulse" />
            )}
          </h3>
          <p className="text-xs text-cyan-200/60 mt-1 max-w-[200px]">
            {meta.description[language]}
          </p>
        </div>
        
        {/* Value Badge */}
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg font-bold shadow-lg transition-colors ${
          recentlyAutoAdjusted ? 'bg-amber-500 text-black' : 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
        }`}>
          {internalValue}
        </div>
      </div>

      {/* Slider Track Container */}
      <div className="relative h-8 flex items-center">
        {/* Background gradient track */}
        <div 
          className="absolute inset-x-0 h-2 rounded-full opacity-30"
          style={{ background: `linear-gradient(to right, ${meta.gradientFrom}, ${meta.gradientTo})` }}
        />
        
        {/* Active gradient fill */}
        <div 
          className="absolute left-0 h-2 rounded-full transition-all duration-200"
          style={{ 
            width: `${percentage}%`,
            background: `linear-gradient(to right, ${meta.gradientFrom}, ${meta.gradientTo})`
          }}
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
          className="absolute h-6 w-6 rounded-full bg-white border-2 border-cyan-500 shadow-[0_0_10px_rgba(0,240,255,0.5)] pointer-events-none transition-transform duration-200 flex items-center justify-center z-0"
          style={{ 
            left: `calc(${percentage}% - 12px)`,
            transform: isHovered ? 'scale(1.2)' : 'scale(1)'
          }}
        >
          <div className="w-2 h-2 rounded-full bg-cyan-500" />
        </div>
      </div>

      {/* Min/Max Labels */}
      <div className="flex justify-between mt-2 text-xs font-medium text-gray-400">
        <span className="w-1/3 text-left">{meta.lowLabel[language]}</span>
        <span className="w-1/3 text-right">{meta.highLabel[language]}</span>
      </div>
    </div>
  );
}
