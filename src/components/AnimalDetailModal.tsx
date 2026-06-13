'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, ExternalLink, Activity, Info, MapPin, Users } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import type { Animal, Language } from '@/types';
import { useLanguage } from './LanguageProvider';
import { TRAIT_LABELS } from '@/lib/traitConstraints';
import { getSkullImagePath } from '@/data/skullImages';
import ImageMagnifier from './ImageMagnifier';

const biochemChemTexts: Record<string, Record<Language, string>> = {
  Carnivore: {
    en: 'High protease enzyme concentration; extremely low stomach gastric pH (~1.5) for protein denaturation; short digestive tract; no cellulase production.',
    si: 'ඉහළ ප්රෝටියේස් එන්සයිම සාන්ද්රණය; ප්රෝටීන් බිඳීමට ඉතා අඩු ආමාශයික pH (~1.5); කෙටි ආහාර මාර්ගය; සෙලියුලේස් නිපදවන්නේ නැත.',
    ta: 'அதிக புரோட்டேஸ் நொதி செறிவு; புரதத்தை சிதைக்க மிகக் குறைந்த வயிற்று அமில pH (~1.5); குறுகிய செரிமானப் பாதை; செல்லுலேஸ் உற்பத்தி இல்லை.'
  },
  Herbivore: {
    en: 'Relies on symbiotic enteric bacteria for cellulase; multi-chambered stomach or highly enlarged cecum; neutral to basic pH; long complex tract.',
    si: 'සෙලියුලේස් බිඳීමට සහජීවී බඩවැල් බැක්ටීරියා මත රඳා පවතී; බහු කුටීර ආමාශය හෝ විශාල වූ අන්ධන්ත්රය; උදාසීන pH අගයක්; දිගු සංකීර්ණ මාර්ගය.',
    ta: 'செல்லுலேஸை ஜீரணிக்க குடல் பாக்டீரியாக்களை நம்பியுள்ளது; பல அறை வயிறு அல்லது பெரிய குடல்; நடுநிலை pH; நீண்ட செரிமானப் பாதை.'
  },
  Omnivore: {
    en: 'Balanced amylase, protease, and lipase production; highly adaptable digestive enzymes; intermediate gut length and variable gastric pH.',
    si: 'සමබර ඇමයිලේස්, ප්රෝටියේස් සහ ලයිපේස් නිෂ්පාදනය; අනුවර්තනය විය හැකි එන්සයිම; මධ්යම දිග ආහාර මාර්ගය සහ විචල්ය pH අගය.',
    ta: 'சீரான அமிலேஸ், புரோட்டேஸ் மற்றும் லிபேஸ் உற்பத்தி; எளிதில் மாற்றமடையும் செரிமான நொதிகள்; நடுத்தர குடல் நீளம் மற்றும் மாறுபடும் pH.'
  },
  Insectivore: {
    en: 'Production of active chitinase enzymes to dissolve chitinous insect exoskeletons; rapid protein metabolism; specialized strong stomach acid.',
    si: 'කෘමීන්ගේ කයිටිනීය බාහිර සැකිල්ල දියකර හැරීමට සක්රීය කයිටිනේස් එන්සයිම නිපදවීම; වේගවත් ප්රෝටීන් පරිවෘත්තීය; විශේෂිත ප්රබල ආමාශ අම්ලය.',
    ta: 'பூச்சிகளின் கைட்டின் ஓடுகளைக் கரைக்க செயலில் உள்ள கைட்டினேஸ் நொதிகள்; விரைவான புரத வளர்சிதை மாற்றம்; வலுவான வயிற்று அமிலம்.'
  }
};

interface Props {
  animal: Animal;
  onClose: () => void;
}

