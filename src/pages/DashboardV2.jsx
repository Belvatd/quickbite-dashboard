import React from 'react';
import Chart from 'react-apexcharts';
import { useParams, Navigate } from 'react-router-dom';
import { AlertTriangle, Users, Server, Smile, RefreshCw, BarChart3 } from 'lucide-react';
import Header from '../components/Header';
import KPICard from '../components/KPICard';
import IncidentTable from '../components/IncidentTable';
import { branchData } from '../data/v2Data';

const BranchLeadTimeChart = ({ branchSlug, baseValue }) => {
  // Generate dynamic dummy trend based on current base value
  const multiplier = branchSlug === 'kemang' ? 1.5 : branchSlug === 'scbd' ? 0.8 : 1;
  const base = parseFloat(baseValue) || 4.2;
  
  const data = [
    (base + 1.2 * multiplier).toFixed(1),
    (base + 0.8 * multiplier).toFixed(1),
    (base + 0.5 * multiplier).toFixed(1),
    (base - 0.2 * multiplier).toFixed(1),
    (base + 0.3 * multiplier).toFixed(1),
    (base - 0.1 * multiplier).toFixed(1),
    base.toFixed(1)
  ];

  const options = {
    chart: { type: 'area', toolbar: { show: false }, fontFamily: 'inherit', parentHeightOffset: 0 },
    colors: [branchSlug === 'kemang' ? '#f59e0b' : '#3b82f6'],
    fill: { type: 'gradient', gradient: { shadeIntensity: 1, opacityFrom: 0.4, opacityTo: 0.05, stops: [0, 90, 100] } },
    dataLabels: { enabled: false },
    stroke: { curve: 'smooth', width: 3 },
    xaxis: { categories: ['5 Ags', '6 Ags', '7 Ags', '8 Ags', '9 Ags', '10 Ags', '11 Ags'], tooltip: { enabled: false }, axisBorder: { show: false }, axisTicks: { show: false } },
    yaxis: { tickAmount: 4, labels: { formatter: (val) => val + ' m' } },
    grid: { borderColor: '#f1f5f9', strokeDashArray: 4, yaxis: { lines: { show: true } } },
    tooltip: { y: { formatter: (val) => val + ' Menit' } }
  };
  
  const series = [{ name: 'Avg Lead Time', data: data.map(Number) }];

  return (
    <div className="bg-white p-5 border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div className="mb-4">
        <h3 className="font-bold text-slate-800">Trend Lead Time (7 Hari Terakhir)</h3>
        <p className="text-xs text-slate-500">Performa waktu tunggu pesanan pelanggan</p>
      </div>
      <div className="h-[250px]">
        <Chart options={options} series={series} type="area" height="100%" />
      </div>
    </div>
  );
};

const BranchCSATChart = ({ branchSlug }) => {
  // Dummy historical distributions tailored for each branch
  const distributions = {
    nasional: [10, 25, 45, 180, 520],
    scbd: [1, 2, 8, 40, 250],
    kemang: [15, 30, 60, 100, 150],
    sudirman: [5, 10, 30, 120, 300],
    tebet: [8, 15, 40, 90, 210]
  };
  
  const data = distributions[branchSlug] || distributions.nasional;

  const options = {
    chart: { type: 'bar', toolbar: { show: false }, fontFamily: 'inherit', parentHeightOffset: 0 },
    colors: ['#ef4444', '#f97316', '#f59e0b', '#3b82f6', '#10b981'],
    plotOptions: { bar: { borderRadius: 4, columnWidth: '40%', distributed: true } },
    dataLabels: { enabled: false },
    xaxis: { categories: ['Sangat Buruk', 'Buruk', 'Cukup', 'Puas', 'Sangat Puas'], axisBorder: { show: false }, axisTicks: { show: false }, labels: { style: { fontSize: '11px', fontWeight: 500 } } },
    yaxis: { tickAmount: 4 },
    grid: { borderColor: '#f1f5f9', strokeDashArray: 4 },
    legend: { show: false },
    tooltip: { y: { formatter: (val) => val + ' Rating' } }
  };
  const series = [{ name: 'Jumlah Feedback', data: data }];

  return (
    <div className="bg-white p-5 border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div className="mb-4">
        <h3 className="font-bold text-slate-800">Distribusi Kepuasan (CSAT)</h3>
        <p className="text-xs text-slate-500">Berdasarkan akumulasi feedback bulan ini</p>
      </div>
      <div className="h-[250px]">
        <Chart options={options} series={series} type="bar" height="100%" />
      </div>
    </div>
  );
};

const DashboardV2 = () => {
  const { branch } = useParams();
  
  if (!branchData[branch]) {
    return <Navigate to="/v2/nasional" replace />;
  }

  const currentData = branchData[branch];
  
  // Extract Lead Time value for dynamic chart generation
  const leadTimeKpi = currentData.kpis["Operasional & SDM"].find(k => k.title.includes('Lead Time'));
  const currentLeadTimeValue = leadTimeKpi ? leadTimeKpi.value.replace(/[^\d.-]/g, '') : "4.2";

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

        {/* Analytics Charts Section */}
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-4">
            <div className="p-1.5 bg-indigo-100 text-indigo-600 rounded-lg"><BarChart3 size={18} /></div>
            <h2 className="text-lg font-bold text-slate-800">Analisis Historis</h2>
            <div className="h-px bg-slate-200 flex-1 ml-4 hidden sm:block"></div>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <BranchLeadTimeChart branchSlug={branch} baseValue={currentLeadTimeValue} />
            <BranchCSATChart branchSlug={branch} />
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
