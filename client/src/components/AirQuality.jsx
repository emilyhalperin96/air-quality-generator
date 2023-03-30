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
         const response = await fetch(`${apiUrl}?city=${city}&state=${state}&country=${country}&key=${apiKey}`,); 
        
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
    <div className="w-full max-w-5xl mr-10 flex justify-center">
      <form className="bg-white shadow-md rounded px-12 pt-6 pb-8 mb-5 mr-10" onSubmit={handleSearch}>
      <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">City</label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        </div>
        <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">State</label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Enter state"
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
        </div>
        <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">Country</label>
        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Enter country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        </div>
        <button className="bg-[#00df9a] hover:bg-[#c8e1d9] text-white font-bold py-2 px-4 rounded-full" type="submit">Search</button>
      </form>
       
      <div className="w-full max-w-xs flex justify-center ml-20">
        <div className="bg-white shadow-md rounded px-12 pt-6 pb-8 mb-4">
          <div id="parent" className="mb-4">
            {apiData && (
              <h1 className="block text-gray-700 text-sm font-bold -mb-1 whitespace-nowrap">Air Quality Index (US):
              </h1>
              )}
              {apiData && (
              <p className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">{apiData.data.current.pollution.aqius}
              </p>
              )}
              {apiData && (
              <p className="block text-gray-700 text-sm font-bold mb-5">Health Tips:
              </p>
              )}
              {apiData && (
              <p className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">render health tips
              </p>
              )}
            </div>
          </div>
        </div>
    </div>
    
  );

}

export default AirQuality;
