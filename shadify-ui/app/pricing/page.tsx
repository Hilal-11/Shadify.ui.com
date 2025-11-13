import  Header  from '@/components/landing/header'
import React from 'react'
import { MdDone } from "react-icons/md";
function Pricing() {
  return (
    <div className='bg-[#f4f4f5] dark:bg-neutral-950 h-full'>
      <div className="fixed w-full">
        <Header />
      </div>
      <div className='pt-24 w-full h-screen container'>
        <div></div>
        <div className='flex gap-8 flex-wrap justify-center items-end '>
            <div className='px-6 py-6 lg:w-[400px] md:w-auto w-full h-auto ring-1 ring-neutral-300 dark:ring-neutral-900 rounded-xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-neutral-50 dark:bg-neutral-900'>
                <div className='flex flex-col justify-center items-center gap-0'>
                    <h1 className='font-sans font-medium text-2xl text-neutral-800 dark:text-neutral-200'>Free Plan</h1>
                    <h1 className='text-5xl font-bold font-sans text-neutral-800 dark:text-neutral-200'>0$</h1>
                    <p className='font-sans text-xs'>Per user / month</p>
                </div>
                <div className='flex justify-center pt-6'>
                    <p className='text-center font-sans text-sm text-neutral-800 dark:text-neutral-200'>In our free plan users can only use web components and some templates not mobile app templates and components</p>
                </div>
                <div className='bg-white dark:bg-neutral-800 rounded-lg mt-4 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] w-full h-auto pb-3'>
                    <div className='pt-4 px-3'>
                      <h1 className='font-sans text-sm text-neutral-600'>What's included:</h1>
                      <div className='px-3 py-5'>
                        <ul className='flex flex-col gap-3'>
                            <li className='flex gap-2 font-sans font-medium text-sm '> <span className='text-xl flex items-center justify-center h-[21px] bg-gradient-to-t from-[#262626] to-[#525252] text-neutral-200 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] w-[21px] rounded-full bg-neutral-200'><MdDone /></span> Basic summary</li>
                            <li className='flex gap-2 font-sans font-medium text-sm '> <span className='text-xl flex items-center justify-center h-[21px] bg-gradient-to-t from-[#262626] to-[#525252] text-neutral-200 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] w-[21px] rounded-full bg-neutral-200'><MdDone /></span> 100 hours of transcription /month</li>
                            <li className='flex gap-2 font-sans font-medium text-sm '> <span className='text-xl flex items-center justify-center h-[21px] bg-gradient-to-t from-[#262626] to-[#525252] text-neutral-200 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] w-[21px] rounded-full bg-neutral-200'><MdDone /></span> Speaker Basic in-call highlighting</li>
                            <li className='flex gap-2 font-sans font-medium text-sm '> <span className='text-xl flex items-center justify-center h-[21px] bg-gradient-to-t from-[#262626] to-[#525252] text-neutral-200 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] w-[21px] rounded-full bg-neutral-200'><MdDone /></span> Standard support</li>
                            <li className='flex gap-2 font-sans font-medium text-sm '> <span className='text-xl flex items-center justify-center h-[21px] bg-gradient-to-t from-[#262626] to-[#525252] text-neutral-200 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] w-[21px] rounded-full bg-neutral-200'><MdDone /></span> 1TB of storage</li>
                        </ul>
                      </div>
                    </div>
                    <div className='w-full flex justify-center items-center px-6'>
                        <button className='w-full py-2 rounded-xl bg-gradient-to-t from-[#262626] to-[#525252] text-neutral-200 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]'>Try it for Free</button>
                    </div>

                </div>
            </div>
            <div className='relative px-6 py-6 lg:w-[400px] md:w-auto w-full h-auto border-2 dark:ring-neutral-900 rounded-xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-neutral-50 dark:bg-neutral-900'>

                <div className="absolute h-full w-full bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:10px_10px] bg-gradient-to-r from-orange-500 to-yellow-300  [mask-image:radial-gradient(ellipse_80%_100%_at_100%_100%,#000_50%,transparent_100%)]"></div>

                <div className='flex flex-col justify-center items-center gap-0'>
                    <h1 className='font-sans font-medium text-2xl text-neutral-800 dark:text-neutral-200'>Pro Plan</h1>
                    <h1 className='text-5xl font-bold font-sans text-neutral-800 dark:text-neutral-200'>24$</h1>
                    <p className='font-sans text-xs'>Per user / month</p>
                </div>
                <div className='flex justify-center pt-6'>
                    <p className='text-center font-sans text-sm text-neutral-800 dark:text-neutral-200'>Unlock all premium web and mobile components.
Access all templates, advanced themes, and regular updates building high-quality apps.</p>
                </div>
                <div className='bg-white dark:bg-neutral-800 rounded-lg mt-4 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] w-full h-auto pb-3'>
                    <div className='pt-4 px-3'>
                      <h1 className='font-sans text-sm text-neutral-600'>What's included:</h1>
                      <div className='px-3 py-5'>
                        <ul className='flex flex-col gap-3'>
                            <li className='flex gap-2 font-sans font-medium text-sm '> <span className='text-xl flex items-center justify-center h-[21px] bg-gradient-to-t from-[#262626] to-[#525252] text-neutral-200 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] w-[21px] rounded-full bg-neutral-200'><MdDone /></span> Basic summary</li>
                            <li className='flex gap-2 font-sans font-medium text-sm '> <span className='text-xl flex items-center justify-center h-[21px] bg-gradient-to-t from-[#262626] to-[#525252] text-neutral-200 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] w-[21px] rounded-full bg-neutral-200'><MdDone /></span> 100 hours of transcription /month</li>
                            <li className='flex gap-2 font-sans font-medium text-sm '> <span className='text-xl flex items-center justify-center h-[21px] bg-gradient-to-t from-[#262626] to-[#525252] text-neutral-200 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] w-[21px] rounded-full bg-neutral-200'><MdDone /></span>Speaker identification</li>
                            <li className='flex gap-2 font-sans font-medium text-sm '> <span className='text-xl flex items-center justify-center h-[21px] bg-gradient-to-t from-[#262626] to-[#525252] text-neutral-200 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] w-[21px] rounded-full bg-neutral-200'><MdDone /></span>Basic in-call highlighting</li>
                            <li className='flex gap-2 font-sans font-medium text-sm '> <span className='text-xl flex items-center justify-center h-[21px] bg-gradient-to-t from-[#262626] to-[#525252] text-neutral-200 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] w-[21px] rounded-full bg-neutral-200'><MdDone /></span>Standard support</li>
                            <li className='flex gap-2 font-sans font-medium text-sm '> <span className='text-xl flex items-center justify-center h-[21px] bg-gradient-to-t from-[#262626] to-[#525252] text-neutral-200 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] w-[21px] rounded-full bg-neutral-200'><MdDone /></span>1TB of storage</li>
                        </ul>
                      </div>
                    </div>
                    <div className='w-full flex justify-center items-center px-6'>
                        <button className='w-full py-2 rounded-xl pramiun_pricing_btn cursor-pointer text-neutral-800 font-medium text-neutral-200 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]'>Get premium</button>
                    </div>

                </div>
            </div>
            <div className='px-6 py-6 lg:w-[400px] md:w-auto w-full h-auto ring-1 ring-neutral-300 dark:ring-neutral-900 rounded-xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-neutral-50 dark:bg-neutral-900'>
                <div className='flex flex-col justify-center items-center gap-0'>
                    <h1 className='font-sans font-medium text-2xl text-neutral-800 dark:text-neutral-200'>Enterprize Plan</h1>
                    <h1 className='text-5xl font-bold font-sans text-neutral-800 dark:text-neutral-200'>299$</h1>
                    <p className='font-sans text-xs'>Per user / month</p>
                </div>
                <div className='flex justify-center pt-6'>
                    <p className='text-center font-sans text-sm text-neutral-800 dark:text-neutral-200'>Get everything in Pro plus team collaboration, private access, and priority support. Perfect for companies for building</p>
                </div>
                <div className='bg-white dark:bg-neutral-800 rounded-lg mt-4 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] w-full h-auto pb-3'>
                    <div className='pt-4 px-3'>
                      <h1 className='font-sans text-sm text-neutral-600'>What's included:</h1>
                      <div className='px-3 py-5'>
                        <ul className='flex flex-col gap-3'>
                            <li className='flex gap-2 font-sans font-medium text-sm '> <span className='text-xl flex items-center justify-center h-[21px] bg-gradient-to-t from-[#262626] to-[#525252] text-neutral-200 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] w-[21px] rounded-full bg-neutral-200'><MdDone /></span> Basic summary</li>
                            <li className='flex gap-2 font-sans font-medium text-sm '> <span className='text-xl flex items-center justify-center h-[21px] bg-gradient-to-t from-[#262626] to-[#525252] text-neutral-200 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] w-[21px] rounded-full bg-neutral-200'><MdDone /></span> 100 hours of transcription /month</li>
                            <li className='flex gap-2 font-sans font-medium text-sm '> <span className='text-xl flex items-center justify-center h-[21px] bg-gradient-to-t from-[#262626] to-[#525252] text-neutral-200 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] w-[21px] rounded-full bg-neutral-200'><MdDone /></span>Speaker identification</li>
                            <li className='flex gap-2 font-sans font-medium text-sm '> <span className='text-xl flex items-center justify-center h-[21px] bg-gradient-to-t from-[#262626] to-[#525252] text-neutral-200 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] w-[21px] rounded-full bg-neutral-200'><MdDone /></span>Basic in-call highlighting</li>
                            <li className='flex gap-2 font-sans font-medium text-sm '> <span className='text-xl flex items-center justify-center h-[21px] bg-gradient-to-t from-[#262626] to-[#525252] text-neutral-200 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] w-[21px] rounded-full bg-neutral-200'><MdDone /></span>Standard support</li>
                            <li className='flex gap-2 font-sans font-medium text-sm '> <span className='text-xl flex items-center justify-center h-[21px] bg-gradient-to-t from-[#262626] to-[#525252] text-neutral-200 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] w-[21px] rounded-full bg-neutral-200'><MdDone /></span>1TB of storage</li>
                            <li className='flex gap-2 font-sans font-medium text-sm '> <span className='text-xl flex items-center justify-center h-[21px] bg-gradient-to-t from-[#262626] to-[#525252] text-neutral-200 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] w-[21px] rounded-full bg-neutral-200'><MdDone /></span>Team Collaboration</li>
                            <li className='flex gap-2 font-sans font-medium text-sm '> <span className='text-xl flex items-center justify-center h-[21px] bg-gradient-to-t from-[#262626] to-[#525252] text-neutral-200 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] w-[21px] rounded-full bg-neutral-200'><MdDone /></span>Private NPM package or self-hosted access</li>

                        </ul>
                      </div>
                    </div>
                    <div className='w-full flex justify-center items-center px-6'>
                        <button className='w-full py-2 rounded-xl bg-gradient-to-t from-[#262626] to-[#525252] text-neutral-200 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]'>Unlock the dreams</button>
                    </div>

                </div>
            </div>
        </div>
      </div>
    </div>
  )
}


export default Pricing


// $24
// per user / month
// For professionals that run on meetings and need to move fast.
// What's included:





