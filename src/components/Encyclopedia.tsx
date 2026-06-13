'use client';

import React, { useState } from 'react';
import { useLanguage } from './LanguageProvider';
import { Search, Info } from 'lucide-react';
import { ANIMALS_DATABASE } from '@/data/animalDatabase';
import type { Animal } from '@/types';
import AnimalDetailModal from './AnimalDetailModal';

const encTexts = {
  title: {
    en: 'Mammal Encyclopedia',
    si: 'ක්ෂීරපායී විශ්වකෝෂය',
    ta: 'விலங்கு கலைக்களஞ்சியம்'
  },
  subtitle: {
    en: `Browse and inspect the biological traits of all ${ANIMALS_DATABASE.length} terrestrial mammals in our database.`,
    si: `අපගේ දත්ත ගබඩාවේ ඇති සියලුම ක්ෂීරපායීන් ${ANIMALS_DATABASE.length} දෙනාගේ ජීව විද්‍යාත්මක ලක්ෂණ නිරීක්ෂණය කරන්න.`,
    ta: `தரவுத்தளத்தில் உள்ள அனைத்து ${ANIMALS_DATABASE.length} விலங்குகளின் உயிரியல் பண்புகளை ஆராயுங்கள்.`
  },
  searchPlaceholder: {
    en: 'Search by common or scientific name...',
    si: 'පොදු හෝ විද්‍යාත්මක නමින් සොයන්න...',
    ta: 'பொதுவான அல்லது அறிவியல் பெயரால் தேடுக...'
  },
  allOrders: {
    en: 'All Orders',
    si: 'සියලුම ගණ',
    ta: 'அனைத்து பிரிவுகள்'
  },
  allDiets: {
    en: 'All Diets',
    si: 'සියලුම ආහාර රටා',
    ta: 'அனைத்து உணவுகள்'
  },
  allHabitats: {
    en: 'All Habitats',
    si: 'සියලුම වාසස්ථාන',
    ta: 'அனைத்து வாழிடங்கள்'
  }
};

export default function Encyclopedia() {
  const { language, t } = useLanguage();
  const getText = (key: keyof typeof encTexts) => encTexts[key][language];

  // State
  const [search, setSearch] = useState('');
  const [selectedOrder, setSelectedOrder] = useState('');
  const [selectedDiet, setSelectedDiet] = useState('');
  const [selectedHabitat, setSelectedHabitat] = useState('');
  const [selectedAnimal, setSelectedAnimal] = useState<Animal | null>(null);

  // Get unique lists for filter select
  const orders = Array.from(new Set(ANIMALS_DATABASE.map((m) => m.order))).sort();
  const diets = Array.from(new Set(ANIMALS_DATABASE.map((m) => m.dietCategory))).sort();
  const habitats = Array.from(new Set(ANIMALS_DATABASE.map((m) => m.habitat))).sort();

  // Filter logic
  const filteredMammals = ANIMALS_DATABASE.filter((m) => {
    const nameMatch =
      m.name.toLowerCase().includes(search.toLowerCase()) ||
      m.scientificName.toLowerCase().includes(search.toLowerCase());
    const orderMatch = selectedOrder === '' || m.order === selectedOrder;
    const dietMatch = selectedDiet === '' || m.dietCategory === selectedDiet;
    const habitatMatch = selectedHabitat === '' || m.habitat === selectedHabitat;

    return nameMatch && orderMatch && dietMatch && habitatMatch;
  });

  return (
    <div className="flex flex-col gap-6 animate-fade-in flex-1 max-w-7xl mx-auto w-full p-6 h-[calc(100vh-100px)]">
      {/* Header Info */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-6 shrink-0">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 glow-text flex items-center gap-3">
            <Info size={28} className="text-cyan-400" />
            {getText('title')}
          </h2>
          <p className="text-cyan-100/70 text-sm max-w-3xl mt-2 leading-relaxed">
            {getText('subtitle')}
          </p>
        </div>
      </div>

      {/* Filter Toolbar */}
      <div className="glass-panel p-5 rounded-2xl flex flex-col lg:flex-row gap-4 items-center shrink-0 border border-cyan-500/20 shadow-lg">
        {/* Search Input */}
        <div className="relative flex-1 w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-500" size={20} />
          <input
            type="text"
            placeholder={getText('searchPlaceholder')}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-black/40 border border-white/10 focus:border-cyan-500/50 rounded-xl pl-12 pr-4 py-3 text-white placeholder-gray-500 outline-none transition-all focus:shadow-[0_0_15px_rgba(0,240,255,0.15)]"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap lg:flex-nowrap gap-3 w-full lg:w-auto">
          <select
            value={selectedOrder}
            onChange={(e) => setSelectedOrder(e.target.value)}
            className="bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-cyan-500/50 appearance-none flex-1 lg:flex-none min-w-[140px]"
          >
            <option value="">{getText('allOrders')}</option>
            {orders.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>

          <select
            value={selectedDiet}
            onChange={(e) => setSelectedDiet(e.target.value)}
            className="bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-cyan-500/50 appearance-none flex-1 lg:flex-none min-w-[140px]"
          >
            <option value="">{getText('allDiets')}</option>
            {diets.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>

          <select
            value={selectedHabitat}
            onChange={(e) => setSelectedHabitat(e.target.value)}
            className="bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-white outline-none focus:border-cyan-500/50 appearance-none flex-1 lg:flex-none min-w-[140px]"
          >
            <option value="">{getText('allHabitats')}</option>
            {habitats.map((h) => (
              <option key={h} value={h}>{h}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Mammals Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 flex-1 overflow-y-auto custom-scrollbar pb-6 pr-2">
        {filteredMammals.map((m) => (
          <button
            key={m.name}
            onClick={() => setSelectedAnimal(m)}
            className="glass-panel p-5 rounded-xl text-left flex flex-col justify-between border border-white/5 hover:border-cyan-500/50 hover:bg-white/5 group transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,240,255,0.15)] hover:-translate-y-1 h-[140px]"
          >
            <div className="flex flex-col gap-1">
              <span className="text-[10px] uppercase font-bold tracking-widest text-cyan-500 group-hover:text-cyan-400 transition-colors">
                {m.order}
              </span>
              <h3 className="font-extrabold text-white text-lg group-hover:text-cyan-300 transition-colors line-clamp-1">
                {m.name}
              </h3>
              <span className="text-xs text-gray-400 italic line-clamp-1">
                {m.scientificName}
              </span>
            </div>

            <div className="flex justify-between items-center mt-4 pt-3 border-t border-white/10 w-full text-xs">
              <span className="px-2 py-1 bg-black/50 rounded border border-white/5 text-gray-300 font-bold uppercase tracking-wide">
                {m.dietCategory}
              </span>
              <span className="text-gray-400 italic line-clamp-1 max-w-[100px] text-right">
                {m.habitat}
              </span>
            </div>
          </button>
        ))}
        {filteredMammals.length === 0 && (
          <div className="col-span-full flex flex-col items-center justify-center p-12 text-gray-500 border border-dashed border-white/10 rounded-2xl">
            <Search size={48} className="mb-4 opacity-50" />
            <p className="text-lg font-medium text-center">No mammals found matching your criteria.</p>
            <button 
              onClick={() => { setSearch(''); setSelectedOrder(''); setSelectedDiet(''); setSelectedHabitat(''); }}
              className="mt-4 text-cyan-400 hover:text-cyan-300 transition-colors underline"
            >
              Clear filters
            </button>
          </div>
        )}
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
