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
            <div className='max-w-[500px] mt-20 w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold p-2'>text text text</p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>more text</h1>
                <div>
                    <p className='md:text-5xl sm:text-4xl text-xl font-bold'>moreeeeee text</p>
                    <button onClick={handleForm} className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-white'>
                        Click to Sign Up </button>
                        {showForm ? <Signup /> : null}
                </div>
            </div>
        </div>
    )
}

export default About;