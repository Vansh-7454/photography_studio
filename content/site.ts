export interface NavItem {
  label: string;
  href: string;
}

export interface ImageAsset {
  src: string;
  alt: string;
  aspectRatio: "4/5" | "4/3" | "16/9" | "21/9" | "1/1";
  caption?: string;
}

export interface TrustItem {
  title: string;
  desc: string;
  iconName: string;
}

export interface FeaturedStory {
  id: string;
  couple: string;
  location: string;
  tag: string;
  image: ImageAsset;
}

export interface ServicePackage {
  id: string;
  title: string;
  tagline: string;
  investment: string;
  coverage: string;
  description: string;
  deliverables: string[];
  image: ImageAsset;
}

export interface FilmItem {
  id: string;
  title: string;
  couple: string;
  location: string;
  duration: string;
  thumbnail: ImageAsset;
  description: string;
  audioTrack: string;
}

export interface JournalArticle {
  id: string;
  title: string;
  readTime: string;
  summary: string;
  image: ImageAsset;
  tips: string[];
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
    studioType: "Creative Wedding Photography & Film Studio",
    location: "Civil Lines, Meerut, India",
    city: "Meerut",
    serviceArea: "Meerut, Delhi NCR, Rajasthan & Destinations Worldwide",
    metaDescription: "Rangrez is a creative wedding photography and cinematic film studio based in Meerut. Capturing honest emotions, sacred rituals, and candid family moments.",
  },

  contact: {
    phoneDisplay: "+91 98970 12345",
    phoneRaw: "9897012345",
    phoneHref: "tel:+919897012345",
    whatsappDisplay: "+91 98970 12345",
    whatsappHref: "https://wa.me/919897012345?text=Hi%20Rangrez%20team,%20I'd%20love%20to%20check%20availability%20for%20our%20wedding%20dates.",
    email: "hello@rangrezweddings.com",
    address: "Atelier Rangrez, Civil Lines, Near Circuit House, Meerut, UP 250001",
    hours: "Tue – Sun: 10:30 AM – 7:30 PM (By Appointment)",
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
    warmIvory: "#F7F2E9",
    deepAubergine: "#392A3B",
    terracotta: "#C96850",
    mutedMarigold: "#D9A64B",
    softSage: "#89947A",
  },

  hero: {
    eyebrow: "Meerut • Worldwide Weddings",
    headline: "Your Story. Our Frames. Forever.",
    subtitle: "Honest emotions. Beautiful chaos. Memories that stay.",
    ctaPrimary: "Let's Make Your Story",
    ctaSecondary: "View Wedding Portfolio",
    image: {
      src: "/images/home/hero-wedding.jpg",
      alt: "Authentic Indian royal bride and groom in traditional wedding attire in palace courtyard",
      aspectRatio: "4/5" as const,
    },
  },

  studioStats: [
    { label: "Commissions / Year", value: "18 Max", note: "Dedicated attention to every couple" },
    { label: "Full Frame & Cinema", value: "4K 10-Bit", note: "Sony Cine primes & live multi-track audio" },
    { label: "Heirloom Albums", value: "Hand-Bound", note: "Italian cotton rag & lay-flat binding" },
    { label: "Home Base", value: "Civil Lines, Meerut", note: "Traveling across India & destinations" },
  ],

  featuredStories: [
    {
      id: "ananya-vikram-udaipur",
      couple: "Ananya & Vikram",
      location: "Jagmandir Palace, Udaipur",
      tag: "Royal Palace Wedding",
      image: {
        src: "/images/home/palace-story.jpg",
        alt: "Royal couple portrait by lake palace corridor in Rajasthan",
        aspectRatio: "4/5" as const,
      },
    },
    {
      id: "meera-kabir-meerut",
      couple: "Meera & Kabir",
      location: "Ancestral Grove, Meerut",
      tag: "Farmhouse Pheras",
      image: {
        src: "/images/home/candid-pheras.jpg",
        alt: "Indian wedding couple holding hands during sacred pheras around holy fire",
        aspectRatio: "4/5" as const,
      },
    },
    {
      id: "tanya-rohan-corbett",
      couple: "Tanya & Rohan",
      location: "Riverbank, Jim Corbett",
      tag: "Destination Wilderness",
      image: {
        src: "/images/portfolio/varmala-ceremony.jpg",
        alt: "Emotional couple smiling warmly during outdoor garland ceremony",
        aspectRatio: "4/5" as const,
      },
    },
  ] as FeaturedStory[],

  portfolioCategories: [
    "All Frames",
    "Bridal & Groom",
    "Sacred Pheras",
    "Haldi & Mehendi",
    "Candid Moments",
  ],

  portfolioItems: [
    {
      id: "p1",
      category: "Bridal & Groom",
      title: "Crimson & Zardozi",
      couple: "Rhea's Bridal Elegance",
      location: "Udaipur",
      aspect: "4/5" as const,
      image: {
        src: "/images/portfolio/bridal-lehenga-red.jpg",
        alt: "Indian bride dressed in deep red zardozi lehenga with polki jewelry",
        aspectRatio: "4/5" as const,
      },
    },
    {
      id: "p2",
      category: "Haldi & Mehendi",
      title: "Turmeric Laughter",
      couple: "Arjun & Friends",
      location: "Meerut",
      aspect: "4/5" as const,
      image: {
        src: "/images/portfolio/haldi-ritual.jpg",
        alt: "Lively Haldi ceremony with marigold flowers and smiling friends",
        aspectRatio: "4/5" as const,
      },
    },
    {
      id: "p3",
      category: "Sacred Pheras",
      title: "The Seven Steps",
      couple: "Kavya & Siddharth",
      location: "Jaipur",
      aspect: "4/5" as const,
      image: {
        src: "/images/home/candid-pheras.jpg",
        alt: "Sacred pheras around the agni havan kund with flower petals",
        aspectRatio: "4/5" as const,
      },
    },
    {
      id: "p4",
      category: "Bridal & Groom",
      title: "Subtle Radiance",
      couple: "Tanvi in Heritage Polki",
      location: "Delhi NCR",
      aspect: "4/5" as const,
      image: {
        src: "/images/portfolio/bridal-portrait.jpg",
        alt: "Natural daylight bridal portrait highlighting delicate jewelry and expression",
        aspectRatio: "4/5" as const,
      },
    },
    {
      id: "p5",
      category: "Haldi & Mehendi",
      title: "Intricate Henna",
      couple: "Simran's Mehendi Afternoon",
      location: "Ranthambore",
      aspect: "4/5" as const,
      image: {
        src: "/images/portfolio/mehndi-detail.jpg",
        alt: "Detailed view of bride's hands adorned with intricate mehendi patterns",
        aspectRatio: "4/5" as const,
      },
    },
    {
      id: "p6",
      category: "Candid Moments",
      title: "A Father's Gaze",
      couple: "Bidaai Farewell",
      location: "Civil Lines, Meerut",
      aspect: "4/5" as const,
      image: {
        src: "/images/portfolio/emotional-candid.jpg",
        alt: "Heartfelt candid embrace between bride and her father during bidaai",
        aspectRatio: "4/5" as const,
      },
    },
  ],

  weddingFilms: [
    {
      id: "film-udaipur",
      title: "Kesariya Phool",
      couple: "Ananya & Vikram",
      location: "Jagmandir Palace, Udaipur",
      duration: "12 Min 4K Film",
      thumbnail: {
        src: "/images/films/film-udaipur.jpg",
        alt: "Film still of royal wedding celebration at Lake Pichola",
        aspectRatio: "16/9" as const,
      },
      description: "A sweeping royal monograph with live Shehnai recorded on Lake Pichola, quiet dawn vow exchanges, and sunset pheras.",
      audioTrack: "Live Acoustic Shehnai & Sitar score recorded on location.",
    },
    {
      id: "film-meerut",
      title: "Maati Aur Mogra",
      couple: "Meera & Kabir",
      location: "Civil Lines Grove, Meerut",
      duration: "10 Min Documentary",
      thumbnail: {
        src: "/images/films/film-meerut.jpg",
        alt: "Cinematic film still of couple walking hand in hand through mango grove",
        aspectRatio: "16/9" as const,
      },
      description: "An intimate, soulful tribute to hometown roots. Features grandmother's folk songs and laughter under the old trees.",
      audioTrack: "Acoustic Sarangi blended with authentic dholak rhythms.",
    },
    {
      id: "film-corbett",
      title: "Riverbed Vows",
      couple: "Tanya & Rohan",
      location: "Kosi Riverbank, Jim Corbett",
      duration: "14 Min Cinema",
      thumbnail: {
        src: "/images/films/film-corbett.jpg",
        alt: "Film still of couple sharing quiet laughter beside mountain river",
        aspectRatio: "16/9" as const,
      },
      description: "A serene celebration amidst pine forests and river mist. Rohan's handwritten letter and Tanya's brother's toast.",
      audioTrack: "Soft bansuri flute melodies paired with acoustic guitar.",
    },
    {
      id: "film-jodhpur",
      title: "Amber Skies",
      couple: "Shruti & Aditya",
      location: "Mehrangarh Foot, Jodhpur",
      duration: "15 Min Grand Reel",
      thumbnail: {
        src: "/images/films/film-jodhpur.jpg",
        alt: "Film still of twilight sangeet celebration against blue city skyline",
        aspectRatio: "16/9" as const,
      },
      description: "Majestic fortress backdrop, torchlit sangeet dancing, and candid moments with childhood friends.",
      audioTrack: "Live Rajasthani Manganiyar ensemble.",
    },
  ] as FilmItem[],

  servicePackages: [
    {
      id: "shahi-collection",
      title: "The Shahi Collection",
      tagline: "3–4 Day Grand Celebration & Cinema",
      investment: "Starting from ₹3,50,000",
      coverage: "Haldi, Mehendi, Sangeet, Wedding Day & Reception",
      description: "Our complete documentary crew for destination weddings and multi-day celebrations. Zero rushed moments.",
      deliverables: [
        "2 Senior Photographers + 2 Candid Specialists",
        "2 Cinematographers (4K Cinema Cameras)",
        "Drone Aerial Cinematography",
        "15–20 Min Master Wedding Film + 3 Min Teaser",
        "1,000+ Hand-Curated Color-Graded Photos",
        "Two 14x11 Handcrafted Italian Flush-Mount Albums",
        "Complimentary Pre-Wedding Session in Meerut or Delhi",
      ],
      image: {
        src: "/images/services/service-royal.jpg",
        alt: "Grand royal wedding mandap setup at destination palace",
        aspectRatio: "4/3" as const,
      },
    },
    {
      id: "parampara-collection",
      title: "The Parampara Collection",
      tagline: "2-Day Core Ceremonies & Highlights",
      investment: "Starting from ₹2,25,000",
      coverage: "Mehendi/Sangeet + Full Wedding Day & Pheras",
      description: "The ideal coverage for traditional weddings. Thorough documentation of sacred rituals and family candids.",
      deliverables: [
        "1 Lead Master Photographer + 1 Candid Specialist",
        "2 Cinematographers (4K Full-Frame)",
        "10–12 Min Narrative Wedding Film + 2 Min Reel",
        "600+ Master-Edited Digital Photographs",
        "One 12x12 Archival Lay-Flat Wedding Book",
        "Private Online Client Gallery with 1-Year Cloud Storage",
      ],
      image: {
        src: "/images/services/service-traditional.jpg",
        alt: "Traditional Indian wedding rituals with priest and family",
        aspectRatio: "4/3" as const,
      },
    },
    {
      id: "utsav-collection",
      title: "The Utsav Collection",
      tagline: "Single-Day Sacred Nuptials",
      investment: "Starting from ₹1,40,000",
      coverage: "Wedding Ceremony & Reception (Up to 10 Hours)",
      description: "Crafted specifically for intimate weddings, farmhouse pheras, or temple ceremonies where warmth matters most.",
      deliverables: [
        "1 Lead Photographer + 1 Candid Specialist",
        "1 Dedicated Cinematographer",
        "5–7 Min Soulful Highlight Film",
        "350+ Color-Graded Digital Heirlooms",
        "One 10x10 Fine-Art Keepsake Book",
        "Full ceremony uncut audio recording of pheras",
      ],
      image: {
        src: "/images/services/service-intimate.jpg",
        alt: "Intimate family wedding celebration under morning sunlight",
        aspectRatio: "4/3" as const,
      },
    },
  ] as ServicePackage[],

  journalArticles: [
    {
      id: "golden-hour-muhurat",
      title: "Golden Hour Pheras: Harmonizing Muhurat & Light",
      readTime: "4 Min Read",
      summary: "How coordinating with your panditji for twilight pheras prevents harsh shadows and yields magical natural photos.",
      image: {
        src: "/images/journal/journal-lighting.jpg",
        alt: "Golden hour sunset lighting illuminating Indian wedding mandap",
        aspectRatio: "16/9" as const,
      },
      tips: [
        "Position the mandap facing west for soft sunset glow on couple's faces",
        "Keep ambient yellow fairy lights warm rather than cool white LED floods",
        "Schedule couple portraits 45 minutes before the pheras commence",
      ],
    },
    {
      id: "tactile-albums",
      title: "Why We Still Print Real Paper Albums",
      readTime: "3 Min Read",
      summary: "Digital files disappear into phone storage. A heavy, lay-flat Italian flush-mount book is an heirloom you hold decades later.",
      image: {
        src: "/images/journal/journal-album.jpg",
        alt: "Handcrafted leather wedding photo album with thick archival paper",
        aspectRatio: "16/9" as const,
      },
      tips: [
        "Museum-grade cotton rag paper preserves rich zardozi red pigments",
        "Lay-flat binding allows double-page panoramic palace spreads",
        "Custom foil debossing with your wedding date in Devanagari or English",
      ],
    },
    {
      id: "camera-shy-families",
      title: "The Art of Non-Intrusive Storytelling",
      readTime: "4 Min Read",
      summary: "How our crew documents genuine emotions without asking your parents to hold frozen smiles or repeated poses.",
      image: {
        src: "/images/journal/journal-documentary.jpg",
        alt: "Photographer documenting genuine family laughter from a respectful distance",
        aspectRatio: "16/9" as const,
      },
      tips: [
        "Using 85mm and 135mm prime lenses to give family space to breathe",
        "Building warmth with elders before the ceremonial rush begins",
        "Anticipating the tears of bidaai without crowding the car door",
      ],
    },
  ] as JournalArticle[],

  faqs: [
    {
      category: "Bookings",
      question: "How early should we book our wedding dates?",
      answer: "Most couples book 6 to 9 months ahead, especially for high auspicious winter muhurats (November to February). We take a strict cap of 18 weddings a year to ensure every film is crafted with care.",
    },
    {
      category: "Travel",
      question: "Do you travel outside Meerut for weddings?",
      answer: "Yes, frequently. About 70% of our weddings take place in Udaipur, Jaipur, Mussoorie, Jim Corbett, and Delhi NCR. Travel and accommodation are planned transparently in your proposal.",
    },
    {
      category: "Style",
      question: "Will you make us do awkward or staged poses?",
      answer: "Never. We believe in candid, honest documentary storytelling. For couple portraits, we offer gentle guidance with natural light and relaxed conversation rather than stiff, robotic poses.",
    },
    {
      category: "Deliverables",
      question: "When do we receive our photos and wedding film?",
      answer: "A curated 'First Look' preview of 50-70 photos arrives within 7 days. Complete high-res photos within 5–6 weeks. Your cinematic film and handcrafted album are delivered within 8–10 weeks.",
    },
  ] as FAQItem[],
};
