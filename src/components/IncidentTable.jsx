import React from 'react';
import { Search } from 'lucide-react';

const IncidentTable = ({ incidents }) => {
  return (
    <div className="bg-white border border-slate-200 rounded-xl shadow-sm overflow-hidden">
      <div className="p-5 border-b border-slate-200 flex flex-col sm:flex-row justify-between sm:items-center gap-4 bg-slate-50/50">
        <h3 className="font-bold text-slate-800">Recent Incident Logs</h3>
        <div className="relative w-full sm:w-auto">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={16} />
          <input 
            type="text" 
            placeholder="Search logs..." 
            className="pl-9 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all w-full sm:w-64"
          />
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm text-slate-600">
          <thead className="bg-slate-50 text-slate-500 font-semibold border-b border-slate-200 uppercase tracking-wider text-[11px]">
            <tr>
              <th className="px-6 py-4">Waktu</th>
              <th className="px-6 py-4">Kategori CSF</th>
              <th className="px-6 py-4">Deskripsi Insiden</th>
              <th className="px-6 py-4">Status Resolusi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {incidents.length > 0 ? incidents.map((inc) => (
              <tr key={inc.id} className="hover:bg-slate-50 transition-colors">
                <td className="px-6 py-4 font-medium text-slate-700 whitespace-nowrap">
                  {inc.waktu}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2.5 py-1.5 rounded-md text-xs font-semibold border ${inc.kategoriColor}`}>
                    {inc.kategori}
                  </span>
                </td>
                <td className="px-6 py-4 min-w-[300px]">
                  {inc.deskripsi}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-2.5 py-1.5 rounded-full text-xs font-bold border flex w-max items-center gap-1.5 ${inc.statusColor}`}>
                    <span className={`w-1.5 h-1.5 rounded-full ${inc.statusColor.match(/text-(\w+)-700/)?.[1] === 'amber' ? 'bg-amber-500' : inc.statusColor.match(/text-(\w+)-700/)?.[1] === 'emerald' ? 'bg-emerald-500' : 'bg-rose-500'}`}></span>
                    {inc.status}
                  </span>
                </td>
              </tr>
            )) : (
              <tr>
                <td colSpan="4" className="px-6 py-8 text-center text-slate-400 italic">
                  Tidak ada insiden tercatat saat ini.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IncidentTable;
