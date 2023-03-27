import React from 'react';
import Signup from './Signup';

const About = () => {

    return (

        <div className='text-white'>
            <div className='max-w-[500px] mt-20 w-full h-screen mx-auto text-center flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold p-2'>text text text</p>
                <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>more text</h1>
                <div>
                    <p className='md:text-5xl sm:text-4xl text-xl font-bold'>moreeeeee text</p>
                    <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>
                        Sign Up Here</button>
                        <Signup />
                </div>
            </div>
        </div>
    )
}

export default About;