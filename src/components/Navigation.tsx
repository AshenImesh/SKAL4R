'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from './LanguageProvider';
import { Skull, BookOpen, Compass, Globe } from 'lucide-react';
import type { Language } from '@/types';

export default function Navigation() {
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { href: '/', label: t('Home', 'මුල් පිටුව', 'முகப்பு'), icon: Skull },
    { href: '/explore', label: t('Explore', 'ගවේෂණය', 'ஆராயுங்கள்'), icon: Compass },
    { href: '/encyclopedia', label: t('Encyclopedia', 'විශ්වකෝෂය', 'கலைக்களஞ்சியம்'), icon: BookOpen },
    { href: '/skull-lab', label: t('Skull Lab', 'හිස්කබල් පර්යේෂණාගාරය', 'மண்டை ஓடு ஆய்வகம்'), icon: Skull },
  ];

  return (
    <nav className="glass-panel sticky top-0 z-50 border-b border-white/10 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-[0_0_15px_rgba(0,240,255,0.5)]">
            <Skull className="text-white" size={24} />
          </div>
          <h1 className="text-2xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white to-cyan-300">
            SKULL<span className="text-cyan-400">G</span>
          </h1>
        </div>

        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
            const Icon = link.icon;
            
            return (
              <Link 
                key={link.href} 
                href={link.href}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  isActive 
                    ? 'bg-white/10 text-cyan-300 shadow-[inset_0_0_10px_rgba(0,240,255,0.2)]' 
                    : 'text-gray-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                <Icon size={18} className={isActive ? 'text-cyan-400' : ''} />
                <span className="font-medium">{link.label}</span>
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <div className="flex bg-black/40 rounded-lg p-1 border border-white/10">
            {(['en', 'si', 'ta'] as Language[]).map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`px-3 py-1 rounded-md text-sm font-bold transition-all ${
                  language === lang
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                    : 'text-gray-400 hover:text-white'
                }`}
              >
                {lang === 'en' ? 'EN' : lang === 'si' ? 'සිං' : 'தமிழ்'}
              </button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
