import React, { useState, useEffect } from 'react';
import Search from './Search';

function AirQuality() {
  const [apiData, setApiData] = useState(null);
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const apiKey = '91c867ed-854a-4bd5-948d-576454a4bfc7';

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await fetch(`http://api.airvisual.com/v2/countries?key=${apiKey}`);
        const data = await response.json();
        setCountries(data.data);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    };
    fetchCountries();
  }, []);

  useEffect(() => {
    if (!selectedCountry) return;
  
    const fetchStates = async () => {
      try {
        const response = await fetch(`http://api.airvisual.com/v2/states?country=${selectedCountry}&key=${apiKey}`);
        const data = await response.json();
        if (Array.isArray(data.data)) {
          setStates(data.data);
        } else {
          setStates([]);
        }
      } catch (error) {
        console.error('Error fetching states:', error);
      }
    };
    fetchStates();
  }, [selectedCountry]);

  useEffect(() => {
    if (!selectedState) return;
  
    const fetchCities = async () => {
      try {
        const response = await fetch(`http://api.airvisual.com/v2/cities?state=${selectedState}&country=${selectedCountry}&key=${apiKey}`);
        const data = await response.json();
        if (Array.isArray(data.data)) {
          setCities(data.data);
        } else {
          setCities([]);
        }
      } catch (error) {
        console.error('Error fetching cities:', error);
      }
    };
    fetchCities();
  }, [selectedState]);

  // const fetchAirQualityData = async () => {
  //   try {
  //     const response = await fetch(`http://api.airvisual.com/v2/city?city=${selectedCity}&state=${selectedState}&country=${selectedCountry}&key=${apiKey}`);
  //     const data = await response.json();
  //     console.log('Air Quality Data:', data);
  //   } catch (error) {
  //     console.error('Error fetching air quality data:', error);
  //   }
  // };

  const handleCountryChange = (event) => {

    setSelectedCountry(event.target.value);
  };

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };

  const handleCityChange = (event) => {
    setSelectedCity(event.target.value);
  };



  return (
    <div>
      <h1>Air Quality</h1>
  
      <label htmlFor="country">Country:</label>
      <select id="country" value={selectedCountry} onChange={handleCountryChange}>
        <option value="">Select Country</option>
        {countries.map((country) => (
          <option key={country.country} value={country.country}>
            {country.country}
          </option>
        ))}
      </select>
  
      <label htmlFor="state">State:</label>
      <select id="state" value={selectedState} onChange={handleStateChange} disabled={!selectedCountry}>
        <option value="">Select State</option>
        {states.map((state) => (
          <option key={state.state} value={state.state}>
            {state.state}
          </option>
        ))}
      </select>
  
      <label htmlFor="city">City:</label>
      <select id="city" value={selectedCity} onChange={handleCityChange} disabled={!selectedState}>
        <option value="">Select City</option>
        {cities.map((city) => (
          <option key={city.city} value={city.city}>
            {city.city}
          </option>
        ))}
      </select>
  
      {/* <button onClick={fetchAirQualityData}>Search</button> */}
  
      {/* Render the air quality data for the selected city here */}
      <Search apiKey={apiKey} selectedCountry={selectedCountry} selectedState={selectedState} selectedCity={selectedCity} />
    </div>
  );
        }
export default AirQuality;