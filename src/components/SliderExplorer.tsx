'use client';

import React, { useState, useEffect, useMemo } from 'react';
import type { TraitKey, TraitMeta, ConstraintNotification as NotificationType, Animal } from '@/types';
import { enforceConstraints } from '@/lib/traitConstraints';
import { calculateProbabilities, type MatchResult } from '@/lib/animalMatcher';
import { ANIMALS_DATABASE } from '@/data/animalDatabase';
import { useLanguage } from './LanguageProvider';

import TraitSlider from './TraitSlider';
import AnimalProbabilityPanel from './AnimalProbabilityPanel';
import ConstraintNotification from './ConstraintNotification';
import AnimalDetailModal from './AnimalDetailModal';
import { Settings2 } from 'lucide-react';

const TRAIT_METADATA: TraitMeta[] = [
  {
    key: 'teethSharpness',
    label: { en: 'Teeth Sharpness', si: 'දත්වල තියුණු බව', ta: 'பற்களின் கூர்மை' },
    description: { 
      en: 'From flat grinding molars to razor-sharp carnassials', 
      si: 'පැතලි දත්වල සිට තියුණු දත් දක්වා', 
      ta: 'தட்டையான பற்கள் முதல் கூர்மையான பற்கள் வரை' 
    },
    lowLabel: { en: 'Flat / Grinding', si: 'පැතලි', ta: 'தட்டையான' },
    highLabel: { en: 'Razor Sharp', si: 'තියුණු', ta: 'கூர்மையான' },
    icon: 'skull',
    gradientFrom: '#10b981', // emerald
    gradientTo: '#ef4444'    // red
  },
  {
    key: 'carnivoryScore',
    label: { en: 'Dietary Preference', si: 'ආහාර මනාපය', ta: 'உணவு விருப்பம்' },
    description: { 
      en: 'From obligate herbivore to obligate carnivore', 
      si: 'ශාක භක්ෂක සිට මාංශ භක්ෂක දක්වා', 
      ta: 'தாவர உண்ணி முதல் ஊனுண்ணி வரை' 
    },
    lowLabel: { en: 'Pure Herbivore', si: 'ශාක භක්ෂක', ta: 'தாவர உண்ணி' },
    highLabel: { en: 'Pure Carnivore', si: 'මාංශ භක්ෂක', ta: 'ஊனுண்ணி' },
    icon: 'beef',
    gradientFrom: '#10b981',
    gradientTo: '#ef4444'
  },
  {
    key: 'eyePosition',
    label: { en: 'Eye Position', si: 'ඇස් පිහිටීම', ta: 'கண் நிலை' },
    description: { 
      en: 'From fully lateral (prey) to forward-facing (predator)', 
      si: 'පැතිවල සිට ඉදිරිය බලා ඇති ඇස් දක්වා', 
      ta: 'பக்கவாட்டிலிருந்து முன்னோக்கிய கண்கள் வரை' 
    },
    lowLabel: { en: 'Side-mounted', si: 'පැතිවල', ta: 'பக்கவாட்டு' },
    highLabel: { en: 'Forward-facing', si: 'ඉදිරියට', ta: 'முன்னோக்கிய' },
    icon: 'eye',
    gradientFrom: '#3b82f6', // blue
    gradientTo: '#f59e0b'    // amber
  },
  {
    key: 'clawSharpness',
    label: { en: 'Claw / Hoof Type', si: 'නියපොතු/කුර වර්ගය', ta: 'நகம்/குளம்பு வகை' },
    description: { 
      en: 'From flat hooves to razor-sharp retractable claws', 
      si: 'කුරවල සිට තියුණු නියපොතු දක්වා', 
      ta: 'குளம்புகளிலிருந்து கூர்மையான நகங்கள் வரை' 
    },
    lowLabel: { en: 'Flat Hooves', si: 'කුර', ta: 'குளம்புகள்' },
    highLabel: { en: 'Sharp Claws', si: 'තියුණු නිය', ta: 'கூர்மையான நகங்கள்' },
    icon: 'paw-print',
    gradientFrom: '#8b5cf6', // violet
    gradientTo: '#f43f5e'    // rose
  },
  {
    key: 'bodySize',
    label: { en: 'Body Size', si: 'ශරීරයේ ප්‍රමාණය', ta: 'உடல் அளவு' },
    description: { 
      en: 'From tiny mice to massive elephants', 
      si: 'කුඩා සිට විශාල දක්වා', 
      ta: 'சிறியதிலிருந்து பெரியது வரை' 
    },
    lowLabel: { en: 'Tiny (<1kg)', si: 'ඉතා කුඩා', ta: 'மிகச் சிறிய' },
    highLabel: { en: 'Massive (>1000kg)', si: 'විශාල', ta: 'பிரம்மாண்டமான' },
    icon: 'scale',
    gradientFrom: '#06b6d4', // cyan
    gradientTo: '#0ea5e9'    // light blue
  },
  {
    key: 'skullRobustness',
    label: { en: 'Skull Robustness', si: 'හිස්කබලේ ශක්තිමත් බව', ta: 'மண்டை ஓடு வலிமை' },
    description: { 
      en: 'Bone thickness and muscle attachment points', 
      si: 'අස්ථි ඝනකම', 
      ta: 'எலும்பு தடிமன்' 
    },
    lowLabel: { en: 'Delicate', si: 'සිහින්', ta: 'மென்மையான' },
    highLabel: { en: 'Extremely Robust', si: 'ශක්තිමත්', ta: 'மிகவும் வலிமையான' },
    icon: 'bone',
    gradientFrom: '#64748b', // slate
    gradientTo: '#1e293b'    // slate dark
  },
  {
    key: 'snoutLength',
    label: { en: 'Snout Length', si: 'හොම්බේ දිග', ta: 'முகவாய் நீளம்' },
    description: { 
      en: 'Relative length of the jaw and nasal cavity', 
      si: 'හොම්බේ සාපේක්ෂ දිග', 
      ta: 'முகவாய் ஒப்பீட்டு நீளம்' 
    },
    lowLabel: { en: 'Flat / Short', si: 'කෙටි', ta: 'குட்டையான' },
    highLabel: { en: 'Very Long', si: 'දිගු', ta: 'மிக நீளமான' },
    icon: 'ruler',
    gradientFrom: '#eab308', // yellow
    gradientTo: '#d97706'    // amber
  },
  {
    key: 'tailLength',
    label: { en: 'Tail Length', si: 'වලිගයේ දිග', ta: 'வால் நீளம்' },
    description: { 
      en: 'Relative tail length for balance or grasping', 
      si: 'වලිගයේ සාපේක්ෂ දිග', 
      ta: 'வால் ஒப்பீட்டு நீளம்' 
    },
    lowLabel: { en: 'No Tail / Stub', si: 'වලිගයක් නැත', ta: 'வால் இல்லை' },
    highLabel: { en: 'Very Long', si: 'ඉතා දිගු', ta: 'மிக நீளமான' },
    icon: 'git-commit',
    gradientFrom: '#a8a29e', // stone
    gradientTo: '#57534e'    // stone dark
  }
];

