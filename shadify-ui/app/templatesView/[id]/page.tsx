
import React from 'react'

import { RiNextjsFill  , RiTailwindCssFill } from "react-icons/ri";
import { SiShadcnui } from "react-icons/si";
import { RiRemixRunLine } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import { TbBrandReactNative } from "react-icons/tb";
import Link from 'next/link';

import { fetchQuery } from "convex/nextjs";
import { api } from "@/convex/_generated/api";
import { Id } from '@/convex/_generated/dataModel';
import Image from 'next/image';
interface PageProps {
  params: Promise<{
    id?: string;
  }>;
}
async function templateView({ params }: PageProps) {

    const id = (await params).id as Id<'templates'>;
    const template:any = await fetchQuery(api.getTemplates.getTemplateById , { id : id })

  return (
    <div>
      <div className='pt-20 w-full h-auto py-2 lg:py-10 container px-6'>
        <div className='grid grid-cols-1 lg:grid-cols-2 justify-between py-14 lg:py-28 md:py-24'>
            <div className='space-y-4'>
                <h1 className='font-sans font-bold text-4xl lg:text-6xl'>{template?.projectName}</h1>
                <p className='font-sans font-medium text-md text-neutral-600 dark:text-neutral-400'>{template?.projectDescription}</p>

            </div>
            <div className='py-10 flex flex-wrap items-end lg:justify-end justify-center gap-5'>

                <Link href={template?.projectLiveURL} className='w-full md:w-[200px] bg-neutral-900 dark:bg-neutral-100 dark:text-black text-white font-sans font-bold  text-sm lg:text-md shadow-sm shadow-slate-800  py-[9px] lg:rounded-md rounded-md cursor-pointer transition-all duration-300 text-center'>Live Demo</Link>


                <button className='w-full md:w-[200px] font-sans font-bold  text-sm dark:bg-neutral-950 lg:text-md shadow-sm shadow-slate-800  py-[9px] rounded-md cursor-pointer transition-all duration-300'>Buy Now {template?.projectPrize}</button>
            </div>
        </div>
        <div className=' flex flex-wrap justify-evenly lg:justify-center py-0 gap-4 lg:gap-6 poppins-medium text-neutral-600 '>
                    <span className='flex gap-1 justify-center items-end text-[14px] lg:text-[15px] font-sans font-bold '> <span className='text-3xl lg:text-4xl'><RiNextjsFill/></span>Next.js</span>
                    <span className='flex gap-1 justify-center items-end text-[14px] lg:text-[15px] font-sans font-bold '> <span className='text-3xl lg:text-4xl'><TbBrandReactNative/></span>React</span>
                    <span className='flex gap-1 justify-center items-end text-[14px] lg:text-[15px] font-sans font-bold '> <span className='text-3xl lg:text-4xl'><RiTailwindCssFill/></span>Tailwind CSS</span>
                    <span className='flex gap-1 justify-center items-end text-[14px] lg:text-[15px] font-sans font-bold '> <span className='text-3xl lg:text-4xl'><TbBrandFramerMotion/></span>Motion</span>
                    <span className='flex gap-1 justify-center items-end text-[14px] lg:text-[15px] font-sans font-bold '> <span className='text-3xl lg:text-4xl'><RiRemixRunLine/></span>Remix</span>
                    <span className='flex gap-1 justify-center items-end text-[14px] lg:text-[15px] font-sans font-bold '> <span className='text-3xl lg:text-4xl'><SiShadcnui/></span>Shadcn</span>
                    
        </div>

    {/* Template Images */}

        <div className='flex justify-center items-center py-20'>
            <div className='grid lg:grid-cols-2 grid-cols-1 w-full lg:gap-4 gap-2 '>
                {
                    template?.projectImages.map((image:any, index:number) => (
                        <div key={index} className=' lg:rounded-2xl rounded-xl shadow-sm shadow-gray-400'>
                            <Image 
                                className='h-full rounded-2xl object-cover hover:mask-none transition duration-500' 
                                src={image} 
                                alt="Error" 
                                width={'800'}
                                height={800}
                            />
                        </div>
                    ))
                }
            </div>
        </div>

    </div>
    </div>
  )
}

export default templateView
