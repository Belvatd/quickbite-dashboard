import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import { 
  Clock, 
  AlertTriangle, 
  Activity, 
  Smile, 
  ShoppingCart, 
  CheckCircle2,
  Search,
  Settings,
  Bell,
  Menu,
  Info
} from 'lucide-react';

const DigitalClock = () => {
  const [time, setTime] = useState('');
  
  useEffect(() => {
    // Simulated date: 11 Agustus 2026
    const tick = () => {
      const now = new Date();
      // Force date to 11 Agustus 2026 for demonstration, keeping real time
      now.setFullYear(2026);
      now.setMonth(7); // August (0-indexed)
      now.setDate(11);

      const formattedTime = now.toLocaleTimeString('id-ID', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      });

      const formattedDate = now.toLocaleDateString('id-ID', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      });

      setTime(`${formattedTime} WIB | ${formattedDate}`);
    };
    
    tick();
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center space-x-2 text-slate-600 bg-slate-100 px-3 py-1.5 rounded-md font-medium text-sm border border-slate-200">
      <Clock size={16} />
      <span>{time}</span>
    </div>
  );
};

const KPICard = ({ title, value, target, status, Icon, description }) => {
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

  return (
    <div className="bg-white rounded-xl p-5 border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4 relative">
        <div className="flex items-center gap-1.5 group cursor-help">
          <h3 className="text-slate-500 font-semibold text-sm">{title}</h3>
          <Info size={14} className="text-slate-400 hover:text-slate-600 transition-colors" />
          
          {/* Tooltip Popup */}
          {description && (
            <div className="absolute left-0 top-6 hidden group-hover:block w-48 z-20">
              <div className="bg-slate-800 text-white text-xs p-2 rounded shadow-lg relative font-medium leading-relaxed">
                {description}
                <div className="absolute -top-1 left-4 w-2 h-2 bg-slate-800 transform rotate-45"></div>
              </div>
            </div>
          )}
        </div>
        <div className={`p-2 rounded-lg ${statusStyles[status]} border bg-opacity-50`}>
          <Icon size={20} className={iconColors[status]} />
        </div>
      </div>
      
      <div className="flex items-baseline space-x-2">
        <h2 className="text-3xl font-bold text-slate-800">{value}</h2>
      </div>
      
      <div className="mt-4 flex items-center justify-between">
        <span className="text-xs text-slate-400 font-medium">Target: {target}</span>
        <span className={`text-xs font-bold px-2 py-1 rounded-full ${statusStyles[status]}`}>
          {status}
        </span>
      </div>
    </div>
  );
};

