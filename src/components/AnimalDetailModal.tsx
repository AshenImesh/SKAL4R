'use client';

import React, { useState, useEffect } from 'react';
import { X, ExternalLink, Activity, Info, MapPin, Users } from 'lucide-react';
import { QRCodeSVG } from 'qrcode.react';
import type { Animal, Language } from '@/types';
import { useLanguage } from './LanguageProvider';
import { TRAIT_LABELS } from '@/lib/traitConstraints';

interface Props {
  animal: Animal;
  onClose: () => void;
}

export default function AnimalDetailModal({ animal, onClose }: Props) {
  const { language, t } = useLanguage();
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [loadingImg, setLoadingImg] = useState(true);

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

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 animate-fade-in">
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm cursor-pointer" 
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-4xl max-h-[90vh] bg-slate-900 border border-cyan-500/30 rounded-2xl shadow-[0_0_50px_rgba(0,240,255,0.15)] flex flex-col overflow-hidden">
        
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-white/10 bg-black/20">
          <div>
            <h2 className="text-3xl font-black text-white">{animal.name}</h2>
            <div className="flex items-center gap-3 mt-1 text-cyan-200/70 text-sm font-mono">
              <span className="italic">{animal.scientificName}</span>
              <span>•</span>
              <span className="uppercase tracking-wider">{animal.order}</span>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white/10 hover:text-red-400 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        {/* Content Scrollable */}
        <div className="flex-1 overflow-y-auto p-6 custom-scrollbar">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Left Column: Image & Bio */}
            <div className="space-y-6">
              <div className="aspect-video w-full rounded-xl overflow-hidden bg-black/40 border border-white/10 relative">
                {loadingImg ? (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin" />
                  </div>
                ) : imageUrl ? (
                  <img 
                    src={imageUrl} 
                    alt={animal.name} 
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center text-white/30">
                    No image available
                  </div>
                )}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="glass-panel p-4 rounded-xl">
                  <div className="flex items-center gap-2 text-cyan-400 mb-1">
                    <Activity size={16} />
                    <span className="text-xs uppercase font-bold">{t('Diet', 'ආහාරය', 'உணவு')}</span>
                  </div>
                  <div className="text-white font-medium">{animal.dietCategory}</div>
                </div>
                <div className="glass-panel p-4 rounded-xl">
                  <div className="flex items-center gap-2 text-cyan-400 mb-1">
                    <MapPin size={16} />
                    <span className="text-xs uppercase font-bold">{t('Habitat', 'වාසස්ථානය', 'வாழ்விடம்')}</span>
                  </div>
                  <div className="text-white font-medium">{animal.habitat}</div>
                </div>
                <div className="glass-panel p-4 rounded-xl">
                  <div className="flex items-center gap-2 text-cyan-400 mb-1">
                    <Users size={16} />
                    <span className="text-xs uppercase font-bold">{t('Social', 'සමාජ', 'சமூகம்')}</span>
                  </div>
                  <div className="text-white font-medium">{animal.socialStructure}</div>
                </div>
                <div className="glass-panel p-4 rounded-xl">
                  <div className="flex items-center gap-2 text-cyan-400 mb-1">
                    <Info size={16} />
                    <span className="text-xs uppercase font-bold">{t('Activity', 'ක්‍රියාකාරකම්', 'செயல்பாடு')}</span>
                  </div>
                  <div className="text-white font-medium">{animal.activityPattern}</div>
                </div>
              </div>

              {/* QR Code Section */}
              <div className="glass-panel p-6 rounded-xl flex items-center gap-6">
                <div className="bg-white p-2 rounded-xl">
                  <QRCodeSVG 
                    value={animal.wikiUrl} 
                    size={100}
                    bgColor="#ffffff"
                    fgColor="#000000"
                    level="Q"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg mb-1 text-cyan-300">
                    {t('Scan for More Info', 'වැඩි විස්තර සඳහා ස්කෑන් කරන්න', 'மேலும் தகவலுக்கு ஸ்கேன் செய்யவும்')}
                  </h4>
                  <p className="text-sm text-gray-400 mb-3">
                    {t('Opens the full Wikipedia article on your mobile device.', 'ඔබේ ජංගම දුරකථනයේ විකිපීඩියා ලිපිය විවෘත කරයි.', 'உங்கள் மொபைல் சாதனத்தில் விக்கிபீடியா கட்டுரையைத் திறக்கும்.')}
                  </p>
                  <a 
                    href={animal.wikiUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white bg-cyan-600/50 hover:bg-cyan-500/80 px-4 py-2 rounded-lg transition-colors"
                  >
                    <span>{t('Open Link', 'සබැඳිය විවෘත කරන්න', 'இணைப்பைத் திறக்கவும்')}</span>
                    <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Traits & Facts */}
            <div className="space-y-6">
              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-bold mb-4 text-cyan-300 flex items-center gap-2">
                  <Activity size={20} />
                  {t('Biological Traits', 'ජීව විද්‍යාත්මක ලක්ෂණ', 'உயிரியல் பண்புகள்')}
                </h3>
                <div className="space-y-4">
                  {(Object.entries(animal.traits) as [keyof typeof TRAIT_LABELS, number][]).map(([key, val]) => (
                    <div key={key}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-300">{TRAIT_LABELS[key][language]}</span>
                        <span className="text-cyan-400 font-bold">{val}/10</span>
                      </div>
                      <div className="h-2 w-full bg-black/50 rounded-full overflow-hidden">
                        <div 
                          className="h-full rounded-full bg-gradient-to-r from-cyan-600 to-cyan-400"
                          style={{ width: `${(val / 10) * 100}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                <h3 className="text-xl font-bold mb-4 text-purple-300 flex items-center gap-2">
                  <Info size={20} />
                  {t('Fascinating Facts', 'විස්මිත කරුණු', 'சுவாரஸ்யமான உண்மைகள்')}
                </h3>
                <ul className="space-y-3">
                  {animal.funFacts.map((fact, i) => (
                    <li key={i} className="flex gap-3 text-sm text-gray-200">
                      <span className="text-purple-400 font-bold">•</span>
                      <span>{fact}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
