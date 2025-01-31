import Image from 'next/image';
import Link from 'next/link';

const ww = "https://brightstarmoxiz.github.io/coolbrightstar/game%20creator.html"
const pro = "https://mosesjojolola-site.netlify.app/"
const pro2 ='https://brightstar-video-call.netlify.app/'
const pro3="https://lovescollection.netlify.app/"
const pro4 = "https://zanny-beauty-palace.netlify.app/"
const pro5 = "https://brightstar-moses.onrender.com/"
const pro6 = "https://my-portfolio-six-eta-66.vercel.app/"
const pro7 = ""

import React from 'react'

const Project = () => {
    return (
        <div className='bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem]'id='project'>
            <h1 className='heading'>Pro<span className='text-yellow-400'>ject</span></h1>
            <div className='w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem]'>
                <div data-aos="fade-up">
                    <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
                       <a href={ww}>
                        <Image
                            src="/images/pro0.png"
                            alt="portfolio"
                            layout='fill'
                            className='object-contain'
                        />
                        </a> 
                    </div>
                    
                </div>
                <div data-aos="fade-up" data-aos-delay="300">
                    <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
                       <a href={pro}>
                        <Image
                            src="/images/pro5.png"
                            alt="portfolio"
                            layout='fill'
                            className='object-contain'
                        />
                        </a>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-delay="600">
                    <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
                        <a href={pro2}>
                        <Image
                            src="/images/pro2.PNG"
                            alt="portfolio"
                            layout='fill'
                            className='object-contain'
                        />
                        </a>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-delay="900">
                    <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
                        <a href={pro3}>
                        <Image
                            src="/images/pro6.PNG"
                            alt="portfolio"
                            layout='fill'
                            className='object-contain'
                        />
                        </a>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-delay="1200">
                    <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
                      <a href={pro4}>
                        <Image
                            src="/images/pro7.PNG"
                            alt="portfolio"
                            layout='fill'
                            className='object-contain'
                        />
                        </a>
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-delay="1600">
                    <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
                        <a href={pro5}>
                        <Image
                            src="/images/pro8.PNG"
                            alt="portfolio"
                            layout='fill'
                            className='object-contain'
                        />
                        </a>
                    </div>
                    
                </div>
                <div data-aos="fade-up" data-aos-delay="1800">
                    <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
                        <a href={pro5}>
                        <Image
                            src="/images/pro9.PNG"
                            alt="portfolio"
                            layout='fill'
                            className='object-contain'
                        />
                        </a>
                    </div>
                    
                </div>
                <div data-aos="fade-up" data-aos-delay="2000">
                    <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
                        <a href={pro5}>
                        <Image
                            src="/images/pro8.PNG"
                            alt="portfolio"
                            layout='fill'
                            className='object-contain'
                        />
                        </a>
                    </div>
                    
                </div>
                <div data-aos="fade-up" data-aos-delay="2200">
                    <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
                        <a href={pro5}>
                        <Image
                            src="/images/pro8.PNG"
                            alt="portfolio"
                            layout='fill'
                            className='object-contain'
                        />
                        </a>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Project