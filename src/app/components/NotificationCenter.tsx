'use client';

import React, { useState } from 'react';
import Notification from './Notification';

interface NotificationData {
  id: string;
  app: string;
  title: string;
  message: string;
  time: string;
  date: Date;
  icon?: React.ReactNode;
}

interface NotificationCenterProps {
  notifications?: NotificationData[];
}

export default function NotificationCenter({ notifications = [] }: NotificationCenterProps) {
  // Sample notification that matches the image exactly
  const defaultNotifications = [
    {
      id: 'appstore-today',
      app: 'App Store',
      title: 'Calculator App Now Available!',
      message: 'Calculator has finally been released for iPad after 13 years! Download this highly anticipated app now.',
      time: 'Just now',
      date: new Date(),
      icon: (
        <div style={{ backgroundColor: '#0D96F6', borderRadius: '4px', width: '20px', height: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="14" height="14">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
          </svg>
        </div>
      )
    },
    {
      id: 'mail-today-1',
      app: 'Mail',
      title: 'Weekly Newsletter',
      message: 'Check out the latest updates and news from our team.',
      time: '9:45 AM',
      date: new Date(),
      icon: (
        <div style={{ backgroundColor: '#007AFF', borderRadius: '4px', width: '20px', height: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="14" height="14">
            <path d="M0 0h24v24H0V0z" fill="none"/>
            <path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0l-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"/>
          </svg>
        </div>
      )
    },
    {
      id: 'calendar-today',
      app: 'Calendar',
      title: 'Meeting with Design Team',
      message: 'In 30 minutes: Join the video call to discuss new UI components.',
      time: '11:30 AM',
      date: new Date(),
      icon: (
        <div style={{ backgroundColor: '#FF3B30', borderRadius: '4px', width: '20px', height: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="14" height="14">
            <path d="M0 0h24v24H0V0z" fill="none"/>
            <path d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V10h16v11zm0-13H4V5h16v3z"/>
          </svg>
        </div>
      )
    },
    {
      id: 'messages-today',
      app: 'Messages',
      title: 'John Doe',
      message: 'Are we still meeting for lunch today? I was thinking we could try that new restaurant downtown.',
      time: '10:15 AM',
      date: new Date(),
      icon: (
        <div style={{ backgroundColor: '#30D158', borderRadius: '4px', width: '20px', height: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="14" height="14">
            <path d="M0 0h24v24H0V0z" fill="none"/>
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H6l-2 2V4h16v12z"/>
          </svg>
        </div>
      )
    },
    {
      id: 'weather-today',
      app: 'Weather',
      title: 'Rain Expected',
      message: 'Light rain starting in the afternoon. High of 68°F and low of 54°F expected.',
      time: '8:30 AM',
      date: new Date(),
      icon: (
        <div style={{ backgroundColor: '#66D4FF', borderRadius: '4px', width: '20px', height: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="14" height="14">
            <path d="M0 0h24v24H0V0z" fill="none"/>
            <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM19 18H6c-2.21 0-4-1.79-4-4 0-2.05 1.53-3.76 3.56-3.97l1.07-.11.5-.95C8.08 7.14 9.94 6 12 6c2.62 0 4.88 1.86 5.39 4.43l.3 1.5 1.53.11c1.56.1 2.78 1.41 2.78 2.96 0 1.65-1.35 3-3 3z"/>
          </svg>
        </div>
      )
    },
    {
      id: 'google-signin',
      app: 'Google',
      title: 'New sign in from iPhone',
      message: 'New sign in from iPhone iPad. Was this you? If not, someone may have your password. Review the devices that have access to your Google Account.',
      time: 'Yesterday, 11:22 AM',
      date: new Date(Date.now() - 24 * 60 * 60 * 1000), // yesterday
      icon: (
        <div style={{ backgroundColor: '#4285F4', borderRadius: '4px', width: '20px', height: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <span style={{ color: 'white', fontWeight: 'bold', fontSize: '14px' }}>G</span>
        </div>
      )
    },
    {
      id: 'slack-yesterday',
      app: 'Slack',
      title: 'New message in #general',
      message: "Sarah: Has anyone seen the latest design mockups? I can't find them in the shared folder.",
      time: 'Yesterday, 4:45 PM',
      date: new Date(Date.now() - 24 * 60 * 60 * 1000),
      icon: (
        <div style={{ backgroundColor: '#611f69', borderRadius: '4px', width: '20px', height: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="14" height="14">
            <path d="M6 15a2 2 0 100-4 2 2 0 000 4zm0-6a2 2 0 100-4 2 2 0 000 4zm6-2a2 2 0 11-4 0 2 2 0 014 0zm8 2a2 2 0 100-4 2 2 0 000 4zm0 2a2 2 0 110 4 2 2 0 010-4zM12 11a2 2 0 100 4 2 2 0 000-4z" />
          </svg>
        </div>
      )
    },
    {
      id: 'instagram-earlier',
      app: 'Instagram',
      title: 'New follower',
      message: 'John Doe started following you',
      time: 'Monday, 3:22 PM',
      date: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000), // 3 days ago
      icon: (
        <div style={{ background: 'linear-gradient(45deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)', borderRadius: '4px', width: '20px', height: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="14" height="14">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
          </svg>
        </div>
      )
    },
    {
      id: 'twitter-earlier',
      app: 'Twitter',
      title: 'Trending: #WWDC23',
      message: 'Over 25K people are talking about this',
      time: 'Sunday, 10:15 AM',
      date: new Date(Date.now() - 4 * 24 * 60 * 60 * 1000), // 4 days ago
      icon: (
        <div style={{ backgroundColor: '#1DA1F2', borderRadius: '4px', width: '20px', height: '20px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" width="14" height="14">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
          </svg>
        </div>
      )
    },
    ...notifications
  ];

  // State for managing notifications
  const [activeNotifications, setActiveNotifications] = useState<NotificationData[]>(defaultNotifications);

  // Function to remove a notification
  const removeNotification = (id: string) => {
    setActiveNotifications(prevNotifications => 
      prevNotifications.filter(notification => notification.id !== id)
    );
  };

  // Group notifications by day: "Today", "Yesterday", "Earlier"
  const todayDate = new Date();
  todayDate.setHours(0, 0, 0, 0);
  
  const yesterdayDate = new Date(todayDate);
  yesterdayDate.setDate(yesterdayDate.getDate() - 1);

  const groupedNotifications = {
    'Today': activeNotifications.filter(notif => {
      const notifDate = new Date(notif.date);
      notifDate.setHours(0, 0, 0, 0);
      return notifDate.getTime() === todayDate.getTime();
    }),
    'Yesterday': activeNotifications.filter(notif => {
      const notifDate = new Date(notif.date);
      notifDate.setHours(0, 0, 0, 0);
      return notifDate.getTime() === yesterdayDate.getTime();
    }),
    'Earlier': activeNotifications.filter(notif => {
      const notifDate = new Date(notif.date);
      notifDate.setHours(0, 0, 0, 0);
      return notifDate.getTime() < yesterdayDate.getTime();
    })
  };

  return (
    <div className="notification-center">
      {Object.entries(groupedNotifications).map(([group, notifs]) => (
        notifs.length > 0 && (
          <div key={group} className="notification-group">
            <div className="notification-group-header">
              <span>{group}</span>
              {notifs.length > 0 && (
                <button 
                  className="clear-all-btn"
                  onClick={() => {
                    const idsToRemove = notifs.map(n => n.id);
                    setActiveNotifications(prev => 
                      prev.filter(n => !idsToRemove.includes(n.id))
                    );
                  }}
                >
                  Clear All
                </button>
              )}
            </div>
            {notifs.map(notification => (
              <Notification
                key={notification.id}
                app={notification.app}
                title={notification.title}
                message={notification.message}
                time={notification.time}
                icon={notification.icon}
                onRemove={() => removeNotification(notification.id)}
              />
            ))}
          </div>
        )
      ))}
    </div>
  );
} 