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
    <div className="glass-panel rounded-2xl flex flex-col h-full max-h-[calc(100vh-120px)] overflow-hidden border border-cyan-500/20">
      <div className="p-5 border-b border-white/10 bg-black/20 flex items-center justify-between">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <Target className="text-cyan-400" />
          {t('Live Matches', 'සජීවී ගැලපීම්', 'நேரடி பொருத்தங்கள்')}
        </h2>
        <div className="text-xs font-bold text-cyan-400 bg-cyan-900/40 px-2 py-1 rounded">
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
                ? 'bg-gradient-to-r from-cyan-900/40 to-blue-900/40 border-cyan-500/50 shadow-[0_0_15px_rgba(0,240,255,0.15)] hover:shadow-[0_0_20px_rgba(0,240,255,0.3)]' 
                : 'bg-white/5 border-white/5 hover:bg-white/10 hover:border-cyan-500/30'
            }`}
          >
            {/* Top Match Badge */}
            {index === 0 && (
              <div className="absolute -top-2.5 -right-2.5 bg-gradient-to-r from-cyan-400 to-blue-500 text-black text-[10px] font-black uppercase tracking-wider px-2 py-0.5 rounded shadow-lg">
                {t('Best Match', 'හොඳම ගැලපීම', 'சிறந்த பொருத்தம்')}
              </div>
            )}

            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className={`font-bold text-lg ${index === 0 ? 'text-cyan-300' : 'text-white'}`}>
                  {match.animal.name}
                </h3>
                <p className="text-xs text-gray-400 italic">
                  {match.animal.scientificName}
                </p>
              </div>
              <ChevronRight className={`transition-transform duration-300 group-hover:translate-x-1 ${index === 0 ? 'text-cyan-400' : 'text-gray-500'}`} size={18} />
            </div>

            {/* Probability Bar */}
            <div className="mt-3">
              <div className="flex justify-between text-xs mb-1">
                <span className="text-gray-400">{t('Match Probability', 'ගැලපීමේ සම්භාවිතාව', 'பொருந்தும் நிகழ்தகவு')}</span>
                <span className={index === 0 ? 'text-cyan-300 font-bold' : 'text-gray-300'}>
                  {match.probability.toFixed(1)}%
                </span>
              </div>
              <div className="h-1.5 w-full bg-black/50 rounded-full overflow-hidden">
                <div 
                  className={`h-full rounded-full transition-all duration-500 ease-out ${
                    index === 0 
                      ? 'bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_10px_rgba(0,240,255,0.8)]' 
                      : 'bg-cyan-600/60'
                  }`}
                  style={{ width: `${Math.max(2, match.probability)}%` }} // At least 2% so bar is visible
                />
              </div>
            </div>

            {/* Similarity Score */}
            <div className="mt-2">
               <div className="flex justify-between text-[10px] uppercase font-bold tracking-wider mb-1">
                <span className="text-gray-500">{t('Trait Similarity', 'ලක්ෂණ සමානතාව', 'பண்பு ஒற்றுமை')}</span>
                <span className={match.matchScore > 80 ? 'text-green-400' : match.matchScore > 50 ? 'text-amber-400' : 'text-red-400'}>
                  {match.matchScore.toFixed(0)}%
                </span>
              </div>
              <div className="h-1 w-full bg-black/30 rounded-full overflow-hidden">
                 <div 
                  className={`h-full rounded-full transition-all duration-500 ${
                    match.matchScore > 80 ? 'bg-green-500' : match.matchScore > 50 ? 'bg-amber-500' : 'bg-red-500'
                  }`}
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
