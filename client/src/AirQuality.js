import React, { useState, useEffect } from 'react';

function AirQuality() {
  const [apiData, setApiData] = useState(null);
  const [city, setCity] = useState('');
  const [searchCity, setSearchCity] = useState('');

  useEffect(() => {
    if (!searchCity) return;

    const apiUrl = 'http://localhost:5555/air_quality';
    const fetchData = async () => {
      try {
        const response = await fetch(`${apiUrl}?city=${searchCity}`);
        if (response.ok) {
          const data = await response.json();
          setApiData(data);
        } else {
          console.error('Error fetching API data:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching API data:', error);
      }
    };

    fetchData();
  }, [searchCity]);

  const handleSearch = (event) => {
    event.preventDefault();
    setSearchCity(city);
  };

  return (
    <div>
      <h3>Air Quality Data</h3>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button type="submit">Search</button>        
      </form>
      {apiData && (
        <div>
          <p>
            <strong>City:</strong> {apiData.data.city}
          </p>
          <p>
            <strong>Country:</strong> {apiData.data.country}
          </p>
          <p>
            <strong>AQI (US):</strong> {apiData.data.current.pollution.aqius}
          </p>
          {/* Add other air quality data here */}
        </div>
      )}
    </div>
  );
}

export default AirQuality;