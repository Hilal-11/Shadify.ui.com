


import React from 'react'
import {StripedPattern2} from "../pattern"
function page() {
  return (
    <div className="w[100%] lg:w-[92%] h-screen mx-auto border-l border-r relative">
          <span className='w-[50px] border-r absolute h-screen'>
            <StripedPattern2/>
          </span>
          <span className='w-[50px] border-l absolute right-0 h-screen'>
            <StripedPattern2/>
          </span>

        <div className='flex justify-center items-center h-svh'>
            <h1 className='text-3xl font-sans font-medium'>Your Subscription</h1>
        </div>
    </div>
  )
}

export default page