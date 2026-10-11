import React from 'react';

export const BRAND_NAME = "MUSE STUDIO";
export const TOTAL_CLIENTS_PER_RUN = 5;
export const TIME_LIMIT_SECONDS = 30;

export const COLOR_CLASH_PAIRS = [
  ["red", "pink"],
  ["brown", "black"],
  ["green", "burgundy"],
  ["orange", "purple"],
  ["yellow", "gray"]
];

export const TITLES = {
  ROOKIE: {
    title: "Estilista Novata",
    badge: "NIVEL BÁSICO 🌱",
    quote: "Tienes buena actitud, pero te falta afinar el ojo para el streetwear limeño."
  },
  FASHIONISTA: {
    title: "Fashionista de Miraflores",
    badge: "NIVEL PRO 🔥",
    quote: "¡Qué buen gusto! Ya te buscan las modelos de la semana de la moda en Lima."
  },
  ICON: {
    title: "Ícono de la Moda",
    badge: "LEGENDARIA ⭐",
    quote: "¡Una absoluta maravilla de curaduría! Eres la estilista estrella de MUSE STUDIO."
  }
};

export const CLIENT_REQUESTS = [
  {
    name: "Valentina",
    avatar: "🎸",
    vibe: "Concierto",
    request: "Voy a un concierto de rock en Barranco esta noche 🎸",
    tags: ["grunge", "oscuro"]
  },
  {
    name: "Camilo",
    avatar: "☕",
    vibe: "Café",
    request: "Cita casual en San Isidro por un café, algo bien tierno y tranqui ☕",
    tags: ["tierno", "claro"]
  },
  {
    name: "Mariana",
    avatar: "📚",
    vibe: "Universidad",
    request: "Día largo en la PUCP, quiero estar súper cómoda pero cool 📚",
    tags: ["casual", "baggy"]
  },
  {
    name: "Sebas",
    avatar: "💿",
    vibe: "Rave Y2K",
    request: "Fiesta retrofuturista Y2K en Miraflores, ¡toca verse atrevido! 💿",
    tags: ["y2k", "atrevido"]
  },
  {
    name: "Daniela",
    avatar: "🧣",
    vibe: "Frío",
    request: "Domingo de frío y garúa en el Malecón de Miraflores, necesito abrigo 🧣",
    tags: ["abrigado", "tejido"]
  },
  {
    name: "Mateo",
    avatar: "🛹",
    vibe: "Skate",
    request: "Tarde de skate en el parque con mis patas 🛹",
    tags: ["casual", "baggy"]
  },
  {
    name: "Sofía",
    avatar: "✨",
    vibe: "Editorial",
    request: "Sesión de fotos para mi portafolio de modelaje en Barranco ✨",
    tags: ["elegante", "atrevido"]
  },
  {
    name: "Lucas",
    avatar: "🎧",
    vibe: "Underground",
    request: "Club underground en el Centro de Lima, vibra oscura y noventera 🎧",
    tags: ["grunge", "oscuro"]
  },
  {
    name: "Catalina",
    avatar: "🥐",
    vibe: "Brunch",
    request: "Brunch dominguero con mis amigas, estética limpia y tierna 🥐",
    tags: ["claro", "tierno"]
  },
  {
    name: "Felipe",
    avatar: "🔥",
    vibe: "Perreo Y2K",
    request: "Noche de reggaetón viejito en Barranco, ¡look llamativo sí o sí! 🔥",
    tags: ["y2k", "atrevido"]
  },
  {
    name: "Juliana",
    avatar: "🌧️",
    vibe: "Garúa",
    request: "Tarde nublada limeña en una librería secreta 🌧️",
    tags: ["abrigado", "casual"]
  },
  {
    name: "Alejandro",
    avatar: "🍸",
    vibe: "Rooftop",
    request: "Cocteles en un rooftop de San Isidro, con porte elegante 🍸",
    tags: ["elegante", "oscuro"]
  }
];

