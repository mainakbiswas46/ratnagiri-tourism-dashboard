import { useState } from 'react';
import { BarChart3, Map, Tent, ShieldAlert } from 'lucide-react';
import { useLocations } from '../context/LocationsContext';
import { useNavigate } from 'react-router-dom';

export default function DashboardOverview() {
  const { locations, loading } = useLocations();
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  if (loading) return <div className="p-8 text-center animate-pulse font-medium text-slate-500">Loading live database...</div>;

  const totalLocations = locations.length;
  const dapoliLocations = locations.filter(loc => loc.taluka.toLowerCase() === 'dapoli').length;

  const filtered = locations.filter(loc => 
    `${loc.name} ${loc.landmark} ${loc.village} ${loc.taluka} ${loc.roadStatus}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="animate-in fade-in duration-500">
      <div className="bg-gradient-to-br from-slate-800 to-slate-700 text-white p-8 rounded-2xl mb-8 shadow-sm">
        <h1 className="text-3xl font-bold mb-2">Ratnagiri Tourism Dashboard</h1>
        <p className="opacity-80 text-lg">Strategic information center tracking geographical coordinates, road quality infrastructure, and ecological profiles.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="text-xs text-slate-500 uppercase tracking-wide font-semibold mb-2">Monitored Form Records</h3>
          <p className="text-3xl font-bold text-slate-900">{locations.length} Active Entries</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="text-xs text-slate-500 uppercase tracking-wide font-semibold mb-2">Active Sub-Districts</h3>
          <p className="text-3xl font-bold text-slate-900">1 Taluka (Dapoli)</p>
        </div>
        <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
          <h3 className="text-xs text-slate-500 uppercase tracking-wide font-semibold mb-2">Target Territory</h3>
          <p className="text-3xl font-bold text-slate-900">Ratnagiri District</p>
        </div>
      </div>

      <div className="mb-8">
        <input 
          type="text" 
          placeholder="🔍 Unified Query Search: filter across location names, talukas, villages, landmarks..." 
          className="w-full p-4 border border-slate-300 rounded-xl focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-lg"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filtered.map(loc => (
          <div 
            key={loc.id} 
            onClick={() => navigate(`/profile/${loc.id}`)}
            className="bg-white rounded-xl border border-slate-200 p-6 cursor-pointer hover:-translate-y-1 hover:shadow-xl hover:border-blue-400 transition-all duration-200"
          >
            <h3 className="text-xl font-bold text-slate-900 mb-4">{loc.name}</h3>
            <p className="text-sm text-slate-600 mb-2 flex items-center gap-2">📍 <span className="font-semibold">Landmark:</span> {loc.landmark}</p>
            <p className="text-sm text-slate-600 mb-4 flex items-center gap-2">🏛️ <span className="font-semibold">Administrative:</span> {loc.village}, {loc.taluka}</p>
            <div className="flex gap-2">
              <span className="px-3 py-1 bg-sky-100 text-sky-700 text-xs font-bold rounded-full">{loc.category}</span>
              <span className={`px-3 py-1 text-xs font-bold rounded-full ${loc.roadStatus.includes('Good') ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'}`}>
                {loc.roadStatus}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
