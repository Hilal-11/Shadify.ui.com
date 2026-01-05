
import React from 'react'
import { fetchQuery } from "convex/nextjs";
import { api } from "@/convex/_generated/api";
import { Id } from '@/convex/_generated/dataModel';
import CTA from '@/components/landing/CTA';
import Footer from '@/components/layout/footer';
import { MdDone } from "react-icons/md";
import { IoIosStarOutline } from "react-icons/io";
interface PageProps {
  params: Promise<{
    id: string;
  }>;
}
async function templateView({ params }: PageProps) {

    const id = (await params).id as Id<'designKits'>;
    const designKits:any = await fetchQuery(api.getTemplates.getDesignKitById , { id : id })

  return (
    <div>
      <div className='pt-20 w-full h-auto lg:py-10 container px-6'>
        <div className='grid grid-cols-1 lg:grid-cols-2 justify-between py-5 lg:py-28 md:py-24'>
            <div className='space-y-4'>
                <h1 className='font-sans font-bold text-xl lg:text-4xl'>{designKits?.name}</h1>
                <p className='font-sans font-medium text-md text-neutral-600 dark:text-neutral-400'>{designKits?.discription}</p>

            </div>
            <div className='py-10 lg:flex flex-wrap items-center justify-center  gap-5 w-full lg:space-y-0 space-y-6'>

                <button 
                className="z-0 overflow-hidden cursor-pointer font-sans font-medium w-full lg:w-60 lg:px-10 py-2 rounded-md bg-neutral-100 bg-gradient-to-t from-[#f5f5f5] to-[#d4d4d4] dark:text-neutral-900 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">Get Figma Kit</button>
                <button

                className="z-0 cursor-pointer font-sans font-medium w-full lg:w-60 lg:px-10 py-2 rounded-md bg-gradient-to-t from-[#262626] to-[#525252] text-neutral-200 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">Buy Now {designKits?.price}
                </button>

            </div>
        </div>

    {/* Template Images */}

        <div className='flex justify-center items-center py-4  lg:py-10'>
            <div className='grid lg:grid-cols-2 grid-cols-1 w-full lg:gap-4 gap-2 '>
                {
                    designKits?.images.map((image: string, index: number) => (
                        <div key={index} className=' lg:rounded-2xl rounded-xl shadow-sm shadow-gray-400'>
                            <img className='h-full rounded-lg object-cover hover:mask-none transition duration-500' 
                                src={image} 
                                alt="Error" 
                            />
                        </div>
                    ))
                }
            </div>
        </div>


        <div className='lg:grid lg:grid-cols-2 justify-between gap-10 '>
            <div>
                <h1 className='font-sans font-bold text-3xl text-neutral-800 dark:text-neutral-200'>Overview</h1>
                <p className='py-4 font-sans font-medium text-[16px] text-neutral-800 dark:text-neutral-200 leading-relaxed'>{designKits?.overview}</p>
            </div>
            <div className='mx-auto w-full flex justify-start lg:justify-center lg:py-0 py-6 '>
                <div>
                    <h1 className='font-sans font-bold text-3xl text-neutral-800 dark:text-neutral-200 text-start'>Highlights</h1>
                <div className='py-4 flex flex-col gap-3 px-2 justify-end'>
                    {
                        designKits?.highlight.map((item:string , index:number) => (
                            <div key={index} className='flex gap-1 items-center'>
                                <div className='w-4 h-4 bg-neutral-600 rounded-full flex items-center justify-center text-white'><MdDone /></div>
                                <p className=' px-3 font-sans font-medium text-sm lg:text-[16px] text-neutral-800 dark:text-neutral-200'>{item}</p>
                            </div>
                        ) )
                    }
                </div>
                </div>
            </div>
        </div>

        <div className='py-10 flex flex-wrap justify-start lg:gap-20'>
            <div>
                <h1 className='font-sans font-bold text-3xl text-neutral-800 dark:text-neutral-200 text-start'>Core Features</h1>
            <div className=''>
                {
                    designKits?.features.map((item:string , index: number) => (
                        <div key={index} className='flex gap-1 items-center'>
                            <div className='w-4 h-4 bg-neutral-600 rounded-full flex items-center justify-center text-white'><MdDone /></div>
                            <p className='space-y-4 my-2 px-3 font-sans font-medium text-sm lg:text-[16px] text-neutral-800 dark:text-neutral-200'>{item}</p>
                        </div>
                    ))
                }
            </div>
            </div>
            <div className="pt-10 w-full lg:w-auto">
                <h1 className='text-2xl font-sans font-medium'>Prefer For</h1>
                <div className='flex flex-col gap-0 lg:px-4 py-6 w-full lg:w-full'>
                    {
                        designKits?.designPreferFor.map((item:any , index:number) => (
                            <p className='border px-2 py-2 font-sans font-medium w-full lg:w-[400px] flex items-center gap-2' key={index}><span className='bg-neutral-20dark:bg-neutral-800 h-full p-2 text-xl rounded-sm'><IoIosStarOutline /></span>{item}</p>
                        ))
                    }
                </div>
            </div>
            <div className="pt-10">
                <h1 className='text-2xl font-sans font-medium'>UI Design Kit pages</h1>
                <div className='flex flex-col gap-0 lg:px-4 py-6'>
                    {
                        designKits?.designPages.map((item:string , index:number) => (
                            <div key={index} className='flex gap-1 items-center'>
                                <div className='w-4 h-4 bg-neutral-600 rounded-full flex items-center justify-center text-white'><MdDone /></div>
                                <p className='space-y-2 my-1 px-3 font-sans font-medium text-sm lg:text-[16px] text-neutral-800 dark:text-neutral-200'>{item}</p>
                            </div>
                        ) )
                    }
                </div>
            </div>
        </div>

        
        
    </div>
    <br />
    <CTA />
    <br />
    <Footer />
    </div>
  )
}

export default templateView
