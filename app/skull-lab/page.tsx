import React from 'react';
import SkullLab from '@/components/SkullLab';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Skull Lab | SkullG',
  description: 'Analyze dental adaptations and chewing mechanisms of terrestrial mammals.',
};

export default function SkullLabPage() {
  return (
    <div className="min-h-[calc(100vh-73px)] py-6 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-black to-black">
      <SkullLab />
    </div>
  );
}
