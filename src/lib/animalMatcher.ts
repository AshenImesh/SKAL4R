import type { Animal, TraitKey } from '../types';

export interface MatchResult {
  animal: Animal;
  probability: number;
  matchScore: number; // 0 to 1
}

export function calculateProbabilities(
  sliderValues: Record<TraitKey, number>,
  animals: Animal[]
): MatchResult[] {
  let totalSimilarity = 0;
  
  const results = animals.map(animal => {
    let totalDistance = 0;
    const traits = Object.keys(sliderValues) as TraitKey[];
    
    for (const trait of traits) {
      const userVal = sliderValues[trait];
      const animalVal = animal.traits[trait];
      // Weighted distance: some traits might be more important, but for now we treat equally
      const distance = Math.abs(userVal - animalVal);
      totalDistance += distance;
    }

    // Convert distance to similarity
    // Using exponential decay: small distance = high similarity, large distance = drops to near 0
    // A multiplier of 0.3 means a distance of 1 gives ~0.74, 5 gives ~0.22
    const similarity = Math.exp(-totalDistance * 0.25);
    totalSimilarity += similarity;

    // Calculate a 0-100% match score for visual progress bars independent of other animals
    const maxPossibleDistance = traits.length * 9; // 8 traits * max dist of 9 = 72
    const matchScore = Math.max(0, 1 - (totalDistance / (maxPossibleDistance * 0.5))); // Penalize faster

    return {
      animal,
      similarity,
      matchScore,
      probability: 0 // to be calculated
    };
  });

  // Normalize to probabilities that sum to 100%
  const finalResults = results.map(r => ({
    animal: r.animal,
    probability: totalSimilarity > 0 ? (r.similarity / totalSimilarity) * 100 : 0,
    matchScore: r.matchScore * 100
  }));

  // Sort descending by probability
  return finalResults.sort((a, b) => b.probability - a.probability);
}