export default function AnimalDetailModal({ animal, onClose }: Props) {
  const { language, t } = useLanguage();
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loadingImg, setLoadingImg] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Lock body scroll
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  // Fetch Wikipedia image
  useEffect(() => {
    let isMounted = true;
    const fetchImage = async () => {
      try {
        const title = animal.wikiUrl.split('/').pop();
        if (!title) return;
        
        const response = await fetch(
          `https://en.wikipedia.org/w/api.php?action=query&titles=${title}&prop=pageimages&format=json&pithumbsize=800&origin=*`
        );
        const data = await response.json();
        const pages = data.query.pages;
        const pageId = Object.keys(pages)[0];
        
        if (isMounted && pages[pageId].thumbnail?.source) {
          setImageUrl(pages[pageId].thumbnail.source);
        }
      } catch (err) {
        console.error('Error fetching wiki image:', err);
      } finally {
        if (isMounted) setLoadingImg(false);
      }
    };
    
    fetchImage();
    return () => { isMounted = false; };
  }, [animal.wikiUrl]);

  // Radar chart calculations
  const diet = animal.dietCategory as string;
  let p = 20, f = 20, fa = 20, s = 20, c = 20, mi = 20;

  if (diet.includes('Carnivore')) {
    p = 90; fa = 70; f = 10; s = 10; c = 20; mi = 30;
  } else if (diet.includes('Herbivore')) {
    p = 30; fa = 20; f = 90; s = 40; c = 10; mi = 40;
  } else if (diet.includes('Omnivore')) {
    p = 60; fa = 50; f = 50; s = 60; c = 20; mi = 30;
  } else if (diet.includes('Insectivore')) {
    p = 70; fa = 40; f = 20; s = 10; c = 90; mi = 20;
  }

  const scoreNum = animal.traits.carnivoryScore || 5;
  // Adjust values slightly based on Carnivory Score
  p = Math.min(100, Math.round(p + (scoreNum / 10) * 10));
  f = Math.max(10, Math.round(f - (scoreNum / 10) * 20));

  // Render SVG Radar Chart
  const cx = 100, cy = 90, r = 65;
  const axes = ['Protein', 'Fibre', 'Fat', 'Starch', 'Chitin', 'Mineral'];
  const values = [p, f, fa, s, c, mi];
  
  let radarPolygons = '';
  // Background grid hexagons
  for (let l = 1; l <= 4; l++) {
    const pts = axes
      .map((_, i) => {
        const angle = (Math.PI * 2 * i) / 6 - Math.PI / 2;
        return `${cx + (r * l) / 4 * Math.cos(angle)},${cy + (r * l) / 4 * Math.sin(angle)}`;
      })
      .join(' ');
    radarPolygons += `<polygon points="${pts}" fill="none" stroke="rgba(17,0,31,0.1)" stroke-width="1"/>`;
  }

  // Axes lines & labels
  const axesElements = axes.map((axis, i) => {
    const angle = (Math.PI * 2 * i) / 6 - Math.PI / 2;
    const x = cx + r * Math.cos(angle);
    const y = cy + r * Math.sin(angle);
    const lx = cx + (r + 15) * Math.cos(angle);
    const ly = cy + (r + 12) * Math.sin(angle);
    return (
      <g key={axis}>
        <line x1={cx} y1={cy} x2={x} y2={y} stroke="rgba(17,0,31,0.1)" strokeWidth={1} />
        <text
          x={lx}
          y={ly}
          fill="#475569"
          fontSize="8"
          fontWeight="bold"
          textAnchor="middle"
          dominantBaseline="middle"
        >
          {axis}
        </text>
      </g>
    );
  });

  // Data point values polygon
  const dataPoints = values
    .map((v, i) => {
      const angle = (Math.PI * 2 * i) / 6 - Math.PI / 2;
      return `${cx + (v / 100) * r * Math.cos(angle)},${cy + (v / 100) * r * Math.sin(angle)}`;
    })
    .join(' ');

  let chemKey = 'Omnivore';
  if (diet.includes('Carnivore')) chemKey = 'Carnivore';
  else if (diet.includes('Herbivore')) chemKey = 'Herbivore';
  else if (diet.includes('Insectivore')) chemKey = 'Insectivore';

  const chemDesc = biochemChemTexts[chemKey]?.[language] || biochemChemTexts['Omnivore'].en;
  
  const skullImagePath = getSkullImagePath(animal.name);

  const modalContent = (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div 
        className="absolute inset-0 bg-black/50 backdrop-blur-sm cursor-pointer" 
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-6xl max-h-[90vh] bg-[var(--color-card-bg)] border border-[var(--color-primary)]/20 rounded-2xl shadow-xl flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-[var(--color-primary)]/10 bg-[var(--color-secondary)]/20">
          <div>
            <h2 className="text-3xl font-black text-[var(--color-primary)]">{animal.name}</h2>
            <div className="flex items-center gap-3 mt-1 text-[var(--color-primary)]/70 text-sm font-mono">
              <span className="italic">{animal.scientificName}</span>
              <span>•</span>
              <span className="uppercase tracking-wider">{animal.order}</span>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-[var(--color-secondary)] flex items-center justify-center hover:bg-[var(--color-primary)] hover:text-white transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content Scrollable */}
        <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            
            {/* Left Column: Image & Bio */}
            <div className="space-y-6">
              <div className="aspect-video w-full rounded-xl overflow-hidden bg-[var(--color-secondary)]/50 border border-[var(--color-primary)]/10 relative">
                {loadingImg ? (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 border-4 border-[var(--color-primary)] border-t-transparent rounded-full animate-spin" />
                  </div>
                ) : imageUrl ? (
                  <img 
                    src={imageUrl} 
                    alt={animal.name} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-[var(--color-primary)]/40 font-medium">
                    No image available
                  </div>
                )}
              </div>

              {skullImagePath && (
                <div className="aspect-square w-full rounded-xl overflow-hidden bg-white border border-[var(--color-primary)]/10 relative">
                  <div className="absolute top-2 left-2 z-10 bg-black/50 text-white px-2 py-1 rounded text-xs font-bold uppercase backdrop-blur-sm pointer-events-none">
                    {t('Skull Specimen', 'හිස්කබල නිදර්ශකය', 'மண்டை ஓடு மாதிரி')}
                  </div>
                  <ImageMagnifier src={skullImagePath} alt={`${animal.name} Skull`} zoomLevel={2.5} />
                </div>
              )}

              <div className="grid grid-cols-2 gap-4">
                <div className="glass-panel p-4 rounded-xl border border-[var(--color-primary)]/10">
                  <div className="flex items-center gap-2 text-[var(--color-primary)]/70 mb-1">
                    <Activity size={16} />
                    <span className="text-xs uppercase font-bold">{t('Diet', 'ආහාරය', 'உணவு')}</span>
                  </div>
                  <div className="text-[var(--color-primary)] font-bold">{animal.dietCategory}</div>
                </div>
                <div className="glass-panel p-4 rounded-xl border border-[var(--color-primary)]/10">
                  <div className="flex items-center gap-2 text-[var(--color-primary)]/70 mb-1">
                    <MapPin size={16} />
                    <span className="text-xs uppercase font-bold">{t('Habitat', 'වාසස්ථානය', 'வாழ்விடம்')}</span>
                  </div>
                  <div className="text-[var(--color-primary)] font-bold">{animal.habitat}</div>
                </div>
                <div className="glass-panel p-4 rounded-xl border border-[var(--color-primary)]/10">
                  <div className="flex items-center gap-2 text-[var(--color-primary)]/70 mb-1">
                    <Users size={16} />
                    <span className="text-xs uppercase font-bold">{t('Social', 'සමාජ', 'சமூகம்')}</span>
                  </div>
                  <div className="text-[var(--color-primary)] font-bold">{animal.socialStructure}</div>
                </div>
                <div className="glass-panel p-4 rounded-xl border border-[var(--color-primary)]/10">
                  <div className="flex items-center gap-2 text-[var(--color-primary)]/70 mb-1">
                    <Info size={16} />
                    <span className="text-xs uppercase font-bold">{t('Activity', 'ක්‍රියාකාරකම්', 'செயல்பாடு')}</span>
                  </div>
                  <div className="text-[var(--color-primary)] font-bold">{animal.activityPattern}</div>
                </div>
              </div>
            </div>

            {/* Center Column: Biological Traits & Facts */}
            <div className="space-y-6">
              <div className="bg-[var(--color-secondary)]/20 rounded-xl p-6 border border-[var(--color-primary)]/10">
                <h3 className="text-xl font-bold mb-4 text-[var(--color-primary)] flex items-center gap-2">
                  <Activity size={20} />
                  {t('Biological Traits', 'ජීව විද්‍යාත්මක ලක්ෂණ', 'உயிரியல் பண்புகள்')}
                </h3>
                <div className="space-y-4">
                  {(Object.entries(animal.traits) as [keyof typeof TRAIT_LABELS, number][]).map(([key, val]) => (
                    <div key={key}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-[var(--color-primary)]/80 font-medium">{TRAIT_LABELS[key][language]}</span>
                        <span className="text-[var(--color-primary)] font-bold">{val}/10</span>
                      </div>
                      <div className="h-2 w-full bg-[var(--color-secondary)] rounded-full overflow-hidden">
                        <div 
                          className="h-full rounded-full bg-[var(--color-primary)]"
                          style={{ width: `${(val / 10) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-[var(--color-secondary)]/20 rounded-xl p-6 border border-[var(--color-primary)]/10">
                <h3 className="text-xl font-bold mb-4 text-[var(--color-primary)] flex items-center gap-2">
                  <Info size={20} />
                  {t('Fascinating Facts', 'විස්මිත කරුණු', 'சுவாரஸ்யமான உண்மைகள்')}
                </h3>
                <ul className="space-y-3">
                  {animal.funFacts.map((fact, i) => (
                    <li key={i} className="flex gap-3 text-sm text-[var(--color-primary)]/80">
                      <span className="text-[var(--color-primary)] font-bold">•</span>
                      <span>{fact}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Column: Radar Chart & QR */}
            <div className="space-y-6">
              <div className="bg-[var(--color-secondary)]/20 rounded-xl p-6 border border-[var(--color-primary)]/10 flex flex-col items-center">
                <h3 className="text-xl font-bold mb-4 text-[var(--color-primary)] flex items-center gap-2 w-full">
                  {t('Diet Biochemistry Radar', 'ආහාර ජෛව රසායන රේඩාර් සටහන', 'உணவு உயிர்வேதியியல் வரைபடம்')}
                </h3>
                
                {/* Custom SVG Radar Chart */}
                <div className="w-full max-w-[280px] aspect-square flex items-center justify-center">
                  <svg className="w-full h-full" viewBox="0 0 200 180">
                    <g dangerouslySetInnerHTML={{ __html: radarPolygons }} />
                    {axesElements}
                    <polygon
                      points={dataPoints}
                      fill="var(--color-secondary)"
                      fillOpacity={0.6}
                      stroke="var(--color-primary)"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    {values.map((v, i) => {
                      const angle = (Math.PI * 2 * i) / 6 - Math.PI / 2;
                      const dotX = cx + (v / 100) * r * Math.cos(angle);
                      const dotY = cy + (v / 100) * r * Math.sin(angle);
                      return (
                        <circle
                          key={i}
                          cx={dotX}
                          cy={dotY}
                          r={3.5}
                          fill="var(--color-primary)"
                          stroke="white"
                          strokeWidth={1.5}
                        />
                      );
                    })}
                  </svg>
                </div>
              </div>

              <div className="glass-panel p-4 border-l-4 border-l-[var(--color-primary)] bg-[var(--color-secondary)]/30 flex flex-col gap-1.5 rounded-xl">
                <h4 className="text-[var(--color-primary)] font-extrabold uppercase text-[10px] tracking-wider">
                  {t('🧪 Digestive Biochemistry Analysis', '🧪 ආහාර ජීර්ණ ජෛව රසායනික විශ්ලේෂණය', '🧪 செரிமான உயிர்வேதியியல் பகுப்பாய்வு')}
                </h4>
                <p className="text-[var(--color-primary)]/80 text-sm leading-relaxed mt-1">
                  {chemDesc}
                </p>
              </div>

              {/* QR Code Section */}
              <div className="glass-panel p-6 rounded-xl flex flex-col items-center justify-center gap-4 border border-[var(--color-primary)]/10 text-center">
                <div className="p-2 rounded-xl flex-shrink-0 bg-[var(--color-secondary)]/50">
                  <QRCodeSVG 
                    value={animal.wikiUrl} 
                    size={130}
                    bgColor="transparent"
                    fgColor="var(--color-primary)"
                    level="Q"
                  />
                </div>
                <div className="flex flex-col items-center">
                  <h4 className="font-bold text-lg mb-1 text-[var(--color-primary)]">
                    {t('Scan for More Info', 'වැඩි විස්තර සඳහා ස්කෑන් කරන්න', 'மேலும் தகவலுக்கு ஸ்கேன் செய்யவும்')}
                  </h4>
                  <a 
                    href={animal.wikiUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wider text-[var(--color-primary)] bg-[var(--color-secondary)] hover:opacity-80 px-4 py-2 rounded-lg transition-opacity mt-2 border border-[var(--color-primary)]/20"
                  >
                    <span>{t('Open Link', 'සබැඳිය විවෘත කරන්න', 'இணைப்பைத் திறக்கவும்')}</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );

  return mounted ? createPortal(modalContent, document.body) : null;
}
