import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Navbar = () => {

    const [nav,setNav] = useState(false)

    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'about'
        },
        {
            id: 3,
            link: 'projects'
        },
        {
            id: 4,
            link: 'skills'
        },
        {
            id: 5,
            link: 'contact'
        }
    ]

return (
    <div className='bg-black h-10 w-full flex justify-between text-white px-4'>
        <div>
        <h1 className='text-4xl mt-1.5 font-signature ml-2 cursor-default font-bold'>V-Folio</h1>
        </div>
        
        <ul className='hidden md:flex'>
            {links.map(({id,link}) => (
                <li
                key={id}
                className="px-4 cursor-pointer capitalize font-medium
                text-amber-200 hover:scale-150 mt-2 duration-200 hover:text-white"
            >{link}</li>))}
        </ul>

        <div onClick={() => setNav(!nav)} 
        className='cursor-pointer pr-2 pt-1 z-10 text-amber-300 md:hidden hover:text-amber-200'>
            {nav ?  <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav && (
            <ul className='flex flex-col justify-center items-center 
            absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black  to-gray-800 text-amber-200'>
                {links.map(({id,link}) => (
                    <li
                    key={id}
                    className="px-4 cursor-pointer capitalize py-6
                    text-4xl hover:text-white"
                >{link}</li>))}
            </ul>
        )}

        
    </div>
)
}

export default Navbar