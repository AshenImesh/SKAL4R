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
    <div className="fixed top-24 left-1/2 -translate-x-1/2 z-[200] flex flex-col gap-2 w-max max-w-[90vw] pointer-events-none items-center">
      {notifications.slice(-1).map((notification) => (
        <NotificationItem 
          key="single-toast" 
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
      className={`pointer-events-auto bg-[#11001F]/90 backdrop-blur-md text-white border border-white/10 rounded-full px-5 py-3 shadow-2xl flex items-center gap-3 transition-all duration-300 transform
        ${isVisible ? 'translate-y-0 opacity-100 scale-100' : '-translate-y-8 opacity-0 scale-95'}
      `}
    >
      <AlertCircle className="text-amber-400 shrink-0" size={18} />
      <p className="text-sm font-medium leading-snug">
        {notification.message[language]}
      </p>
      <button 
        onClick={() => {
          setIsVisible(false);
          setTimeout(() => onDismiss(notification.id), 300);
        }}
        className="text-white/50 hover:text-white transition-colors p-1 ml-2"
      >
        <X size={16} />
      </button>
    </div>
  );
}
