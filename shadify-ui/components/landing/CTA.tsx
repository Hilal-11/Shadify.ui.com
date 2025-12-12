import React from 'react'
import { PiTerminalFill } from "react-icons/pi";
import { StripedPattern } from "@/components/magicui/striped-pattern"
function CTA() {
  return (
      <div className='container mx-auto'>
        <div className='grid grid-col-1 gap-6 '>
            <div className='bg-neutral-50 dark:bg-neutral-900 col-span-2 pb-6 pt-6 grid lg:grid-cols-2 grid-cols-1 gap-8 lg:gap-10 items-center justify-center overflow-hidden relative rounded-2xl shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] lg:h-[430px] md:h-auto h-auto'>

                
                <div className='z-30 px-6 lg:px-10'>
                    <h1 className='text-4xl lg:text-5xl dark:text-neutral-300 text-neutral-800  font-sans font-bold py-3'>Train your brain, upgrade your code</h1>
                    <p className='text-sm font-sans text-neutral-700 py-5 dark:text-neutral-300'>Take on bite-sized coding challenges designed to strengthen your problem-solving abilities and sharpen your logical thinking. Each task focuses on improving specific techniques.</p>
                    <div className='flex flex-wrap gap-4'>
                        <button className='whitespace-nowrap relative cursor-pointer font-sans font-medium py-2 rounded-md text-xs px-4 bg-gradient-to-t from-[#262626] to-[#525252] text-neutral-200 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] flex items-center justify-center gap-2'>Login/Signup</button>
                        <button className='whitespace-nowrap relative cursor-pointer font-sans font-medium py-2 rounded-md text-xs px-4 bg-gradient-to-t from-[#f5f5f5] to-[#e5e5e5] text-neutral-800 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] flex items-center justify-center gap-2'>Explore localhost.io</button>
                    </div>
                </div>
                <div className='flex justify-center items-center h-full'>
                    <span className='text-[18rem] lg:text-[23rem]'><PiTerminalFill/></span>
                    <StripedPattern direction="left" className="mask-l-from-50% mask-l-to-80% mask-t-from-20% to-90% " />
                </div>

            </div>
        </div>
    </div>
  )
}

export default CTA
