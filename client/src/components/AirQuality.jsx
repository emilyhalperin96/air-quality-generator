import React, { useState, useEffect } from 'react';

function AirQuality() {
  const [apiData, setApiData] = useState(null);
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [search, setSearch] = useState({ city: '', state: '', country: '' });

  // useEffect(() => {
    // if (!search.city) return;

    const apiUrl = 'http://127.0.0.1:5000/air_quality';
    const apiKey = '91c867ed-854a-4bd5-948d-576454a4bfc7';
    const fetchData = async () => {
      try {
      //  const response = await fetch(`${apiUrl}?city=${search.city}&state=${search.state}&country=${search.country}&key=${apiKey}`); 
         const response = await fetch(`${apiUrl}?city=${city}&state=${state}&country=${country}&key=${apiKey}`, {mode: 'no-cors'}); 
        
        if (response.ok) {
          const data = await response.json();
          setApiData(data);
          console.log(data)
        } else {
          console.error('Error fetching API data:', response.statusText);
        }
      } catch (error) {
        console.error('Error fetching API data:', error);
      }
    };

    // fetchData();
  // }, [search]);


  const handleSearch = (event) => {
    event.preventDefault();
    // setSearch({ city: city, state: state, country: country });
    // console.log(search)
    fetchData()
    console.log(city, state, country)
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
        <input
          type="text"
          placeholder="Enter state"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
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
