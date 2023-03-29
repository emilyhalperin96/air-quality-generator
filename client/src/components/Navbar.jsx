import React, {useState} from 'react';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className=' flex justify-between items-center h-20 max-w-[1240] mx-auto px-4 text-white'>
            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>Air Quality X City</h1>
            <ul className='list-none flex'>
                <li className='p-4'>Home</li>
                <li className='p-4'>About</li>
                <li className='p-4'>Contact</li>
            </ul>
        </div>
    )
}

export default Navbar