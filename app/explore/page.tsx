import React from 'react';
import SliderExplorer from '@/components/SliderExplorer';
import PixelBlast from '@/components/PixelBlast';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Explore | SKAL4R',
  description: 'Interactive slider-based animal trait explorer',
};

export default function ExplorePage() {
  return (
    <div className="relative min-h-[calc(100vh-73px)] bg-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none z-0">
        <PixelBlast
          variant="square"
          pixelSize={4}
          color="#DEDBF3"
          patternScale={2}
          patternDensity={1}
          pixelSizeJitter={0}
          enableRipples={false}
          rippleSpeed={0.4}
          rippleThickness={0.12}
          rippleIntensityScale={1.5}
          liquid={false}
          liquidStrength={0.12}
          liquidRadius={1.2}
          liquidWobbleSpeed={5}
          speed={0.5}
          edgeFade={0.25}
          transparent
        />
      </div>
      <div className="relative z-10 py-6 h-full">
        <SliderExplorer />
      </div>
    </div>
  );
}
