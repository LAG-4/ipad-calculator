// SVG icons for iPad OS interface

const icons = {
  // App icons
  calculator: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
    <rect width="50" height="50" rx="10" fill="#1C1C1E"/>
    <rect x="10" y="10" width="30" height="10" rx="2" fill="#4CD964"/>
    <rect x="10" y="24" width="6" height="6" rx="1" fill="#FFFFFF"/>
    <rect x="22" y="24" width="6" height="6" rx="1" fill="#FFFFFF"/>
    <rect x="34" y="24" width="6" height="6" rx="1" fill="#FFFFFF"/>
    <rect x="10" y="34" width="6" height="6" rx="1" fill="#FFFFFF"/>
    <rect x="22" y="34" width="6" height="6" rx="1" fill="#FFFFFF"/>
    <rect x="34" y="34" width="6" height="6" rx="1" fill="#FF9500"/>
  </svg>`,
  
  calendar: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
    <rect width="50" height="50" rx="10" fill="#FFFFFF"/>
    <text x="25" y="18" font-family="Arial" font-size="14" font-weight="bold" text-anchor="middle" fill="#FF3B30">27</text>
    <line x1="10" y1="22" x2="40" y2="22" stroke="#E5E5EA" stroke-width="1"/>
    <line x1="16" y1="30" x2="16" y2="38" stroke="#E5E5EA" stroke-width="1"/>
    <line x1="25" y1="30" x2="25" y2="38" stroke="#E5E5EA" stroke-width="1"/>
    <line x1="34" y1="30" x2="34" y2="38" stroke="#E5E5EA" stroke-width="1"/>
    <line x1="10" y1="30" x2="40" y2="30" stroke="#E5E5EA" stroke-width="1"/>
    <line x1="10" y1="38" x2="40" y2="38" stroke="#E5E5EA" stroke-width="1"/>
  </svg>`,
  
  contacts: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
    <rect width="50" height="50" rx="10" fill="#FFCC00"/>
    <circle cx="25" cy="20" r="8" fill="#FFFFFF"/>
    <path d="M12,40 C12,32 19,29 25,29 C31,29 38,32 38,40" fill="#FFFFFF"/>
  </svg>`,
  
  notes: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
    <rect width="50" height="50" rx="10" fill="#FFCC00"/>
    <line x1="15" y1="15" x2="35" y2="15" stroke="#FFFFFF" stroke-width="2"/>
    <line x1="15" y1="22" x2="35" y2="22" stroke="#FFFFFF" stroke-width="2"/>
    <line x1="15" y1="29" x2="35" y2="29" stroke="#FFFFFF" stroke-width="2"/>
    <line x1="15" y1="36" x2="28" y2="36" stroke="#FFFFFF" stroke-width="2"/>
  </svg>`,
  
  // Dock icons
  safari: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
    <circle cx="25" cy="25" r="23" fill="url(#safari-gradient)"/>
    <defs>
      <linearGradient id="safari-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#0080FF"/>
        <stop offset="100%" stop-color="#5CACEE"/>
      </linearGradient>
    </defs>
    <circle cx="25" cy="25" r="2" fill="#FFFFFF"/>
    <path d="M25,23 L25,10" stroke="#FFFFFF" stroke-width="1"/>
    <path d="M25,27 L25,40" stroke="#FFFFFF" stroke-width="1"/>
    <path d="M27,25 L40,25" stroke="#FFFFFF" stroke-width="1"/>
    <path d="M10,25 L23,25" stroke="#FFFFFF" stroke-width="1"/>
  </svg>`,
  
  mail: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
    <rect width="50" height="50" rx="10" fill="#5CACEE"/>
    <rect x="10" y="15" width="30" height="20" rx="2" fill="#FFFFFF"/>
    <path d="M10,15 L25,25 L40,15" stroke="#5CACEE" stroke-width="1" fill="none"/>
  </svg>`,
  
  photos: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
    <rect width="50" height="50" rx="10" fill="#FFFFFF"/>
    <circle cx="25" cy="25" r="15" fill="url(#photos-gradient)"/>
    <defs>
      <linearGradient id="photos-gradient">
        <stop offset="0%" stop-color="#FF9500"/>
        <stop offset="25%" stop-color="#FF3B30"/>
        <stop offset="50%" stop-color="#5856D6"/>
        <stop offset="75%" stop-color="#007AFF"/>
        <stop offset="100%" stop-color="#4CD964"/>
      </linearGradient>
    </defs>
  </svg>`,
  
  music: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
    <rect width="50" height="50" rx="10" fill="#FF3B30"/>
    <circle cx="25" cy="30" r="8" fill="#FFFFFF"/>
    <rect x="24" y="12" width="2" height="18" rx="1" fill="#FFFFFF"/>
  </svg>`,
  
  settings: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
    <rect width="50" height="50" rx="10" fill="#8E8E93"/>
    <circle cx="25" cy="25" r="10" fill="#FFFFFF"/>
    <circle cx="25" cy="25" r="5" fill="#8E8E93"/>
    <path d="M25,5 L25,10" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round"/>
    <path d="M25,40 L25,45" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round"/>
    <path d="M5,25 L10,25" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round"/>
    <path d="M40,25 L45,25" stroke="#FFFFFF" stroke-width="3" stroke-linecap="round"/>
  </svg>`,
  
  videos: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
    <rect width="50" height="50" rx="10" fill="#000000"/>
    <polygon points="20,15 35,25 20,35" fill="#FFFFFF"/>
  </svg>`
};

export default icons; 