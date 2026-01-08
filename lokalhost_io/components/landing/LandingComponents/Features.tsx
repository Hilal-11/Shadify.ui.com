import React from 'react'

function Features() {

const FEATURES_LIST = [
    {
      title: 'Production Components',
      description:
        'Carefully crafted React and Next.js components built for performance, accessibility, and real-world application needs.',
    },
    {
      title: 'Modern Templates',
      description:
        'Professionally designed templates that help you move from idea to production faster with clean layouts and scalable structure.',
    },
    {
      title: 'UI Patterns',
      description:
        'Consistent design systems and reusable UI patterns that ensure visual harmony and long-term maintainability.',
    },
    {
      title: 'Web/Mobile Components',
      description:
        'Modern UI elements optimized for both web and mobile platforms to deliver consistent user experiences across devices.',
    },
    {
      title: 'Authentication Kits',
      description:
        'Pre-built authentication flows including login, signup, OTP, and password recovery, designed for secure and easy integration.',
    },
    {
      title: 'Background Patterns',
      description:
        'A curated collection of lightweight patterns and gradients that add visual depth without compromising performance.',
    },
    {
      title: 'Motion & Animations',
      description:
        'Smooth, meaningful animations and motion patterns that enhance user experience and bring interfaces to life.',
    },
    {
      title: 'Customer Support',
      description:
        'Built-in light and dark theme compatibility with adaptable styles to match any product branding.',
    },
  ];
  


  return (
    <div className='container w-full h-full pt-28 pb-10'>
      <div className='text-left mb-10'>
        <h1 className='text-left text-4xl font-bold font-sans text-neutral-800 dark:text-neutral-200'>Lokalhost.io Features</h1>
      </div>
      
      <div className='w-full h-full grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 border-l border-neutral-300 border-r justify-center items-center'>
        <div className='hover:bg-orange-200 transition duration-300 hover:mask-t-from-60% mask-t-from-60% to-90% w-full lg:w-[300px] border-b lg:border-r border-neutral-300 h-[200px] px-5 py-4 flex justify-center items-center'>
          <div className='text-left space-y-1'>
            <h1 className='text-lg font-sans font-medium text-neutral-800 dark:text-neutral-200'>{FEATURES_LIST[0].title}</h1>
            <p className='text-sm font-sans font-medium text-neutral-700 dark:text-neutral-300'>{FEATURES_LIST[0].description}</p>
          </div>
        </div>
        <div className='hover:bg-blue-200 transition duration-300 hover:mask-t-from-60% mask-t-from-60% to-90% w-full lg:w-[300px] border-b lg:border-r border-neutral-300 h-[200px] px-5 py-4 flex justify-center items-center'>
          <div className='text-left space-y-1'>
            <h1 className='text-lg font-sans font-medium text-neutral-800 dark:text-neutral-200'>{FEATURES_LIST[1].title}</h1>
            <p className='text-sm font-sans font-medium text-neutral-700 dark:text-neutral-300'>{FEATURES_LIST[1].description}</p>
          </div>
        </div>
        <div className='hover:bg-cyan-200 transition duration-300 hover:mask-t-from-60% mask-t-from-60% to-90% w-full lg:w-[300px] border-b lg:border-r border-neutral-300 h-[200px] px-5 py-4 flex justify-center items-center'>
         <div className='text-left space-y-1'>
          <h1 className='text-lg font-sans font-medium text-neutral-800 dark:text-neutral-200'>{FEATURES_LIST[2].title}</h1>
          <p className='text-sm font-sans font-medium text-neutral-700 dark:text-neutral-300'>{FEATURES_LIST[2].description}</p>
         </div>
        </div>
        <div className='hover:bg-neutral-200 transition duration-300 hover:mask-t-from-60% mask-t-from-60% to-90% w-full lg:w-[300px] border-b border-neutral-300 h-[200px] px-5 py-4 flex justify-center items-center'>
         <div className='text-left space-y-1'>
          <h1 className='text-lg font-sans font-medium text-neutral-800 dark:text-neutral-200'>{FEATURES_LIST[3].title}</h1>
          <p className='text-sm font-sans font-medium text-neutral-700 dark:text-neutral-300'>{FEATURES_LIST[3].description}</p>
         </div>
        </div>

        <div className='hover:bg-gray-200 transition duration-300 hover:mask-b-from-60% mask-b-from-60% to-90% w-full lg:w-[300px] border-t lg:border-t-0 lg:border-r border-neutral-300 h-[200px] relative -top-10 px-5 pb-8 flex justify-center items-center'>
          <div className='text-left space-y-1'>
          <h1 className='text-lg font-sans font-medium text-neutral-800 dark:text-neutral-200'>{FEATURES_LIST[4].title}</h1>
          <p className='text-sm font-sans font-medium text-neutral-700 dark:text-neutral-300'>{FEATURES_LIST[4].description}</p>
          </div>
        </div>
        <div className='hover:bg-green-200 transition duration-300 hover:mask-b-from-60% mask-b-from-60% to-90% w-full lg:w-[300px] border-t lg:border-t-0 lg:border-r  border-neutral-300 h-[200px] relative -top-10 px-5 pb-8 flex justify-center items-center'>
          <div className='text-left space-y-1'>
          <h1 className='text-lg font-sans font-medium text-neutral-800 dark:text-neutral-200'>{FEATURES_LIST[5].title}</h1>
          <p className='text-sm font-sans font-medium text-neutral-700 dark:text-neutral-300'>{FEATURES_LIST[5].description}</p>
          </div>
        </div>
        <div className='hover:bg-indigo-200 transition duration-300 hover:mask-b-from-60% mask-b-from-60% to-90% w-full lg:w-[300px] border-t lg:border-t-0 lg:border-r  border-neutral-300 h-[200px] relative -top-10 px-5 pb-8 flex justify-center items-center'>
          <div className='text-left space-y-1'>
          <h1 className='text-lg font-sans font-medium text-neutral-800 dark:text-neutral-200'>{FEATURES_LIST[6].title}</h1>
          <p className='text-sm font-sans font-medium text-neutral-700 dark:text-neutral-300'>{FEATURES_LIST[6].description}</p>
          </div>
        </div>
        <div className='hover:bg-slate-300 transition duration-300 hover:mask-b-from-60% mask-b-from-60% to-90% w-full lg:w-[300px] border-t lg:border-t-0 border- border-neutral-300 h-[200px] relative -top-10 px-5 pb-8 flex justify-center items-center'>
          <div className='text-left space-y-1'>
          <h1 className='text-lg font-sans font-medium text-neutral-800 dark:text-neutral-200'>{FEATURES_LIST[7].title}</h1>
          <p className='text-sm font-sans font-medium text-neutral-700 dark:text-neutral-300'>{FEATURES_LIST[7].description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Features
