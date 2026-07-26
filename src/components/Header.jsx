import React, { useState, useRef, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Server, MapPin, ChevronDown, Bell, Settings, Menu, CheckCircle2 } from 'lucide-react';
import DigitalClock from './DigitalClock';
import { branchesList } from '../data/v2Data';

const Header = ({ title, subtitle }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isV2 = location.pathname.startsWith('/v2');
  
  const [isVersionDropdownOpen, setIsVersionDropdownOpen] = useState(false);
  const [isBranchDropdownOpen, setIsBranchDropdownOpen] = useState(false);
  
  const versionRef = useRef(null);
  const branchRef = useRef(null);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (versionRef.current && !versionRef.current.contains(event.target)) setIsVersionDropdownOpen(false);
      if (branchRef.current && !branchRef.current.contains(event.target)) setIsBranchDropdownOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currentBranchSlug = location.pathname.split('/')[2] || 'nasional';
  const activeBranch = branchesList.find(b => b.slug === currentBranchSlug) || branchesList[0];

  return (
    <header className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-center py-4 md:py-4 gap-4">
          
          <div className="flex items-center gap-4">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 text-white p-2.5 rounded-xl shadow-lg shadow-blue-600/20">
              <Server size={28} strokeWidth={2.5} />
            </div>
            <div>
              <h1 className="text-2xl font-black tracking-tight text-slate-900 leading-none mb-1">
                QuickBite HQ
              </h1>
              <div className="flex items-center gap-2 text-sm font-medium text-slate-500 whitespace-nowrap">
                <span>{title}</span>
                {subtitle && (
                  <>
                    <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                    <span className="text-blue-600 font-bold">{subtitle}</span>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap md:flex-nowrap items-center justify-between md:justify-end gap-3 md:gap-4 w-full md:w-auto">
            
            {/* Version Dropdown */}
            <div className="relative" ref={versionRef}>
              <button 
                onClick={() => setIsVersionDropdownOpen(!isVersionDropdownOpen)}
                className="flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 px-3.5 py-1.5 rounded-lg text-sm font-semibold transition-colors border border-slate-200"
              >
                <span>{isV2 ? 'Versi 2 (Multi-Cabang)' : 'Versi 1 (Original)'}</span>
                <ChevronDown size={16} className={`text-slate-500 transition-transform ${isVersionDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {isVersionDropdownOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-slate-200 rounded-xl shadow-xl overflow-hidden z-50 animate-in fade-in duration-200">
                  <div className="py-1">
                    <button
                      onClick={() => { navigate('/v1'); setIsVersionDropdownOpen(false); }}
                      className={`w-full text-left px-4 py-2.5 text-sm transition-colors flex items-center justify-between ${!isV2 ? 'bg-blue-50 text-blue-700 font-bold' : 'text-slate-600 hover:bg-slate-50'}`}
                    >
                      Versi 1 (Original)
                      {!isV2 && <CheckCircle2 size={16} className="text-blue-600" />}
                    </button>
                    <button
                      onClick={() => { navigate('/v2/nasional'); setIsVersionDropdownOpen(false); }}
                      className={`w-full text-left px-4 py-2.5 text-sm transition-colors flex items-center justify-between ${isV2 ? 'bg-blue-50 text-blue-700 font-bold' : 'text-slate-600 hover:bg-slate-50'}`}
                    >
                      Versi 2 (Multi-Cabang)
                      {isV2 && <CheckCircle2 size={16} className="text-blue-600" />}
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Branch Selector (Only for V2) */}
            {isV2 && (
              <div className="relative" ref={branchRef}>
                <button 
                  onClick={() => setIsBranchDropdownOpen(!isBranchDropdownOpen)}
                  className="flex items-center gap-2 bg-white border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 px-3.5 py-1.5 rounded-lg text-sm font-semibold transition-all shadow-sm"
                >
                  <MapPin size={16} className="text-blue-600" />
                  <span className="max-w-[120px] truncate">{activeBranch.name}</span>
                  <ChevronDown size={16} className={`text-slate-400 transition-transform ${isBranchDropdownOpen ? 'rotate-180' : ''}`} />
                </button>
                
                {isBranchDropdownOpen && (
                  <div className="absolute top-full right-0 mt-2 w-56 bg-white border border-slate-200 rounded-xl shadow-xl overflow-hidden z-50 animate-in fade-in duration-200">
                    <div className="px-3 py-2 border-b border-slate-100 bg-slate-50">
                      <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Pilih Mode / Cabang</p>
                    </div>
                    <div className="py-1">
                      {branchesList.map(branch => (
                        <button
                          key={branch.slug}
                          onClick={() => {
                            navigate(`/v2/${branch.slug}`);
                            setIsBranchDropdownOpen(false);
                          }}
                          className={`w-full text-left px-4 py-2.5 text-sm transition-colors flex items-center justify-between ${
                            currentBranchSlug === branch.slug 
                            ? 'bg-blue-50 text-blue-700 font-bold' 
                            : 'text-slate-600 hover:bg-slate-50 font-medium'
                          }`}
                        >
                          {branch.name}
                          {currentBranchSlug === branch.slug && <CheckCircle2 size={16} className="text-blue-600" />}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
            
            <DigitalClock />
            
            <div className="flex gap-1.5 border-l border-slate-200 pl-3 md:pl-4">
              <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                <Bell size={18} />
              </button>
              <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors hidden sm:block">
                <Settings size={18} />
              </button>
              <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors md:hidden">
                <Menu size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
