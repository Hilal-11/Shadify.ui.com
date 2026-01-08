"use client"
import Link from 'next/link'
import React from 'react'
import { HiOutlineExternalLink } from 'react-icons/hi'
import { BgLightGrid1, BgLightGrid2 , BgDarkGradient1 , BgLightGradient1 , BgLightGradient2 , BgLightGradient3, BgLightGradient4, BgLightGradient6, BgLightGradient5, BgDarkGradient2, BgDarkGradient3 } from '@/components/BackgroundPatterns/backgrounds';

function ComponentsShowcase() {
  return (
    <div className='w-full h-full pt-20 max-h-[1024px] lg:max-h-[850px] overflow-hidden relative pb-10'>
      <div className='w-full'>
        <div className='w-full mx-auto'>
            <h1 className='text-center font-sans font-bold text-2xl lg:text-4xl text-neutral-800 dark:text-neutral-200 pb-3'>20+ Premium UI Components by lokalhost.io</h1>
            <p className='text-center text-sm font-sans font-medium text-neutral-700 dark:text-neutral-300'>All Free Premium great UI components for React and Next.Js Applications.</p>
        </div>
        <div className='  grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 justify-evenly lg:px-10 px-5 py-10 gap-6 mask-b-from-20% to-95%'>
           {
            Array.from({ length: 12 }).map((_, index) => (
            <div key={index} className='lg:w-[300px] w-full lg:h-[260px] h-[250px] rounded-sm shadow-sm bg-white dark:bg-neutral-950 border flex justify-center items-center'>
                <div className='w-full h-full flex flex-col justify-between'>
                    <div></div>
                    <div className='w-full h-[60px] bg-neutral-100 dark:bg-neutral-900 border-t'></div>
                </div>
            </div>
            ))
           }
        </div>
        
      </div>
      <div className='absolute bottom-0  w-full flex justify-center'>
            <Link href='/docs' className='flex gap-1 items-center justify-center border-t-[2px] border-l-[2px] border-r-[2px] border-neutral-950 dark:border-neutral-800 relative bottom-2 cursor-pointer font-sans font-medium px-8 py-2 rounded-md bg-gradient-to-t from-[#262626] to-[#525252] text-neutral-200 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]'>Explore All Components<span className="text-sm fonr-sans font-medium"><HiOutlineExternalLink/></span></Link>
        </div>
    </div>
  )
}

export default ComponentsShowcase


export const TemplatesBlockList = () => {
  return (
    <div className='w-full h-full pt-20 max-h-[1024px] lg:max-h-[850px] overflow-hidden relative pb-10 '>
      <div className='w-full'>
        <div className='w-full mx-auto'>
            <h1 className='text-center font-sans font-bold text-2xl lg:text-4xl text-neutral-800 dark:text-neutral-200 pb-3'>Pro Templates by lokalhost.io</h1>
            <p className='text-center text-sm font-sans font-medium text-neutral-700 dark:text-neutral-300'>Lokalhost offers free best premium templates pack to help your website stand out. Professional, clean and modern components to help you get more done.</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 justify-evenly lg:px-10 px-5 py-10 gap-6 mask-b-from-20% to-95%'>
           {
            Array.from({ length: 9 }).map((_, index) => (
            <div key={index} className='lg:w-[400px] w-full lg:h-[260px] h-[300px] rounded-sm shadow-sm bg-white dark:bg-neutral-950 border flex justify-center items-center'>
                <div className='w-full h-full flex flex-col justify-between'>
                    <div></div>
                    <div className='w-full h-[60px] bg-neutral-100 dark:bg-neutral-900 border-t'></div>
                </div>
            </div>
            ))
           }
        </div>
        
      </div>
      <div className='w-full absolute bottom-0 flex justify-center'>
            <Link href='/docs' className='flex gap-1 items-center justify-center border-t-[2px] border-l-[2px] border-r-[2px] border-neutral-950 dark:border-neutral-800 relative bottom-2 cursor-pointer font-sans font-medium px-8 py-2 rounded-md bg-gradient-to-t from-[#262626] to-[#525252] text-neutral-200 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]'>Browse PRO templates<span className="text-sm fonr-sans font-medium"><HiOutlineExternalLink/></span></Link>
        </div>
    </div>
  )
}