const IncidentTable = () => {
  const incidents = [
    {
      id: "INC-001",
      waktu: "11 Ags 2026 10:45",
      kategori: "Teknologi",
      deskripsi: "Sync POS Terminal 3 ke Cloud lambat (>3s)",
      status: "In Progress",
      kategoriColor: "bg-blue-50 text-blue-700 border-blue-200",
      statusColor: "bg-amber-50 text-amber-700 border-amber-200"
    },
    {
      id: "INC-002",
      waktu: "11 Ags 2026 09:12",
      kategori: "Layanan",
      deskripsi: "Komplain: Pesanan QR tidak masuk ke Kitchen Display",
      status: "Resolved",
      kategoriColor: "bg-purple-50 text-purple-700 border-purple-200",
      statusColor: "bg-emerald-50 text-emerald-700 border-emerald-200"
    },
    {
      id: "INC-003",
      waktu: "11 Ags 2026 08:30",
      kategori: "Operasional",
      deskripsi: "Stok bahan baku 'Ayam Katsu' menipis di sistem",
      status: "Pending",
      kategoriColor: "bg-orange-50 text-orange-700 border-orange-200",
      statusColor: "bg-rose-50 text-rose-700 border-rose-200"
    }
  ];

  return (
    <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
      <div className="p-5 border-b border-slate-200 flex justify-between items-center bg-slate-50/50">
        <h3 className="font-bold text-slate-800">Recent Incident Logs</h3>
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
          <input 
            type="text" 
            placeholder="Search logs..." 
            className="pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all w-64"
          />
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-slate-600">
          <thead className="bg-slate-50 text-slate-500 font-semibold border-b border-slate-200 uppercase tracking-wider text-xs">
            <tr>
              <th className="px-6 py-4">Waktu</th>
              <th className="px-6 py-4">Kategori CSF</th>
              <th className="px-6 py-4">Deskripsi Insiden</th>
              <th className="px-6 py-4">Status Resolusi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {incidents.map((inc) => (
              <tr key={inc.id} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4 font-medium text-slate-700 whitespace-nowrap">
                  {inc.waktu}
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2.5 py-1 rounded-md text-xs font-semibold border ${inc.kategoriColor}`}>
                    {inc.kategori}
                  </span>
                </td>
                <td className="px-6 py-4">
                  {inc.deskripsi}
                </td>
                <td className="px-6 py-4">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-bold border flex w-max items-center gap-1.5 ${inc.statusColor}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${inc.statusColor.match(/text-(\w+)-700/)[1] === 'amber' ? 'bg-amber-500' : inc.statusColor.match(/text-(\w+)-700/)[1] === 'emerald' ? 'bg-emerald-500' : 'bg-rose-500'}`}></span>
                    {inc.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const LeadTimeChart = () => {
  const options = {
    chart: { type: 'area', toolbar: { show: false }, fontFamily: 'inherit', parentHeightOffset: 0 },
    colors: ['#3b82f6'],
    fill: { type: 'gradient', gradient: { shadeIntensity: 1, opacityFrom: 0.4, opacityTo: 0.05, stops: [0, 90, 100] } },
    dataLabels: { enabled: false },
    stroke: { curve: 'smooth', width: 3 },
    xaxis: { categories: ['5 Ags', '6 Ags', '7 Ags', '8 Ags', '9 Ags', '10 Ags', '11 Ags'], tooltip: { enabled: false }, axisBorder: { show: false }, axisTicks: { show: false } },
    yaxis: { min: 3, max: 7, tickAmount: 4, labels: { formatter: (val) => val + ' m' } },
    grid: { borderColor: '#f1f5f9', strokeDashArray: 4, yaxis: { lines: { show: true } } },
    tooltip: { y: { formatter: (val) => val + ' Menit' } }
  };
  const series = [{ name: 'Avg Lead Time', data: [5.8, 5.2, 4.9, 4.5, 4.8, 4.4, 4.2] }];

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

const CSATChart = () => {
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
  const series = [{ name: 'Jumlah Feedback', data: [2, 5, 12, 45, 136] }];

  return (
    <div className="bg-white p-5 border border-slate-200 rounded-xl shadow-sm hover:shadow-md transition-shadow">
      <div className="mb-4">
        <h3 className="font-bold text-slate-800">Distribusi CSAT</h3>
        <p className="text-xs text-slate-500">Berdasarkan 200 feedback terakhir</p>
      </div>
      <div className="h-[250px]">
        <Chart options={options} series={series} type="bar" height="100%" />
      </div>
    </div>
  );
};

function App() {
  const kpiData = [
    { title: "Avg Lead Time", value: "4.2 Menit", target: "< 5 Menit", status: "Optimal", Icon: Clock, description: "Rata-rata waktu pemrosesan dari pemesanan hingga makanan siap." },
    { title: "Order Error Rate", value: "2.1%", target: "< 2%", status: "Warning", Icon: AlertTriangle, description: "Persentase pesanan dengan kesalahan (salah menu, kurang item, dll)." },
    { title: "System Uptime", value: "99.8%", target: "> 99.5%", status: "Optimal", Icon: Activity, description: "Tingkat ketersediaan server dan sistem POS (tanpa gangguan)." },
    { title: "CSAT Score", value: "4.6 / 5.0", target: "> 4.5", status: "Optimal", Icon: Smile, description: "Skor Kepuasan Pelanggan (Customer Satisfaction) dari feedback." },
    { title: "Cart Abandonment", value: "3.2%", target: "< 5%", status: "Optimal", Icon: ShoppingCart, description: "Persentase pelanggan yang membatalkan pesanan sebelum bayar." },
    { title: "SOP Compliance", value: "100%", target: "100%", status: "Optimal", Icon: CheckCircle2, description: "Kepatuhan staf terhadap Standar Operasional Prosedur." },
  ];

  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-12 text-slate-800">
      {/* Topbar / Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center py-4 md:py-0 md:h-20 gap-4">
            {/* Logo & Title */}
            <div className="flex items-center gap-4">
              <div className="bg-blue-600 text-white p-2.5 rounded-xl shadow-lg shadow-blue-600/20">
                <Activity size={28} strokeWidth={2.5} />
              </div>
              <div>
                <h1 className="text-2xl font-black tracking-tight text-slate-900 leading-none mb-1">
                  QuickBite HQ
                </h1>
                <p className="text-sm font-medium text-slate-500">
                  Dashboard Monitoring Performa Kantin Kampus
                </p>
              </div>
            </div>

            {/* Right side Header */}
            <div className="flex items-center justify-between md:justify-end gap-4 w-full md:w-auto">
              <span className="hidden lg:inline-flex items-center bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold border border-blue-200">
                <span className="w-2 h-2 rounded-full bg-blue-600 mr-2 animate-pulse"></span>
                Week 1 Operations
              </span>
              
              <DigitalClock />
              
              <div className="flex gap-2 border-l border-slate-200 pl-4">
                <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors" title="Notifications">
                  <Bell size={20} />
                </button>
                <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors hidden sm:block" title="Settings">
                  <Settings size={20} />
                </button>
                <button className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-lg transition-colors md:hidden" title="Menu">
                  <Menu size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        {/* Page Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
          <div>
            <h2 className="text-xl font-bold text-slate-800">Real-time Metrics</h2>
            <p className="text-sm text-slate-500">Critical Success Factors (CSF) & KPI Overview</p>
          </div>
          
          <div className="flex gap-3 w-full sm:w-auto">
            <button className="flex-1 sm:flex-none px-4 py-2 bg-white border border-slate-200 text-slate-600 rounded-lg text-sm font-semibold shadow-sm hover:bg-slate-50 transition-colors">
              Export Report
            </button>
            <button className="flex-1 sm:flex-none px-4 py-2 bg-blue-600 text-white rounded-lg text-sm font-semibold shadow-sm hover:bg-blue-700 transition-colors shadow-blue-600/20">
              Refresh Data
            </button>
          </div>
        </div>

        {/* KPI Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {kpiData.map((kpi, idx) => (
            <KPICard key={idx} {...kpi} />
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <LeadTimeChart />
          <CSATChart />
        </div>

        {/* Incident Logs Table Section */}
        <div className="mb-8">
          <div className="mb-4">
            <h2 className="text-xl font-bold text-slate-800">System Logs & Warnings</h2>
            <p className="text-sm text-slate-500">Track and monitor technical and operational issues.</p>
          </div>
          <IncidentTable />
        </div>
      </main>
    </div>
  );
}

export default App;
