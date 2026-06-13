'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/components/LanguageProvider';
import ParticleCanvas from '@/components/ParticleCanvas';
import { Skull, Database, Compass, ChevronRight } from 'lucide-react';
import { ANIMALS_DATABASE } from '@/data/animalDatabase';

export default function Home() {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-[calc(100vh-73px)] flex items-center justify-center overflow-hidden">
      <ParticleCanvas />
      
      <div className="z-10 w-full max-w-4xl px-6 py-12 flex flex-col items-center animate-fade-in">
        <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-[0_0_30px_rgba(0,240,255,0.4)] mb-8 transform hover:scale-110 transition-transform duration-500">
          <Skull className="text-white" size={48} />
        </div>
        
        <h1 className="text-5xl md:text-7xl font-black text-center mb-6 tracking-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-cyan-400">
            {t('Discover Mammalian Evolution', 'ක්ෂීරපායී පරිණාමය සොයාගන්න', 'பாலூட்டிகளின் பரிணாமத்தை கண்டறியவும்')}
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-cyan-100/80 text-center max-w-2xl mb-12 font-light leading-relaxed">
          {t(
            'Explore the fascinating world of skulls and skeletons through interactive 3D sliders and biological trait analysis.',
            'අන්තර්ක්‍රියාකාරී ත්‍රිමාණ ස්ලයිඩර සහ ජීව විද්‍යාත්මක ලක්ෂණ විශ්ලේෂණය හරහා හිස්කබල් සහ අස්ථි පද්ධතිවල සිත්ගන්නාසුලු ලෝකය ගවේෂණය කරන්න.',
            'ஊடாடும் 3D ஸ்லைடர்கள் மற்றும் உயிரியல் பண்பு பகுப்பாய்வு மூலம் மண்டை ஓடுகள் மற்றும் எலும்புக்கூடுகளின் கண்கவர் உலகத்தை ஆராயுங்கள்.'
          )}
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 mb-16 w-full max-w-md">
          <Link 
            href="/explore" 
            className="flex-1 group relative flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-bold text-lg overflow-hidden shadow-[0_0_20px_rgba(0,240,255,0.3)] transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(0,240,255,0.5)]"
          >
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            <Compass className="relative z-10" />
            <span className="relative z-10">{t('Start Exploring', 'ගවේෂණය ආරම්භ කරන්න', 'ஆராய்வதை தொடங்குங்கள்')}</span>
            <ChevronRight className="relative z-10 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
          <div className="glass-panel p-6 rounded-2xl flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center border border-cyan-500/30">
              <Database className="text-cyan-400" />
            </div>
            <div>
              <div className="text-3xl font-black text-white">{ANIMALS_DATABASE.length}</div>
              <div className="text-cyan-200/60 text-sm font-medium uppercase tracking-wider">
                {t('Mammals in Database', 'දත්ත ගබඩාවේ ඇති ක්ෂීරපායින්', 'தரவுத்தளத்தில் உள்ள பாலூட்டிகள்')}
              </div>
            </div>
          </div>
          
          <div className="glass-panel p-6 rounded-2xl flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center border border-purple-500/30">
              <Skull className="text-purple-400" />
            </div>
            <div>
              <div className="text-3xl font-black text-white">8</div>
              <div className="text-purple-200/60 text-sm font-medium uppercase tracking-wider">
                {t('Analyzable Traits', 'විශ්ලේෂණය කළ හැකි ලක්ෂණ', 'பகுப்பாய்வு செய்யக்கூடிய பண்புகள்')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
