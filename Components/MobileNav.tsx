import { XMarkIcon } from '@heroicons/react/20/solid'
import Link from 'next/link';
import React from 'react'

interface Props {
    nav: boolean;
    closeNav: () => void;
}

const MobileNav = ({nav, closeNav}:Props) => {

    const navAnimation = nav?'translate-x-0' : 'translate-x-[-100%]'
  return (
    <div className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[1000000] bg-[#141c27]`}>
        <div className='w-[100vw] h-[100vh] flex flex-col items-center justify-center'>
       <div className='nav-link-mobile'><Link href="/"> HOME</Link> </div>
     
       <div className='nav-link-mobile'><Link href="#about">ABOUT </Link> </div>
       <div className='nav-link-mobile'><Link href="#service">  SERVICES</Link></div>
       <div className='nav-link-mobile'><Link href="#project">PROJECT</Link> </div>
       <div className='nav-link-mobile'><Link href="#blog">BLOG</Link> </div>
       <div className='nav-link-mobile'><Link href="#contact">CONTACT</Link> </div>
        </div>
        <div onClick={closeNav}
        className='absolute z-[1000000] cursor-pointer top-[2rem] right-[2rem] w-[2rem] h-[2rem] text-yellow-400'>
        <XMarkIcon/>
        </div>
        </div>
  )
}

export default MobileNav