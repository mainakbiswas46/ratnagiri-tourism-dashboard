import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DashboardLayout from './layouts/DashboardLayout';
import Home from './pages/Home';
import DashboardOverview from './pages/DashboardOverview';
import TalukaIndex from './pages/TalukaIndex';
import LocationDirectory from './pages/LocationDirectory';
import LocationProfile from './pages/LocationProfile';
import SustainabilityMap from './pages/SustainabilityMap';
import { LocationsProvider } from './context/LocationsContext';

export default function App() {
  return (
    <LocationsProvider>
      <Router>
        <Routes>
          {/* Landing Page */}
          <Route path="/" element={<Home />} />
          
          {/* Dashboard Pages within Sidebar Layout */}
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<DashboardOverview />} />
            <Route path="/taluka" element={<TalukaIndex />} />
            <Route path="/directory" element={<LocationDirectory />} />
            <Route path="/profile/:id" element={<LocationProfile />} />
            <Route path="/map" element={<SustainabilityMap />} />
          </Route>
        </Routes>
      </Router>
    </LocationsProvider>
  );
}
