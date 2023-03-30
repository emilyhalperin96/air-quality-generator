import React, { useState } from 'react';

function Search({ apiKey, selectedCountry, selectedState, selectedCity }) {
  const [aqi, setAqi] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const fetchAirQualityData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`http://api.airvisual.com/v2/city?city=${selectedCity}&state=${selectedState}&country=${selectedCountry}&key=${apiKey}`);
      const data = await response.json();
      setAqi(data.data.current.pollution.aqius);
    } catch (error) {
      console.error('Error fetching air quality data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <button onClick={fetchAirQualityData}>Search</button>
      {isLoading && <p>Loading...</p>}
      {aqi && <p>AQI: {aqi}</p>}
    </div>
  );
}

export default Search;