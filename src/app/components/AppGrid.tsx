'use client';

import { useState } from 'react';
import Image from 'next/image';
import Calculator from './Calculator';

// App data with image paths
const topRowApps = [
  { id: 'calendar', name: 'Calendar', icon: '/calendar.png' },
  { id: 'contacts', name: 'Contacts', icon: '/contacts.png' },
  { id: 'notes', name: 'Notes', icon: '/notes.jpg' },
  { id: 'maps', name: 'Maps', icon: '/maps.png' }
];

// Second row apps
const secondRowApps = [
  { id: 'videos', name: 'Videos', icon: '/videos.png' },
  { id: 'safari', name: 'Safari', icon: '/safari.png' },
  { id: 'mail', name: 'Mail', icon: '/mail.svg' },
  { id: 'calculator', name: 'Calculator', icon: '/calculator.png' }
];

// Bottom dock apps - only mail, safari, contacts and calculator
const dockApps = [
  { id: 'mail', name: 'Mail', icon: '/mail.svg' },
  { id: 'safari', name: 'Safari', icon: '/safari.png' },
  { id: 'contacts', name: 'Contacts', icon: '/contacts.png' },
  { id: 'calculator', name: 'Calculator', icon: '/calculator.png' }
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
                <Image 
                  src={app.icon} 
                  alt={app.name}
                  width={60} 
                  height={60}
                  className="rounded-2xl"
                />
              </div>
              <div className="app-icon-label">{app.name}</div>
            </div>
          ))}
        </div>
        
        <div className="app-grid-row">
          {secondRowApps.map((app) => (
            <div key={app.id} className="app-icon" onClick={() => handleAppClick(app.id)}>
              <div className="app-icon-image">
                <Image 
                  src={app.icon} 
                  alt={app.name}
                  width={60} 
                  height={60}
                  className="rounded-2xl"
                />
              </div>
              <div className="app-icon-label">{app.name}</div>
            </div>
          ))}
        </div>
      </div>

      <div className="dock">
        {dockApps.map((app) => (
          <div key={app.id} className="dock-icon" onClick={() => handleAppClick(app.id)}>
            <Image 
              src={app.icon}
              alt={app.name}
              width={56}
              height={56}
              className="rounded-2xl"
            />
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