'use client';

import React, { useEffect, useState } from 'react';
import { AlertCircle, X } from 'lucide-react';
import type { ConstraintNotification as NotificationType, Language } from '@/types';
import { useLanguage } from './LanguageProvider';

interface Props {
  notifications: NotificationType[];
  onDismiss: (id: string) => void;
}

export default function ConstraintNotification({ notifications, onDismiss }: Props) {
  const { language } = useLanguage();
  
  return (
    <div className="fixed top-24 right-6 z-50 flex flex-col gap-3 w-full max-w-sm pointer-events-none">
      {notifications.map((notification) => (
        <NotificationItem 
          key={notification.id} 
          notification={notification} 
          onDismiss={onDismiss}
          language={language}
        />
      ))}
    </div>
  );
}

function NotificationItem({ 
  notification, 
  onDismiss,
  language
}: { 
  notification: NotificationType; 
  onDismiss: (id: string) => void;
  language: Language;
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Small delay to trigger animation
    requestAnimationFrame(() => setIsVisible(true));

    // Auto-dismiss after 6 seconds
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => onDismiss(notification.id), 300); // Wait for exit animation
    }, 6000);

    return () => clearTimeout(timer);
  }, [notification.id, onDismiss]);

  return (
    <div 
      className={`pointer-events-auto bg-amber-900/80 backdrop-blur-md border border-amber-500/50 rounded-lg p-4 shadow-lg shadow-amber-900/20 flex items-start gap-3 transition-all duration-300 transform origin-top-right
        ${isVisible ? 'translate-x-0 opacity-100 scale-100' : 'translate-x-8 opacity-0 scale-95'}
      `}
    >
      <AlertCircle className="text-amber-400 shrink-0 mt-0.5" size={20} />
      <div className="flex-1">
        <h4 className="text-amber-300 font-semibold text-sm mb-1">
          {language === 'en' ? 'Biological Constraint Applied' : language === 'si' ? 'ජීව විද්‍යාත්මක සීමාව යෙදවිණි' : 'உயிரியல் கட்டுப்பாடு பயன்படுத்தப்பட்டது'}
        </h4>
        <p className="text-amber-100/90 text-sm leading-snug">
          {notification.message[language]}
        </p>
      </div>
      <button 
        onClick={() => {
          setIsVisible(false);
          setTimeout(() => onDismiss(notification.id), 300);
        }}
        className="text-amber-400/70 hover:text-amber-300 transition-colors p-1"
      >
        <X size={16} />
      </button>
    </div>
  );
}
