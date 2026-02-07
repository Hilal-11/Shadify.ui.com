
import React from 'react'
import Link from 'next/link';
import { fetchQuery } from "convex/nextjs";
import { api } from "@/convex/_generated/api";
import { Id } from '@/convex/_generated/dataModel';
import Image from 'next/image';
import { LuFigma } from "react-icons/lu";
import { FaGithub } from "react-icons/fa";
import { GoFileZip } from "react-icons/go";
import { MdDone } from "react-icons/md";
import { IoIosStarOutline } from "react-icons/io";
import Footer from '@/components/layout/footer';

import react from "@/public/tech/react.jpeg"
import next from "@/public/tech/next.jpeg"
import tailwindX from "@/public/tech/tailwindX.webp"
import shadcn from "@/public/tech/shadcn.jpeg"
import vite from "@/public/tech/vite.jpeg"
import ts from "@/public/tech/ts.jpeg"
import js from "@/public/tech/js.jpeg"
const techStackImages = [
        react,
        next,
        tailwindX,
        shadcn,
        vite,
        ts,
        js,
]
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
      <div className='pt-0 lg:pt-20 w-full h-auto py-2 lg:py-7 container px-6'>
        <div className='grid grid-cols-1 lg:grid-cols-2 justify-between py-14 lg:py-14 md:py-14'>
            <div className='space-y-4'>
                <h1 className='font-sans font-bold text-2xl lg:text-4xl'>{template?.projectName}</h1>
                <p className='font-sans font-medium text-sm text-neutral-600 dark:text-neutral-400'>{template?.projectDescription}</p>

            </div>
            <div className='py-10 flex flex-wrap items-end lg:justify-end justify-center gap-5'>

                <Link href={template?.projectLiveURL} target='_blank' className='w-full md:w-[200px] bg-neutral-900 dark:bg-neutral-100 dark:text-black text-white font-sans font-medium  text-sm lg:text-md shadow-sm shadow-slate-800  py-[9px] lg:rounded-md rounded-md cursor-pointer transition-all duration-300 text-center'>Live Demo</Link>

                <button className='w-full md:w-[200px] font-sans font-medium text-sm dark:bg-neutral-950 lg:text-md shadow-sm shadow-slate-800  py-[9px] rounded-md cursor-pointer transition-all duration-300'>Buy Now {template?.projectPrize}</button>
            </div>
        </div>

        <div className='w-full h-auto flex justify-between items-center'>
            <div>
                {/* Technologies used */}
                    <div className='flex flex-wrap justify-evenly lg:justify-between py-0 poppins-medium text-neutral-600 '>
                        {techStackImages.map((image, index) => (
                            <div key={index} className='rounded-full p-[3px] cursor-pointer bg-neutral-50 dark:bg-neutral-800 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] flex items-center justify-center'>
                                <Image
                                    key={index}
                                    src={image}
                                    width={30}
                                    height={30}
                                    alt='Tech Image'
                                    className='rounded-full '
                                />
                            </div>
                        ))}
                    </div>
                {/* Template format for users(code, figms kit, repo,) */}
            </div>
            <div>
                {/* buttons---> like, installation setup, users queries */}
            </div>
        </div>
    {/* Template Images */}

        <div className='flex justify-center items-center py-20'>
            <div className='grid lg:grid-cols-2 grid-cols-1 w-full lg:gap-4 gap-2 '>
                {
                    template?.projectImages.map((image:any, index:number) => (
                        <div key={index} className=' lg:rounded-2xl rounded-xl shadow-sm shadow-gray-400'>
                            <Image 
                                className='h-full rounded-md object-cover hover:mask-none transition duration-500' 
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

        <div className='mt-8 lg:mt-16 flex gap-10 flex-wrap w-full items-start'>
            {/* Instructions to use this template */}
            <div className="space-y-4">
                <h1 className="text-2xl font-sans font-medium">
                    Instructions to Use This Template
                </h1>

                <div className="lg:pl-10 flex flex-col gap-3 text-neutral-700">
                    <p className='font-sans font-medium text-sm lg:text-lg dark:text-neutral-400'>1. Download the template as a ZIP file.</p>

                    <p className='font-sans font-medium text-sm lg:text-lg dark:text-neutral-400'>2. Extract the ZIP file to your preferred location.</p>

                    <p className='font-sans font-medium text-sm lg:text-lg dark:text-neutral-400'>
                    3. Open the extracted folder in a code editor such as{" "}
                    <b>Visual Studio Code</b>.
                    </p>

                    <p className='font-sans font-medium text-sm lg:text-lg dark:text-neutral-400'>
                    4. Open the terminal inside the editor and navigate to the template
                    folder.
                    </p>

                    <div className="space-y-3">
                    <h2 className="font-medium text-lg dark:text-neutral-400">5. Install Dependencies & Run the Project</h2>
                    <code className="dark:bg-neutral-800 dark:text-neutral-300 bg-neutral-100 px-2 py-2 rounded font-medium font-mono">
                        npm install
                    </code>
                    <code className="ml-10 dark:bg-neutral-800 dark:text-neutral-300 bg-neutral-100 px-2 py-2 rounded font-medium font-mono">
                        npm run dev
                    </code>
                    </div>

                    <div className="space-y-3">
                    <h2 className="font-medium dark:text-neutral-400">6. Customize the Template</h2>
                    <p className='font-sans font-medium text-sm lg:text-lg dark:text-neutral-400'>
                        Navigate to the <code className="dark:bg-neutral-800 dark:text-neutral-300 bg-neutral-100 px-1 rounded">src/config</code>{" "}
                        folder.
                    </p>
                    <p className='font-sans font-medium text-sm lg:text-lg dark:text-neutral-400'>Update the static data according to your project requirements.</p>
                    </div>
                </div>
                </div>

            {/* download resources */}
            <div className=' px-10'>
                <h1 className='text-2xl font-sans font-medium'>Download resources</h1>
                <br />
                <div className='flex pl-5'> 
                    <p className='w-[220px] flex gap-2 border px-2 cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-800 transition duration-300 py-2 font-sans font-medium'><span className='text-2xl dark:text-neutral-400'><GoFileZip/></span><Link href={template.zip_code_file}>Download Zip</Link></p>
                </div>
                <div className='flex pl-5'>
                    <p className='w-[220px] flex gap-2 border px-2 cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-800 transition duration-300 py-2 font-sans font-medium'><span className='text-2xl dark:text-neutral-400'><FaGithub/></span>Clone Repository</p>
                </div>
                <div className='flex pl-5'>
                    <p className='w-[220px] flex gap-2 border px-2 cursor-pointer hover:bg-neutral-200 dark:hover:bg-neutral-800 transition duration-300 py-2 font-sans font-medium'><span className='text-2xl dark:text-neutral-400'><LuFigma/></span>Figma Kit</p>
                </div>
            </div>
        </div>

        <div className='mt-14'>
            {/* Features */}
                <h1 className='text-2xl font-sans font-medium'>Features</h1>
                <div className='mt-5 lg:mt-10 w-full flex flex-wrap justify-between lg:gap-10 lg:px-14'>
                    {
                        template?.projectFeatures.map((item:any , index: number) => (
                            <div key={index} className={`${index === 0 ? 'bg-neutral-100 border dark:bg-neutral-800' : 'hover:bg-neutral-100 hover:border dark:hover:bg-neutral-800'} hover:bg-neutral-100 hover:border dark:hover:bg-neutral-800 transition duration-300 py-8 px-4 rounded hover:shadow-[10_0px_10px_rgba(248,_155,_41,_0.1)]`}>
                                
                                <p className='flex items-center gap-1 font-sans font-medium text-sm lg:text-[16px] text-neutral-800 dark:text-neutral-200'><span className='relative -left-1 -top-1 w-4 h-4 bg-zinc-600 rounded-full flex items-center justify-center text-white'><MdDone /></span>{item.feature}</p>
                                <p className='pt-1 pl-6 lg:pl-10 text-sm font-sans w-[300px]'>{item.aboutFeature}</p>
                            </div>
                        ) )
                    }
                </div>
        </div>

       <div className='mt-10 lg:mt-16 '>
        <h1 className='text-2xl font-sans font-medium'>Prefer For</h1>
        <div className='flex flex-col gap-0 lg:px-4 py-6'>
            {
                template?.templatePurposes.map((item:any , index:number) => (
                    <span className='border px-2 py-2 font-sans font-medium lg:w-[400px] flex items-center gap-2' key={index}><span className='bg-neutral-200 dark:bg-neutral-800 h-full p-2 text-xl rounded-sm'><IoIosStarOutline /></span>{item}</span>
                ))
            }
        </div>
       </div>

        {/* CTA */}
        <div className='flex justify-center items-center w-full h-auto pt-20'>
            <div className='relative w-full grid grid-cols-1 lg:grid-cols-3 border border-dashed border-neutral-300 dark:border-neutral-800 h-auto bg-neutral-50 dark:bg-neutral-900 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]'>

                <span className='w-[30px] lg:w-[50px] h-[30px] lg:h-[50px] absolute -left-7.5 -top-7.5 lg:-left-12.5 lg:-top-12.5 border-1 border-dashed border-neutral-300 dark:border-neutral-800'></span>
                <span className='w-[30px] lg:w-[50px] h-[30px] lg:h-[50px] absolute -left-7.5 -bottom-7.5 lg:-left-12.5 lg:-bottom-12.5 border-1 border-dashed border-neutral-300 dark:border-neutral-800'></span>
                <span className='w-[30px] lg:w-[50px] h-[30px] lg:h-[50px] absolute -right-7.5 -top-7.5 lg:-right-12.5 lg:-top-12.5 border-1 border-dashed border-neutral-300 dark:border-neutral-800'></span>
                <span className='w-[30px] lg:w-[50px] h-[30px] lg:h-[50px] absolute -right-7.5 -bottom-7.5 lg:-right-12.5 lg:-bottom-12.5 border-1 border-dashed border-neutral-300 dark:border-neutral-800'></span>

                <div className='lg:col-span-2 px-3 lg:px-8 py-5 lg:py-14 '>
                    <div className='absolute inset-0 z-10'>
                        <StripedPattern2/>
                    </div>
                    <div>
                        <h1 className='text-3xl font-mono font-bold bg-gradient-to-r from-[#E62314] to-[#F19E18] text-transparent bg-clip-text'>Need something custom built?</h1>
                        <p className='px-14 pt-3 text-[15px] font-mono font-medium text-neutral-600 dark:text-neutral-400 pl-3'>I’m available for client work and can help you customize this template or build something entirely new — from UI and design systems to full-stack applications, backend services, and scalable production solutions.</p>
                    </div>
                    <div className='pt-4 lg:py-20 lg:px-10 flex items-center flex-wrap gap-2'>
                        <button className='z-40 relative overflow-hidden cursor-pointer font-sans font-medium text-sm px-10 py-2 rounded-md bg-neutral-100 bg-gradient-to-t from-[#f5f5f5] to-[#d4d4d4] dark:text-neutral-900 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]'>Ask a Question</button>
                        <button className='z-40 cursor-pointer font-sans text-sm font-medium px-10 py-2 rounded-md bg-gradient-to-r from-[#E62314] to-[#F19E18] text-neutral-200 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]'>Hire for Custom Work</button>
                    </div>
                </div>
                <div className='px-3 lg:px-8 lg:py-14'>
                    <h1 className='text-sm text-neutral-600 dark:text-neutral-400 g:text-xl font-bold font-mono'>Hi there, I’m Hilal — welcome to Lokalhost.io.</h1>
                    <p className='lg:pt-6 pt-2 pl-2 text-[14px] font-mono font-medium text-neutral-600 dark:text-neutral-400'>
                        I build clean, scalable, production-ready products — from UI and design systems to web & mobile apps, backend services, and full-stack solutions. If you want this template customized or have an idea to build, let’s talk.
                    </p>
                    <div className='flex items-center py-4 px-3'>
                        <span>Know more.</span>
                    <div className="border-t border-dashed border-b py-1 w-30 text-center relative border-neutral-300 dark:border-neutral-700">
                        
                    <span className="h-12 absolute left-4 -top-2.5 border border-dashed border-neutral-300 dark:border-neutral-700"></span>
                        <p className="text-sm font-mono font-bold text-neutral-700 dark:text-neutral-300 underline">@HILAL</p>
                        <span className="h-12 absolute right-4 -top-2.5 border border-dashed  border-neutral-300 dark:border-neutral-700"></span>          
                    </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    </div>
  )
}

export default templateView





import { useId } from "react"
import { cn } from "@/lib/utils"
interface StripedPatternProps extends React.SVGProps<SVGSVGElement> {
  direction?: "left" | "right"
}
export function StripedPattern2({
  direction = "left",
  className,
  width = 10,
  height = 10,
  ...props
}: StripedPatternProps) {
  const id = useId()
  const w = Number(width)
  const h = Number(height)

  return (
    <svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute z-10 h-[100%] w-[100%] stroke-[0.1]",
        className
      )}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <defs>
        <pattern id={id} width={w} height={h} patternUnits="userSpaceOnUse">
          {direction === "left" ? (
            <>
              <line x1="0" y1={h} x2={w} y2="0" stroke="currentColor" />
              <line x1={-w} y1={h} x2="0" y2="0" stroke="currentColor" />
              <line x1={w} y1={h} x2={w * 2} y2="0" stroke="currentColor" />
            </>
          ) : (
            <>
              <line x1="0" y1="0" x2={w} y2={h} stroke="currentColor" />
              <line x1={-w} y1="0" x2="0" y2={h} stroke="currentColor" />
              <line x1={w} y1="0" x2={w * 2} y2={h} stroke="currentColor" />
            </>
          )}
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  )
}
