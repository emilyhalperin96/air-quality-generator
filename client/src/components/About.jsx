import React from 'react';
import Signup from './Signup';
import {useState} from 'react';

const About = () => {
    const [showForm, setForm] = useState(false);

    const handleForm = () => {
        setForm((showForm) => !showForm)
    }



    return (

        <div className='text-white'>
            <div className='max-w-[500px] mt-30 w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <h1 className='text-6xl font-bold md:py-6'>Air Quality Application</h1>
                <div>
                    <p className='text-2xl font-bold'>This application allows users to look up the air quality in a given city. Once you input you're city, you'll recieve help tips.</p>
                    <button onClick={handleForm} className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'>
                        Click to Get Access</button>
                        {showForm ? <Signup /> : null}
                </div>
            </div>
        </div>
    )
}

export default About;