export const BGPatterns = () => {
  return (
    <div className='w-full h-full pt-20 max-h-[1024px] lg:max-h-[850px] overflow-hidden relative pb-10'>
      <div className='w-full'>
        <div className='w-full mx-auto'>
            <h1 className='text-center font-sans font-bold text-2xl lg:text-4xl text-neutral-800 dark:text-neutral-200 pb-3'>Pro Templates by lokalhost.io</h1>
            <p className='text-center text-sm font-sans font-medium text-neutral-700 dark:text-neutral-300'>Lokalhost offers free best premium templates pack to help your website stand out. Professional, clean and modern components to help you get more done.</p>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 justify-evenly lg:px-10 px-5 py-10 gap-6'>
            <div className='lg:w-[400px] w-full lg:h-[260px] h-[300px] rounded-sm shadow-sm bg-white dark:bg-neutral-950 border flex justify-center items-center overflow-hidden'>
                <div className='w-full h-full flex flex-col justify-between'>
                    <div className=' relative z-40 w-full h-[280px] overflow-hidden'>
                      <BgDarkGradient3 />
                    </div>
                    <div className='w-full h-[60px] bg-neutral-100 dark:bg-neutral-900 border-t'></div>
                </div>
            </div>
            <div className='overflow-hidden lg:w-[400px] w-full lg:h-[260px] h-[300px] rounded-sm shadow-sm bg-white dark:bg-neutral-950 border flex justify-center items-center'>
                <div className='w-full h-full flex flex-col justify-between'>
                    <div className=' relative z-40 w-full h-[280px] overflow-hidden'>
                      <BgLightGradient1 />
                    </div>
                    <div className='w-full h-[60px] bg-neutral-100 dark:bg-neutral-900 border-t'></div>
                </div>
            </div>
            <div className='overflow-hidden lg:w-[400px] w-full lg:h-[260px] h-[300px] rounded-sm shadow-sm bg-white dark:bg-neutral-950 border flex justify-center items-center'>
                <div className='w-full h-full flex flex-col justify-between'>
                    <div className=' relative z-40 w-full h-[280px] overflow-hidden'>
                      <BgLightGradient2 />
                    </div>
                    <div className='w-full h-[60px] bg-neutral-100 dark:bg-neutral-900 border-t'></div>
                </div>
            </div>
            <div className='overflow-hidden lg:w-[400px] w-full lg:h-[260px] h-[300px] rounded-sm shadow-sm bg-white dark:bg-neutral-950 border flex justify-center items-center'>
                <div className='w-full h-full flex flex-col justify-between'>
                    <div className=' relative z-40 w-full h-[280px] overflow-hidden'>
                      <BgLightGradient4 />
                    </div>
                    <div className='w-full h-[60px] bg-neutral-100 dark:bg-neutral-900 border-t'></div>
                </div>
            </div>
            <div className='overflow-hidden lg:w-[400px] w-full lg:h-[260px] h-[300px] rounded-sm shadow-sm bg-white dark:bg-neutral-950 border flex justify-center items-center'>
                <div className='w-full h-full flex flex-col justify-between'>
                    <div className=' relative z-40 w-full h-[280px] overflow-hidden'>
                      <BgLightGradient6 />
                    </div>
                    <div className='w-full h-[60px] bg-neutral-100 dark:bg-neutral-900 border-t'></div>
                </div>
            </div>
            <div className='overflow-hidden lg:w-[400px] w-full lg:h-[260px] h-[300px] rounded-sm shadow-sm bg-white dark:bg-neutral-950 border flex justify-center items-center'>
                <div className='w-full h-full flex flex-col justify-between'>
                    <div className=' relative z-40 w-full h-[280px] overflow-hidden'>
                      <BgLightGradient5 />
                    </div>
                    <div className='w-full h-[60px] bg-neutral-100 dark:bg-neutral-900 border-t'></div>
                </div>
            </div>
        </div>
        
      </div>
      <div className='absolute bottom-0 z-40 w-full flex justify-center'>
            <Link href='/docs' className='flex gap-1 items-center justify-center border-t-[2px] border-l-[2px] border-r-[2px] border-neutral-950 dark:border-neutral-800 relative bottom-2 cursor-pointer font-sans font-medium px-8 py-2 rounded-md bg-gradient-to-t from-[#262626] to-[#525252] text-neutral-200 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]'>Get More Patterns<span className="text-sm fonr-sans font-medium"><HiOutlineExternalLink/></span></Link>
        </div>
    </div>
  )
}