import React from 'react';
import AirQuality from './AirQuality';
import HealthTips from './HealthTips';
import placeholder from '../assets/placeholder.png'

function LocationDetails() {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto' src={placeholder} />
        <div>
          <h1>Location Details</h1>
          <p>text text text text</p>
        </div>
      {/* Implement logic for fetching air quality data and displaying it */}
      <AirQuality />
      <HealthTips />
      </div>
    </div>
  );
}

export default LocationDetails;