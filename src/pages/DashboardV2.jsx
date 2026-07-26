import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { AlertTriangle, Users, Server, Smile, RefreshCw } from 'lucide-react';
import Header from '../components/Header';
import KPICard from '../components/KPICard';
import IncidentTable from '../components/IncidentTable';
import { branchData } from '../data/v2Data';

const DashboardV2 = () => {
  const { branch } = useParams();
  
  if (!branchData[branch]) {
    return <Navigate to="/v2/nasional" replace />;
  }

  const currentData = branchData[branch];

  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-12 text-slate-800 selection:bg-blue-100">
      <Header title="Dashboard Multi-Cabang" subtitle={currentData.name} />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4 bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
          <div>
            <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
              Status Operasional
              <span className="bg-blue-50 text-blue-700 font-bold text-xs px-2.5 py-1 rounded-full border border-blue-200">
                {currentData.name}
              </span>
            </h2>
            <p className="text-sm text-slate-500 mt-1">Pemantauan Metrik CSF & KPI secara Real-time berdasarkan standar Skenario 4.</p>
          </div>
          
          <div className="flex gap-3 w-full sm:w-auto">
            <button className="flex-1 sm:flex-none px-5 py-2.5 bg-white border border-slate-200 text-slate-600 rounded-xl text-sm font-semibold shadow-sm hover:bg-slate-50 transition-colors flex justify-center items-center gap-2">
              Export PDF
            </button>
            <button className="flex-1 sm:flex-none px-5 py-2.5 bg-blue-600 text-white rounded-xl text-sm font-semibold shadow-sm hover:bg-blue-700 transition-colors shadow-blue-600/20 flex justify-center items-center gap-2">
              <RefreshCw size={16} />
              Refresh
            </button>
          </div>
        </div>

        {/* 1. Operasional & SDM */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <div className="p-1.5 bg-orange-100 text-orange-600 rounded-lg"><Users size={18} /></div>
            <h2 className="text-lg font-bold text-slate-800">Operasional & SDM</h2>
            <div className="h-px bg-slate-200 flex-1 ml-4 hidden sm:block"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {currentData.kpis["Operasional & SDM"].map((kpi, idx) => (
              <KPICard key={`ops-${idx}`} {...kpi} />
            ))}
          </div>
        </div>

        {/* 2. Layanan Pelanggan */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <div className="p-1.5 bg-purple-100 text-purple-600 rounded-lg"><Smile size={18} /></div>
            <h2 className="text-lg font-bold text-slate-800">Layanan Pelanggan</h2>
            <div className="h-px bg-slate-200 flex-1 ml-4 hidden sm:block"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {currentData.kpis["Layanan Pelanggan"].map((kpi, idx) => (
              <KPICard key={`cx-${idx}`} {...kpi} />
            ))}
          </div>
        </div>

        {/* 3. Teknologi & Infrastruktur */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <div className="p-1.5 bg-blue-100 text-blue-600 rounded-lg"><Server size={18} /></div>
            <h2 className="text-lg font-bold text-slate-800">Teknologi & Infrastruktur</h2>
            <div className="h-px bg-slate-200 flex-1 ml-4 hidden sm:block"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {currentData.kpis["Teknologi & Infrastruktur"].map((kpi, idx) => (
              <KPICard key={`tech-${idx}`} {...kpi} />
            ))}
          </div>
        </div>

        {/* Incident Logs Table Section */}
        <div className="mb-8">
          <div className="mb-4 flex items-center gap-2">
            <div className="p-1.5 bg-rose-100 text-rose-600 rounded-lg"><AlertTriangle size={18} /></div>
            <div>
              <h2 className="text-lg font-bold text-slate-800">System Logs & Warnings</h2>
              <p className="text-xs text-slate-500">Track and monitor technical and operational issues for {currentData.name}.</p>
            </div>
          </div>
          <IncidentTable incidents={currentData.incidents} />
        </div>
      </main>
    </div>
  );
};

export default DashboardV2;
