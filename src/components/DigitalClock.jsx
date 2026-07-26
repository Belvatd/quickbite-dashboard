import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

const DigitalClock = () => {
  const [time, setTime] = useState('');
  
  useEffect(() => {
    const tick = () => {
      const now = new Date();
      now.setFullYear(2026);
      now.setMonth(7);
      now.setDate(11);
      const formattedTime = now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false });
      const formattedDate = now.toLocaleDateString('id-ID', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
      setTime(`${formattedTime} WIB | ${formattedDate}`);
    };
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center space-x-2 text-slate-600 bg-slate-100 px-3 py-1.5 rounded-md font-medium text-sm border border-slate-200">
      <Clock size={16} />
      <span className="hidden sm:inline">{time}</span>
    </div>
  );
};

export default DigitalClock;
