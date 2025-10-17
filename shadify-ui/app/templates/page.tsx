import React from "react"
import Header from "@/components/landing/header"
import { RiNextjsFill  , RiTailwindCssFill } from "react-icons/ri";
import { SiShadcnui } from "react-icons/si";
import { RiRemixRunLine } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import { TbBrandReactNative } from "react-icons/tb";
function Templates(){
    return (
        <div>
            <div>
                <Header />
            </div>
            <div className="container pt-10 w-full h-auto">
                <div className="w-full h-auto mx-auto">
                    <div className="w-full mx-auto text-center">
                        <h1 className="font-sans font-bold text-3xl lg:text-6xl text-neutral-800 dark:text-neutral-200">Build Anything Faster with Ready-Made Templates & Components</h1>
                        <p className="px-0 lg:w-2/3 mx-auto py-4 font-sans font-medium text-md text-neutral-600 dark:text-neutral-400">Discover a curated library of responsive templates and reusable components built for React, Next.js, and modern web technologies. Whether you're a freelancer, startup, or enterprise team, our templates help you launch beautiful websites faster with minimal effort.</p>
                    </div>
                    <div>
                        <div className='flex flex-wrap justify-evenly lg:justify-center py-0 gap-4 lg:gap-6 poppins-medium text-neutral-600 dark:text-neutral-400'>
                            <span className='flex gap-1 justify-center items-end text-[14px] lg:text-[15px] font-sans font-bold '> <span className='text-3xl lg:text-4xl'><RiNextjsFill/></span>Next.js</span>
                            <span className='flex gap-1 justify-center items-end text-[14px] lg:text-[15px] font-sans font-bold '> <span className='text-3xl lg:text-4xl'><TbBrandReactNative/></span>React</span>
                            <span className='flex gap-1 justify-center items-end text-[14px] lg:text-[15px] font-sans font-bold '> <span className='text-3xl lg:text-4xl'><RiTailwindCssFill/></span>Tailwind CSS</span>
                            <span className='flex gap-1 justify-center items-end text-[14px] lg:text-[15px] font-sans font-bold '> <span className='text-3xl lg:text-4xl'><TbBrandFramerMotion/></span>Motion</span>
                            <span className='flex gap-1 justify-center items-end text-[14px] lg:text-[15px] font-sans font-bold '> <span className='text-3xl lg:text-4xl'><RiRemixRunLine/></span>Remix</span>
                            <span className='flex gap-1 justify-center items-end text-[14px] lg:text-[15px] font-sans font-bold '> <span className='text-3xl lg:text-4xl'><SiShadcnui/></span>Shadcn</span>
                          </div>
                    </div>

                </div>
                
                <section className="w-full h-auto h-[800px] mt-20 flex">
                    <div className="hidden md:block lg:block border h-[600px] bg-neutral-900 w-[25%]">
                        
                    </div>
                    <div className="border h-[600px] bg-neutral-400 w-[100%] md:w-[75%] lg:w-[75%]">
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Templates;