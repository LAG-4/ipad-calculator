'use client';

import { useState, useEffect, useRef } from 'react';
import { IoChevronForward } from 'react-icons/io5';

export default function LockScreen({ onUnlock }) {
  const [currentTime, setCurrentTime] = useState('');
  const [currentDate, setCurrentDate] = useState('');
  const [isSliding, setIsSliding] = useState(false);
  const [sliderPosition, setSliderPosition] = useState(0);
  const [isLocked, setIsLocked] = useState(true);
  const sliderRef = useRef(null);
  const thumbRef = useRef(null);
  const trackWidth = useRef(0);
  const startX = useRef(0);

  // Update time and date
  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      
      // Format time (HH:MM)
      const hours = now.getHours();
      const minutes = now.getMinutes();
      setCurrentTime(`${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`);
      
      // Format date (Day of week, Month Day)
      const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      setCurrentDate(`${days[now.getDay()]}, ${months[now.getMonth()]} ${now.getDate()}`);
    };
    
    updateDateTime();
    const intervalId = setInterval(updateDateTime, 60000); // Update every minute
    
    return () => clearInterval(intervalId);
  }, []);

  // Handle slider touch/mouse events
  useEffect(() => {
    const handleTouchStart = (e) => {
      if (!sliderRef.current) return;
      
      startX.current = e.touches ? e.touches[0].clientX : e.clientX;
      trackWidth.current = sliderRef.current.clientWidth - (thumbRef.current?.clientWidth || 0);
      setIsSliding(true);
    };

    const handleTouchMove = (e) => {
      if (!isSliding) return;
      
      const currentX = e.touches ? e.touches[0].clientX : e.clientX;
      const diffX = currentX - startX.current;
      
      let newPosition = Math.max(0, Math.min(diffX, trackWidth.current));
      setSliderPosition(newPosition);
      
      // Check if slider has reached the end
      if (newPosition >= trackWidth.current * 0.8) {
        handleUnlock();
      }
    };

    const handleTouchEnd = () => {
      if (!isSliding) return;
      
      setIsSliding(false);
      
      // Reset slider if not unlocked
      if (isLocked) {
        setSliderPosition(0);
      }
    };

    const thumbElement = thumbRef.current;
    
    if (thumbElement) {
      thumbElement.addEventListener('touchstart', handleTouchStart);
      thumbElement.addEventListener('mousedown', handleTouchStart);
      window.addEventListener('touchmove', handleTouchMove);
      window.addEventListener('mousemove', handleTouchMove);
      window.addEventListener('touchend', handleTouchEnd);
      window.addEventListener('mouseup', handleTouchEnd);
    }

    return () => {
      if (thumbElement) {
        thumbElement.removeEventListener('touchstart', handleTouchStart);
        thumbElement.removeEventListener('mousedown', handleTouchStart);
        window.removeEventListener('touchmove', handleTouchMove);
        window.removeEventListener('mousemove', handleTouchMove);
        window.removeEventListener('touchend', handleTouchEnd);
        window.removeEventListener('mouseup', handleTouchEnd);
      }
    };
  }, [isSliding, isLocked]);

  const handleUnlock = () => {
    setIsLocked(false);
    if (onUnlock) {
      setTimeout(() => {
        onUnlock();
      }, 500); // Delay to allow animation to complete
    }
  };

  return (
    <div className={`lock-screen ${!isLocked ? 'hidden' : ''}`}>
      <div className="lock-screen-content">
        <div className="time">{currentTime}</div>
        <div className="date">{currentDate}</div>
      </div>
      
      <div className="slider-container" ref={sliderRef}>
        <div className="slider-track">
          <div className="slider-text">slide to unlock</div>
        </div>
        <div 
          className="slider-thumb" 
          ref={thumbRef}
          style={{ transform: `translateX(${sliderPosition}px)` }}
        >
          <IoChevronForward className="arrow-icon" />
        </div>
      </div>
    </div>
  );
} 