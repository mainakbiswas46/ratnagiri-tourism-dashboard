import React, { createContext, useContext, useState, useEffect } from 'react';
import Papa from 'papaparse';

const LocationsContext = createContext({
  locations: [],
  homestays: [],
  eco: [],
  loading: true,
  error: null
});

// Helper to generate a random coordinate near Dapoli based on the ID 
const generateDummyCoordinates = (id, offsetFactor = 1) => {
  const baseLat = 17.7554;
  const baseLng = 73.1923;
  const latOffset = (id * 0.015 * offsetFactor) % 0.05;
  const lngOffset = (id * 0.01 * offsetFactor) % 0.05;
  
  return {
    lat: baseLat + latOffset,
    lng: baseLng - lngOffset
  };
};

export const LocationsProvider = ({ children }) => {
  const [locations, setLocations] = useState([]);
  const [homestays, setHomestays] = useState([]);
  const [eco, setEco] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchApi = async (url) => {

    console.log("Fetching", url);

    const response = await fetch(`http://127.0.0.1:5001${url}`);

    console.log("Response received", response.status);

    const data = await response.json();

    console.log("Parsed JSON", data);

    return data;
};

    const loadAllData = async () => {
  try {
    console.log("Loading locations...");
    const locData = await fetchApi("/api/locations");
    console.log("Locations:", locData.length);

    console.log("Loading homestays...");
    const homeData = await fetchApi("/api/homestays");
    console.log("Homestays:", homeData.length);

    console.log("Loading eco...");
    const ecoData = await fetchApi("/api/eco");
    console.log("Eco:", ecoData.length);


        const parsedLocations = locData.map((row) => {
  const coords = generateDummyCoordinates(row.id);

  return {
    id: row.id,
    name: row.location_name || `Location ${row.id}`,
    category: row.attraction_type || "Unknown",
    landmark: row.nearest_landmark || "Unknown",
    village: row.village_name || row.located_in || "Unknown",
    taluka: row.taluka_name || "Unknown",
    district: row.district_name || "Ratnagiri",
    roadStatus: row.road_condition || "Unknown",
    signs: row.signboards_available || "Unknown",
    season: row.seasonal_availability || "Unknown",
    duration: row.avg_time_spent || "Unknown",
    mediaDriveUrl: row.photo_location || "#",
    lat: coords.lat,
    lng: coords.lng
  };
});

        const parsedHomestays = homeData.map((row) => {

    const coords = generateDummyCoordinates(row.id, 2);

    return {

        id: row.id,

        name: row.homestay_name || `Homestay ${row.id}`,

        owner: row.owner_name || "Unknown",

        phone: row.phone_number || "Unknown",

        village: row.village_town_city || "Unknown",

        taluka: row.taluka_name || "Unknown",

        type: row.homestay_type || "Homestay",

        amenities: row.facilities_services || "Basic",

        mediaDriveUrl: row.photo_homestay || "#",

        lat: coords.lat,

        lng: coords.lng

    };

});

        const parsedEco = ecoData.map((row, index) => {
          const id = index + 200;
          const coords = generateDummyCoordinates(id, 3);
          return {
            id: id,
            name: `${row['Village/Town/City Name'] || 'Unknown'} Eco Hub`,
            village: row['Village/Town/City Name'] || 'Unknown',
            waste: row['Waste Management'] || 'Unknown',
            water: row['Drinking Water'] || 'Unknown',
            lat: coords.lat,
            lng: coords.lng
          };
        });

        setLocations(parsedLocations);
        setHomestays(parsedHomestays);
        setEco(parsedEco);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    loadAllData();
  }, []);

  return (
    <LocationsContext.Provider value={{ locations, homestays, eco, loading, error }}>
      {children}
    </LocationsContext.Provider>
  );
};

export const useLocations = () => useContext(LocationsContext);
