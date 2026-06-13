'use client';

import React from 'react';
import type { Animal } from '@/types';
import type { MatchResult } from '@/lib/animalMatcher';
import { useLanguage } from './LanguageProvider';
import { Target, ChevronRight } from 'lucide-react';

interface Props {
  matches: MatchResult[];
  onSelectAnimal: (animal: Animal) => void;
}

export default function AnimalProbabilityPanel({ matches, onSelectAnimal }: Props) {
  const { language, t } = useLanguage();
  
  // Show top 10 matches
  const topMatches = matches.slice(0, 10);

  return (
    <div className="glass-panel rounded-2xl flex flex-col h-full max-h-[calc(100vh-120px)] overflow-hidden border border-[var(--color-primary)]/10">
      <div className="p-5 border-b border-[var(--color-primary)]/10 bg-[var(--color-secondary)]/30 flex items-center justify-between">
        <h2 className="text-xl font-bold text-[var(--color-primary)] flex items-center gap-2">
          <Target className="text-[var(--color-primary)]" />
          {t('Live Matches', 'සජීවී ගැලපීම්', 'நேரடி பொருத்தங்கள்')}
        </h2>
        <div className="text-xs font-bold text-[var(--color-primary)] bg-[var(--color-secondary)] px-2 py-1 rounded">
          {matches.length} {t('Animals', 'සතුන්', 'விலங்குகள்')}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 custom-scrollbar space-y-3">
        {topMatches.map((match, index) => (
          <div 
            key={match.animal.scientificName}
            onClick={() => onSelectAnimal(match.animal)}
            className={`group relative p-4 rounded-xl cursor-pointer transition-all duration-300 border ${
              index === 0 
                ? 'bg-[var(--color-secondary)]/50 border-[var(--color-primary)]/20 shadow-sm hover:shadow-md' 
                : 'bg-white border-[var(--color-primary)]/5 hover:bg-[var(--color-secondary)]/10 hover:border-[var(--color-primary)]/10 shadow-sm'
            }`}
          >
            {/* Top Match Badge */}
            {index === 0 && (
              <div className="absolute -top-2.5 -right-2.5 bg-[var(--color-primary)] text-white text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded shadow-sm">
                {t('Best Match', 'හොඳම ගැලපීම', 'சிறந்த பொருத்தம்')}
              </div>
            )}

            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className={`font-bold text-lg text-[var(--color-primary)]`}>
                  {match.animal.name}
                </h3>
                <p className="text-xs text-[var(--color-primary)]/60 italic">
                  {match.animal.scientificName}
                </p>
              </div>
              <ChevronRight className={`transition-transform duration-300 group-hover:translate-x-1 ${index === 0 ? 'text-[var(--color-primary)]' : 'text-gray-400'}`} size={18} />
            </div>

            {/* Probability Bar */}
            <div className="mt-3">
              <div className="flex justify-between text-xs mb-1">
                <span className="text-[var(--color-primary)]/70 font-medium">{t('Match Probability', 'ගැලපීමේ සම්භාවිතාව', 'பொருந்தும் நிகழ்தகவு')}</span>
                <span className={index === 0 ? 'text-[var(--color-primary)] font-black' : 'text-[var(--color-primary)]/80 font-bold'}>
                  {match.probability.toFixed(1)}%
                </span>
              </div>
              <div className="h-1.5 w-full bg-[var(--color-secondary)] rounded-full overflow-hidden">
                <div 
                  className={`h-full rounded-full transition-all duration-500 ease-out bg-[var(--color-primary)]`}
                  style={{ width: `${Math.max(2, match.probability)}%` }} // At least 2% so bar is visible
                />
              </div>
            </div>

            {/* Similarity Score */}
            <div className="mt-2">
               <div className="flex justify-between text-[10px] uppercase font-bold tracking-wider mb-1">
                <span className="text-[var(--color-primary)]/50">{t('Trait Similarity', 'ලක්ෂණ සමානතාව', 'பண்பு ஒற்றுமை')}</span>
                <span className="text-[var(--color-primary)]/70">
                  {match.matchScore.toFixed(0)}%
                </span>
              </div>
              <div className="h-1 w-full bg-[var(--color-secondary)]/50 rounded-full overflow-hidden">
                 <div 
                  className={`h-full rounded-full transition-all duration-500 bg-[var(--color-primary)]/50`}
                  style={{ width: `${match.matchScore}%` }}
                />
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
