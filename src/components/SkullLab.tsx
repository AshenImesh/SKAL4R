'use client';

import React, { useState } from 'react';
import { useLanguage } from './LanguageProvider';
import { MOLAR_GUIDE_DATA } from '@/data/molarGuide';
import { BookOpen, Sparkles } from 'lucide-react';

const labTexts = {
  title: {
    en: 'Dental Morphology Lab',
    si: 'දන්ත රූපවිද්‍යා රසායනාගාරය',
    ta: 'பல் வடிவவியல் ஆய்வகம்'
  },
  subtitle: {
    en: 'Analyze dental adaptations and chewing mechanisms of terrestrial mammals. Select a molar structure to inspect its shape and dietary specialization.',
    si: 'ගොඩබිම් ක්ෂීරපායීන්ගේ දත්වල අනුවර්තනයන් සහ හැපීමේ ක්‍රියාවලිය විශ්ලේෂණය කරන්න. හැඩය සහ ආහාර විශේෂීකරණය පරීක්ෂා කිරීමට මෝලර් දතක් තෝරන්න.',
    ta: 'பாலூட்டிகளின் பல் அமைப்புகளையும் மெல்லும் திறனையும் ஆராயுங்கள். அவற்றின் வடிவத்தையும் உணவு முறையையும் அறிய ஒரு பல் அமைப்பைத் தேர்ந்தெடுக்கவும்.'
  },
  anatomyTitle: {
    en: 'Molar Specimen Details',
    si: 'මෝලර් දත් ව්‍යුහ විස්තරය',
    ta: 'பல் மாதிரி விவரங்கள்'
  },
  dietLink: {
    en: 'Dietary Link',
    si: 'ආහාර සම්බන්ධතාවය',
    ta: 'உணவுத் தொடர்பு'
  },
  selectPrompt: {
    en: 'Select a molar type from the list to begin structural analysis.',
    si: 'ව්‍යුහ විශ්ලේෂණය ආරම්භ කිරීම සඳහා ලැයිස්තුවෙන් මෝලර් දත් වර්ගයක් තෝරන්න.',
    ta: 'பகுப்பாய்வைத் தொடங்க பட்டியலிலிருந்து ஒரு பல் வகையைத் தேர்ந்தெடுக்கவும்.'
  }
};

export default function SkullLab() {
  const { language, t } = useLanguage();
  const [selectedMolar, setSelectedMolar] = useState<string>('Carnassial');

  const getText = (key: keyof typeof labTexts) => labTexts[key][language];
  const molarData = MOLAR_GUIDE_DATA[selectedMolar];

  return (
    <div className="flex flex-col gap-6 animate-fade-in flex-1 max-w-7xl mx-auto w-full p-6">
      {/* Header Panel */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 glow-text flex items-center gap-3">
            <Sparkles size={28} className="text-cyan-400" />
            {getText('title')}
          </h2>
          <p className="text-cyan-100/70 text-sm max-w-3xl mt-2 leading-relaxed">
            {getText('subtitle')}
          </p>
        </div>
      </div>

      {/* Main Lab Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 flex-1 min-h-[500px]">
        {/* Left Panel - Selection Grid */}
        <div className="flex flex-col gap-3 lg:col-span-1">
          {Object.keys(MOLAR_GUIDE_DATA).map((key) => {
            const molar = MOLAR_GUIDE_DATA[key];
            const isSelected = selectedMolar === key;
            return (
              <button
                key={key}
                onClick={() => setSelectedMolar(key)}
                className={`glass-panel p-5 text-left transition-all duration-300 flex items-center gap-4 ${
                  isSelected
                    ? 'border-cyan-500/50 bg-cyan-900/40 shadow-[0_0_15px_rgba(0,240,255,0.15)]'
                    : 'hover:border-cyan-500/30 hover:bg-white/5 border-white/5'
                }`}
              >
                <div
                  className={`w-14 h-14 p-1 rounded-lg flex-shrink-0 flex items-center justify-center border ${
                    isSelected ? 'border-cyan-500/50 text-cyan-400 bg-cyan-950/50' : 'border-white/10 text-gray-400 bg-black/20'
                  }`}
                  dangerouslySetInnerHTML={{ __html: molar.svgIcon }}
                />
                <div>
                  <h3 className={`font-bold text-lg ${isSelected ? 'text-cyan-300' : 'text-gray-200'}`}>
                    {molar.name}
                  </h3>
                  <span className="text-xs text-gray-400 line-clamp-1 mt-1">
                    {molar.description[language].slice(0, 55)}...
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Panel - Detailed Specimen Viewer */}
        <div className="lg:col-span-2 flex flex-col glass-panel p-6 md:p-8 relative overflow-hidden border border-cyan-500/20 rounded-2xl">
          {/* Subtle background tech grid design */}
          <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:16px_16px]" />

          {molarData ? (
            <div className="flex flex-col gap-8 h-full relative z-10 animate-fade-in">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                {/* Visualizer Frame */}
                <div className="w-full md:w-72 h-72 bg-black/40 border border-white/10 rounded-2xl flex items-center justify-center p-8 shadow-inner flex-shrink-0 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 rounded-2xl" />
                  <div className="w-full h-full text-cyan-400 flex items-center justify-center relative z-10 drop-shadow-[0_0_15px_rgba(0,240,255,0.3)]" dangerouslySetInnerHTML={{ __html: molarData.svgIcon }} />
                </div>

                <div className="flex-1 flex flex-col gap-4">
                  <span className="text-xs font-bold tracking-widest text-cyan-400 uppercase bg-cyan-950/50 border border-cyan-500/30 px-3 py-1 rounded-full w-max">
                    {getText('anatomyTitle')}
                  </span>
                  <h3 className="text-4xl font-black text-white uppercase tracking-wide">
                    {molarData.name} Molar
                  </h3>
                  <p className="text-cyan-50/80 leading-relaxed text-lg mt-2">
                    {molarData.description[language]}
                  </p>
                </div>
              </div>

              {/* Diet Biochemistry Connection */}
              <div className="mt-auto border-t border-white/10 pt-8">
                <div className="bg-emerald-950/20 border border-emerald-500/30 rounded-xl p-6 flex gap-4 items-start shadow-lg">
                  <div className="p-3 bg-emerald-900/50 rounded-lg flex-shrink-0">
                    <BookOpen size={24} className="text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-emerald-400 uppercase text-sm tracking-wider mb-2">
                      {getText('dietLink')}
                    </h4>
                    <p className="text-emerald-100/80 text-base leading-relaxed">
                      {molarData.dietLink[language]}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center h-full text-gray-500 gap-4 py-12">
              <BookOpen size={64} className="opacity-50" />
              <p className="text-center font-medium text-lg">{getText('selectPrompt')}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
