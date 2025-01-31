import { Bars3Icon } from '@heroicons/react/20/solid';
import Link from 'next/link';
import React from 'react';

interface Props{
  openNav: () => void;
}

const Nav = ({openNav}: Props) => {
  return (
    <div className='w-[100%] fixed z-[10000] top-0 h-[12vh] bg-[#141c27] shadow-md'>
     <div className='flex items-center justify-between w-[80%] mx-auto h-[100%]'>
        <h1 className='flex-[0.6] cursor-pointer text-[25px] text-white font-bold'>
            BRIGHT
            
            <span className='text-yellow-300'>STAR</span>
        </h1>
        <div className='nav-link'><Link href="/">HOME</Link> </div>
       
        <div className='nav-link'><Link href="#about"> </Link> ABOUT</div>
        <div className='nav-link'><Link href="#service">SERVICES</Link></div>
        <div className='nav-link'><Link href="#project"> </Link>PROJECT</div>
        <div className='nav-link'><Link href="#blog"> </Link>BLOG</div>
        <div className='nav-link'><Link href="#contact"> </Link>CONTACT</div>
        <div onClick={openNav}>
          <Bars3Icon className='w-[2rem] md:hidden h-[2rem] cursor-pointer text-yellow-300'/>
        </div>
        </div>
        </div>
  )
}

export default Nav