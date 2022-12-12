import React from 'react'

const About = () => {
  return (
    <div 
    name='about'
    className='w-full h-screen bg-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline  border-b-4 border-white bg-gradient-to-r from-amber-900 via-yellow-400 to-amber-200
                bg-clip-text text-transparent'>About</p>
            </div>
            <p className='text-xl mt-20 text-gray-400'>
                My name is Vratik Zade pursuing Bachelor's of Technology in Computer Science and Engineering. <br />
                I work as a Web Designer and Full Stack Developer. I'm a novice in the world of technology and
                I enjoy developing websites with technologies like React, Tailwind, Node.js, and MongoDB.
            </p> <br />
            <p className='text-xl text-gray-400'>
            Strong in design and integration with intuitive problem-solving skills. 
            Proficient in C++, HTML5, CSS3, Javascript and MERN stack.
            Passionate about implementing and launching new projects.
            </p>
        </div>
    </div>
  )
}

export default About