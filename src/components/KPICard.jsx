import React from 'react';
import { 
  Clock, AlertTriangle, Activity, Smile, ShoppingCart, CheckCircle2, 
  ThumbsUp, Terminal, Utensils, Wrench, Zap, CreditCard, Wifi, RefreshCw, ShieldCheck,
  Users, Server, Info
} from 'lucide-react';

const iconMap = {
  Clock, AlertTriangle, Activity, Smile, ShoppingCart, CheckCircle2, 
  ThumbsUp, Terminal, Utensils, Wrench, Zap, CreditCard, Wifi, RefreshCw, ShieldCheck,
  Users, Server
};

const KPICard = ({ title, value, target, status, iconName, description }) => {
  const statusStyles = {
    Optimal: "bg-emerald-50 text-emerald-700 border-emerald-200",
    Warning: "bg-amber-50 text-amber-700 border-amber-200",
    Critical: "bg-rose-50 text-rose-700 border-rose-200"
  };
  
  const iconColors = {
    Optimal: "text-emerald-500",
    Warning: "text-amber-500",
    Critical: "text-rose-500"
  };

  const IconComponent = iconMap[iconName] || Activity;

  return (
    <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start mb-4 relative">
          <div className="flex items-center gap-1.5 group cursor-help w-3/4">
            <h3 className="text-slate-600 font-semibold text-sm leading-tight">{title}</h3>
            {description && <Info size={14} className="text-slate-400 hover:text-slate-600 transition-colors flex-shrink-0" />}
            
            {description && (
              <div className="absolute left-0 top-6 hidden group-hover:block w-56 z-30">
                <div className="bg-slate-800 text-white text-xs p-2.5 rounded shadow-xl relative font-medium leading-relaxed">
                  {description}
                  <div className="absolute -top-1 left-4 w-2.5 h-2.5 bg-slate-800 transform rotate-45"></div>
                </div>
              </div>
            )}
          </div>
          <div className={`p-2 rounded-lg ${statusStyles[status]} border bg-opacity-50 flex-shrink-0`}>
            <IconComponent size={20} className={iconColors[status]} />
          </div>
        </div>
        
        <div className="flex items-baseline space-x-2">
          <h2 className="text-2xl font-bold text-slate-800 tracking-tight">{value}</h2>
        </div>
      </div>
      
      <div className="mt-4 flex items-center justify-between">
        <span className="text-xs text-slate-500 font-medium bg-slate-50 px-2 py-1 rounded border border-slate-100">Target: {target}</span>
        <span className={`text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-full ${statusStyles[status]}`}>
          {status}
        </span>
      </div>
    </div>
  );
};

export default KPICard;
