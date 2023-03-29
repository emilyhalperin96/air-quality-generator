import React from "react";
//import {useFormik} from "formik";
//import * as yup from "yup";
import {useState, useEffect} from 'react';
import LocationDetails from './LocationDetails'
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    fetch('/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        name,
      }),
    }).then((r) => {
      setIsLoading(false);
      navigate('/location-details');
    });
  };

 

    //useEffect(() => {
    //fetch("/movies").then(response =>
      //response.json().then(data => {
        //setMovies(data.movies);
      //})
    //);
  //}, []);

    
    return(
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-white">Enter Email & Name</h2>

          </div>
          <form onSubmit={handleSubmit} className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  required
                  onChange={(e) => setEmail(e.target.value)}
                  className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-t-md
                  focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                />
              </div>
              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="appearance-none rounded-none relative block
                  w-full px-3 py-2 border border-gray-300
                  placeholder-gray-500 text-gray-900 rounded-b-md
                  focus:outline-none focus:ring-indigo-500
                  focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Name"
                />
              </div>
            </div>
            <div className="flex items-center justify-between"></div>
            <div>
              <button 
              onClick={async () => {
                const user = {name, email};
                const response = await fetch('/signup', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  }, 
                  body: JSON.stringify(user)
                })
                if (response.ok) {
                  console.log('response worked');
                  setName('')
                  setEmail('')
                }
              }}
                type="submit"
                className="group relative w-full flex justify-center
                py-2 px-4 border border-transparent text-sm font-medium
                rounded-md text-white bg-[#00df9a] hover:bg-indigo-700
                focus:outline-none focus:ring-2 focus:ring-offset-2
                focus:ring-indigo-500"
              >
                {isLoading ? "Loading..." : "Sign Up"}
              </button>
              <LocationDetails />
            </div>
          </form>
        </div>
      </div>
  )
}
export default Signup;


