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
    const fetchCsv = (url) => {
      return new Promise((resolve, reject) => {
        fetch(`${url}?t=${new Date().getTime()}`)
          .then(response => {
            if (!response.ok) throw new Error(`Failed to fetch ${url}`);
            return response.text();
          })
          .then(text => {
            Papa.parse(text, {
              header: true,
              skipEmptyLines: true,
              complete: (results) => resolve(results.data),
              error: (err) => reject(err)
            });
          })
          .catch(reject);
      });
    };

    const loadAllData = async () => {
      try {
        const [locData, homeData, ecoData] = await Promise.all([
          fetchCsv('/locations.csv'),
          fetchCsv('/homestays.csv'),
          fetchCsv('/eco.csv')
        ]);

        const parsedLocations = locData.map((row, index) => {
          const id = index + 1;
          const coords = generateDummyCoordinates(id);
          return {
            id: id,
            name: row['Name of Location'] || `Location ${id}`,
            category: row['What is the type of attraction ?'] || 'Unknown',
            landmark: row['Nearest Landmark'] || 'Unknown',
            village: row['Village name'] || row['Located in'] || 'Unknown',
            taluka: row['Taluka Name'] || 'Dapoli',
            district: row['District Name'] || 'Ratnagiri',
            roadStatus: row['Road condition'] || 'Unknown',
            signs: row['Signboards available'] || 'Unknown',
            season: row['Seasonal availability'] || 'Open all year',
            duration: row['Average time spent (Minutes/Hours)'] || 'Unknown',
            mediaDriveUrl: row['Upload photo of the location'] || '#',
            lat: coords.lat,
            lng: coords.lng
          };
        });

        const parsedHomestays = homeData.map((row, index) => {
          const id = index + 100; // Offset IDs to prevent collision if needed
          const coords = generateDummyCoordinates(id, 2); // Different offset spread
          return {
            id: id,
            name: row['Name of Homestay'] || `Homestay ${id}`,
            owner: row['Name of the Homestay Owner'] || 'Unknown',
            phone: row['Phone Number'] || 'Unknown',
            village: row['Village/Town/City Name'] || 'Unknown',
            taluka: row['Taluka Name'] || 'Dapoli',
            type: row['Type of Homestay'] || 'Homestay',
            amenities: row['Which of the following facilities and services are provided by your homestay?'] || 'Basic',
            mediaDriveUrl: row['Upload photo of the Homestay'] || '#',
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
