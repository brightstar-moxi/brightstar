import About from '@/Components/About';
import Blog from '@/Components/Blog';
import Footer from '@/Components/Footer';
import Hero from '@/Components/Hero';
import MobileNav from '@/Components/MobileNav';
import Nav from '@/Components/Nav';
import Project from '@/Components/Project';
import Service from '@/Components/Service';
import Skill from '@/Components/Skill';
import Testimonial from '@/Components/Testimonial';
import React, { useState } from 'react';


const HomePage = () => {
const [nav, setNav]= useState(false);
const openNav = () => setNav(true);
const closeNav = () => setNav(false);

// Animation AOS setup

  return (
    <div className="overflow-x-hidden">
      <div>
       
        <MobileNav nav={nav} closeNav={closeNav}/>
        <Nav openNav={openNav}/>
               <Hero/>
                <div className="relative z-[30]">
         <About/>
         {/* service */}
         <Service/>
         {/* skill */}
         <Skill/>
         {/* project */}
         <Project/>
         {/* Reviews/ Testimonial */}
         <Testimonial/>
         {/* Blog */}
         <Blog/>
         {/* footer */}
         <Footer/>
        </div>
        </div>
    </div>
  );
};

export default HomePage