import type { Language } from '../types';

export const MOLAR_GUIDE_DATA: Record<string, {
  name: string;
  description: Record<Language, string>;
  dietLink: Record<Language, string>;
  svgIcon: string;
}> = {
  Carnassial: {
    name: 'Carnassial',
    description: {
      en: 'Specialized shearing teeth found in many carnivores (like cats and dogs). They work like scissors to slice through meat and sinew.',
      si: 'බොහෝ මාංශ භක්ෂකයින් (බළලුන් සහ බල්ලන් වැනි) තුළ දක්නට ලැබෙන විශේෂිත කැපුම් දත්. මස් සහ කණ්ඩරාවන් කැපීම සඳහා කතුරක් මෙන් ක්‍රියා කරයි.',
      ta: 'பல ஊனுண்ணிகளில் (பூனைகள் மற்றும் நாய்கள்) காணப்படும் சிறப்பம்சமான வெட்டும் பற்கள். இவை இறைச்சியைக் கத்தரிக்கோல் போல வெட்டுகின்றன.'
    },
    dietLink: {
      en: 'Indicates a diet heavily reliant on meat (hypercarnivore or mesocarnivore). Not suitable for grinding plant matter.',
      si: 'මස් මත දැඩි ලෙස රඳා පවතින ආහාර රටාවක් පෙන්නුම් කරයි. ශාක කොටස් ඇඹරීමට සුදුසු නොවේ.',
      ta: 'இறைச்சியை அதிகம் சார்ந்திருக்கும் உணவைக் குறிக்கிறது. தாவரப் பொருட்களை அரைக்கப் பொருத்தமற்றது.'
    },
    svgIcon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L4 10l4 12h8l4-12L12 2z"/><path d="M12 2v20"/></svg>'
  },
  Lophodont: {
    name: 'Lophodont',
    description: {
      en: 'Features elongated ridges (lophs) of hard enamel between dentin pools. Found in herbivores like elephants, horses, and rhinos.',
      si: 'අලියන්, අශ්වයින් සහ රයිනෝසිරස් වැනි ශාක භක්ෂකයින් තුළ දක්නට ලැබේ. තද එනමල් වලින් යුත් දිගටි වැටි සහිතය.',
      ta: 'யானைகள், குதிரைகள் மற்றும் காண்டாமிருகங்கள் போன்ற தாவர உண்ணிகளில் காணப்படுகிறது. கடினமான எனாமல் வரம்புகளைக் கொண்டுள்ளது.'
    },
    dietLink: {
      en: 'Perfect for grinding tough, abrasive plant materials like grasses over long periods.',
      si: 'තණකොළ වැනි රළු ශාක ද්‍රව්‍ය දිගු වේලාවක් ඇඹරීම සඳහා ඉතා සුදුසුය.',
      ta: 'புற்கள் போன்ற கடினமான தாவரப் பொருட்களை நீண்ட நேரம் அரைக்க ஏற்றது.'
    },
    svgIcon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 6h16v12H4z"/><path d="M4 10h16M4 14h16"/></svg>'
  },
  Selenodont: {
    name: 'Selenodont',
    description: {
      en: 'Characterized by crescent-shaped ridges on the grinding surface. Common in ruminants like deer, cows, and antelopes.',
      si: 'ඇඹරුම් පෘෂ්ඨයේ අඩසඳ හැඩැති වැටි වලින් සමන්විතයි. මුවන්, ගවයින් සහ ඇන්ටිලෝප් වැනි සතුන් තුළ බහුලව දක්නට ලැබේ.',
      ta: 'அரைக்கும் மேற்பரப்பில் பிறை வடிவ வரம்புகளைக் கொண்டது. மான், பசுக்கள் மற்றும் ஆன்டிலோப்களில் பொதுவானது.'
    },
    dietLink: {
      en: 'Adapted for chewing and re-chewing (cud) softer leafy vegetation and grasses.',
      si: 'මෘදු පත්‍ර සහිත ශාක සහ තණකොළ හැපීම සහ නැවත හැපීම සඳහා හැඩගැසී ඇත.',
      ta: 'மென்மையான இலைகளைக் கொண்ட தாவரங்கள் மற்றும் புற்களை மெல்லவும் மீண்டும் மெல்லவும் ஏற்றது.'
    },
    svgIcon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 4c-4.4 0-8 3.6-8 8s3.6 8 8 8 8-3.6 8-8"/><path d="M12 6c-3.3 0-6 2.7-6 6s2.7 6 6 6"/></svg>'
  },
  Bunodont: {
    name: 'Bunodont',
    description: {
      en: 'Features low, rounded cusps (bumps). Humans, pigs, and bears have this molar type. It acts like a mortar and pestle.',
      si: 'පහත්, රවුම් ගැටිති සහිතය. මිනිසුන්, ඌරන් සහ වලසුන්ට මෙම වර්ගයේ දත් ඇත. එය වංගෙඩියක් සහ මෝල්ගහක් මෙන් ක්‍රියා කරයි.',
      ta: 'குறைவான, வட்டமான மேடுகளைக் கொண்டுள்ளது. மனிதர்கள், பன்றிகள் மற்றும் கரடிகளில் காணப்படுகிறது. இது அம்மி மற்றும் குழவி போல செயல்படுகிறது.'
    },
    dietLink: {
      en: 'Indicates a generalist, omnivorous diet capable of handling soft fruits, nuts, and some meat.',
      si: 'මෘදු පලතුරු, ඇට වර්ග සහ සමහර මස් වර්ග හැසිරවිය හැකි සර්ව භක්ෂක ආහාර රටාවක් පෙන්නුම් කරයි.',
      ta: 'மென்மையான பழங்கள், கொட்டைகள் மற்றும் சில இறைச்சியைக் கையாளக்கூடிய அனைத்துண்ணி உணவைக் குறிக்கிறது.'
    },
    svgIcon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="8" cy="8" r="3"/><circle cx="16" cy="8" r="3"/><circle cx="8" cy="16" r="3"/><circle cx="16" cy="16" r="3"/></svg>'
  },
  Hypsodont: {
    name: 'Hypsodont',
    description: {
      en: 'High-crowned teeth where much of the tooth extends past the gum line. Often continuously erupts as the surface wears down.',
      si: 'දතෙහි වැඩි කොටසක් විදුරුමස් රේඛාවෙන් ඔබ්බට විහිදෙන උස් කිරුළක් සහිත දත්. පෘෂ්ඨය ගෙවී යන විට නිරන්තරයෙන් වර්ධනය වේ.',
      ta: 'பல்லின் பெரும்பகுதி ஈறு கோட்டிற்கு அப்பால் நீண்டுள்ள உயர் கிரீடம் கொண்ட பற்கள். மேற்பரப்பு தேயும்போது தொடர்ந்து வளர்கிறது.'
    },
    dietLink: {
      en: 'An evolutionary response to highly abrasive diets, specifically eating silica-rich grasses covered in grit/dust.',
      si: 'විශේෂයෙන්ම වැලි/දූවිලි වලින් වැසී ඇති සිලිකා බහුල තණකොළ අනුභව කිරීම වැනි ඉතා රළු ආහාර සඳහා වන පරිණාමීය ප්‍රතිචාරයකි.',
      ta: 'சிலிக்கா நிறைந்த புற்களை உண்ணும் மிகவும் தேய்க்கும் உணவுகளுக்கான பரிணாம வளர்ச்சியாகும்.'
    },
    svgIcon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 22V8c0-2.2 1.8-4 4-4h4c2.2 0 4 1.8 4 4v14"/><path d="M6 14h12"/></svg>'
  }
};
