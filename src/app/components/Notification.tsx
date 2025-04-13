'use client';

import React, { useRef, useState } from 'react';

interface NotificationProps {
  app: string;
  title: string;
  message: string;
  time: string;
  icon?: string | React.ReactNode;
  onRemove?: () => void;
}

export default function Notification({ app, title, message, time, icon, onRemove }: NotificationProps) {
  const [startX, setStartX] = useState<number | null>(null);
  const [currentOffset, setCurrentOffset] = useState(0);
  const [isRemoving, setIsRemoving] = useState(false);
  const notificationRef = useRef<HTMLDivElement>(null);
  
  // Threshold to consider a notification removed (in pixels)
  const removeThreshold = 100;

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setStartX(e.clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (startX === null) return;
    
    const currentX = e.touches[0].clientX;
    const deltaX = currentX - startX;
    
    // Only allow swiping to the left (negative deltaX)
    if (deltaX < 0) {
      setCurrentOffset(deltaX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (startX === null) return;
    
    const deltaX = e.clientX - startX;
    
    // Only allow swiping to the left (negative deltaX)
    if (deltaX < 0) {
      setCurrentOffset(deltaX);
    }
  };

  const handleTouchEnd = () => {
    if (currentOffset < -removeThreshold && onRemove) {
      setIsRemoving(true);
      setTimeout(() => {
        onRemove();
      }, 300);
    } else {
      // Reset position if not removing
      setCurrentOffset(0);
    }
    setStartX(null);
  };

  const handleMouseUp = () => {
    handleTouchEnd();
  };

  const handleMouseLeave = () => {
    if (startX !== null) {
      handleTouchEnd();
    }
  };

  return (
    <div 
      className={`notification-wrapper ${isRemoving ? 'removing' : ''}`}
      ref={notificationRef}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
    >
      <div 
        className="notification"
        style={{ 
          transform: `translateX(${currentOffset}px)`,
          opacity: 1 - Math.abs(currentOffset) / (removeThreshold * 2)
        }}
      >
        <div className="notification-icon">
          {icon || 
            <div className="default-icon">
              <div className="mail-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="20" height="20">
                  <path d="M0 0h24v24H0V0z" fill="none"/>
                  <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/>
                </svg>
              </div>
            </div>
          }
        </div>
        <div className="notification-content">
          <div className="notification-header">
            <div className="notification-app">{app}</div>
            <div className="notification-time">{time}</div>
          </div>
          <div className="notification-title">{title}</div>
          <div className="notification-message">{message}</div>
        </div>
      </div>
      <div 
        className="notification-delete"
        style={{ 
          opacity: Math.min(1, Math.abs(currentOffset) / removeThreshold)
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="white">
          <path d="M0 0h24v24H0V0z" fill="none"/>
          <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM8 9h8v10H8V9zm7.5-5l-1-1h-5l-1 1H5v2h14V4h-3.5z"/>
        </svg>
        <span>Clear</span>
      </div>
    </div>
  );
} 