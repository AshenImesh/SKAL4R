import React from 'react';
import Encyclopedia from '@/components/Encyclopedia';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Encyclopedia | SkullG',
  description: 'Browse and inspect the biological traits of terrestrial mammals.',
};

export default function EncyclopediaPage() {
  return (
    <div className="min-h-[calc(100vh-73px)] py-6 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-black to-black">
      <Encyclopedia />
    </div>
  );
}
