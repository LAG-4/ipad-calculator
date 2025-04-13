'use client';

import React, { useState } from 'react';
import dynamic from 'next/dynamic';

const StatusBar = dynamic(() => import('./components/StatusBar'), { ssr: false });
const AppGrid = dynamic(() => import('./components/AppGrid'), { ssr: false });
const LockScreen = dynamic(() => import('./components/LockScreen'), { ssr: false });

export default function Home() {
  const [isLocked, setIsLocked] = useState(true);

  const handleUnlock = () => {
    setIsLocked(false);
  };

  return (
    <main className="min-h-screen">
      {!isLocked && <StatusBar />}
      <AppGrid />
      {isLocked && <LockScreen onUnlock={handleUnlock} />}
    </main>
  );
}