const INITIAL_VALUES: Record<TraitKey, number> = {
  teethSharpness: 5,
  eyePosition: 5,
  bodySize: 5,
  skullRobustness: 5,
  snoutLength: 5,
  carnivoryScore: 5,
  clawSharpness: 5,
  tailLength: 5
};

export default function SliderExplorer() {
  const { language, t } = useLanguage();
  
  // State
  const [sliderValues, setSliderValues] = useState<Record<TraitKey, number>>(INITIAL_VALUES);
  const [notifications, setNotifications] = useState<NotificationType[]>([]);
  const [recentlyAdjusted, setRecentlyAdjusted] = useState<Set<TraitKey>>(new Set());
  const [selectedAnimal, setSelectedAnimal] = useState<Animal | null>(null);

  // Derived state: calculate probabilities whenever sliders change
  const matches = useMemo(() => {
    return calculateProbabilities(sliderValues, ANIMALS_DATABASE);
  }, [sliderValues]);

  // Handlers
  const handleSliderChange = (trait: TraitKey, newValue: number) => {
    // 1. Enforce constraints
    const { newValues, notifications: newNotifs } = enforceConstraints(trait, newValue, sliderValues, language);
    
    // 2. Update slider values
    setSliderValues(newValues);
    
    // 3. Handle notifications
    if (newNotifs.length > 0) {
      setNotifications(prev => [...prev, ...newNotifs]);
      
      // Track recently adjusted traits for visual highlight
      const adjustedTraits = new Set(newNotifs.map(n => n.traitAdjusted));
      setRecentlyAdjusted(adjustedTraits);
      
      // Clear highlight after 2 seconds
      setTimeout(() => {
        setRecentlyAdjusted(new Set());
      }, 2000);
    }
  };

  const handleDismissNotification = (id: string) => {
    setNotifications(prev => prev.filter(n => n.id !== id));
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto h-[calc(100vh-100px)] flex flex-col lg:flex-row gap-6 p-4">
      
      {/* Toast Layer */}
      <ConstraintNotification 
        notifications={notifications} 
        onDismiss={handleDismissNotification} 
      />

      {/* Main Sliders Area */}
      <div className="flex-1 glass-panel rounded-2xl p-6 overflow-y-auto custom-scrollbar flex flex-col border border-cyan-500/20">
        
        <div className="flex items-center gap-3 mb-6 pb-6 border-b border-white/10">
          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center shadow-[0_0_15px_rgba(0,240,255,0.4)]">
            <Settings2 className="text-white" size={24} />
          </div>
          <div>
            <h1 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-300">
              {t('Trait Explorer', 'ලක්ෂණ ගවේෂකය', 'பண்பு ஆராய்ச்சியாளர்')}
            </h1>
            <p className="text-sm text-cyan-200/60">
              {t('Adjust sliders to find matching mammals in real-time.', 'සජීවීව ක්ෂීරපායින් සොයා ගැනීමට ස්ලයිඩර සකසන්න.', 'நேரலையில் பாலூட்டிகளைக் கண்டறிய ஸ்லைடர்களைச் சரிசெய்யவும்.')}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
          {TRAIT_METADATA.map((meta) => (
            <TraitSlider
              key={meta.key}
              meta={meta}
              value={sliderValues[meta.key]}
              language={language}
              onChange={(val) => handleSliderChange(meta.key, val)}
              recentlyAutoAdjusted={recentlyAdjusted.has(meta.key)}
            />
          ))}
        </div>

        <div className="mt-6 p-4 bg-cyan-900/20 border border-cyan-500/30 rounded-xl">
          <p className="text-sm text-cyan-100/80 text-center">
            <strong>{t('Pro Tip: ', 'ඉඟිය: ', 'குறிப்பு: ')}</strong>
            {t(
              'Biological constraints are enforced automatically. If you set Teeth Sharpness to maximum, Diet will auto-adjust to Carnivore!',
              'ජීව විද්‍යාත්මක සීමාවන් ස්වයංක්‍රීයව ක්‍රියාත්මක වේ. ඔබ දත්වල තියුණු බව උපරිමයට සැකසුවහොත්, ආහාරය ස්වයංක්‍රීයව මාංශ භක්ෂක ලෙස වෙනස් වේ!',
              'உயிரியல் கட்டுப்பாடுகள் தானாகவே செயல்படுத்தப்படுகின்றன. பற்களின் கூர்மையை அதிகபட்சமாக அமைத்தால், உணவு தானாகவே ஊனுண்ணியாக மாறும்!'
            )}
          </p>
        </div>

      </div>

      {/* Right Sidebar - Live Matches */}
      <div className="w-full lg:w-96 flex-shrink-0 animate-slide-in-right">
        <AnimalProbabilityPanel 
          matches={matches} 
          onSelectAnimal={setSelectedAnimal} 
        />
      </div>

      {/* Detail Modal Overlay */}
      {selectedAnimal && (
        <AnimalDetailModal 
          animal={selectedAnimal} 
          onClose={() => setSelectedAnimal(null)} 
        />
      )}

    </div>
  );
}
