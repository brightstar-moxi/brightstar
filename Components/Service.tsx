import { CodeBracketSquareIcon, CommandLineIcon, RocketLaunchIcon } from '@heroicons/react/20/solid'
import React from 'react'

const Service = () => {
    return (
        <div className='bg-[#121212] pt-[4rem] md:pt-[8rem] pb-[5rem]' id='service'>
            <p className='heading'>My <span className='text-yellow-400'>Service</span></p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white'>
                <div data-aos="fade-right">
                    <div className='bg-red-700 hover:scale-110 transition-all duration-300 hover:rotate-6 uppercase font-semibold text-center p-[2rem]'>
                        <CodeBracketSquareIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3faa8]' />
                        <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>Frontend</h1>
                        <p className='text-[15px] text-[#d3d2d2] font-normal'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, est! Eius tenetur porro assumenda doloribus voluptatum quisquam 
                            cum ratione, a labore velit sapiente temporibus amet iure totam nam, iusto quis?
                        </p>
                    </div>
                </div>
                <div data-aos="zoom-in" data-aos-delay="300">
                    <div className='bg-orange-700 hover:scale-110 transition-all duration-300  uppercase font-semibold text-center p-[2rem]'>
                        <RocketLaunchIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3faa8]' />
                        <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>Backend</h1>
                        <p className='text-[15px] text-[#d3d2d2] font-normal'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, est! Eius tenetur porro assumenda doloribus voluptatum quisquam 
                            cum ratione, a labore velit sapiente temporibus amet iure totam nam, iusto quis?
                        </p>
                    </div>
                </div>
                <div data-aos="fade-left" data-aos-delay="500">
                    <div className='bg-blue-700 hover:scale-110 transition-all duration-300 hover:rotate-6 uppercase font-semibold text-center p-[2rem]'>
                        <CommandLineIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3faa8]' />
                        <h1 className='text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]'>Fullstack</h1>
                        <p className='text-[15px] text-[#d3d2d2] font-normal'>
                            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi, est! Eius tenetur porro assumenda doloribus voluptatum quisquam 
                            cum ratione, a labore velit sapiente temporibus amet iure totam nam, iusto quis?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Service