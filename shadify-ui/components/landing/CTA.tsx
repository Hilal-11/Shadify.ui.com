import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'
function CTA() {
  return (
      <div className='container mx-auto'>
        <div className='grid grid-col-1 gap-6 '>
            <div className='bg-neutral-50 dark:bg-neutral-900 col-span-2 pb-6 pt-6 grid lg:grid-cols-2 grid-cols-1 gap-8 lg:gap-10 items-center justify-center overflow-hidden relative rounded-2xl shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] lg:h-[430px] md:h-auto h-auto'>

                        <div className="h-full md:h-full absolute inset-0  w-full bg-[linear-gradient(90deg,_#F6D5F7_0%,_#FBE9D7_100%)]">
                          <div className="absolute h-full w-full bg-[linear-gradient(to_right,#f74c062e_1px,transparent_1px),linear-gradient(to_bottom,#f9bc2c2e_1px,transparent_1px)] [background-size:12px_12px] [mask-image:radial-gradient(ellipse_40%_40%_at_50%_50%,#000_70%,transparent_100%)]"></div>
                        </div>
                
                <div className='z-30 px-6 lg:px-10'>
                    <h1 className='text-4xl lg:text-5xl text-neutral-800 font-sans font-bold py-3'>Train your brain, upgrade your code</h1>
                    <p className='text-md font-sans text-neutral-700 py-5'>Take on bite-sized coding challenges designed to strengthen your problem-solving abilities and sharpen your logical thinking. Each task focuses on improving specific techniques, helping you build confidence in your primary language—or explore new technologies as you level up through real, hands-on practice and continuous progress.</p>
                    <div className='flex flex-wrap gap-4'>
                        <button className='font-sans px-10 py-2 rounded-md bg-neutral-950 text-white dark:bg-neutral-900 dark:text-neutral-100 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]'>Login/Signup</button>
                        <button className='font-sans px-10 py-2 rounded-md bg-white dark:text-neutral-900 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]'>Explore Templete</button>
                    </div>
                </div>
                <div className='px-6 relative'>
                    <img src="https://res.cloudinary.com/dou5rypdf/image/upload/v1760630433/keysModel_zwo42l.png" alt='KeyBoardModel'></img>
                </div>

            </div>
        </div>
    </div>
  )
}

export default CTA
