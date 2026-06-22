import { NavLink } from 'react-router-dom';
import { Map, LayoutDashboard, MapPin } from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 text-white min-h-screen p-6 fixed">
      <h2 className="text-xl font-bold mb-8 flex items-center gap-2 text-slate-100 tracking-wide">
        <Map className="text-blue-400" /> Ratnagiri Explorer
      </h2>
      <nav>
        <ul className="space-y-2">
          <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${
                  isActive
                    ? 'bg-blue-600/20 text-white border-l-4 border-blue-500'
                    : 'text-slate-400 hover:bg-white/5 hover:text-white'
                }`
              }
            >
              <LayoutDashboard size={20} />
              Main Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/taluka"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${
                  isActive
                    ? 'bg-blue-600/20 text-white border-l-4 border-blue-500'
                    : 'text-slate-400 hover:bg-white/5 hover:text-white'
                }`
              }
            >
              <MapPin size={20} />
              Taluka Database
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/directory"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${
                  isActive
                    ? 'bg-blue-600/20 text-white border-l-4 border-blue-500'
                    : 'text-slate-400 hover:bg-white/5 hover:text-white'
                }`
              }
            >
              <Map size={20} />
              Directory Hub
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/map"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors ${
                  isActive
                    ? 'bg-emerald-600/20 text-emerald-400 border-l-4 border-emerald-500'
                    : 'text-slate-400 hover:bg-white/5 hover:text-emerald-400'
                }`
              }
            >
              <Map size={20} />
              Interactive Map & Eco
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
}
