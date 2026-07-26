import React from 'react';
import Chart from 'react-apexcharts';
import Header from '../components/Header';
import KPICard from '../components/KPICard';
import IncidentTable from '../components/IncidentTable';
import { v1KpiData, v1Incidents } from '../data/v1Data';

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

const DashboardV1 = () => {
  return (
    <div className="min-h-screen bg-slate-50 font-sans pb-12 text-slate-800 selection:bg-blue-100">
      <Header title="Dashboard Monitoring (Versi 1)" />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4 bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
          <div>
            <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
              Status Operasional
              <span className="bg-slate-100 text-slate-600 text-xs px-2.5 py-1 rounded-full border border-slate-200">
                Single Branch
              </span>
            </h2>
            <p className="text-sm text-slate-500 mt-1">Pemantauan Metrik CSF & KPI secara Real-time (Sebelum Ekspansi).</p>
          </div>
        </div>

        {/* KPI Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {v1KpiData.map((kpi, idx) => (
            <KPICard key={`v1-kpi-${idx}`} {...kpi} />
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          <LeadTimeChart />
          <CSATChart />
        </div>

        {/* Incident Logs Table Section */}
        <div className="mb-8">
          <IncidentTable incidents={v1Incidents} />
        </div>
      </main>
    </div>
  );
};

export default DashboardV1;
