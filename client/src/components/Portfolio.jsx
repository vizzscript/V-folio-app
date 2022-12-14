import React from 'react'
import zomato from '../assets/projects/zomato.png'
import bookrecord from '../assets/projects/bookrecord.png'
import bookmyshow from '../assets/projects/bookmyshow.png'
import Vfolio from '../assets/projects/Vfolio.png'

const Portfolio = () => {
    const portfolio = [
        {
            id:1,
            child:(
                <h1>Zomato-Landing-Page</h1>
            ),
            src: zomato,
            href: ' https://codeinsideu.github.io/Zomato-Landing-Page-10722/'
        },
        {
            id:2,
            child:(
                <h1>Book-My-Show-Clone</h1>
            ),
            src: bookmyshow,
            href: 'https://book-my-show-10567.vercel.app/'
        },
        {
            id:3,
            child:(
                <h1>Book-Record-Management</h1>
            ),
            src: bookrecord,
            href: 'https://documenter.getpostman.com/view/23278290/VVdm3iNV'
        },
        {
            id:4,
            child:(
                <h1>V-Folio</h1>
            ),
            src: Vfolio,
            href: ''
        }
    ]
  return (
    <div name='portfolio' className='bg-black w-full  md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-white bg-gradient-to-r from-amber-900 via-yellow-400 to-amber-200
                bg-clip-text text-transparent'>Portfolio</p>
                <p className='py-6 text-gray-400'>Check out some of my works right here!</p>
            </div>

            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
            {
                portfolio.map(({id,src,child,href}) =>(
                    <div 
                    key={id}
                    className='shadow-md shadow-gray-200 rounded-md bg-black duration-200 hover:scale-105 h-full'>
                    <a href={href} className='text-gray-400 text-center font-bold hover:text-white'>
                    <img src={src} alt="" 
                    className='rounded-t-md w-full'/>
                        {child}
                    </a>
                </div>
                ))
            }
            </div>
        </div>
    </div>
  )
}

export default Portfolio