import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocations } from '../context/LocationsContext';

export default function LocationDirectory() {
  const { locations, loading } = useLocations();
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  if (loading) return <div className="p-8 text-center animate-pulse font-medium text-slate-500">Loading live database...</div>;

  const filtered = locations.filter(loc => 
    `${loc.name} ${loc.landmark} ${loc.village} ${loc.taluka} ${loc.roadStatus}`.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="animate-in fade-in duration-500 max-w-6xl mx-auto">
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8 rounded-2xl mb-8 shadow-sm">
        <h1 className="text-3xl font-bold mb-2">📍 Regional Explorations Hub</h1>
        <p className="opacity-80 text-lg">Select a specific location from your database to see its individual detailed profile page.</p>
      </div>

      <div className="mb-8">
        <input 
          type="text" 
          placeholder="🔍 Search locations by title, landmarks, taluka, or road conditions..." 
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
              <span className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full">{loc.category}</span>
              <span className={`px-3 py-1 text-xs font-bold rounded-full ${loc.roadStatus.includes('Good') ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                {loc.roadStatus}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
