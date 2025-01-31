import Image from 'next/image'
import Link from 'next/link'

const ww = "https://brightstarmoxiz.github.io/coolbrightstar/game%20creator.html"
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
                       <a href=''></a>
                        <Image
                            src="/images/pro5.png"
                            alt="portfolio"
                            layout='fill'
                            className='object-contain'
                        />
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-delay="600">
                    <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
                        <Image
                            src="/images/me.jpg"
                            alt="portfolio"
                            layout='fill'
                            className='object-contain'
                        />
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-delay="900">
                    <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
                        <Image
                            src="/images/me.jpg"
                            alt="portfolio"
                            layout='fill'
                            className='object-contain'
                        />
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-delay="1200">
                    <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
                        <Image
                            src="/images/me.jpg"
                            alt="portfolio"
                            layout='fill'
                            className='object-contain'
                        />
                    </div>
                </div>
                <div data-aos="fade-up" data-aos-delay="1600">
                    <div className='transform cursor-pointer hover:-translate-y-6 transition-all duration-200 relative w-[100%] h-[200px] md:h-[300px]'>
                        <Image
                            src="/images/me.jpg"
                            alt="portfolio"
                            layout='fill'
                            className='object-contain'
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Project