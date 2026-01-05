import React from 'react'
import { PiTerminalFill } from "react-icons/pi";
import { StripedPattern } from "@/components/magicui/striped-pattern"
function CTA() {
  return (
      <div className='container mx-auto'>
        <div className='grid grid-col-1 gap-6 '>
            <div className='bg-neutral-50 dark:bg-neutral-900 col-span-2 pb-6 pt-6 grid lg:grid-cols-2 grid-cols-1 gap-8 lg:gap-10 items-center justify-center overflow-hidden relative rounded-2xl shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] lg:h-[430px] md:h-auto h-auto'>

                
                <div className='z-30 px-6 lg:px-10'>
                    <div>
                        <h1 className='text-3xl font-mono font-bold bg-gradient-to-r from-[#E62314] to-[#F19E18] text-transparent bg-clip-text'>Need something custom built?</h1>
                        <p className='px-14 pt-3 text-[15px] font-mono font-medium text-neutral-600 dark:text-neutral-400 pl-3'>I’m available for client work and can help you customize this template or build something entirely new — from UI and design systems to full-stack applications, backend services, and scalable production solutions.</p>
                    </div>
                    <div className='pt-4 lg:py-20 lg:px-10 flex items-center flex-wrap gap-2'>
                        <button className='z-40 relative overflow-hidden cursor-pointer font-sans font-medium text-sm px-10 py-2 rounded-md bg-neutral-100 bg-gradient-to-t from-[#f5f5f5] to-[#d4d4d4] dark:text-neutral-900 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]'>Ask a Question</button>
                        <button className='z-40 cursor-pointer font-sans text-sm font-medium px-10 py-2 rounded-md bg-gradient-to-r from-[#E62314] to-[#F19E18] text-neutral-200 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]'>Hire for Custom Work</button>
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
