import React from 'react';
import SliderExplorer from '@/components/SliderExplorer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Explore | SkullG',
  description: 'Interactive slider-based animal trait explorer',
};

export default function ExplorePage() {
  return (
    <div className="min-h-[calc(100vh-73px)] py-6 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-cyan-900/20 via-black to-black">
      <SliderExplorer />
    </div>
  );
}
