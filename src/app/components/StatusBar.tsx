'use client';

import { useEffect, useState } from 'react';

export default function StatusBar() {
  const [time, setTime] = useState('');
  
  useEffect(() => {
    function updateTime() {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      setTime(`${hours}:${minutes}`);
    }
    
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="status-bar">
      <div className="status-left">
        <div className="ipad-text">iPad</div>
        <div className="wifi-icon">
          <svg width="18" height="13" viewBox="0 0 18 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 4L2 6C6.5 1.5 11.5 1.5 16 6L18 4C12.5 -1.5 5.5 -1.5 0 4Z" fill="white"/>
            <path d="M3 7L5 9C7.5 6.5 10.5 6.5 13 9L15 7C11.5 3.5 6.5 3.5 3 7Z" fill="white"/>
            <path d="M6 10L9 13L12 10C10.5 8.5 7.5 8.5 6 10Z" fill="white"/>
          </svg>
        </div>
      </div>
      <div className="status-center">
        <div className="status-time">{time}</div>
      </div>
      <div className="status-right">
        <div className="signal-icon">
          <div className="signal-bar"></div>
          <div className="signal-bar"></div>
          <div className="signal-bar"></div>
          <div className="signal-bar signal-active"></div>
        </div>
        <div className="battery-container">
          <div className="battery-percentage">34%</div>
          <div className="battery-icon">
            <div className="battery-body">
              <div className="battery-level" style={{ width: '34%' }}></div>
            </div>
            <div className="battery-tip"></div>
          </div>
        </div>
      </div>
    </div>
  );
} 