'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useLanguage } from './LanguageProvider';
import { Skull, BookOpen, Compass, Globe, Menu, X } from 'lucide-react';
import type { Language } from '@/types';

export default function Navigation() {
  const pathname = usePathname();
  const { language, setLanguage, t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/', label: t('Home', 'මුල් පිටුව', 'முகப்பு'), icon: Skull },
    { href: '/explore', label: t('Explore', 'ගවේෂණය', 'ஆராயுங்கள்'), icon: Compass },
    { href: '/encyclopedia', label: t('Encyclopedia', 'විශ්වකෝෂය', 'கலைக்களஞ்சியம்'), icon: BookOpen },
    { href: '/skull-lab', label: t('Skull Lab', 'හිස්කබල් පර්යේෂණාගාරය', 'மண்டை ஓடு ஆய்வகம்'), icon: Skull },
  ];

  return (
    <nav className="sticky top-0 z-50 px-6 py-4 bg-white/60 backdrop-blur-lg border-b border-[var(--color-primary)]/10 shadow-[0_4px_30px_rgba(0,0,0,0.05)]">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-[var(--color-primary)] flex items-center justify-center">
            <Skull className="text-white" size={24} />
          </div>
          <h1 className="text-2xl font-black tracking-wider text-[var(--color-primary)]">
            SKAL<span className="text-[var(--color-accent-4)]">4</span>R
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
                    ? 'bg-[var(--color-secondary)] text-[var(--color-primary)] shadow-sm font-bold' 
                    : 'text-[var(--color-primary)] hover:bg-[var(--color-secondary)]/50'
                }`}
              >
                <Icon size={18} />
                <span className="font-medium">{link.label}</span>
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <div className="flex bg-[var(--color-secondary)] rounded-lg p-0.5 md:p-1">
            {(['en', 'si', 'ta'] as Language[]).map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`px-2 py-1 md:px-3 md:py-1 rounded-md text-xs md:text-sm font-bold transition-all ${
                  language === lang
                    ? 'bg-[var(--color-primary)] text-white shadow-sm'
                    : 'text-[var(--color-primary)] hover:bg-black/5'
                }`}
              >
                {lang === 'en' ? 'EN' : lang === 'si' ? 'සිං' : 'தமிழ்'}
              </button>
            ))}
          </div>
          <button 
            className="md:hidden p-2 text-[var(--color-primary)] hover:bg-[var(--color-secondary)] rounded-lg transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl border-b border-[var(--color-primary)]/10 shadow-lg p-4 flex flex-col gap-2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || (link.href !== '/' && pathname.startsWith(link.href));
            const Icon = link.icon;
            
            return (
              <Link 
                key={link.href} 
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                  isActive 
                    ? 'bg-[var(--color-secondary)] text-[var(--color-primary)] shadow-sm font-bold' 
                    : 'text-[var(--color-primary)] hover:bg-[var(--color-secondary)]/50'
                }`}
              >
                <Icon size={20} />
                <span className="font-medium">{link.label}</span>
              </Link>
            );
          })}
        </div>
      )}
    </nav>
  );
}
