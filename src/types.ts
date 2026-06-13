export type Language = 'en' | 'si' | 'ta';

export interface Animal {
  name: string;
  scientificName: string;
  order: string;
  dietCategory: 'Carnivore' | 'Herbivore' | 'Omnivore' | 'Insectivore';
  habitat: string;
  socialStructure: string;
  activityPattern: string;
  traits: TraitScores;
  funFacts: string[];
  wikiUrl: string;
}

export interface TraitScores {
  teethSharpness: number;   // 1=flat grinding, 10=razor carnassials
  eyePosition: number;      // 1=fully lateral, 10=fully forward
  bodySize: number;          // 1=tiny (<100g), 10=massive (>3000kg)
  skullRobustness: number;   // 1=gracile/delicate, 10=extremely robust
  snoutLength: number;       // 1=very short/flat, 10=very long
  carnivoryScore: number;    // 1=pure herbivore, 10=obligate carnivore
  clawSharpness: number;     // 1=flat hooves/nails, 10=razor retractable claws
  tailLength: number;        // 1=no tail/stub, 10=very long
}

export type TraitKey = keyof TraitScores;

export interface TraitMeta {
  key: TraitKey;
  label: Record<Language, string>;
  description: Record<Language, string>;
  lowLabel: Record<Language, string>;
  highLabel: Record<Language, string>;
  icon: string;
  gradientFrom: string;
  gradientTo: string;
}

export interface ConstraintNotification {
  id: string;
  message: Record<Language, string>;
  traitAdjusted: TraitKey;
  oldValue: number;
  newValue: number;
  timestamp: number;
}
