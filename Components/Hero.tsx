import React from 'react'
import Particle from './Particle'
import TextEffect from './TextEffect'
import Image from 'next/image'
import { ArrowDownTrayIcon, PlayCircleIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'

const Hero = () => {
    return (
        <div className="h-[85vh] bg-[#141c27] mt-[10vh] bg-cover bg-center " id=''>
            <Particle />
            <div className='w-[80%]  grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center'>
                <div>
                    <h1 className='text-[35px] md:text-[50px] text-white font-bold'>
                        HI, I&apos;M <span className='text-yellow-400'>MOSES</span>
                    </h1>
                    <TextEffect />
                    <p className='mt-[1.5rem] text-[18px] text-[#ffffff92]'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam maxime molestiae,
                        mollitia quod explicabo omnis architecto modi excepturi debitis consectetur suscipit,
                        ducimus doloremque totam iure eligendi quae. Tempora, qui cumque!
                    </p>
                    <div className='mt-[2rem] flex-col space-y-6 sm:space-y-0 sm:flex sm:flex-row items-center sm:space-x-6'>
                        <Link href='/images/mypdf.pdf' download="CV" target='_blank'>
                        <button className='px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px] font-bold 
                        uppercase bg-[#55a6a5] text-black flex items-center space-x-2'>
                           <p>Download Cv</p> 
                           <ArrowDownTrayIcon className='w-[1.6rem] h-[1.7rem] text-black'/>
                        </button>
                        </Link>
                        <Link href='/images/brightstar-video.mp4' download="Bright-Video" target='_blank'>
                        <button className='flex items-center space-x-2'>
                            <PlayCircleIcon className='w-[4rem] h-[4rem] hover:text-yellow-400 transition-all duration-200
                            text-[#55a6a5]'/>
                            <p className='text-[20px] font-semibold text-white'>Watch The Video</p>
                        </button>
                        </Link>
                    </div>
                </div>
                <div  className='w-[500px] hidden bg-[#55a6a5] relative lg:flex items-center rounded-full h-[500px]'>
                    <Image src="/images/me.jpg" alt="user" layout='fill' className='object-cover rounded-full' />
                </div>
            </div>

        </div>
    )
}

export default Hero