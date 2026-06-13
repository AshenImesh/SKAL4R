'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';
import PixelBlast from '@/components/PixelBlast';
import { Skull, Database, Compass, ChevronRight } from 'lucide-react';
import { ANIMALS_DATABASE } from '@/data/animalDatabase';

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-[calc(100vh-73px)] flex items-center justify-center overflow-hidden bg-white">
      {/* PixelBlast Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <PixelBlast
          variant="square"
          pixelSize={4}
          color="#DEDBF3"
          patternScale={2}
          patternDensity={1}
          pixelSizeJitter={0}
          enableRipples={false}
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          liquid={false}
          liquidStrength={0.12}
          liquidRadius={1.2}
          liquidWobbleSpeed={5}
          speed={0.5}
          edgeFade={0.25}
          transparent
        />
      </div>
      
      <div className="z-10 w-full max-w-4xl px-6 py-12 flex flex-col items-center animate-fade-in relative">
        <div className="w-24 h-24 rounded-3xl bg-[var(--color-primary)] flex items-center justify-center shadow-lg mb-8 transform hover:scale-110 transition-transform duration-500">
          <Skull className="text-white" size={48} />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black text-center mb-6 tracking-tight text-[var(--color-primary)]">
          SKAL<span className="text-[var(--color-accent-4)]">4</span>R
        </h1>
        
        <p className="text-xl md:text-2xl text-[var(--color-primary)]/80 text-center max-w-2xl mb-12 font-bold leading-relaxed">
          {t(
            'Skull-Based Animal Classification Using Adaptive Reasoning (Model 4).',
            'අනුගත වන තර්කනය භාවිතයෙන් හිස්කබල් මත පදනම් වූ සත්ව වර්ගීකරණය.',
            'தகவமைப்பு பகுத்தறிவைப் பயன்படுத்தி மண்டை ஓடு சார்ந்த விலங்கு வகைப்பாடு.'
          )}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 mb-16 w-full max-w-md">
          <Link 
            href="/explore" 
            className="flex-1 group relative flex items-center justify-center gap-3 px-8 py-4 bg-[var(--color-primary)] text-white rounded-xl font-bold text-lg overflow-hidden shadow-md transition-all hover:scale-105 hover:bg-[#22003d]"
          >
            <Compass className="relative z-10" />
            <span className="relative z-10">{t('Start Exploring', 'ගවේෂණය ආරම්භ කරන්න', 'ஆராய்வதை தொடங்குங்கள்')}</span>
            <ChevronRight className="relative z-10 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-6 w-full">
          <div className="glass-panel p-6 rounded-2xl flex flex-col items-center justify-center gap-3 text-center w-full sm:w-48 h-48 border-none">
            <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)] flex items-center justify-center">
              <Database className="text-[var(--color-primary)]" size={24} />
            </div>
            <div>
              <div className="text-3xl font-black text-[var(--color-primary)] mb-1">{ANIMALS_DATABASE.length}</div>
              <div className="text-[var(--color-primary)]/60 text-xs font-bold uppercase tracking-widest leading-tight">
                {t('Mammals in Database', 'දත්ත ගබඩාවේ ඇති ක්ෂීරපායින්', 'தரவுத்தளத்தில் உள்ள பாலூட்டிகள்')}
              </div>
            </div>
          </div>
          
          <div className="glass-panel p-6 rounded-2xl flex flex-col items-center justify-center gap-3 text-center w-full sm:w-48 h-48 border-none">
            <div className="w-12 h-12 rounded-full bg-[var(--color-secondary)] flex items-center justify-center">
              <Skull className="text-[var(--color-primary)]" size={24} />
            </div>
            <div>
              <div className="text-3xl font-black text-[var(--color-primary)] mb-1">8</div>
              <div className="text-[var(--color-primary)]/60 text-xs font-bold uppercase tracking-widest leading-tight">
                {t('Analyzable Traits', 'විශ්ලේෂණය කළ හැකි ලක්ෂණ', 'பகுப்பாய்வு செய்யக்கூடிய பண்புகள்')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
