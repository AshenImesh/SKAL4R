import type { Animal } from '../types';

// 91 terrestrial mammals with 8 trait scores (1-10 scale) and metadata
// Trait scores based on established zoological/morphological data

export const ANIMALS_DATABASE: Animal[] = [
  {
    name: 'Aardvark', scientificName: 'Orycteropus afer', order: 'Tubulidentata',
    dietCategory: 'Insectivore', habitat: 'Savanna', socialStructure: 'Solitary', activityPattern: 'Nocturnal',
    traits: { teethSharpness: 2, eyePosition: 3, bodySize: 5, skullRobustness: 5, snoutLength: 9, carnivoryScore: 3, clawSharpness: 6, tailLength: 5 },
    funFacts: ['Only living member of order Tubulidentata', 'Can eat up to 50,000 termites per night', 'Name means "earth pig" in Afrikaans', 'Has peg-like teeth without enamel'],
    wikiUrl: 'https://en.wikipedia.org/wiki/Aardvark'
  },
  {
    name: 'Aardwolf', scientificName: 'Proteles cristata', order: 'Carnivora',
    dietCategory: 'Insectivore', habitat: 'Savanna', socialStructure: 'Pair', activityPattern: 'Nocturnal',
    traits: { teethSharpness: 3, eyePosition: 6, bodySize: 3, skullRobustness: 3, snoutLength: 5, carnivoryScore: 3, clawSharpness: 4, tailLength: 4 },
    funFacts: ['A member of the hyena family but eats mainly termites', 'Can consume 300,000 termites in a single night', 'Name means "earth wolf" in Afrikaans', 'Has a mane that stands up when threatened'],
    wikiUrl: 'https://en.wikipedia.org/wiki/Aardwolf'
  },
  {
    name: 'Agouti', scientificName: 'Dasyprocta punctata', order: 'Rodentia',
    dietCategory: 'Herbivore', habitat: 'Forest', socialStructure: 'Pair', activityPattern: 'Diurnal',
    traits: { teethSharpness: 3, eyePosition: 3, bodySize: 3, skullRobustness: 3, snoutLength: 4, carnivoryScore: 1, clawSharpness: 3, tailLength: 1 },
    funFacts: ['Only animal that can crack open Brazil nut shells', 'Buries seeds and helps regenerate tropical forests', 'Can jump up to 2 meters from standing', 'Important seed dispersers in rainforests'],
    wikiUrl: 'https://en.wikipedia.org/wiki/Agouti'
  },
  {
    name: 'Alpaca', scientificName: 'Vicugna pacos', order: 'Artiodactyla',
    dietCategory: 'Herbivore', habitat: 'Grassland', socialStructure: 'Herd', activityPattern: 'Diurnal',
    traits: { teethSharpness: 1, eyePosition: 2, bodySize: 5, skullRobustness: 4, snoutLength: 6, carnivoryScore: 1, clawSharpness: 1, tailLength: 3 },
    funFacts: ['Domesticated over 6,000 years ago in Peru', 'Their fiber is warmer and softer than sheep wool', 'They hum to communicate with each other', 'Spit when agitated as a defense mechanism'],
    wikiUrl: 'https://en.wikipedia.org/wiki/Alpaca'
  },
  {
    name: 'Anteater', scientificName: 'Myrmecophaga tridactyla', order: 'Pilosa',
    dietCategory: 'Insectivore', habitat: 'Grassland', socialStructure: 'Solitary', activityPattern: 'Variable',
    traits: { teethSharpness: 1, eyePosition: 3, bodySize: 5, skullRobustness: 3, snoutLength: 10, carnivoryScore: 3, clawSharpness: 8, tailLength: 8 },
    funFacts: ['Has a tongue over 60 cm long', 'Completely toothless — grinds food in its stomach', 'Eats up to 35,000 ants and termites daily', 'Its claws are powerful enough to fend off jaguars'],
    wikiUrl: 'https://en.wikipedia.org/wiki/Giant_anteater'
  },
  {
    name: 'Antelope', scientificName: 'Antilopinae spp.', order: 'Artiodactyla',
    dietCategory: 'Herbivore', habitat: 'Savanna', socialStructure: 'Herd', activityPattern: 'Diurnal',
    traits: { teethSharpness: 1, eyePosition: 1, bodySize: 5, skullRobustness: 5, snoutLength: 6, carnivoryScore: 1, clawSharpness: 1, tailLength: 4 },
    funFacts: ['Can run up to 98 km/h (some species)', 'Over 90 species exist across Africa and Asia', 'Their horns are permanent and never shed', 'Have excellent hearing and can rotate ears independently'],
    wikiUrl: 'https://en.wikipedia.org/wiki/Antelope'
  },
  {
    name: 'Armadillo', scientificName: 'Dasypus novemcinctus', order: 'Cingulata',
    dietCategory: 'Insectivore', habitat: 'Forest', socialStructure: 'Solitary', activityPattern: 'Nocturnal',
    traits: { teethSharpness: 2, eyePosition: 3, bodySize: 3, skullRobustness: 6, snoutLength: 6, carnivoryScore: 3, clawSharpness: 6, tailLength: 5 },
    funFacts: ['Always gives birth to identical quadruplets', 'Can hold its breath underwater for up to 6 minutes', 'Has bony armor plates called osteoderms', 'Can curl into a ball for protection (some species)'],
    wikiUrl: 'https://en.wikipedia.org/wiki/Armadillo'
  },
  {
    name: 'Baboon', scientificName: 'Papio spp.', order: 'Primates',
    dietCategory: 'Omnivore', habitat: 'Savanna', socialStructure: 'Group', activityPattern: 'Diurnal',
    traits: { teethSharpness: 5, eyePosition: 8, bodySize: 4, skullRobustness: 6, snoutLength: 7, carnivoryScore: 4, clawSharpness: 4, tailLength: 6 },
    funFacts: ['Males have canine teeth as long as a leopard\'s', 'Live in troops of up to 300 individuals', 'Can run at speeds up to 45 km/h', 'One of the few primates adapted to savanna life'],
    wikiUrl: 'https://en.wikipedia.org/wiki/Baboon'
  },
  {
    name: 'Badger', scientificName: 'Meles meles', order: 'Carnivora',
    dietCategory: 'Omnivore', habitat: 'Forest', socialStructure: 'Group', activityPattern: 'Nocturnal',
    traits: { teethSharpness: 6, eyePosition: 5, bodySize: 4, skullRobustness: 7, snoutLength: 5, carnivoryScore: 5, clawSharpness: 7, tailLength: 2 },
    funFacts: ['Their setts (burrows) can be centuries old', 'Extremely strong bite force relative to size', 'Honey badgers are nearly fearless against any predator', 'Can dig faster than a human with a shovel'],
    wikiUrl: 'https://en.wikipedia.org/wiki/Badger'
  },
  {
    name: 'Bear', scientificName: 'Ursus arctos', order: 'Carnivora',
    dietCategory: 'Omnivore', habitat: 'Forest', socialStructure: 'Solitary', activityPattern: 'Variable',
    traits: { teethSharpness: 7, eyePosition: 7, bodySize: 8, skullRobustness: 9, snoutLength: 6, carnivoryScore: 6, clawSharpness: 7, tailLength: 1 },
    funFacts: ['Can smell food from over 30 km away', 'Heart rate drops to 8 bpm during hibernation', 'Despite their size, can run at 56 km/h', 'Polar bears have black skin under white fur'],
    wikiUrl: 'https://en.wikipedia.org/wiki/Bear'
  },
  {
    name: 'Beaver', scientificName: 'Castor canadensis', order: 'Rodentia',
    dietCategory: 'Herbivore', habitat: 'Aquatic/Generalist', socialStructure: 'Pair', activityPattern: 'Nocturnal',
    traits: { teethSharpness: 4, eyePosition: 3, bodySize: 4, skullRobustness: 5, snoutLength: 4, carnivoryScore: 1, clawSharpness: 3, tailLength: 5 },
    funFacts: ['Their teeth never stop growing throughout life', 'Can hold breath underwater for up to 15 minutes', 'Their dams can be seen from space', 'Largest rodent in North America'],
    wikiUrl: 'https://en.wikipedia.org/wiki/Beaver'
  },
  {
    name: 'Bison', scientificName: 'Bison bison', order: 'Artiodactyla',
    dietCategory: 'Herbivore', habitat: 'Grassland', socialStructure: 'Herd', activityPattern: 'Diurnal',
    traits: { teethSharpness: 1, eyePosition: 2, bodySize: 9, skullRobustness: 9, snoutLength: 5, carnivoryScore: 1, clawSharpness: 1, tailLength: 4 },
    funFacts: ['Largest land mammal in North America', 'Can run at speeds up to 65 km/h', 'Nearly went extinct with only 541 animals in 1889', 'Their humps are made of muscle, not fat'],
    wikiUrl: 'https://en.wikipedia.org/wiki/American_bison'
  },
  {
    name: 'Boar', scientificName: 'Sus scrofa', order: 'Artiodactyla',
    dietCategory: 'Omnivore', habitat: 'Forest', socialStructure: 'Group', activityPattern: 'Nocturnal',
    traits: { teethSharpness: 5, eyePosition: 4, bodySize: 5, skullRobustness: 7, snoutLength: 7, carnivoryScore: 4, clawSharpness: 2, tailLength: 2 },
    funFacts: ['Ancestor of all domestic pigs', 'Males have continuously growing tusks used in combat', 'Can run at 48 km/h and are good swimmers', 'One of the most widespread mammals on Earth'],
    wikiUrl: 'https://en.wikipedia.org/wiki/Wild_boar'
  },
  {
    name: 'Buffalo', scientificName: 'Syncerus caffer', order: 'Artiodactyla',
    dietCategory: 'Herbivore', habitat: 'Savanna', socialStructure: 'Herd', activityPattern: 'Variable',
    traits: { teethSharpness: 1, eyePosition: 2, bodySize: 8, skullRobustness: 10, snoutLength: 5, carnivoryScore: 1, clawSharpness: 1, tailLength: 5 },
    funFacts: ['Member of the "Big Five" game animals', 'Known to seek revenge on hunters and predators', 'Their horns can span over 1 meter', 'Responsible for more human deaths in Africa than lions'],
    wikiUrl: 'https://en.wikipedia.org/wiki/African_buffalo'
  },
  {
    name: 'Camel', scientificName: 'Camelus dromedarius', order: 'Artiodactyla',
    dietCategory: 'Herbivore', habitat: 'Desert', socialStructure: 'Herd', activityPattern: 'Diurnal',
    traits: { teethSharpness: 2, eyePosition: 2, bodySize: 8, skullRobustness: 6, snoutLength: 7, carnivoryScore: 1, clawSharpness: 1, tailLength: 4 },
    funFacts: ['Can drink 200 liters of water in 3 minutes', 'Their humps store fat, not water', 'Can survive body temperature of 41°C without sweating', 'Have three eyelids to protect from sandstorms'],
    wikiUrl: 'https://en.wikipedia.org/wiki/Camel'
  },
  {
    name: 'Capybara', scientificName: 'Hydrochoerus hydrochaeris', order: 'Rodentia',
    dietCategory: 'Herbivore', habitat: 'Aquatic/Generalist', socialStructure: 'Group', activityPattern: 'Crepuscular',
    traits: { teethSharpness: 3, eyePosition: 3, bodySize: 5, skullRobustness: 5, snoutLength: 5, carnivoryScore: 1, clawSharpness: 2, tailLength: 1 },
    funFacts: ['Largest living rodent in the world', 'Semi-aquatic and can hold breath for 5 minutes', 'Are social animals and even befriend other species', 'Their teeth grow continuously throughout life'],
    wikiUrl: 'https://en.wikipedia.org/wiki/Capybara'
  },
  {
    name: 'Cat', scientificName: 'Felis catus', order: 'Carnivora',
    dietCategory: 'Carnivore', habitat: 'Generalist', socialStructure: 'Solitary', activityPattern: 'Crepuscular',
    traits: { teethSharpness: 8, eyePosition: 9, bodySize: 2, skullRobustness: 4, snoutLength: 3, carnivoryScore: 9, clawSharpness: 10, tailLength: 7 },
    funFacts: ['Can rotate their ears 180 degrees', 'Spend 70% of their lives sleeping', 'Have over 20 different vocalizations', 'Retractable claws are unique among carnivores'],
    wikiUrl: 'https://en.wikipedia.org/wiki/Cat'
  },
  {
    name: 'Cheetah', scientificName: 'Acinonyx jubatus', order: 'Carnivora',
    dietCategory: 'Carnivore', habitat: 'Savanna', socialStructure: 'Solitary', activityPattern: 'Diurnal',
    traits: { teethSharpness: 8, eyePosition: 9, bodySize: 5, skullRobustness: 4, snoutLength: 3, carnivoryScore: 10, clawSharpness: 6, tailLength: 7 },
    funFacts: ['Fastest land animal at 112 km/h', 'Can accelerate from 0 to 96 km/h in 3 seconds', 'Cannot roar — they chirp and purr instead', 'Only big cat with semi-retractable claws for grip'],
    wikiUrl: 'https://en.wikipedia.org/wiki/Cheetah'
  },
  {
    name: 'Chinchilla', scientificName: 'Chinchilla lanigera', order: 'Rodentia',
    dietCategory: 'Herbivore', habitat: 'Desert', socialStructure: 'Group', activityPattern: 'Crepuscular',
    traits: { teethSharpness: 3, eyePosition: 3, bodySize: 1, skullRobustness: 2, snoutLength: 3, carnivoryScore: 1, clawSharpness: 3, tailLength: 6 },
    funFacts: ['Has the densest fur of any land animal (20,000 hairs per cm²)', 'Can jump up to 1.8 meters', 'Takes dust baths instead of water baths', 'Can release patches of fur to escape predators'],
    wikiUrl: 'https://en.wikipedia.org/wiki/Chinchilla'
  },
  {
    name: 'Chipmunk', scientificName: 'Tamias striatus', order: 'Rodentia',
    dietCategory: 'Omnivore', habitat: 'Forest', socialStructure: 'Solitary', activityPattern: 'Diurnal',
    traits: { teethSharpness: 3, eyePosition: 3, bodySize: 1, skullRobustness: 2, snoutLength: 3, carnivoryScore: 2, clawSharpness: 3, tailLength: 5 },
    funFacts: ['Cheek pouches can expand to three times head size', 'Can gather up to 165 acorns in a single day', 'Creates elaborate underground burrow systems', 'Hibernates but wakes periodically to eat stored food'],
    wikiUrl: 'https://en.wikipedia.org/wiki/Chipmunk'
  },
  {
    name: 'Chimpanzee', scientificName: 'Pan troglodytes', order: 'Primates',
    dietCategory: 'Omnivore', habitat: 'Forest', socialStructure: 'Group', activityPattern: 'Diurnal',
    traits: { teethSharpness: 5, eyePosition: 9, bodySize: 5, skullRobustness: 6, snoutLength: 5, carnivoryScore: 4, clawSharpness: 4, tailLength: 1 },
    funFacts: ['Share 98.7% of DNA with humans', 'Use tools like sticks to fish for termites', 'Can learn sign language and communicate', 'Have been observed making and using spears for hunting'],
    wikiUrl: 'https://en.wikipedia.org/wiki/Chimpanzee'
  },
  {
    name: 'Civet', scientificName: 'Civettictis civetta', order: 'Carnivora',
    dietCategory: 'Omnivore', habitat: 'Forest', socialStructure: 'Solitary', activityPattern: 'Nocturnal',
    traits: { teethSharpness: 5, eyePosition: 6, bodySize: 3, skullRobustness: 4, snoutLength: 5, carnivoryScore: 5, clawSharpness: 5, tailLength: 7 },
    funFacts: ['Produces civetone, historically used in perfumes', 'Kopi luwak coffee is made from civet-digested beans', 'Not actually a cat despite their appearance', 'Excellent tree climbers with semi-retractable claws'],
    wikiUrl: 'https://en.wikipedia.org/wiki/African_civet'
  },
  {
    name: 'Coati', scientificName: 'Nasua nasua', order: 'Carnivora',
    dietCategory: 'Omnivore', habitat: 'Forest', socialStructure: 'Group', activityPattern: 'Diurnal',
    traits: { teethSharpness: 5, eyePosition: 6, bodySize: 3, skullRobustness: 4, snoutLength: 7, carnivoryScore: 4, clawSharpness: 5, tailLength: 8 },
    funFacts: ['Related to raccoons with a distinctive long snout', 'Females live in bands of up to 30 individuals', 'Can rotate their ankles 180° to climb down trees headfirst', 'Use their long tail for balance while climbing'],
    wikiUrl: 'https://en.wikipedia.org/wiki/Coati'
  },
  {
    name: 'Cow', scientificName: 'Bos taurus', order: 'Artiodactyla',
    dietCategory: 'Herbivore', habitat: 'Grassland', socialStructure: 'Herd', activityPattern: 'Diurnal',
    traits: { teethSharpness: 1, eyePosition: 1, bodySize: 8, skullRobustness: 7, snoutLength: 6, carnivoryScore: 1, clawSharpness: 1, tailLength: 6 },
    funFacts: ['Have nearly 360-degree panoramic vision', 'Can recognize and remember over 100 other cows', 'Have four stomach chambers for digesting grass', 'Produce about 200,000 glasses of milk in a lifetime'],
    wikiUrl: 'https://en.wikipedia.org/wiki/Cattle'
  },
  {
    name: 'Coyote', scientificName: 'Canis latrans', order: 'Carnivora',
    dietCategory: 'Omnivore', habitat: 'Generalist', socialStructure: 'Pair', activityPattern: 'Crepuscular',
    traits: { teethSharpness: 7, eyePosition: 8, bodySize: 4, skullRobustness: 5, snoutLength: 7, carnivoryScore: 7, clawSharpness: 4, tailLength: 6 },
    funFacts: ['Have expanded their range since European colonization', 'Can run at speeds up to 64 km/h', 'Mate for life and share parenting duties', 'Known as the "trickster" in Native American folklore'],
    wikiUrl: 'https://en.wikipedia.org/wiki/Coyote'
  },
  {
    name: 'Deer', scientificName: 'Cervus elaphus', order: 'Artiodactyla',
    dietCategory: 'Herbivore', habitat: 'Forest', socialStructure: 'Herd', activityPattern: 'Crepuscular',
    traits: { teethSharpness: 1, eyePosition: 1, bodySize: 6, skullRobustness: 5, snoutLength: 6, carnivoryScore: 1, clawSharpness: 1, tailLength: 3 },
    funFacts: ['Males grow and shed antlers every year', 'Antlers are the fastest-growing tissue in any mammal', 'Can jump up to 3 meters high', 'Have excellent night vision due to a tapetum lucidum'],
    wikiUrl: 'https://en.wikipedia.org/wiki/Deer'
  },
  {
    name: 'Dog', scientificName: 'Canis lupus familiaris', order: 'Carnivora',
    dietCategory: 'Omnivore', habitat: 'Generalist', socialStructure: 'Group', activityPattern: 'Diurnal',
    traits: { teethSharpness: 7, eyePosition: 7, bodySize: 4, skullRobustness: 5, snoutLength: 6, carnivoryScore: 6, clawSharpness: 3, tailLength: 5 },
    funFacts: ['First animal to be domesticated over 15,000 years ago', 'Can smell 10,000 to 100,000 times better than humans', 'Over 340 recognized breeds worldwide', 'Can understand up to 250 words and gestures'],
    wikiUrl: 'https://en.wikipedia.org/wiki/Dog'
  },
  {
    name: 'Donkey', scientificName: 'Equus asinus', order: 'Perissodactyla',
    dietCategory: 'Herbivore', habitat: 'Grassland', socialStructure: 'Herd', activityPattern: 'Diurnal',
    traits: { teethSharpness: 1, eyePosition: 2, bodySize: 6, skullRobustness: 6, snoutLength: 8, carnivoryScore: 1, clawSharpness: 1, tailLength: 5 },
    funFacts: ['Can hear another donkey from 96 km away in the desert', 'Have incredible memory and never forget a path', 'Stronger than horses pound for pound', 'Used as guard animals to protect livestock from predators'],
    wikiUrl: 'https://en.wikipedia.org/wiki/Donkey'
  },
  {
    name: 'Elephant', scientificName: 'Loxodonta africana', order: 'Proboscidea',
    dietCategory: 'Herbivore', habitat: 'Savanna', socialStructure: 'Herd', activityPattern: 'Variable',
    traits: { teethSharpness: 1, eyePosition: 3, bodySize: 10, skullRobustness: 10, snoutLength: 7, carnivoryScore: 1, clawSharpness: 1, tailLength: 4 },
    funFacts: ['Largest living land animal weighing up to 6,000 kg', 'Can communicate using infrasound over 10 km', 'Display grief and mourn their dead', 'Their trunks contain over 40,000 muscles'],
    wikiUrl: 'https://en.wikipedia.org/wiki/Elephant'
  },
  {
    name: 'Ferret', scientificName: 'Mustela putorius furo', order: 'Carnivora',
    dietCategory: 'Carnivore', habitat: 'Generalist', socialStructure: 'Group', activityPattern: 'Crepuscular',
    traits: { teethSharpness: 7, eyePosition: 7, bodySize: 2, skullRobustness: 3, snoutLength: 4, carnivoryScore: 8, clawSharpness: 5, tailLength: 4 },
    funFacts: ['Sleep 14 to 18 hours a day', 'Can squeeze through any hole their head fits through', 'Domesticated over 2,500 years ago for hunting rabbits', 'Perform a "war dance" when excited — hopping and bouncing'],
    wikiUrl: 'https://en.wikipedia.org/wiki/Ferret'
  },
  {
    name: 'Fox', scientificName: 'Vulpes vulpes', order: 'Carnivora',
    dietCategory: 'Omnivore', habitat: 'Generalist', socialStructure: 'Solitary', activityPattern: 'Nocturnal',
    traits: { teethSharpness: 7, eyePosition: 8, bodySize: 3, skullRobustness: 4, snoutLength: 6, carnivoryScore: 7, clawSharpness: 4, tailLength: 7 },
    funFacts: ['Most widespread wild carnivore in the world', 'Use Earth\'s magnetic field to hunt prey under snow', 'Have vertically slit pupils like a cat', 'Their bushy tail (brush) is used for warmth and balance'],
    wikiUrl: 'https://en.wikipedia.org/wiki/Red_fox'
  },
  {
    name: 'Giraffe', scientificName: 'Giraffa camelopardalis', order: 'Artiodactyla',
    dietCategory: 'Herbivore', habitat: 'Savanna', socialStructure: 'Herd', activityPattern: 'Diurnal',
    traits: { teethSharpness: 1, eyePosition: 2, bodySize: 9, skullRobustness: 5, snoutLength: 6, carnivoryScore: 1, clawSharpness: 1, tailLength: 5 },
    funFacts: ['Tallest living animal at up to 5.7 meters', 'Their tongues are 45 cm long and prehensile', 'Sleep only 30 minutes a day in short naps', 'Each giraffe has a unique spot pattern like fingerprints'],
    wikiUrl: 'https://en.wikipedia.org/wiki/Giraffe'
  },
  {
    name: 'Goat', scientificName: 'Capra aegagrus hircus', order: 'Artiodactyla',
    dietCategory: 'Herbivore', habitat: 'Grassland', socialStructure: 'Herd', activityPattern: 'Diurnal',
    traits: { teethSharpness: 1, eyePosition: 2, bodySize: 4, skullRobustness: 5, snoutLength: 5, carnivoryScore: 1, clawSharpness: 1, tailLength: 2 },
    funFacts: ['Have rectangular pupils for 340-degree vision', 'Among the first animals domesticated (10,000 years ago)', 'Can climb nearly vertical surfaces and trees', 'Have accents — their bleats vary by region'],
    wikiUrl: 'https://en.wikipedia.org/wiki/Goat'
  },
  {
    name: 'Gopher', scientificName: 'Geomyidae spp.', order: 'Rodentia',
    dietCategory: 'Herbivore', habitat: 'Grassland', socialStructure: 'Solitary', activityPattern: 'Variable',
    traits: { teethSharpness: 3, eyePosition: 3, bodySize: 1, skullRobustness: 4, snoutLength: 3, carnivoryScore: 1, clawSharpness: 5, tailLength: 2 },
    funFacts: ['Can turn around in their tunnels using fur-lined cheek pouches', 'Create extensive tunnel systems up to 200m long', 'Their teeth grow up to 36 cm per year', 'Important for soil aeration and nutrient cycling'],
    wikiUrl: 'https://en.wikipedia.org/wiki/Gopher'
  },
  {
    name: 'Gorilla', scientificName: 'Gorilla gorilla', order: 'Primates',
    dietCategory: 'Herbivore', habitat: 'Forest', socialStructure: 'Group', activityPattern: 'Diurnal',
    traits: { teethSharpness: 4, eyePosition: 9, bodySize: 7, skullRobustness: 9, snoutLength: 5, carnivoryScore: 2, clawSharpness: 3, tailLength: 1 },
    funFacts: ['Largest living primate weighing up to 220 kg', 'Share 98.3% of DNA with humans', 'Males are called silverbacks due to grey back hair', 'Build new sleeping nests every single night'],
    wikiUrl: 'https://en.wikipedia.org/wiki/Gorilla'
  },
  {
    name: 'Groundhog', scientificName: 'Marmota monax', order: 'Rodentia',
    dietCategory: 'Herbivore', habitat: 'Grassland', socialStructure: 'Solitary', activityPattern: 'Diurnal',
    traits: { teethSharpness: 3, eyePosition: 3, bodySize: 3, skullRobustness: 4, snoutLength: 4, carnivoryScore: 1, clawSharpness: 4, tailLength: 3 },
    funFacts: ['Also known as woodchucks or whistle-pigs', 'True hibernators — body temp drops to 3°C', 'Can move over 35 cubic feet of dirt digging a burrow', 'Groundhog Day tradition dates back to 1887'],
    wikiUrl: 'https://en.wikipedia.org/wiki/Groundhog'
  },
  {
    name: 'Guinea Pig', scientificName: 'Cavia porcellus', order: 'Rodentia',
    dietCategory: 'Herbivore', habitat: 'Grassland', socialStructure: 'Group', activityPattern: 'Crepuscular',
    traits: { teethSharpness: 2, eyePosition: 3, bodySize: 1, skullRobustness: 2, snoutLength: 3, carnivoryScore: 1, clawSharpness: 2, tailLength: 1 },
    funFacts: ['Domesticated around 5000 BC in the Andes', 'Cannot produce Vitamin C, like humans', '"Popcorning" is their excited jumping behavior', 'Sleep with eyes open and only nap for short periods'],
    wikiUrl: 'https://en.wikipedia.org/wiki/Guinea_pig'
  },
  {
    name: 'Hare', scientificName: 'Lepus europaeus', order: 'Lagomorpha',
    dietCategory: 'Herbivore', habitat: 'Grassland', socialStructure: 'Solitary', activityPattern: 'Nocturnal',
    traits: { teethSharpness: 2, eyePosition: 2, bodySize: 2, skullRobustness: 2, snoutLength: 4, carnivoryScore: 1, clawSharpness: 2, tailLength: 2 },
    funFacts: ['Born fully furred with eyes open (precocial)', 'Can run at speeds up to 72 km/h', 'Have 360-degree vision without turning their head', 'Box each other during mating season (March madness)'],
    wikiUrl: 'https://en.wikipedia.org/wiki/Hare'
  },
  {
    name: 'Hedgehog', scientificName: 'Erinaceus europaeus', order: 'Eulipotyphla',
    dietCategory: 'Insectivore', habitat: 'Generalist', socialStructure: 'Solitary', activityPattern: 'Nocturnal',
    traits: { teethSharpness: 4, eyePosition: 4, bodySize: 1, skullRobustness: 3, snoutLength: 5, carnivoryScore: 4, clawSharpness: 3, tailLength: 1 },
    funFacts: ['Have approximately 5,000 to 7,000 spines', 'Immune to many snake venoms', 'Perform "self-anointing" — chewing toxic things and spreading saliva on spines', 'Can run over 2 meters per second'],
    wikiUrl: 'https://en.wikipedia.org/wiki/Hedgehog'
  },
  {
    name: 'Hippo', scientificName: 'Hippopotamus amphibius', order: 'Artiodactyla',
    dietCategory: 'Herbivore', habitat: 'Aquatic/Generalist', socialStructure: 'Group', activityPattern: 'Nocturnal',
    traits: { teethSharpness: 4, eyePosition: 4, bodySize: 9, skullRobustness: 10, snoutLength: 5, carnivoryScore: 1, clawSharpness: 2, tailLength: 2 },
    funFacts: ['Third-largest land animal weighing up to 4,500 kg', 'Secrete red "blood sweat" that acts as sunscreen', 'Can open their jaws nearly 180 degrees', 'Kill more people in Africa than any other large animal'],
    wikiUrl: 'https://en.wikipedia.org/wiki/Hippopotamus'
  },
  {
    name: 'Horse', scientificName: 'Equus caballus', order: 'Perissodactyla',
    dietCategory: 'Herbivore', habitat: 'Grassland', socialStructure: 'Herd', activityPattern: 'Diurnal',
    traits: { teethSharpness: 1, eyePosition: 2, bodySize: 7, skullRobustness: 6, snoutLength: 9, carnivoryScore: 1, clawSharpness: 1, tailLength: 7 },
    funFacts: ['Can sleep both standing up and lying down', 'Have the largest eyes of any land mammal', 'Domesticated around 4000 BC on the Eurasian steppe', 'Can run within hours of being born'],
    wikiUrl: 'https://en.wikipedia.org/wiki/Horse'
  },
  {
    name: 'Hyena', scientificName: 'Crocuta crocuta', order: 'Carnivora',
    dietCategory: 'Carnivore', habitat: 'Savanna', socialStructure: 'Group', activityPattern: 'Nocturnal',
    traits: { teethSharpness: 9, eyePosition: 7, bodySize: 5, skullRobustness: 9, snoutLength: 5, carnivoryScore: 9, clawSharpness: 4, tailLength: 4 },
    funFacts: ['Have the strongest bite force relative to size of any mammal', 'Females are larger and dominant over males', 'Their "laugh" communicates social status', 'Can digest bones, hooves, and teeth'],
    wikiUrl: 'https://en.wikipedia.org/wiki/Spotted_hyena'
  },
  {
    name: 'Jackal', scientificName: 'Canis aureus', order: 'Carnivora',
    dietCategory: 'Omnivore', habitat: 'Savanna', socialStructure: 'Pair', activityPattern: 'Crepuscular',
    traits: { teethSharpness: 7, eyePosition: 7, bodySize: 3, skullRobustness: 4, snoutLength: 6, carnivoryScore: 7, clawSharpness: 3, tailLength: 5 },
    funFacts: ['Mate for life and share parenting equally', 'Extremely adaptable to different environments', 'Can run at sustained speeds of 16 km/h for long distances', 'Often follow larger predators to scavenge leftovers'],
    wikiUrl: 'https://en.wikipedia.org/wiki/Golden_jackal'
  },
  {
    name: 'Jaguar', scientificName: 'Panthera onca', order: 'Carnivora',
    dietCategory: 'Carnivore', habitat: 'Forest', socialStructure: 'Solitary', activityPattern: 'Crepuscular',
    traits: { teethSharpness: 10, eyePosition: 9, bodySize: 6, skullRobustness: 9, snoutLength: 4, carnivoryScore: 10, clawSharpness: 9, tailLength: 5 },
    funFacts: ['Strongest bite force of any big cat — crushes turtle shells', 'Only big cat in the Americas', 'Excellent swimmers that hunt caimans and anacondas', 'Name comes from indigenous word "yaguar" meaning "he who kills with one leap"'],
    wikiUrl: 'https://en.wikipedia.org/wiki/Jaguar'
  },
  {
    name: 'Kangaroo', scientificName: 'Macropus rufus', order: 'Diprotodontia',
    dietCategory: 'Herbivore', habitat: 'Grassland', socialStructure: 'Group', activityPattern: 'Crepuscular',
    traits: { teethSharpness: 2, eyePosition: 3, bodySize: 6, skullRobustness: 5, snoutLength: 6, carnivoryScore: 1, clawSharpness: 4, tailLength: 8 },
    funFacts: ['Can jump up to 9 meters in a single bound', 'Cannot walk backwards', 'Baby joeys are only 2 cm at birth', 'Use their powerful tail as a "fifth leg" for balance'],
    wikiUrl: 'https://en.wikipedia.org/wiki/Kangaroo'
  },
  {
    name: 'Koala', scientificName: 'Phascolarctos cinereus', order: 'Diprotodontia',
    dietCategory: 'Herbivore', habitat: 'Forest', socialStructure: 'Solitary', activityPattern: 'Nocturnal',
    traits: { teethSharpness: 2, eyePosition: 6, bodySize: 3, skullRobustness: 4, snoutLength: 4, carnivoryScore: 1, clawSharpness: 5, tailLength: 1 },
    funFacts: ['Sleep up to 22 hours a day to conserve energy', 'Fingerprints are nearly identical to human fingerprints', 'Eat only eucalyptus leaves which are toxic to most animals', 'Born the size of a jellybean and develop in the pouch'],
    wikiUrl: 'https://en.wikipedia.org/wiki/Koala'
  },
  {
    name: 'Lemur', scientificName: 'Lemur catta', order: 'Primates',
    dietCategory: 'Omnivore', habitat: 'Forest', socialStructure: 'Group', activityPattern: 'Diurnal',
    traits: { teethSharpness: 3, eyePosition: 7, bodySize: 2, skullRobustness: 3, snoutLength: 5, carnivoryScore: 3, clawSharpness: 4, tailLength: 9 },
    funFacts: ['Found only on the island of Madagascar', 'Ring-tailed lemurs sunbathe in a yoga-like position', 'Use scent glands on wrists for "stink fights"', 'Over 100 species exist, many critically endangered'],
    wikiUrl: 'https://en.wikipedia.org/wiki/Lemur'
  },
  {
    name: 'Leopard', scientificName: 'Panthera pardus', order: 'Carnivora',
    dietCategory: 'Carnivore', habitat: 'Forest', socialStructure: 'Solitary', activityPattern: 'Nocturnal',
    traits: { teethSharpness: 9, eyePosition: 9, bodySize: 5, skullRobustness: 7, snoutLength: 4, carnivoryScore: 10, clawSharpness: 10, tailLength: 7 },
    funFacts: ['Can carry prey twice their weight up a tree', 'Most adaptable of all big cats to different habitats', 'Their rosettes are unique like fingerprints', 'Black leopards (panthers) still have spots visible in certain light'],
    wikiUrl: 'https://en.wikipedia.org/wiki/Leopard'
  },
  {
    name: 'Lion', scientificName: 'Panthera leo', order: 'Carnivora',
    dietCategory: 'Carnivore', habitat: 'Savanna', socialStructure: 'Group', activityPattern: 'Nocturnal',
    traits: { teethSharpness: 9, eyePosition: 9, bodySize: 7, skullRobustness: 8, snoutLength: 4, carnivoryScore: 10, clawSharpness: 9, tailLength: 6 },
    funFacts: ['Only cat species that lives in social groups (prides)', 'A lion\'s roar can be heard from 8 km away', 'Females do 90% of the hunting', 'Males sleep up to 20 hours a day'],
    wikiUrl: 'https://en.wikipedia.org/wiki/Lion'
  },
  {
    name: 'Llama', scientificName: 'Lama glama', order: 'Artiodactyla',
    dietCategory: 'Herbivore', habitat: 'Grassland', socialStructure: 'Herd', activityPattern: 'Diurnal',
    traits: { teethSharpness: 1, eyePosition: 2, bodySize: 6, skullRobustness: 5, snoutLength: 6, carnivoryScore: 1, clawSharpness: 1, tailLength: 3 },
    funFacts: ['Domesticated from guanacos 4,000-5,000 years ago', 'Used as pack animals carrying up to 30% of their body weight', 'Communicate using ear positions and humming', 'Guard animals for sheep and goat herds against predators'],
    wikiUrl: 'https://en.wikipedia.org/wiki/Llama'
  },
  {
    name: 'Lynx', scientificName: 'Lynx lynx', order: 'Carnivora',
    dietCategory: 'Carnivore', habitat: 'Forest', socialStructure: 'Solitary', activityPattern: 'Crepuscular',
    traits: { teethSharpness: 8, eyePosition: 9, bodySize: 4, skullRobustness: 5, snoutLength: 3, carnivoryScore: 9, clawSharpness: 9, tailLength: 2 },
    funFacts: ['Their ear tufts help funnel sound to their ears', 'Have massive paws that act as natural snowshoes', 'Can spot a mouse at 75 meters away', 'Their name comes from Greek meaning "light/brightness" — referring to their reflective eyes'],
    wikiUrl: 'https://en.wikipedia.org/wiki/Lynx'
  },
  {
    name: 'Marmot', scientificName: 'Marmota spp.', order: 'Rodentia',
    dietCategory: 'Herbivore', habitat: 'Grassland', socialStructure: 'Group', activityPattern: 'Diurnal',
    traits: { teethSharpness: 3, eyePosition: 3, bodySize: 3, skullRobustness: 4, snoutLength: 3, carnivoryScore: 1, clawSharpness: 4, tailLength: 3 },
    funFacts: ['Hibernate for up to 8 months of the year', 'Use sharp whistles to warn colony members of predators', 'Can lose up to half their body weight during hibernation', 'Related to squirrels and groundhogs'],
    wikiUrl: 'https://en.wikipedia.org/wiki/Marmot'
  },
  {
    name: 'Meerkat', scientificName: 'Suricata suricatta', order: 'Carnivora',
    dietCategory: 'Insectivore', habitat: 'Desert', socialStructure: 'Group', activityPattern: 'Diurnal',
    traits: { teethSharpness: 5, eyePosition: 7, bodySize: 1, skullRobustness: 3, snoutLength: 4, carnivoryScore: 5, clawSharpness: 4, tailLength: 4 },
    funFacts: ['Take turns standing guard while others forage', 'Have dark patches around eyes that act like sunglasses', 'Immune to certain venoms including scorpion stings', 'Teach their young to eat by giving them dead scorpions first'],
    wikiUrl: 'https://en.wikipedia.org/wiki/Meerkat'
  },
  {
    name: 'Mink', scientificName: 'Neogale vison', order: 'Carnivora',
    dietCategory: 'Carnivore', habitat: 'Aquatic/Generalist', socialStructure: 'Solitary', activityPattern: 'Nocturnal',
    traits: { teethSharpness: 7, eyePosition: 7, bodySize: 2, skullRobustness: 3, snoutLength: 4, carnivoryScore: 8, clawSharpness: 5, tailLength: 5 },
    funFacts: ['Semi-aquatic and excellent swimmers', 'Can dive to depths of 5-6 meters', 'Their fur is among the most valuable in the world', 'Can spray a foul-smelling secretion like a skunk'],
    wikiUrl: 'https://en.wikipedia.org/wiki/American_mink'
  },
  {
    name: 'Mole', scientificName: 'Talpa europaea', order: 'Eulipotyphla',
    dietCategory: 'Insectivore', habitat: 'Generalist', socialStructure: 'Solitary', activityPattern: 'Variable',
    traits: { teethSharpness: 4, eyePosition: 2, bodySize: 1, skullRobustness: 4, snoutLength: 5, carnivoryScore: 5, clawSharpness: 7, tailLength: 2 },
    funFacts: ['Can dig 18 meters of tunnel in one hour', 'Nearly blind but have incredible touch sensitivity', 'Eat their body weight in earthworms daily', 'Create "pantries" by biting worm heads off and storing them alive'],
    wikiUrl: 'https://en.wikipedia.org/wiki/Mole_(animal)'
  },
  {
    name: 'Monkey', scientificName: 'Cercopithecidae spp.', order: 'Primates',
    dietCategory: 'Omnivore', habitat: 'Forest', socialStructure: 'Group', activityPattern: 'Diurnal',
    traits: { teethSharpness: 4, eyePosition: 8, bodySize: 3, skullRobustness: 4, snoutLength: 5, carnivoryScore: 3, clawSharpness: 4, tailLength: 9 },
    funFacts: ['New World monkeys have prehensile tails; Old World monkeys do not', 'Japanese macaques bathe in hot springs during winter', 'Capuchins have been observed using stone tools', 'Can recognize themselves in mirrors (some species)'],
    wikiUrl: 'https://en.wikipedia.org/wiki/Monkey'
  },
  {
    name: 'Moose', scientificName: 'Alces alces', order: 'Artiodactyla',
    dietCategory: 'Herbivore', habitat: 'Forest', socialStructure: 'Solitary', activityPattern: 'Crepuscular',
    traits: { teethSharpness: 1, eyePosition: 2, bodySize: 9, skullRobustness: 7, snoutLength: 7, carnivoryScore: 1, clawSharpness: 1, tailLength: 1 },
    funFacts: ['Largest member of the deer family', 'Antlers can span 1.8 meters and weigh 35 kg', 'Excellent swimmers — can dive 6 meters underwater', 'Their bell (dewlap) may help with scent communication'],
    wikiUrl: 'https://en.wikipedia.org/wiki/Moose'
  },
  {
    name: 'Mouse', scientificName: 'Mus musculus', order: 'Rodentia',
    dietCategory: 'Omnivore', habitat: 'Generalist', socialStructure: 'Group', activityPattern: 'Nocturnal',
    traits: { teethSharpness: 3, eyePosition: 3, bodySize: 1, skullRobustness: 1, snoutLength: 3, carnivoryScore: 2, clawSharpness: 2, tailLength: 6 },
    funFacts: ['Heart beats 632 times per minute', 'Can squeeze through gaps as small as 6mm', 'Produce up to 10 litters per year', 'Most commonly used mammal in scientific research'],
    wikiUrl: 'https://en.wikipedia.org/wiki/House_mouse'
  },
  {
    name: 'Mongoose', scientificName: 'Herpestes ichneumon', order: 'Carnivora',
    dietCategory: 'Carnivore', habitat: 'Savanna', socialStructure: 'Group', activityPattern: 'Diurnal',
    traits: { teethSharpness: 6, eyePosition: 6, bodySize: 2, skullRobustness: 4, snoutLength: 5, carnivoryScore: 7, clawSharpness: 5, tailLength: 6 },
    funFacts: ['Famous for fighting and killing venomous snakes', 'Have specialized acetylcholine receptors that resist snake venom', 'Live in complex social groups with sentinel behavior', 'Can run at 32 km/h in short bursts'],
    wikiUrl: 'https://en.wikipedia.org/wiki/Mongoose'
  },
  {
    name: 'Numbat', scientificName: 'Myrmecobius fasciatus', order: 'Dasyuromorphia',
    dietCategory: 'Insectivore', habitat: 'Forest', socialStructure: 'Solitary', activityPattern: 'Diurnal',
    traits: { teethSharpness: 2, eyePosition: 4, bodySize: 1, skullRobustness: 2, snoutLength: 6, carnivoryScore: 4, clawSharpness: 4, tailLength: 5 },
    funFacts: ['Eats up to 20,000 termites per day', 'Only marsupial that is fully active during the day', 'Has up to 52 teeth — more than any other land mammal', 'Emblem of Western Australia'],
    wikiUrl: 'https://en.wikipedia.org/wiki/Numbat'
  },
  {
    name: 'Okapi', scientificName: 'Okapia johnstoni', order: 'Artiodactyla',
    dietCategory: 'Herbivore', habitat: 'Forest', socialStructure: 'Solitary', activityPattern: 'Diurnal',
    traits: { teethSharpness: 1, eyePosition: 2, bodySize: 7, skullRobustness: 5, snoutLength: 7, carnivoryScore: 1, clawSharpness: 1, tailLength: 4 },
    funFacts: ['Closest living relative of the giraffe', 'Not discovered by Western science until 1901', 'Their tongue is long enough to wash their own ears', 'Striped legs help camouflage in dappled forest light'],
    wikiUrl: 'https://en.wikipedia.org/wiki/Okapi'
  },
  {
    name: 'Orangutan', scientificName: 'Pongo pygmaeus', order: 'Primates',
    dietCategory: 'Omnivore', habitat: 'Forest', socialStructure: 'Solitary', activityPattern: 'Diurnal',
    traits: { teethSharpness: 4, eyePosition: 9, bodySize: 6, skullRobustness: 7, snoutLength: 5, carnivoryScore: 2, clawSharpness: 4, tailLength: 1 },
    funFacts: ['Most intelligent of all great apes at tool use', 'Build elaborate sleeping platforms every night', 'Males develop large cheek flanges when dominant', 'Share 97% of their DNA with humans'],
    wikiUrl: 'https://en.wikipedia.org/wiki/Orangutan'
  },
  {
    name: 'Opossum', scientificName: 'Didelphis virginiana', order: 'Didelphimorphia',
    dietCategory: 'Omnivore', habitat: 'Forest', socialStructure: 'Solitary', activityPattern: 'Nocturnal',
    traits: { teethSharpness: 5, eyePosition: 4, bodySize: 2, skullRobustness: 3, snoutLength: 6, carnivoryScore: 4, clawSharpness: 4, tailLength: 8 },
    funFacts: ['Play dead (thanatosis) as a defense — including producing a death-like smell', 'North America\'s only marsupial', 'Immune to rabies due to low body temperature', 'Have 50 teeth — more than any other North American land mammal'],
    wikiUrl: 'https://en.wikipedia.org/wiki/Virginia_opossum'
  },
  {
    name: 'Otter', scientificName: 'Lutra lutra', order: 'Carnivora',
    dietCategory: 'Carnivore', habitat: 'Aquatic/Generalist', socialStructure: 'Group', activityPattern: 'Diurnal',
    traits: { teethSharpness: 7, eyePosition: 7, bodySize: 3, skullRobustness: 5, snoutLength: 4, carnivoryScore: 8, clawSharpness: 4, tailLength: 6 },
    funFacts: ['Use rocks as tools to crack open shellfish', 'Hold hands while sleeping to avoid drifting apart', 'Have the densest fur of any animal (1 million hairs per sq inch)', 'Can close their ears and nostrils when diving'],
    wikiUrl: 'https://en.wikipedia.org/wiki/Otter'
  },
  {
    name: 'Panda', scientificName: 'Ailuropoda melanoleuca', order: 'Carnivora',
    dietCategory: 'Herbivore', habitat: 'Forest', socialStructure: 'Solitary', activityPattern: 'Variable',
    traits: { teethSharpness: 5, eyePosition: 7, bodySize: 6, skullRobustness: 8, snoutLength: 4, carnivoryScore: 2, clawSharpness: 5, tailLength: 2 },
    funFacts: ['Eat up to 38 kg of bamboo per day', 'Have a "pseudo-thumb" (enlarged wrist bone) for gripping bamboo', 'Technically carnivores but 99% of diet is bamboo', 'Newborns are 1/900th the size of their mother'],
    wikiUrl: 'https://en.wikipedia.org/wiki/Giant_panda'
  },
  {
    name: 'Pangolin', scientificName: 'Manis spp.', order: 'Pholidota',
    dietCategory: 'Insectivore', habitat: 'Forest', socialStructure: 'Solitary', activityPattern: 'Nocturnal',
    traits: { teethSharpness: 1, eyePosition: 3, bodySize: 3, skullRobustness: 4, snoutLength: 7, carnivoryScore: 3, clawSharpness: 7, tailLength: 7 },
    funFacts: ['Only mammal covered in keratin scales', 'Most trafficked animal in the world', 'Tongue can be longer than its body', 'Curls into an impenetrable ball when threatened'],
    wikiUrl: 'https://en.wikipedia.org/wiki/Pangolin'
  },
  {
    name: 'Pig', scientificName: 'Sus domesticus', order: 'Artiodactyla',
    dietCategory: 'Omnivore', habitat: 'Generalist', socialStructure: 'Group', activityPattern: 'Diurnal',
    traits: { teethSharpness: 4, eyePosition: 4, bodySize: 5, skullRobustness: 6, snoutLength: 7, carnivoryScore: 4, clawSharpness: 2, tailLength: 2 },
    funFacts: ['Considered smarter than dogs and 3-year-old children', 'Cannot sweat — roll in mud to cool down', 'Have an excellent sense of smell used for truffle hunting', 'Can run at speeds of 17 km/h'],
    wikiUrl: 'https://en.wikipedia.org/wiki/Pig'
  },
  {
    name: 'Pika', scientificName: 'Ochotona spp.', order: 'Lagomorpha',
    dietCategory: 'Herbivore', habitat: 'Grassland', socialStructure: 'Solitary', activityPattern: 'Diurnal',
    traits: { teethSharpness: 2, eyePosition: 3, bodySize: 1, skullRobustness: 2, snoutLength: 2, carnivoryScore: 1, clawSharpness: 2, tailLength: 1 },
    funFacts: ['Closely related to rabbits despite looking like hamsters', 'Create "haypiles" to store food for winter', 'Can die if temperatures exceed 25.5°C', 'Inspired the Pokémon character Pikachu'],
    wikiUrl: 'https://en.wikipedia.org/wiki/Pika'
  },
  {
    name: 'Porcupine', scientificName: 'Erethizon dorsatum', order: 'Rodentia',
    dietCategory: 'Herbivore', habitat: 'Forest', socialStructure: 'Solitary', activityPattern: 'Nocturnal',
    traits: { teethSharpness: 3, eyePosition: 3, bodySize: 3, skullRobustness: 4, snoutLength: 4, carnivoryScore: 1, clawSharpness: 4, tailLength: 4 },
    funFacts: ['Have about 30,000 quills on their body', 'Quills have barbed tips that expand once embedded', 'Excellent tree climbers using their prehensile tail', 'Cannot shoot their quills — they detach on contact'],
    wikiUrl: 'https://en.wikipedia.org/wiki/Porcupine'
  },
  {
    name: 'Prairie Dog', scientificName: 'Cynomys ludovicianus', order: 'Rodentia',
    dietCategory: 'Herbivore', habitat: 'Grassland', socialStructure: 'Group', activityPattern: 'Diurnal',
    traits: { teethSharpness: 3, eyePosition: 3, bodySize: 2, skullRobustness: 3, snoutLength: 3, carnivoryScore: 1, clawSharpness: 3, tailLength: 2 },
    funFacts: ['Have one of the most complex animal languages discovered', 'Their "towns" can cover hundreds of hectares', 'Greet each other with "kisses" (touching teeth)', 'Important keystone species for grassland ecosystems'],
    wikiUrl: 'https://en.wikipedia.org/wiki/Prairie_dog'
  },
  {
    name: 'Rabbit', scientificName: 'Oryctolagus cuniculus', order: 'Lagomorpha',
    dietCategory: 'Herbivore', habitat: 'Grassland', socialStructure: 'Group', activityPattern: 'Crepuscular',
    traits: { teethSharpness: 2, eyePosition: 2, bodySize: 2, skullRobustness: 2, snoutLength: 3, carnivoryScore: 1, clawSharpness: 2, tailLength: 2 },
    funFacts: ['Teeth grow 12 cm per year and are worn down by eating', 'Can see nearly 360 degrees around them', 'Eat their own droppings to re-digest nutrients', 'Can reach speeds of 56 km/h in short bursts'],
    wikiUrl: 'https://en.wikipedia.org/wiki/Rabbit'
  },
  {
    name: 'Raccoon', scientificName: 'Procyon lotor', order: 'Carnivora',
    dietCategory: 'Omnivore', habitat: 'Generalist', socialStructure: 'Solitary', activityPattern: 'Nocturnal',
    traits: { teethSharpness: 5, eyePosition: 6, bodySize: 3, skullRobustness: 4, snoutLength: 5, carnivoryScore: 4, clawSharpness: 5, tailLength: 6 },
    funFacts: ['Their name means "one who scratches with hands" in Algonquian', 'Can remember solutions to tasks for up to 3 years', 'Have hypersensitive front paws — "see" by touch underwater', 'Wash their food before eating (hence "lotor" = washer)'],
    wikiUrl: 'https://en.wikipedia.org/wiki/Raccoon'
  },
  {
    name: 'Rat', scientificName: 'Rattus norvegicus', order: 'Rodentia',
    dietCategory: 'Omnivore', habitat: 'Generalist', socialStructure: 'Group', activityPattern: 'Nocturnal',
    traits: { teethSharpness: 4, eyePosition: 3, bodySize: 1, skullRobustness: 2, snoutLength: 4, carnivoryScore: 3, clawSharpness: 3, tailLength: 7 },
    funFacts: ['Can tread water for 3 days straight', 'Teeth are harder than iron or copper', 'Can squeeze through a hole the size of a quarter', 'Laugh when tickled (ultrasonic giggles)'],
    wikiUrl: 'https://en.wikipedia.org/wiki/Brown_rat'
  },
  {
    name: 'Rhino', scientificName: 'Rhinocerotidae spp.', order: 'Perissodactyla',
    dietCategory: 'Herbivore', habitat: 'Savanna', socialStructure: 'Solitary', activityPattern: 'Variable',
    traits: { teethSharpness: 1, eyePosition: 2, bodySize: 9, skullRobustness: 10, snoutLength: 5, carnivoryScore: 1, clawSharpness: 1, tailLength: 3 },
    funFacts: ['Their horns are made of keratin — the same protein as human hair', 'Despite poor eyesight, have excellent hearing and smell', 'Can charge at speeds up to 55 km/h', 'White rhinos are not white — "white" comes from "wijd" meaning wide (lip)'],
    wikiUrl: 'https://en.wikipedia.org/wiki/Rhinoceros'
  },
  {
    name: 'Sheep', scientificName: 'Ovis aries', order: 'Artiodactyla',
    dietCategory: 'Herbivore', habitat: 'Grassland', socialStructure: 'Herd', activityPattern: 'Diurnal',
    traits: { teethSharpness: 1, eyePosition: 1, bodySize: 5, skullRobustness: 5, snoutLength: 5, carnivoryScore: 1, clawSharpness: 1, tailLength: 3 },
    funFacts: ['Have rectangular pupils for 300-degree field of vision', 'Can recognize up to 50 other sheep faces for years', 'One of the first animals domesticated (8,000-10,000 BC)', 'Their wool never stops growing if not shorn'],
    wikiUrl: 'https://en.wikipedia.org/wiki/Sheep'
  },
  {
    name: 'Shrew', scientificName: 'Sorex araneus', order: 'Eulipotyphla',
    dietCategory: 'Insectivore', habitat: 'Forest', socialStructure: 'Solitary', activityPattern: 'Variable',
    traits: { teethSharpness: 5, eyePosition: 3, bodySize: 1, skullRobustness: 1, snoutLength: 6, carnivoryScore: 6, clawSharpness: 3, tailLength: 4 },
    funFacts: ['Must eat every 2-3 hours or die of starvation', 'Heart beats up to 1,200 times per minute', 'Some species are venomous — rare among mammals', 'Among the smallest mammals — some weigh only 2 grams'],
    wikiUrl: 'https://en.wikipedia.org/wiki/Shrew'
  },
  {
    name: 'Skunk', scientificName: 'Mephitis mephitis', order: 'Carnivora',
    dietCategory: 'Omnivore', habitat: 'Generalist', socialStructure: 'Solitary', activityPattern: 'Nocturnal',
    traits: { teethSharpness: 4, eyePosition: 5, bodySize: 2, skullRobustness: 3, snoutLength: 5, carnivoryScore: 4, clawSharpness: 4, tailLength: 5 },
    funFacts: ['Can spray their musk accurately up to 3 meters', 'Their spray can be detected by humans 1.6 km downwind', 'Warning coloration (aposematism) deters most predators', 'Do a "handstand" dance before spraying as a warning'],
    wikiUrl: 'https://en.wikipedia.org/wiki/Skunk'
  },
  {
    name: 'Sloth', scientificName: 'Bradypus variegatus', order: 'Pilosa',
    dietCategory: 'Herbivore', habitat: 'Forest', socialStructure: 'Solitary', activityPattern: 'Variable',
    traits: { teethSharpness: 2, eyePosition: 6, bodySize: 3, skullRobustness: 3, snoutLength: 3, carnivoryScore: 1, clawSharpness: 7, tailLength: 2 },
    funFacts: ['Move so slowly that algae grows on their fur', 'Can rotate their heads nearly 270 degrees', 'Only descend from trees once a week to defecate', 'Can hold their breath longer than dolphins — up to 40 minutes'],
    wikiUrl: 'https://en.wikipedia.org/wiki/Sloth'
  },
  {
    name: 'Sloth Bear', scientificName: 'Melursus ursinus', order: 'Carnivora',
    dietCategory: 'Insectivore', habitat: 'Forest', socialStructure: 'Solitary', activityPattern: 'Nocturnal',
    traits: { teethSharpness: 5, eyePosition: 7, bodySize: 6, skullRobustness: 7, snoutLength: 7, carnivoryScore: 4, clawSharpness: 7, tailLength: 1 },
    funFacts: ['Can suck up termites through their lips like a vacuum', 'Missing front upper teeth to create a gap for suction feeding', 'The inspiration for Baloo in The Jungle Book', 'Mothers carry cubs on their backs for up to 9 months'],
    wikiUrl: 'https://en.wikipedia.org/wiki/Sloth_bear'
  },
  {
    name: 'Squirrel', scientificName: 'Sciurus vulgaris', order: 'Rodentia',
    dietCategory: 'Herbivore', habitat: 'Forest', socialStructure: 'Solitary', activityPattern: 'Diurnal',
    traits: { teethSharpness: 3, eyePosition: 4, bodySize: 1, skullRobustness: 2, snoutLength: 3, carnivoryScore: 2, clawSharpness: 4, tailLength: 8 },
    funFacts: ['Plant thousands of trees accidentally by forgetting buried nuts', 'Can fall from 30 meters without injury using their tail as a parachute', 'Front teeth grow 15 cm per year', 'Can find buried food under 30 cm of snow by smell alone'],
    wikiUrl: 'https://en.wikipedia.org/wiki/Squirrel'
  },
  {
    name: 'Tapir', scientificName: 'Tapirus terrestris', order: 'Perissodactyla',
    dietCategory: 'Herbivore', habitat: 'Forest', socialStructure: 'Solitary', activityPattern: 'Nocturnal',
    traits: { teethSharpness: 2, eyePosition: 3, bodySize: 7, skullRobustness: 6, snoutLength: 7, carnivoryScore: 1, clawSharpness: 1, tailLength: 1 },
    funFacts: ['Have a prehensile proboscis (short trunk) for grasping food', 'Virtually unchanged for 20 million years — "living fossils"', 'Baby tapirs have spotted and striped coats for camouflage', 'Excellent swimmers and often flee into water to escape predators'],
    wikiUrl: 'https://en.wikipedia.org/wiki/Tapir'
  },
  {
    name: 'Tasmanian Devil', scientificName: 'Sarcophilus harrisii', order: 'Dasyuromorphia',
    dietCategory: 'Carnivore', habitat: 'Forest', socialStructure: 'Solitary', activityPattern: 'Nocturnal',
    traits: { teethSharpness: 9, eyePosition: 6, bodySize: 3, skullRobustness: 8, snoutLength: 4, carnivoryScore: 9, clawSharpness: 5, tailLength: 3 },
    funFacts: ['Strongest bite force per body mass of any living mammal', 'Named "devil" by early settlers due to their terrifying nocturnal screams', 'Can eat up to 40% of their body weight in one meal', 'Now found only in Tasmania after disappearing from mainland Australia'],
    wikiUrl: 'https://en.wikipedia.org/wiki/Tasmanian_devil'
  },
  {
    name: 'Tiger', scientificName: 'Panthera tigris', order: 'Carnivora',
    dietCategory: 'Carnivore', habitat: 'Forest', socialStructure: 'Solitary', activityPattern: 'Nocturnal',
    traits: { teethSharpness: 10, eyePosition: 9, bodySize: 8, skullRobustness: 9, snoutLength: 4, carnivoryScore: 10, clawSharpness: 10, tailLength: 6 },
    funFacts: ['Largest living cat species weighing up to 300 kg', 'No two tigers have the same stripe pattern', 'Stripes are also on their skin, not just fur', 'Can eat 40 kg of meat in one sitting'],
    wikiUrl: 'https://en.wikipedia.org/wiki/Tiger'
  },
  {
    name: 'Wallaby', scientificName: 'Macropus spp.', order: 'Diprotodontia',
    dietCategory: 'Herbivore', habitat: 'Forest', socialStructure: 'Group', activityPattern: 'Crepuscular',
    traits: { teethSharpness: 2, eyePosition: 3, bodySize: 4, skullRobustness: 4, snoutLength: 5, carnivoryScore: 1, clawSharpness: 3, tailLength: 7 },
    funFacts: ['Smaller relatives of kangaroos', 'Can jump up to 1.5 meters high and 5 meters long', 'Female can pause embryo development until conditions improve', 'Rock wallabies can climb near-vertical cliff faces'],
    wikiUrl: 'https://en.wikipedia.org/wiki/Wallaby'
  },
  {
    name: 'Warthog', scientificName: 'Phacochoerus africanus', order: 'Artiodactyla',
    dietCategory: 'Omnivore', habitat: 'Savanna', socialStructure: 'Group', activityPattern: 'Diurnal',
    traits: { teethSharpness: 4, eyePosition: 3, bodySize: 5, skullRobustness: 7, snoutLength: 6, carnivoryScore: 3, clawSharpness: 2, tailLength: 4 },
    funFacts: ['Run with their tail straight up like an antenna', 'Can run at speeds up to 48 km/h', 'Kneel on front legs to eat and forage', 'Their "warts" are protective pads for fighting'],
    wikiUrl: 'https://en.wikipedia.org/wiki/Warthog'
  },
  {
    name: 'Weasel', scientificName: 'Mustela nivalis', order: 'Carnivora',
    dietCategory: 'Carnivore', habitat: 'Generalist', socialStructure: 'Solitary', activityPattern: 'Variable',
    traits: { teethSharpness: 7, eyePosition: 7, bodySize: 1, skullRobustness: 3, snoutLength: 3, carnivoryScore: 9, clawSharpness: 5, tailLength: 3 },
    funFacts: ['Smallest carnivore in the world (least weasel)', 'Must eat 40-60% of body weight daily due to fast metabolism', 'Can take down prey 5-10 times their own size', 'Perform a "war dance" to confuse and mesmerize prey'],
    wikiUrl: 'https://en.wikipedia.org/wiki/Weasel'
  },
  {
    name: 'Wolf', scientificName: 'Canis lupus', order: 'Carnivora',
    dietCategory: 'Carnivore', habitat: 'Forest', socialStructure: 'Group', activityPattern: 'Crepuscular',
    traits: { teethSharpness: 8, eyePosition: 8, bodySize: 5, skullRobustness: 7, snoutLength: 7, carnivoryScore: 9, clawSharpness: 4, tailLength: 5 },
    funFacts: ['Can run 60 km/h in short bursts and travel 50 km per day', 'Their howl can be heard from 16 km away', 'Live in strict social hierarchies within their pack', 'Ancestor of all domestic dogs'],
    wikiUrl: 'https://en.wikipedia.org/wiki/Wolf'
  },
  {
    name: 'Wolverine', scientificName: 'Gulo gulo', order: 'Carnivora',
    dietCategory: 'Carnivore', habitat: 'Forest', socialStructure: 'Solitary', activityPattern: 'Variable',
    traits: { teethSharpness: 8, eyePosition: 7, bodySize: 4, skullRobustness: 8, snoutLength: 4, carnivoryScore: 8, clawSharpness: 7, tailLength: 3 },
    funFacts: ['Pound-for-pound one of the strongest mammals', 'Can crush bones and frozen meat with their jaws', 'Known to drive bears away from kills', 'Travel up to 24 km per day through deep snow'],
    wikiUrl: 'https://en.wikipedia.org/wiki/Wolverine'
  },
  {
    name: 'Wombat', scientificName: 'Vombatus ursinus', order: 'Diprotodontia',
    dietCategory: 'Herbivore', habitat: 'Forest', socialStructure: 'Solitary', activityPattern: 'Nocturnal',
    traits: { teethSharpness: 3, eyePosition: 4, bodySize: 4, skullRobustness: 7, snoutLength: 3, carnivoryScore: 1, clawSharpness: 5, tailLength: 1 },
    funFacts: ['Produce cube-shaped droppings to mark territory', 'Have backwards-facing pouches to prevent dirt entering', 'Can run at 40 km/h over short distances', 'Their rear end is mostly cartilage — used to block burrow entrances'],
    wikiUrl: 'https://en.wikipedia.org/wiki/Wombat'
  },
  {
    name: 'Yak', scientificName: 'Bos grunniens', order: 'Artiodactyla',
    dietCategory: 'Herbivore', habitat: 'Grassland', socialStructure: 'Herd', activityPattern: 'Diurnal',
    traits: { teethSharpness: 1, eyePosition: 2, bodySize: 8, skullRobustness: 8, snoutLength: 5, carnivoryScore: 1, clawSharpness: 1, tailLength: 5 },
    funFacts: ['Can survive at altitudes over 6,000 meters', 'Have three times the lung capacity of cattle', 'Their milk is pink due to high fat content', 'Grunt instead of mooing — hence "grunniens" meaning "grunting"'],
    wikiUrl: 'https://en.wikipedia.org/wiki/Yak'
  },
  {
    name: 'Zebra', scientificName: 'Equus quagga', order: 'Perissodactyla',
    dietCategory: 'Herbivore', habitat: 'Savanna', socialStructure: 'Herd', activityPattern: 'Diurnal',
    traits: { teethSharpness: 1, eyePosition: 2, bodySize: 6, skullRobustness: 6, snoutLength: 8, carnivoryScore: 1, clawSharpness: 1, tailLength: 5 },
    funFacts: ['Each zebra has a unique stripe pattern', 'Stripes may help repel biting flies', 'Can run at speeds up to 65 km/h', 'Sleep standing up to escape predators quickly'],
    wikiUrl: 'https://en.wikipedia.org/wiki/Zebra'
  },
];

// Utility: get animal by slug
export function getAnimalBySlug(slug: string): Animal | undefined {
  return ANIMALS_DATABASE.find(a =>
    a.name.toLowerCase().replace(/\s+/g, '-') === slug
  );
}

// Utility: create a slug from animal name
export function getAnimalSlug(name: string): string {
  return name.toLowerCase().replace(/\s+/g, '-');
}
