import React from 'react'
import {StripedPattern2} from "./pattern"
function page() {
  return (
    <div className="w[100%] lg:w-[90%] h-screen mx-auto border-l border-r relative">
      <span className='w-[50px] border-r absolute h-screen'>
        <StripedPattern2/>
      </span>
      <span className='w-[50px] border-l absolute right-0 h-screen'>
        <StripedPattern2/>
      </span>

      <div className='w-full h-auto flex'>
        {/* side bar */}
        <div className='border-r w-[340px] h-screen pl-12 py-6'>
            <div className='w-full h-auto flex flex-col gap-3'>
                <div className='border-t border-b px-4 py-3 cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-900'>
                    <h1 className='font-sans font-medium'>Web Templates</h1>
                </div>
                <div className='border-t border-b px-4 py-3 cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-900'>
                    <h1 className='font-sans font-medium'>Design UI Kits</h1>
                </div>
                <div className='border-t border-b px-4 py-3 cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-900'>
                    <h1 className='font-sans font-medium'>Mobile Applications</h1>
                </div>
                <div className='border-t border-b px-4 py-3 cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-900'>
                    <h1 className='font-sans font-medium'>Authentication Kits</h1>
                </div>
                <div className='border-t border-b px-4 py-3 cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-900'>
                    <h1 className='font-sans font-medium'>Web Components</h1>
                </div>
                <div className='border-t border-b px-4 py-3 cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-900'>
                    <h1 className='font-sans font-medium'>Mobile UI Blocks</h1>
                </div>
                <div className='border-t border-b px-4 py-3 cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-900'>
                    <h1 className='font-sans font-medium'>SASS kits</h1>
                </div>
                <div className='border-t border-b px-4 py-3 cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-900'>
                    <h1 className='font-sans font-medium'>Profile Settings</h1>
                </div>
                <div className='border-t border-b px-4 py-3 cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-900'>
                    <h1 className='font-sans font-medium'>Subscription / Billing</h1>
                </div>
            </div>
        </div>
      </div>
      
    </div>
  )
}

export default page




