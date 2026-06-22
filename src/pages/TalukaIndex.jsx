import { useLocations } from '../context/LocationsContext';
import { useNavigate } from 'react-router-dom';

export default function TalukaIndex() {
  const navigate = useNavigate();
  const { locations, loading } = useLocations();

  if (loading) return <div className="p-8 text-center animate-pulse font-medium text-slate-500">Loading live database...</div>;
  
  // Group by taluka
  const dapoliLocations = locations.filter(loc => loc.taluka.toLowerCase() === 'dapoli');

  return (
    <div className="animate-in fade-in duration-500 max-w-6xl mx-auto">
      <div className="bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8 rounded-2xl mb-12 shadow-sm">
        <h1 className="text-3xl font-bold mb-2">Taluka Infrastructure Index</h1>
        <p className="opacity-80 text-lg">Geographical catalog grouped strictly by block administrative borders.</p>
      </div>

      <div className="mb-10">
        <h2 className="text-2xl font-bold text-slate-800 border-b-2 border-slate-200 pb-3 mb-6 flex items-center gap-2">
          🏙️ Taluka Name: Dapoli
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dapoliLocations.map(loc => (
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
    </div>
  );
}
