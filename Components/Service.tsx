import { CodeBracketSquareIcon } from '@heroicons/react/20/solid'
import React from 'react'

const Service = () => {
    return (
        <div className='bg-[#121212] pt-[4rem] md:pt-[8rem] pb-[5rem]'>
            <p className='heading'>My <span className='text-yellow-400'>Service</span></p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white'>
                <div>
                    <div className='bg-red-700 hover:scale-110 transition-all duration-300 hover:rotate-6 uppercase font-semibold text-center p-[2rem]'>
                        <CodeBracketSquareIcon className='w-[6rem] h-[6rem] mx-auto text-[#d3faa8]' />
                    </div>
                </div>
                <div>2ND</div>
                <div>3RD</div>
            </div>
        </div>
    )
}

export default Service