export const WARDROBE = [
  // --- TOPS ---
  {
    id: "top-varsity",
    name: "Varsity Jersey 98",
    slot: "top",
    color: "burgundy",
    tags: ["grunge", "y2k", "casual"],
    renderSvg: () => (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25 22 L40 16 L60 16 L75 22 L92 38 L80 50 L72 40 L72 82 L28 82 L28 40 L20 50 L8 38 Z" fill="#6E1A2B" stroke="#161616" strokeWidth="2.5" strokeLinejoin="round"/>
        <path d="M40 16 C45 26 55 26 60 16" fill="#F4F1EC" stroke="#161616" strokeWidth="2"/>
        <text x="50" y="62" fontFamily="'Archivo', sans-serif" fontWeight="900" fontSize="24" fill="#FFFFFF" textAnchor="middle">98</text>
        <line x1="12" y1="42" x2="22" y2="34" stroke="#FFF" strokeWidth="2.5"/>
        <line x1="88" y1="42" x2="78" y2="34" stroke="#FFF" strokeWidth="2.5"/>
      </svg>
    )
  },
  {
    id: "top-peasant",
    name: "Blusa Romántica",
    slot: "top",
    color: "white",
    tags: ["tierno", "claro", "elegante"],
    renderSvg: () => (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M30 25 C38 20 62 20 70 25 L88 38 C90 52 82 58 75 52 L72 78 L28 78 L25 52 C18 58 10 52 12 38 Z" fill="#FFFFFF" stroke="#161616" strokeWidth="2.5" strokeLinejoin="round"/>
        <path d="M30 25 C40 32 60 32 70 25" stroke="#161616" strokeWidth="1.5" strokeDasharray="2 2"/>
        <circle cx="50" cy="42" r="2" fill="#161616"/>
        <circle cx="50" cy="52" r="2" fill="#161616"/>
        <circle cx="50" cy="62" r="2" fill="#161616"/>
        <path d="M35 78 C40 82 45 82 50 78 C55 82 60 82 65 78" stroke="#161616" strokeWidth="2"/>
      </svg>
    )
  },
  {
    id: "top-crop-black",
    name: "Crop Top Asimétrico",
    slot: "top",
    color: "black",
    tags: ["oscuro", "y2k", "atrevido"],
    renderSvg: () => (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M36 20 L48 20 L66 32 L68 55 L32 55 L32 32 Z" fill="#161616" stroke="#161616" strokeWidth="2.5" strokeLinejoin="round"/>
        <path d="M36 20 L32 32" stroke="#6E1A2B" strokeWidth="2"/>
        <line x1="32" y1="55" x2="68" y2="48" stroke="#FFFFFF" strokeWidth="1.5"/>
        <circle cx="50" cy="42" r="3" fill="#6E1A2B"/>
      </svg>
    )
  },
  {
    id: "top-knit-sweater",
    name: "Suéter Tejido Lima",
    slot: "top",
    color: "beige",
    tags: ["abrigado", "tejido", "tierno"],
    renderSvg: () => (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M26 22 L40 18 L60 18 L74 22 L92 42 L80 52 L72 44 L72 82 L28 82 L28 44 L20 52 L8 42 Z" fill="#D9D6D0" stroke="#161616" strokeWidth="2.5" strokeLinejoin="round"/>
        <path d="M40 18 C45 24 55 24 60 18" fill="#C4C0B8" stroke="#161616" strokeWidth="2"/>
        <line x1="42" y1="26" x2="42" y2="80" stroke="#B0ACA4" strokeWidth="2" strokeDasharray="4 3"/>
        <line x1="58" y1="26" x2="58" y2="80" stroke="#B0ACA4" strokeWidth="2" strokeDasharray="4 3"/>
        <line x1="50" y1="26" x2="50" y2="80" stroke="#B0ACA4" strokeWidth="2" strokeDasharray="6 3"/>
      </svg>
    )
  },
  {
    id: "top-cardigan",
    name: "Cardigan Oversized",
    slot: "top",
    color: "denim",
    tags: ["casual", "abrigado", "baggy"],
    renderSvg: () => (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M24 20 L40 18 L60 18 L76 20 L94 44 L80 54 L72 44 L74 85 L26 85 L28 44 L20 54 L6 44 Z" fill="#6B7F99" stroke="#161616" strokeWidth="2.5" strokeLinejoin="round"/>
        <path d="M40 18 L50 50 L60 18" fill="#F4F1EC" stroke="#161616" strokeWidth="2"/>
        <line x1="50" y1="50" x2="50" y2="85" stroke="#161616" strokeWidth="2"/>
        <circle cx="50" cy="58" r="2.5" fill="#161616"/>
        <circle cx="50" cy="70" r="2.5" fill="#161616"/>
      </svg>
    )
  },
  {
    id: "top-hoodie",
    name: "Hoodie Boxy Street",
    slot: "top",
    color: "black",
    tags: ["grunge", "oscuro", "baggy", "casual"],
    renderSvg: () => (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M34 26 C34 10 66 10 66 26 Z" fill="#2E2E2E" stroke="#161616" strokeWidth="2.5"/>
        <path d="M24 28 L40 24 L60 24 L76 28 L94 46 L82 56 L74 46 L74 84 L26 84 L26 46 L18 56 L6 46 Z" fill="#161616" stroke="#161616" strokeWidth="2.5" strokeLinejoin="round"/>
        <path d="M36 64 L64 64 L60 80 L40 80 Z" fill="#2E2E2E" stroke="#161616" strokeWidth="2"/>
      </svg>
    )
  },
  {
    id: "top-polo",
    name: "Polo Cropped Rayas",
    slot: "top",
    color: "white",
    tags: ["casual", "claro", "tierno"],
    renderSvg: () => (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28 22 L38 18 L62 18 L72 22 L86 36 L76 46 L70 38 L70 65 L30 65 L30 38 L24 46 L14 36 Z" fill="#FFFFFF" stroke="#161616" strokeWidth="2.5" strokeLinejoin="round"/>
        <polygon points="38,18 50,30 38,34" fill="#6E1A2B" stroke="#161616" strokeWidth="1.5"/>
        <polygon points="62,18 50,30 62,34" fill="#6E1A2B" stroke="#161616" strokeWidth="1.5"/>
        <line x1="30" y1="45" x2="70" y2="45" stroke="#6E1A2B" strokeWidth="3"/>
        <line x1="30" y1="55" x2="70" y2="55" stroke="#6B7F99" strokeWidth="3"/>
      </svg>
    )
  },

  // --- BOTTOMS ---
  {
    id: "bot-baggy-light",
    name: "Baggy Jeans Lavado Claro",
    slot: "bottom",
    color: "denim",
    tags: ["casual", "baggy", "claro"],
    renderSvg: () => (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M26 15 L74 15 L78 88 L52 88 L50 42 L48 88 L22 88 Z" fill="#A4B9D2" stroke="#161616" strokeWidth="2.5" strokeLinejoin="round"/>
        <line x1="26" y1="22" x2="74" y2="22" stroke="#161616" strokeWidth="1.5"/>
        <path d="M30 26 C36 26 38 34 38 34" stroke="#161616" strokeWidth="1.5"/>
        <path d="M70 26 C64 26 62 34 62 34" stroke="#161616" strokeWidth="1.5"/>
        <path d="M30 52 L42 50" stroke="#FFF" strokeWidth="2"/>
        <path d="M58 54 L70 52" stroke="#FFF" strokeWidth="2"/>
      </svg>
    )
  },
  {
    id: "bot-baggy-dark",
    name: "Skater Jeans Dark Wash",
    slot: "bottom",
    color: "denim",
    tags: ["grunge", "baggy", "oscuro"],
    renderSvg: () => (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M25 14 L75 14 L80 90 L53 90 L50 40 L47 90 L20 90 Z" fill="#3D4E63" stroke="#161616" strokeWidth="2.5" strokeLinejoin="round"/>
        <line x1="25" y1="22" x2="75" y2="22" stroke="#6E1A2B" strokeWidth="2"/>
        <circle cx="50" cy="18" r="2.5" fill="#FFE885" stroke="#161616"/>
        <line x1="50" y1="22" x2="50" y2="38" stroke="#161616" strokeWidth="2"/>
      </svg>
    )
  },
  {
    id: "bot-wide-black",
    name: "Wide-Leg Negro",
    slot: "bottom",
    color: "black",
    tags: ["oscuro", "grunge", "elegante", "baggy"],
    renderSvg: () => (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M28 14 L72 14 L82 92 L53 92 L50 38 L47 92 L18 92 Z" fill="#161616" stroke="#161616" strokeWidth="2.5" strokeLinejoin="round"/>
        <line x1="34" y1="24" x2="34" y2="88" stroke="#333" strokeWidth="1.5"/>
        <line x1="66" y1="24" x2="66" y2="88" stroke="#333" strokeWidth="1.5"/>
      </svg>
    )
  },
  {
    id: "bot-pleated-mini",
    name: "Falda Tablas K-Style",
    slot: "bottom",
    color: "gray",
    tags: ["tierno", "y2k", "claro"],
    renderSvg: () => (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32 20 L68 20 L84 64 L16 64 Z" fill="#D9D6D0" stroke="#161616" strokeWidth="2.5" strokeLinejoin="round"/>
        <line x1="26" y1="20" x2="24" y2="64" stroke="#161616" strokeWidth="1.5"/>
        <line x1="38" y1="20" x2="36" y2="64" stroke="#161616" strokeWidth="1.5"/>
        <line x1="50" y1="20" x2="50" y2="64" stroke="#161616" strokeWidth="1.5"/>
        <line x1="62" y1="20" x2="64" y2="64" stroke="#161616" strokeWidth="1.5"/>
        <line x1="74" y1="20" x2="76" y2="64" stroke="#161616" strokeWidth="1.5"/>
      </svg>
    )
  },
  {
    id: "bot-cargo-ruffle",
    name: "Falda Cargo con Olanes",
    slot: "bottom",
    color: "denim",
    tags: ["y2k", "atrevido", "casual"],
    renderSvg: () => (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M30 18 L70 18 L80 62 L20 62 Z" fill="#6B7F99" stroke="#161616" strokeWidth="2.5" strokeLinejoin="round"/>
        <rect x="54" y="32" width="16" height="18" rx="2" fill="#52647C" stroke="#161616" strokeWidth="1.5"/>
        <path d="M18 62 C26 70 34 70 42 62 C50 70 58 70 66 62 C74 70 82 70 82 62" fill="none" stroke="#161616" strokeWidth="2.5"/>
      </svg>
    )
  },
  {
    id: "bot-plaid-dress",
    name: "Plaid Pinafore 90s",
    slot: "bottom",
    color: "burgundy",
    tags: ["grunge", "oscuro", "abrigado"],
    renderSvg: () => (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M32 15 L68 15 L82 78 L18 78 Z" fill="#6E1A2B" stroke="#161616" strokeWidth="2.5" strokeLinejoin="round"/>
        <line x1="22" y1="36" x2="78" y2="36" stroke="#FFE885" strokeWidth="1.5"/>
        <line x1="20" y1="56" x2="80" y2="56" stroke="#FFE885" strokeWidth="1.5"/>
        <line x1="42" y1="15" x2="38" y2="78" stroke="#161616" strokeWidth="2"/>
        <line x1="58" y1="15" x2="62" y2="78" stroke="#161616" strokeWidth="2"/>
      </svg>
    )
  },

  // --- ACCESSORIES ---
  {
    id: "acc-beret",
    name: "Boina Francesa Street",
    slot: "acc",
    color: "burgundy",
    tags: ["tierno", "elegante", "abrigado"],
    renderSvg: () => (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="50" cy="46" rx="42" ry="18" fill="#6E1A2B" stroke="#161616" strokeWidth="2.5"/>
        <path d="M26 48 C34 60 66 60 74 48" fill="#521320" stroke="#161616" strokeWidth="2"/>
        <circle cx="50" cy="27" r="3" fill="#6E1A2B" stroke="#161616" strokeWidth="1.5"/>
      </svg>
    )
  },
  {
    id: "acc-chain-belt",
    name: "Cinturón Cadena Y2K",
    slot: "acc",
    color: "white",
    tags: ["y2k", "atrevido", "grunge"],
    renderSvg: () => (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 48 Q 50 68 85 48" stroke="#161616" strokeWidth="3.5" fill="none"/>
        <circle cx="28" cy="54" r="5" fill="#FFFFFF" stroke="#161616" strokeWidth="2"/>
        <circle cx="50" cy="60" r="6" fill="#FFE885" stroke="#161616" strokeWidth="2"/>
        <circle cx="72" cy="54" r="5" fill="#FFFFFF" stroke="#161616" strokeWidth="2"/>
        <line x1="50" y1="66" x2="50" y2="84" stroke="#161616" strokeWidth="2"/>
        <polygon points="50,84 45,92 55,92" fill="#FFE885" stroke="#161616" strokeWidth="1.5"/>
      </svg>
    )
  },
  {
    id: "acc-shoulder-bag",
    name: "Bolso Baguette",
    slot: "acc",
    color: "denim",
    tags: ["casual", "y2k", "tierno"],
    renderSvg: () => (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M30 50 C30 20 70 20 70 50" stroke="#161616" strokeWidth="3" fill="none"/>
        <rect x="24" y="48" width="52" height="30" rx="8" fill="#6B7F99" stroke="#161616" strokeWidth="2.5"/>
        <rect x="44" y="48" width="12" height="14" rx="2" fill="#161616"/>
        <circle cx="50" cy="55" r="2" fill="#FFF"/>
      </svg>
    )
  },
  {
    id: "acc-choker",
    name: "Choker Corazón Punk",
    slot: "acc",
    color: "black",
    tags: ["grunge", "oscuro", "atrevido"],
    renderSvg: () => (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="50" cy="50" rx="40" ry="12" fill="none" stroke="#161616" strokeWidth="4.5"/>
        <path d="M50 48 L44 42 C40 38 44 34 47 37 L50 40 L53 37 C56 34 60 38 56 42 Z" fill="#6E1A2B" stroke="#161616" strokeWidth="1.5" transform="translate(0, 8)"/>
      </svg>
    )
  },
  {
    id: "acc-headphones",
    name: "Audífonos Max Silver",
    slot: "acc",
    color: "gray",
    tags: ["casual", "y2k", "grunge"],
    renderSvg: () => (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M26 55 C26 25 74 25 74 55" stroke="#161616" strokeWidth="4" fill="none"/>
        <rect x="18" y="48" width="14" height="24" rx="7" fill="#D9D6D0" stroke="#161616" strokeWidth="2"/>
        <rect x="68" y="48" width="14" height="24" rx="7" fill="#D9D6D0" stroke="#161616" strokeWidth="2"/>
      </svg>
    )
  },
  {
    id: "acc-chunky-boots",
    name: "Botas Chunky Plataforma",
    slot: "acc",
    color: "black",
    tags: ["grunge", "oscuro", "atrevido"],
    renderSvg: () => (
      <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22 28 L38 28 L40 58 L54 58 C62 58 64 68 64 74 L18 74 L18 36 Z" fill="#161616" stroke="#161616" strokeWidth="2.5" strokeLinejoin="round"/>
        <rect x="16" y="74" width="50" height="12" rx="2" fill="#333" stroke="#161616" strokeWidth="2"/>
        <line x1="28" y1="36" x2="36" y2="36" stroke="#FFF" strokeWidth="1.5"/>
        <line x1="28" y1="44" x2="36" y2="44" stroke="#FFF" strokeWidth="1.5"/>
        <line x1="28" y1="52" x2="36" y2="52" stroke="#FFF" strokeWidth="1.5"/>
      </svg>
    )
  }
];
