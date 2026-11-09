export interface NavItem {
  label: string;
  href: string;
}

export interface ImageAsset {
  src: string;
  alt: string;
  aspectRatio: string;
  focalPoint?: string;
  caption?: string;
  sourceCredit?: string;
  isStock?: boolean;
}

export interface TrustItem {
  title: string;
  subtitle: string;
  iconName: string;
}

export interface FeaturedStory {
  id: string;
  couple: string;
  location: string;
  season: string;
  category: string;
  summary: string;
  image: ImageAsset;
  highlights: string[];
}

export interface ServicePackage {
  id: string;
  title: string;
  tagline: string;
  badge?: string;
  coverage: string;
  description: string;
  deliverables: string[];
  idealFor: string;
  accentColor: string;
}

export interface FilmItem {
  id: string;
  title: string;
  couple: string;
  location: string;
  duration: string;
  thumbnail: ImageAsset;
  description: string;
  musicNote: string;
  tags: string[];
}

export interface JournalArticle {
  id: string;
  title: string;
  category: string;
  readTime: string;
  publishedDate: string;
  summary: string;
  image: ImageAsset;
  keyPoints: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export const siteContent = {
  brand: {
    name: "RANGREZ",
    legalName: "Rangrez Wedding Stories & Films",
    tagline: "Har Pal Mein Ek Kahaani.",
    englishTagline: "Every moment holds a timeless heirloom story.",
    established: "Rooted in Meerut, Capturing Weddings Across India & Destinations",
    city: "Meerut",
    serviceArea: "Delhi NCR, Rajasthan, Uttarakhand, Himachal & Worldwide Destinations",
    metaDescription: "Rangrez is a premier Indian wedding photography and cinematic film studio based in Meerut. Preserving the sacred rites, raw emotions, and royal splendor of Indian weddings.",
  },

  contact: {
    phoneDisplay: "+91 98970 12345",
    phoneRaw: "9897012345",
    phoneHref: "tel:+919897012345",
    whatsappDisplay: "+91 98970 12345",
    whatsappHref: "https://wa.me/919897012345?text=Namaste%20Rangrez%20team,%20I%20would%20like%20to%20inquire%20about%20wedding%20photography%20and%20cinematic%20film%20dates.",
    email: "enquiry@rangrezweddings.com",
    address: "Atelier Rangrez, Civil Lines, Opposite Circuit House, Meerut, Uttar Pradesh 250001",
    hours: "Tuesday to Sunday: 10:30 AM – 7:30 PM (Consultations by Prior Appointment)",
    mapUrl: "https://maps.google.com/?q=Civil+Lines+Meerut+Uttar+Pradesh",
  },

  navigation: [
    { label: "Home", href: "/" },
    { label: "Our Story", href: "/our-story" },
    { label: "Portfolio", href: "/portfolio" },
    { label: "Wedding Films", href: "/wedding-films" },
    { label: "Services & Packages", href: "/services-packages" },
    { label: "Journal", href: "/journal" },
    { label: "Contact / Book Us", href: "/contact" },
  ] as NavItem[],

  themeTokens: {
    primaryIndigo: "#202447",
    sindoorRed: "#C94B3B",
    marigold: "#E6A83A",
    peacockTeal: "#287C78",
    warmIvory: "#F8F2E8",
    deepPlum: "#70465B",
  },

  trustStrip: [
    {
      title: "Sacred Documentary Approach",
      subtitle: "Unscripted, genuine tears, laughter, and rituals without staged disruptions.",
      iconName: "Flame",
    },
    {
      title: "Dual Format Mastery",
      subtitle: "Ultra-high definition medium format still photography paired with 4K color-graded cinema.",
      iconName: "Camera",
    },
    {
      title: "Handcrafted Heirlooms",
      subtitle: "Italian archival paper flush-mount albums hand-bound to last for generations.",
      iconName: "BookOpen",
    },
    {
      title: "Meerut to Destinations",
      subtitle: "Bespoke production teams for grand palace, hillside, and ancestral celebrations.",
      iconName: "Compass",
    },
  ] as TrustItem[],

  featuredStories: [
    {
      id: "ananya-vikram-udaipur",
      couple: "Ananya & Vikram",
      location: "Jagmandir Island Palace, Udaipur",
      season: "Winter Royal Nuptials",
      category: "Palace Wedding",
      summary: "Three days of Rajputana grandeur—from a vibrant golden Marigold haldi ceremony by Lake Pichola to twilight pheras beneath a mandap of cascading mogra and tuberoses.",
      image: {
        src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80",
        alt: "Royal Indian bride in crimson red zardozi bridal lehenga with royal jewellery during her Udaipur palace wedding",
        aspectRatio: "4/5",
        caption: "Ananya in bespoke zardozi crimson at Jagmandir courtyard",
        isStock: true,
      },
      highlights: [
        "Acoustic Shehnai arrival on heritage royal boat",
        "Chiaroscuro bridal portraits in candlelit jharokhas",
        "Raw emotional bidaai at dawn with royal doli",
      ],
    },
    {
      id: "meera-kabir-meerut",
      couple: "Meera & Kabir",
      location: "Ancestral Heritage Farm, Meerut",
      season: "Spring Pheras",
      category: "Heritage Wedding",
      summary: "An intimate, soulful ancestral wedding woven into family mango orchards in Meerut. Golden hour pheras attended by three generations of family warmth and folk music.",
      image: {
        src: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80",
        alt: "Indian wedding couple holding hands during sacred pheras around the agni with marigold flower decor",
        aspectRatio: "4/5",
        caption: "Meera & Kabir during the sacred seven steps of pheras",
        isStock: true,
      },
      highlights: [
        "Natural daylight orchard pheras under hand-strung marigolds",
        "Spontaneous dholak sangeet sessions by grandmother and aunts",
        "Timeless black & white fine-art family heirloom portraits",
      ],
    },
    {
      id: "tanya-rohan-jim-corbett",
      couple: "Tanya & Rohan",
      location: "Riverbanks of Jim Corbett, Uttarakhand",
      season: "Autumn Forest Wedding",
      category: "Destination Wedding",
      summary: "A tranquil wilderness celebration with earth-toned pheras, misty morning rituals by the riverbed, and an electrifying open-air sangeet under midnight Himalayan skies.",
      image: {
        src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
        alt: "Indian bride dressed in pastel pink lehenga with intricate kundan jewellery smiling gracefully",
        aspectRatio: "4/5",
        caption: "Tanya's sunrise bridal contemplation amidst Uttarakhand pines",
        isStock: true,
      },
      highlights: [
        "Riverbed acoustic wedding ceremony at dusk",
        "Subtle candid documentary coverage of close family conversations",
        "Cinematic slow-motion film featuring original folk vocalists",
      ],
    },
  ] as FeaturedStory[],

  portfolioCategories: [
    "All Celebrations",
    "Bridal Portraits",
    "Sacred Pheras",
    "Haldi & Mehndi",
    "Royal Palaces",
    "Emotional Candids",
  ],

  portfolioItems: [
    {
      id: "p1",
      category: "Bridal Portraits",
      title: "The Regal Red Zardozi",
      couple: "Rhea's Bridal Elegance",
      location: "Udaipur Palace",
      image: {
        src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1000&q=80",
        alt: "Traditional Indian bride in ornate red lehenga with matha patti and nose ring",
        aspectRatio: "4/5",
        isStock: true,
      },
    },
    {
      id: "p2",
      category: "Haldi & Mehndi",
      title: "Marigold Showers & Turmeric Laughter",
      couple: "Arjun's Haldi Ritual",
      location: "Ancestral Haveli, Meerut",
      image: {
        src: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?auto=format&fit=crop&w=1000&q=80",
        alt: "Joyful Indian haldi ceremony with yellow outfits, turmeric paste, and marigold petals",
        aspectRatio: "4/5",
        isStock: true,
      },
    },
    {
      id: "p3",
      category: "Sacred Pheras",
      title: "The Agni & The Seven Vows",
      couple: "Kavya & Siddharth",
      location: "Jaipur Mandap",
      image: {
        src: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80",
        alt: "Close-up of couple holding hands during sacred Indian wedding rituals around the fire",
        aspectRatio: "4/5",
        isStock: true,
      },
    },
    {
      id: "p4",
      category: "Royal Palaces",
      title: "Echoes of the Fort Corridor",
      couple: "Devika & Shaurya",
      location: "Neemrana Fort-Palace",
      image: {
        src: "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=1000&q=80",
        alt: "Indian wedding couple posing gracefully in traditional sherwani and lehenga at a historic fort",
        aspectRatio: "4/5",
        isStock: true,
      },
    },
    {
      id: "p5",
      category: "Bridal Portraits",
      title: "Intricate Henna & Polki Jewels",
      couple: "Simran's Bridal Adornment",
      location: "Delhi NCR",
      image: {
        src: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?auto=format&fit=crop&w=1000&q=80",
        alt: "Detailed view of bridal mehndi on hands holding authentic bridal jewellery",
        aspectRatio: "4/5",
        isStock: true,
      },
    },
    {
      id: "p6",
      category: "Emotional Candids",
      title: "Father's Blessing at Bidaai",
      couple: "Nandini & Raghav",
      location: "Meerut",
      image: {
        src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=80",
        alt: "Tearful and emotional embrace between father and daughter during Indian wedding farewell",
        aspectRatio: "4/5",
        isStock: true,
      },
    },
    {
      id: "p7",
      category: "Haldi & Mehndi",
      title: "Symphony of Henna Patterns",
      couple: "Pooja's Mehndi Afternoon",
      location: "Ranthambore",
      image: {
        src: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1000&q=80",
        alt: "Intricate Indian bridal mehndi with peacocks and traditional motifs",
        aspectRatio: "4/5",
        isStock: true,
      },
    },
    {
      id: "p8",
      category: "Sacred Pheras",
      title: "Varmala Under Twilight Flora",
      couple: "Isha & Varun",
      location: "Rishikesh Foothills",
      image: {
        src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1000&q=80",
        alt: "Couple exchanging floral varmala garlands with rose and jasmine flowers",
        aspectRatio: "4/5",
        isStock: true,
      },
    },
  ],

  weddingFilms: [
    {
      id: "film-ananya-vikram",
      title: "Kesariya Phool — The Royal Vows of Udaipur",
      couple: "Ananya & Vikram",
      location: "Jagmandir Palace, Udaipur",
      duration: "14 Min Cinematic Feature",
      thumbnail: {
        src: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&w=1200&q=80",
        alt: "Cinematic wedding film still of Indian bride looking into the sunset over Lake Pichola",
        aspectRatio: "16/9",
        isStock: true,
      },
      description: "A sweeping multi-day cinematic documentary capturing the royal heritage of Udaipur. Features bespoke live Shehnai scoring, intimate audio letters exchanged at dawn, and grand drone cinematography over Pichola.",
      musicNote: "Original Sufi & Raag Yaman acoustic composition recorded live in Rajasthan.",
      tags: ["4K Cinema", "Drone Cinematography", "Audio Letters", "Live Music"],
    },
    {
      id: "film-meera-kabir",
      title: "Maati Ki Sugandh — Meerut Farmhouse Pheras",
      couple: "Meera & Kabir",
      location: "Civil Lines & Ancestral Grove, Meerut",
      duration: "11 Min Documentary Film",
      thumbnail: {
        src: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1200&q=80",
        alt: "Emotional wedding film still of couple walking around the holy agni",
        aspectRatio: "16/9",
        isStock: true,
      },
      description: "An intimate, heart-stirring film honoring ancestral soil and pure childhood memories. Focuses deeply on grandmother's folk songs, the thunderous local baraat, and the sacred silence of the pheras.",
      musicNote: "Folk dholak rhythms blended with gentle Sarangi passages.",
      tags: ["Documentary", "Family Candids", "Folk Nuances", "4K Sound Design"],
    },
    {
      id: "film-tanya-rohan",
      title: "Himalayan Whisper — Riverbed Celebration",
      couple: "Tanya & Rohan",
      location: "Kosi Riverbank, Jim Corbett",
      duration: "16 Min Feature Film",
      thumbnail: {
        src: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=80",
        alt: "Film still of couple sharing a quiet private laugh under forest canopy",
        aspectRatio: "16/9",
        isStock: true,
      },
      description: "Framed against whispering pine trees and gentle river currents. Includes Tanya's brother's heartwarming toast and Rohan's handwritten vows read beside the river at dawn.",
      musicNote: "Contemporary acoustic guitar paired with soft bansuri flute melodies.",
      tags: ["Destination Film", "Vow Audio", "Cinematic Teaser", "Multi-Camera"],
    },
    {
      id: "film-shruti-aditya",
      title: "Jodhpur Amber — The Fortress of Love",
      couple: "Shruti & Aditya",
      location: "Umaid Bhawan & Mehrangarh, Jodhpur",
      duration: "18 Min Grand Feature",
      thumbnail: {
        src: "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=1200&q=80",
        alt: "Film still of groom in embroidered sherwani taking the hand of his bride at royal steps",
        aspectRatio: "16/9",
        isStock: true,
      },
      description: "A visually majestic film celebrating Marwar heritage. Highlights include a dramatic torch-lit sangeet night and candid exchanges with childhood friends.",
      musicNote: "Royal Rajasthani Manganiyar ensemble recording.",
      tags: ["Heritage Grandeur", "4K Color Grade", "Drone", "Feature Length"],
    },
  ] as FilmItem[],

  servicePackages: [
    {
      id: "shahi-heirloom",
      title: "The Shahi Heirloom Collection",
      tagline: "Comprehensive 3-to-4 Day Royal Wedding Photography & Cinema",
      badge: "Most Cherished for Destination Weddings",
      coverage: "Complete coverage across 3–4 days (Haldi, Mehndi, Sangeet, Wedding & Reception)",
      description: "Our signature flagship offering designed for grand multi-day celebrations. We deploy two dedicated cinematography crews and two senior documentary photographers to ensure no ritual, quiet glance, or thunderous dance step goes unpreserved.",
      deliverables: [
        "2 Senior Master Photographers + 2 Fine-Art Candid Specialists",
        "2 Cinematographers with Cinema 4K Cameras & Audio Recorders",
        "Licensed Drone Aerial Cinematography for venue & baraat",
        "18–22 Minute Cinematic Wedding Feature Film with custom sound design",
        "3–4 Minute Expressive Teaser Reel delivered within 10 days",
        "1,200+ Hand-Curated, High-Resolution Color-Graded Digital Heirlooms",
        "Two 14x11 Handcrafted Italian Flush-Mount Leather Heirloom Albums (80 pages each)",
        "Two Parent Presentation Mini-Albums (8x10)",
        "Archival Wooden Keepsake Box with Custom Engraved USB",
      ],
      idealFor: "Grand palace, destination, or multi-day traditional weddings with extensive ceremonies.",
      accentColor: "royal-indigo",
    },
    {
      id: "parampara-classic",
      title: "The Parampara Classic",
      tagline: "Essential 2-Day Complete Wedding Coverage & Highlight Film",
      badge: "Signature Collection",
      coverage: "2 Days Full Coverage (Sangeet/Mehndi + Wedding Day & Pheras)",
      description: "A balanced, refined service tailored for traditional celebrations. Focuses on authentic emotional storytelling, sacred Vedic rituals, and expressive couple portraits without intrusive staging.",
      deliverables: [
        "1 Senior Master Photographer + 1 Candid Documentary Photographer",
        "2 Cinematographers with Full-Frame 4K Cameras",
        "10–14 Minute Narrative Wedding Film with licensed music",
        "2–3 Minute Highlight Reel optimized for private family sharing",
        "700+ Master-Edited Color-Graded Digital Heirlooms",
        "One 12x12 Handcrafted Archival Fine-Art Album (60 pages)",
        "Complimentary Pre-Wedding Couple Consultation in Meerut Studio or Online",
        "Private Online Client Gallery with 1-Year Cloud Storage",
      ],
      idealFor: "Couples desiring thorough, heartfelt documentary coverage of core ceremonies.",
      accentColor: "sindoor-red",
    },
    {
      id: "utsav-intimate",
      title: "The Utsav Intimate Collection",
      tagline: "Single-Day Sacred Nuptials & Soulful Portraiture",
      badge: "Intimate Celebrations",
      coverage: "Single Day / Muhurat Ceremony + Family Reception (Up to 10 Hours)",
      description: "Crafted specifically for bespoke intimate weddings, farmhouse celebrations, or sacred temple pheras where closeness and personal relationships are paramount.",
      deliverables: [
        "1 Senior Master Photographer + 1 Candid Specialist",
        "1 Dedicated Cinematographer for ceremony highlights",
        "5–7 Minute Soulful Highlight Film",
        "400+ Hand-Edited High-Resolution Digital Photographs",
        "One 10x10 Handcrafted Silk-Covered Memory Book (40 pages)",
        "Full ceremony uncut audio and video recordings of pheras and vows",
        "High-resolution digital delivery via private cloud archive",
      ],
      idealFor: "Bespoke gatherings, court ceremonies, temple weddings, or private farmhouse pheras.",
      accentColor: "peacock-teal",
    },
  ] as ServicePackage[],

  journalArticles: [
    {
      id: "muhurat-lighting-guide",
      title: "Timing Your Pheras: The Photographer's Guide to Golden Hour Indian Nuptials",
      category: "Wedding Planning & Light",
      readTime: "5 Min Read",
      publishedDate: "November 2026",
      summary: "How harmonizing your priest's auspicious muhurat with Rajasthan and North India's soft golden twilight transforms your sacred pheras into cinematic art.",
      image: {
        src: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=1000&q=80",
        alt: "Sunset golden light falling gently on couple during traditional Indian wedding pheras",
        aspectRatio: "16/9",
        isStock: true,
      },
      keyPoints: [
        "Why twilight light prevents harsh shadows on zardozi lehenga fabrics",
        "Coordinating with the panditji for mandap orientation relative to the setting sun",
        "How warm ambient candlelight elevates nighttime photography without blaring flashlights",
      ],
    },
    {
      id: "heirloom-albums-art",
      title: "Beyond the Screen: Why We Still Hand-Bind Wedding Heirlooms in Real Paper",
      category: "Artisanal Craft",
      readTime: "4 Min Read",
      publishedDate: "October 2026",
      summary: "In an era of disposable digital scrolls, holding a heavy 80-page Italian flush-mount album remains the only true tactile bridge to your wedding day thirty years from now.",
      image: {
        src: "https://images.unsplash.com/photo-1544077960-604201fe74bc?auto=format&fit=crop&w=1000&q=80",
        alt: "Artisan inspecting high quality archival printed wedding photographs in album",
        aspectRatio: "16/9",
        isStock: true,
      },
      keyPoints: [
        "True cotton rag paper versus synthetic chemical prints",
        "How seamless lay-flat spreads allow panoramic palace compositions",
        "The ritual of family album review: passing down memories to children and grandchildren",
      ],
    },
    {
      id: "unscripted-family-candids",
      title: "The Art of Non-Intrusive Storytelling: Making Camera-Shy Parents Feel at Ease",
      category: "Studio Philosophy",
      readTime: "6 Min Read",
      publishedDate: "September 2026",
      summary: "Indian weddings are deeply emotional family tapestries. Here is how our documentary cameras blend into your baraat and bidaai without directing or freezing genuine tears.",
      image: {
        src: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&w=1000&q=80",
        alt: "Natural candid laughter shared between parents and family at Indian wedding",
        aspectRatio: "16/9",
        isStock: true,
      },
      keyPoints: [
        "Long focal lenses that allow family intimacy without crowding",
        "Building genuine rapport with elders before ceremonial chaos begins",
        "Anticipating unannounced rituals: the sudden hug, the silent tear, the shared gaze",
      ],
    },
  ] as JournalArticle[],

  faqs: [
    {
      category: "Bookings & Availability",
      question: "How far in advance should we secure our wedding dates with Rangrez?",
      answer: "Most couples book our dates 6 to 12 months in advance, especially for the high auspicious winter wedding muhurats (October through March). Because we take on a strictly limited number of weddings per season to maintain uncompromising editorial quality, we recommend inquiring as soon as your dates and venue are confirmed.",
    },
    {
      category: "Travel & Locations",
      question: "Do you travel outside Meerut for destination and multi-city weddings?",
      answer: "Yes, passionately. While our creative studio and print archives are located in Civil Lines, Meerut, over 70% of our commissions take us to Udaipur, Jaipur, Jodhpur, Mussoorie, Jim Corbett, Delhi NCR, and international destinations. Our travel and accommodation logistics are transparently organized as part of your bespoke proposal.",
    },
    {
      category: "Style & Philosophy",
      question: "Will you make us do awkward or unnatural poses?",
      answer: "Never. Our core philosophy is 'Har Pal Mein Ek Kahaani'—unscripted, documentary, and deeply authentic. During couple portraits, we offer gentle, natural direction with lighting and relaxed posture rather than stiff choreography, allowing your real chemistry and connection to lead the photograph.",
    },
    {
      category: "Deliverables & Timelines",
      question: "What is your delivery timeline for edited photographs and films?",
      answer: "We deliver an expressive curated 'First Look' preview within 7 to 10 days of your celebrations so you can share highlights with close family. The complete archive of hand-color-graded photographs is delivered within 6 to 8 weeks. Cinematic feature films and hand-bound Italian albums are delivered within 10 to 12 weeks to allow for meticulous sound scoring and archival proofing.",
    },
    {
      category: "Films & Audio",
      question: "How do you capture audio during rituals and emotional moments?",
      answer: "Sound is 50% of the cinematic experience. We utilize discreet wireless lapel microphones on the groom or priest during the pheras, and dedicated multi-channel high-fidelity audio recorders during vows and family toasts to capture every Sanskrit shloka and tearful laugh with studio-grade clarity.",
    },
    {
      category: "Albums & Prints",
      question: "Can we customize the heirloom album cover and paper finish?",
      answer: "Yes. Every Rangrez album is handcrafted with your choice of genuine Italian leather, organic raw linen, or traditional banarasi silk covers. You can select between velvety fine-art matte paper or lustre finishes, with bespoke hot-stamped gold foil calligraphy featuring your names in Devanagari or English.",
    },
  ] as FAQItem[],
};

