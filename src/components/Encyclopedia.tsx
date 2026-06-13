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
    <div className="flex flex-col gap-6 animate-fade-in flex-1 max-w-7xl mx-auto w-full p-4 pb-0 md:p-6 md:pb-6 min-h-[calc(100vh-80px)] lg:h-[calc(100vh-80px)]">
      {/* Header Info */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-[var(--color-primary)]/10 pb-6 shrink-0">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-[var(--color-primary)] flex items-center gap-3">
            <Info size={28} className="text-[var(--color-primary)]" />
            {getText('title')}
          </h2>
          <p className="text-[var(--color-primary)]/70 text-sm max-w-3xl mt-2 leading-relaxed">
            {getText('subtitle')}
          </p>
        </div>
      </div>

      {/* Filter Toolbar */}
      <div className="glass-panel p-5 rounded-2xl flex flex-col lg:flex-row gap-4 items-center shrink-0 border border-[var(--color-primary)]/10 shadow-sm">
        {/* Search Input */}
        <div className="relative flex-1 w-full">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-[var(--color-primary)]/50" size={20} />
          <input
            type="text"
            placeholder={getText('searchPlaceholder')}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-white border border-[var(--color-primary)]/10 focus:border-[var(--color-primary)]/30 rounded-xl pl-12 pr-4 py-3 text-[var(--color-primary)] placeholder-[var(--color-primary)]/40 outline-none transition-all focus:shadow-sm"
          />
        </div>

        {/* Filters */}
        <div className="flex flex-wrap lg:flex-nowrap gap-3 w-full lg:w-auto">
          <select
            value={selectedOrder}
            onChange={(e) => setSelectedOrder(e.target.value)}
            className="bg-[var(--color-secondary)]/20 border border-[var(--color-primary)]/10 rounded-xl px-4 py-3 text-[var(--color-primary)] outline-none focus:border-[var(--color-primary)]/30 appearance-none flex-1 lg:flex-none min-w-[140px]"
          >
            <option value="">{getText('allOrders')}</option>
            {orders.map((o) => (
              <option key={o} value={o}>{o}</option>
            ))}
          </select>

          <select
            value={selectedDiet}
            onChange={(e) => setSelectedDiet(e.target.value)}
            className="bg-[var(--color-secondary)]/20 border border-[var(--color-primary)]/10 rounded-xl px-4 py-3 text-[var(--color-primary)] outline-none focus:border-[var(--color-primary)]/30 appearance-none flex-1 lg:flex-none min-w-[140px]"
          >
            <option value="">{getText('allDiets')}</option>
            {diets.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>

          <select
            value={selectedHabitat}
            onChange={(e) => setSelectedHabitat(e.target.value)}
            className="bg-[var(--color-secondary)]/20 border border-[var(--color-primary)]/10 rounded-xl px-4 py-3 text-[var(--color-primary)] outline-none focus:border-[var(--color-primary)]/30 appearance-none flex-1 lg:flex-none min-w-[140px]"
          >
            <option value="">{getText('allHabitats')}</option>
            {habitats.map((h) => (
              <option key={h} value={h}>{h}</option>
            ))}
          </select>
          <button
            onClick={() => { setSearch(''); setSelectedOrder(''); setSelectedDiet(''); setSelectedHabitat(''); }}
            className="bg-[var(--color-secondary)]/20 border border-[var(--color-primary)]/10 rounded-xl px-6 py-3 text-[var(--color-primary)] font-bold text-sm outline-none hover:bg-[var(--color-primary)] hover:text-white transition-colors flex-shrink-0"
          >
            Reset
          </button>
        </div>
      </div>

      {/* Mammals Grid Container */}
      <div className="flex-1 glass-panel rounded-t-2xl md:rounded-b-2xl p-4 md:p-6 pb-2 md:pb-6 overflow-y-auto custom-scrollbar flex flex-col mb-0 border-b-0 md:border-b">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 pb-6 pr-2">
          {filteredMammals.map((m) => (
            <div
              key={m.name}
              onClick={() => setSelectedAnimal(m)}
              role="button"
              tabIndex={0}
              className="bg-white p-5 rounded-xl text-left flex flex-col justify-between hover:bg-[var(--color-secondary)]/20 group transition-all duration-300 hover:shadow-md hover:-translate-y-1 min-h-[160px] gap-3 border-none cursor-pointer"
            >
            <div className="flex flex-col gap-1">
              <span className="text-[10px] uppercase font-bold tracking-widest text-[var(--color-primary)]/60 transition-colors">
                {m.order}
              </span>
              <h3 className="font-extrabold text-[var(--color-primary)] text-lg transition-colors line-clamp-1">
                {m.name}
              </h3>
              <span className="text-xs text-[var(--color-primary)]/70 italic line-clamp-1">
                {m.scientificName}
              </span>
            </div>

            <div className="flex justify-between items-center mt-4 pt-3 border-t border-[var(--color-primary)]/10 w-full text-xs">
              <span className="px-2 py-1 bg-[var(--color-secondary)]/50 rounded border border-[var(--color-primary)]/10 text-[var(--color-primary)] font-bold uppercase tracking-wide">
                {m.dietCategory}
              </span>
              <span className="text-[var(--color-primary)]/70 italic line-clamp-1 max-w-[100px] text-right">
                {m.habitat}
              </span>
            </div>
            </div>
          ))}
          {filteredMammals.length === 0 && (
            <div className="col-span-full flex flex-col items-center justify-center p-12 text-[var(--color-primary)]/50 border border-dashed border-[var(--color-primary)]/20 rounded-2xl">
            <Search size={48} className="mb-4 opacity-50" />
            <p className="text-lg font-medium text-center">No mammals found matching your criteria.</p>
            <button 
              onClick={() => { setSearch(''); setSelectedOrder(''); setSelectedDiet(''); setSelectedHabitat(''); }}
              className="mt-4 text-[var(--color-primary)] hover:opacity-70 transition-opacity underline font-bold"
            >
              Clear filters
            </button>
          </div>
        )}
        </div>
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
