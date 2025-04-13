'use client';

import React, { useEffect, useState, useRef } from 'react';
import StatusBar from './StatusBar';
import NotificationCenter from './NotificationCenter';

interface LockScreenProps {
  onUnlock: () => void;
}

export default function LockScreen({ onUnlock }: LockScreenProps) {
  const [time, setTime] = useState('');
  const [date, setDate] = useState('');
  const [sliderPosition, setSliderPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);
  const sliderWidth = useRef(0);
  const maxSliderPosition = useRef(0);

  // Update time and date
  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      
      // Update time in HH:MM format
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      setTime(`${hours}:${minutes}`);
      
      // Update date in format "Monday, January 1"
      const options: Intl.DateTimeFormatOptions = { 
        weekday: 'long', 
        month: 'long', 
        day: 'numeric' 
      };
      setDate(now.toLocaleDateString('en-US', options));
    };
    
    updateDateTime();
    const interval = setInterval(updateDateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  // Initialize slider measurements
  useEffect(() => {
    if (sliderRef.current && thumbRef.current) {
      sliderWidth.current = sliderRef.current.clientWidth;
      // Maximum position is slider width minus thumb width minus some padding
      maxSliderPosition.current = sliderWidth.current - thumbRef.current.clientWidth - 10;
    }
  }, []);

  // Handler for starting the drag
  const handleMouseDown = (e: React.MouseEvent | React.TouchEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  // Handle mouse/touch move
  const handleMouseMove = (e: MouseEvent | TouchEvent) => {
    if (!isDragging) return;
    
    let clientX: number;
    if ('touches' in e) {
      clientX = e.touches[0].clientX;
    } else {
      clientX = e.clientX;
    }
    
    if (sliderRef.current) {
      const rect = sliderRef.current.getBoundingClientRect();
      let newPosition = clientX - rect.left - (thumbRef.current?.clientWidth || 0) / 2;
      
      // Constrain position within bounds
      newPosition = Math.max(0, Math.min(newPosition, maxSliderPosition.current));
      setSliderPosition(newPosition);
      
      // Check if slider is at the end and trigger unlock
      if (newPosition >= maxSliderPosition.current * 0.9) {
        setIsDragging(false);
        onUnlock();
      }
    }
  };

  // Handle mouse/touch end
  const handleMouseUp = () => {
    if (isDragging) {
      setIsDragging(false);
      // Reset slider if not completed
      setSliderPosition(0);
    }
  };

  // Set up event listeners for mouse/touch movement
  useEffect(() => {
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('touchmove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleMouseUp);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('touchmove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging]);

  return (
    <div className="lock-screen">
      <StatusBar />
      
      <div className="lock-screen-content">
        <div className="time">{time}</div>
        <div className="date">{date}</div>
      </div>
      
      <NotificationCenter />
      
      <div className="slider-container" ref={sliderRef}>
        <div 
          className="slider-thumb" 
          ref={thumbRef}
          style={{ transform: `translateX(${sliderPosition}px)` }}
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
        >
          <div className="arrow-icon">→</div>
        </div>
        <div className="slider-text">slide to unlock</div>
      </div>
    </div>
  );
} 