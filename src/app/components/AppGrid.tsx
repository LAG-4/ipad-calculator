'use client';

import { useState } from 'react';
import Calculator from './Calculator';

// Inline SVGs for app icons
const appIcons = {
  calculator: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
      <rect width="50" height="50" rx="10" fill="#1C1C1E"/>
      <rect x="10" y="10" width="30" height="10" rx="2" fill="#4CD964"/>
      <rect x="10" y="24" width="6" height="6" rx="1" fill="#FFFFFF"/>
      <rect x="22" y="24" width="6" height="6" rx="1" fill="#FFFFFF"/>
      <rect x="34" y="24" width="6" height="6" rx="1" fill="#FFFFFF"/>
      <rect x="10" y="34" width="6" height="6" rx="1" fill="#FFFFFF"/>
      <rect x="22" y="34" width="6" height="6" rx="1" fill="#FFFFFF"/>
      <rect x="34" y="34" width="6" height="6" rx="1" fill="#FF9500"/>
    </svg>
  ),
  calendar: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
      <rect width="50" height="50" rx="10" fill="#FFFFFF"/>
      <text x="25" y="18" fontFamily="Arial" fontSize="14" fontWeight="bold" textAnchor="middle" fill="#FF3B30">27</text>
      <line x1="10" y1="22" x2="40" y2="22" stroke="#E5E5EA" strokeWidth="1"/>
      <line x1="16" y1="30" x2="16" y2="38" stroke="#E5E5EA" strokeWidth="1"/>
      <line x1="25" y1="30" x2="25" y2="38" stroke="#E5E5EA" strokeWidth="1"/>
      <line x1="34" y1="30" x2="34" y2="38" stroke="#E5E5EA" strokeWidth="1"/>
      <line x1="10" y1="30" x2="40" y2="30" stroke="#E5E5EA" strokeWidth="1"/>
      <line x1="10" y1="38" x2="40" y2="38" stroke="#E5E5EA" strokeWidth="1"/>
    </svg>
  ),
  contacts: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
      <rect width="50" height="50" rx="10" fill="#FFCC00"/>
      <circle cx="25" cy="20" r="8" fill="#FFFFFF"/>
      <path d="M12,40 C12,32 19,29 25,29 C31,29 38,32 38,40" fill="#FFFFFF"/>
    </svg>
  ),
  notes: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
      <rect width="50" height="50" rx="10" fill="#FFCC00"/>
      <line x1="15" y1="15" x2="35" y2="15" stroke="#FFFFFF" strokeWidth="2"/>
      <line x1="15" y1="22" x2="35" y2="22" stroke="#FFFFFF" strokeWidth="2"/>
      <line x1="15" y1="29" x2="35" y2="29" stroke="#FFFFFF" strokeWidth="2"/>
      <line x1="15" y1="36" x2="28" y2="36" stroke="#FFFFFF" strokeWidth="2"/>
    </svg>
  ),
  videos: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
      <rect width="50" height="50" rx="10" fill="#000000"/>
      <polygon points="20,15 35,25 20,35" fill="#FFFFFF"/>
    </svg>
  ),
  maps: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
      <rect width="50" height="50" rx="10" fill="#5AC8FA"/>
      <path d="M15,15 L35,15 L35,35 L15,35 Z" fill="#FFFFFF" fillOpacity="0.6"/>
      <circle cx="25" cy="25" r="5" fill="#FF3B30"/>
    </svg>
  ),
  settings: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
      <rect width="50" height="50" rx="10" fill="#8E8E93"/>
      <circle cx="25" cy="25" r="10" fill="#FFFFFF"/>
      <circle cx="25" cy="25" r="5" fill="#8E8E93"/>
    </svg>
  ),
  mail: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
      <rect width="50" height="50" rx="10" fill="#5CACEE"/>
      <rect x="10" y="15" width="30" height="20" rx="2" fill="#FFFFFF"/>
      <path d="M10,15 L25,25 L40,15" stroke="#5CACEE" strokeWidth="1" fill="none"/>
    </svg>
  ),
  safari: (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
      <circle cx="25" cy="25" r="23" fill="#007AFF"/>
      <circle cx="25" cy="25" r="21" fill="#FFFFFF"/>
      <circle cx="25" cy="25" r="2" fill="#FF3B30"/>
      <path d="M25,10 L25,25 L40,25" stroke="#007AFF" strokeWidth="1" fill="none"/>
    </svg>
  )
};

// Top row apps as shown in the image
const topRowApps = [
  { id: 'calendar', name: 'Calendar', icon: appIcons.calendar },
  { id: 'contacts', name: 'Contacts', icon: appIcons.contacts },
  { id: 'notes', name: 'Notes', icon: appIcons.notes },
  { id: 'maps', name: 'Maps', icon: appIcons.maps }
];

// Second row apps
const secondRowApps = [
  { id: 'videos', name: 'Videos', icon: appIcons.videos },
  { id: 'safari', name: 'Safari', icon: appIcons.safari },
  { id: 'mail', name: 'Mail', icon: appIcons.mail },
  { id: 'calculator', name: 'Calculator', icon: appIcons.calculator }
];

// Bottom dock apps
const dockApps = [
  { id: 'messages', name: 'Messages', icon: appIcons.mail },
  { id: 'mail', name: 'Mail', icon: appIcons.mail },
  { id: 'safari', name: 'Safari', icon: appIcons.safari },
  { id: 'music', name: 'Music', icon: appIcons.videos }
];

export default function AppGrid() {
  const [openApp, setOpenApp] = useState<string | null>(null);

  const handleAppClick = (appId: string) => {
    setOpenApp(appId);
  };

  const handleCloseApp = () => {
    setOpenApp(null);
  };

  return (
    <div className="ipad-container">
      <div className="app-grid">
        <div className="app-grid-row">
          {topRowApps.map((app) => (
            <div key={app.id} className="app-icon" onClick={() => handleAppClick(app.id)}>
              <div className="app-icon-image">
                {app.icon}
              </div>
              <div className="app-icon-label">{app.name}</div>
            </div>
          ))}
        </div>
        
        <div className="app-grid-row">
          {secondRowApps.map((app) => (
            <div key={app.id} className="app-icon" onClick={() => handleAppClick(app.id)}>
              <div className="app-icon-image">
                {app.icon}
              </div>
              <div className="app-icon-label">{app.name}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="dock">
        {dockApps.map((app) => (
          <div key={app.id} className="dock-icon" onClick={() => handleAppClick(app.id)}>
            {app.icon}
          </div>
        ))}
      </div>

      <Calculator 
        visible={openApp === 'calculator'} 
        onClose={handleCloseApp} 
      />
    </div>
  );
} 