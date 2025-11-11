import  Header  from '@/components/landing/header'
import React from 'react'

function Pricing() {
  return (
    <div className='bg-[#f4f4f5] dark:bg-neutral-950 h-full'>
      <div className="fixed w-full">
        <Header />
      </div>
      <div className='pt-24 w-full h-auto container'>
        <div></div>
        <div className='flex gap-8 flex-wrap justify-center items-center '>
            <div className='px-6 py-6 lg:w-[360px] md:w-[400px] w-full h-[500px] ring-1 ring-neutral-300 dark:ring-neutral-900 rounded-xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]'>
                <div className='flex flex-col justify-center items-center gap-4'>
                    <h1 className='font-sans font-medium text-2xl text-neutral-700 dark:tet-netral-100'>Free Plan</h1>
                    <h1 className='text-5xl font-bold font-sans text-neutral-700 dark:tet-netral-100'>0$</h1>
                </div>
                <div className='flex justify-center pt-6'>
                    <p className='text-center font-sans font-medium text-sm text-neutral-700 dark:tet-netral-100'>In our free plan users can only use web components and some templates not mobile app templates and components</p>
                </div>
                <div className='bg-white rounded-lg mt-4 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] w-full h-[270px]'>
                    <div></div>
                    <div>
                        <button>Free to use</button>
                    </div>

                </div>
            </div>
            <div className='lg:w-[360px] md:w-[400px] w-full h-[500px] ring-1 ring-neutral-300 dark:ring-neutral-900 rounded-xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]'></div>
            <div className='lg:w-[360px] md:w-[400px] w-full h-[500px] ring-1 ring-neutral-300 dark:ring-neutral-900 rounded-xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]'></div>
        </div>
      </div>
    </div>
  )
}

// Basic

// $9
// per user / month
// For starter individuals and small teams that run on meetings.

export default Pricing
