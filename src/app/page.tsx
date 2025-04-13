'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const StatusBar = dynamic(() => import('./components/StatusBar'), { ssr: false });
const AppGrid = dynamic(() => import('./components/AppGrid'), { ssr: false });

export default function Home() {
  return (
    <main className="min-h-screen">
      <StatusBar />
      <AppGrid />
    </main>
  );
}
