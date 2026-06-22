import { useParams, useNavigate } from 'react-router-dom';
import { useLocations } from '../context/LocationsContext';
import { ArrowLeft, Image as ImageIcon, MapPin, CheckCircle, Droplets, BedDouble } from 'lucide-react';
import placeholderImage from '../assets/placeholder.png';

export default function LocationProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { locations, homestays, eco, loading } = useLocations();

  if (loading) return <div className="p-8 text-center animate-pulse font-medium text-slate-500">Loading live database...</div>;
  
  const numericId = parseInt(id);
  // Find which dataset the ID belongs to
  let loc = locations.find(item => item.id === numericId);
  let type = 'village';
  
  if (!loc) {
    loc = homestays.find(item => item.id === numericId);
    type = 'homestay';
  }
  if (!loc) {
    loc = eco.find(item => item.id === numericId);
    type = 'eco';
  }

  if (!loc) {
    return (
      <div className="p-8 text-center bg-white rounded-2xl shadow-sm border border-slate-200">
        <h2 className="text-xl font-bold text-slate-800">Location Not Found</h2>
        <button onClick={() => navigate(-1)} className="mt-4 text-orange-600 font-bold hover:underline">Go Back</button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden animate-in fade-in duration-500">
      {/* HEADER SECTION */}
      <div className="bg-slate-800 p-8 text-white relative">
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-amber-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors mb-6 text-sm font-medium"
          >
            <ArrowLeft size={16} /> Back to Directory
          </button>
          
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <span className="px-3 py-1 bg-orange-500/20 text-orange-400 border border-orange-500/30 rounded-full text-xs font-bold uppercase tracking-wider">
                  {type === 'homestay' ? 'Homestay' : type === 'eco' ? 'Eco Unit' : loc.category}
                </span>
                <span className="flex items-center gap-1 text-slate-300 text-sm">
                  <MapPin size={14} /> {loc.village}, {type === 'eco' ? '' : loc.taluka}
                </span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight mb-2">{loc.name}</h1>
              {type === 'homestay' && <p className="text-slate-300 text-lg">Hosted by {loc.owner}</p>}
            </div>
            
            <div className="text-right">
              <div className="text-sm text-slate-400 mb-1">ID Ref</div>
              <div className="text-2xl font-mono font-bold text-slate-200">#{loc.id.toString().padStart(4, '0')}</div>
            </div>
          </div>
        </div>
      </div>

      {/* CONTENT SECTION */}
      <div className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Main Details Panel */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-slate-800 border-b border-slate-100 pb-2">Profile Overview</h3>
            
            <div className="grid grid-cols-2 gap-4">
              {type === 'village' && (
                <>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <span className="block text-xs font-bold text-slate-500 uppercase mb-1">Landmark</span>
                    <span className="font-medium text-slate-800">{loc.landmark}</span>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <span className="block text-xs font-bold text-slate-500 uppercase mb-1">Duration</span>
                    <span className="font-medium text-slate-800">{loc.duration}</span>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <span className="block text-xs font-bold text-slate-500 uppercase mb-1">Season</span>
                    <span className="font-medium text-slate-800">{loc.season}</span>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <span className="block text-xs font-bold text-slate-500 uppercase mb-1">Road Condition</span>
                    <span className="font-medium text-slate-800">{loc.roadStatus}</span>
                  </div>
                </>
              )}
              {type === 'homestay' && (
                <>
                  <div className="bg-amber-50 p-4 rounded-xl border border-amber-100 col-span-2">
                    <span className="block text-xs font-bold text-amber-700 uppercase mb-1 flex items-center gap-2"><BedDouble size={14}/> Amenities Provided</span>
                    <span className="font-medium text-amber-900">{loc.amenities}</span>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <span className="block text-xs font-bold text-slate-500 uppercase mb-1">Type</span>
                    <span className="font-medium text-slate-800">{loc.type}</span>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-100">
                    <span className="block text-xs font-bold text-slate-500 uppercase mb-1">Contact</span>
                    <span className="font-medium text-slate-800">{loc.phone}</span>
                  </div>
                </>
              )}
              {type === 'eco' && (
                <>
                  <div className="bg-emerald-50 p-4 rounded-xl border border-emerald-100 col-span-2">
                    <span className="block text-xs font-bold text-emerald-700 uppercase mb-1 flex items-center gap-2"><Droplets size={14}/> Waste Management</span>
                    <a href={loc.waste} target="_blank" rel="noreferrer" className="font-medium text-emerald-900 hover:underline break-all">View Active Official Documents</a>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-xl border border-blue-100 col-span-2">
                    <span className="block text-xs font-bold text-blue-700 uppercase mb-1 flex items-center gap-2"><Droplets size={14}/> Drinking Water Profile</span>
                    <span className="font-medium text-blue-900">{loc.water}</span>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Map Location Verification Panel */}
          <div>
            <h3 className="text-xl font-bold text-slate-800 border-b border-slate-100 pb-2 mb-6">Database Coordinates</h3>
            <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 shadow-inner">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                  <CheckCircle size={20} />
                </div>
                <div>
                  <div className="font-bold text-slate-800">Verified Location</div>
                  <div className="text-sm text-slate-500">Coordinates actively mapped</div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mt-6">
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase">Latitude</div>
                  <div className="font-mono text-lg text-slate-700">{loc.lat.toFixed(4)}° N</div>
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-500 uppercase">Longitude</div>
                  <div className="font-mono text-lg text-slate-700">{loc.lng.toFixed(4)}° E</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10">
          {(type === 'village' || type === 'homestay') && (
            <a 
              href={loc.mediaDriveUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors shadow-md shadow-blue-500/20 mb-8"
            >
              <ImageIcon size={20} />
              Open Media Records & Official Photos
            </a>
          )}

          {/* Photo Gallery Simulation */}
          <div className="border-t border-slate-200 pt-8">
            <h2 className="text-2xl font-bold text-slate-800 mb-6">{type === 'homestay' ? 'Property Gallery' : type === 'eco' ? 'Facility Gallery' : 'Site Photo Gallery'}</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="rounded-xl overflow-hidden shadow-sm border border-slate-200">
                <img src={placeholderImage} alt="Site view 1" className="w-full h-32 object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="rounded-xl overflow-hidden shadow-sm border border-slate-200">
                <img src={placeholderImage} alt="Site view 2" className="w-full h-32 object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="rounded-xl overflow-hidden shadow-sm border border-slate-200">
                <img src={placeholderImage} alt="Site view 3" className="w-full h-32 object-cover hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="rounded-xl overflow-hidden shadow-sm border border-slate-200">
                <img src={placeholderImage} alt="Site view 4" className="w-full h-32 object-cover hover:scale-105 transition-transform duration-300" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
