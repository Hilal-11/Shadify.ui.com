"use client"
import React from "react"
import Header from "@/components/landing/header"
import { RiNextjsFill  , RiTailwindCssFill } from "react-icons/ri";
import { SiShadcnui } from "react-icons/si";
import { RiRemixRunLine } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import { TbBrandReactNative } from "react-icons/tb";
import { templatesNames} from "@/config/templatesConfig";
import { motion } from "motion/react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";



function Templates(){

    const templates = useQuery(api.getTemplates.getTemplates);

    const router = useRouter();
    return (
        <div className="relative">
            <div className="dark:hidden absolute inset-0 -z-10 h-screen w-full bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div className=" absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div></div>

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
                        <div className='flex flex-wrap justify-evenly lg:justify-center py-2 gap-4 lg:gap-6 poppins-medium text-neutral-600 dark:text-neutral-400'>
                            <span className='flex gap-1 justify-center items-end text-[14px] lg:text-[15px] font-sans font-bold '> <span className='text-3xl lg:text-4xl'><RiNextjsFill/></span>Next.js</span>
                            <span className='flex gap-1 justify-center items-end text-[14px] lg:text-[15px] font-sans font-bold '> <span className='text-3xl lg:text-4xl'><TbBrandReactNative/></span>React</span>
                            <span className='flex gap-1 justify-center items-end text-[14px] lg:text-[15px] font-sans font-bold '> <span className='text-3xl lg:text-4xl'><RiTailwindCssFill/></span>Tailwind CSS</span>
                            <span className='flex gap-1 justify-center items-end text-[14px] lg:text-[15px] font-sans font-bold '> <span className='text-3xl lg:text-4xl'><TbBrandFramerMotion/></span>Motion</span>
                            <span className='flex gap-1 justify-center items-end text-[14px] lg:text-[15px] font-sans font-bold '> <span className='text-3xl lg:text-4xl'><RiRemixRunLine/></span>Remix</span>
                            <span className='flex gap-1 justify-center items-end text-[14px] lg:text-[15px] font-sans font-bold '> <span className='text-3xl lg:text-4xl'><SiShadcnui/></span>Shadcn</span>
                          </div>
                    </div>
                </div>
                

            </div>  
            <section className="container w-full h-[500px] pt-4 px-4 mt-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:px-5 pb-2">
                    { templates?.map((templete) => (
                        <div 
                            onClick={() => router.push(`/templatesView/${templete._id}`)}
                            key={templete.id} className="cursor-pointer w-full h-auto bg-neutral-100 dark:bg-neutral-900 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] rounded-md relative">

                                <div class="absolute inset-0 h-full w-full"><div class="absolute h-full w-full bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:10px_10px] bg-gradient-to-r from-orange-500 to-yellow-300  [mask-image:radial-gradient(ellipse_80%_100%_at_100%_100%,#000_50%,transparent_100%)]"></div></div>

                            <div className="flex flex-col">
                                {/* Image */}
                                {templete.projectImages?.[0] && (
                                    <div>
                                    <Image 
                                        src={templete.projectImages[0]}
                                        alt={templete.templateName}
                                        width={400}
                                        height={400}
                                        className="w-full object-cover rounded-t-md"
                                    />
                                    </div>
                                )}

                                {/* Content */}
                                <div className="flex flex-col px-3 py-3">
                                    <div className="flex justify-between">
                                    <div className="w-full">
                                        <h1 className="text-2xl font-sans font-bold">{templete.projectName}</h1>

                                        {/* Tech stack icons */}
                                        <div className="flex justify-evenly pt-4 pb-2">
                                        <span className="text-xl"><RiNextjsFill/></span>
                                        <span className="text-xl"><TbBrandReactNative/></span>
                                        <span className="text-xl"><RiTailwindCssFill/></span>
                                        <span className="text-xl"><TbBrandFramerMotion/></span>
                                        <span className="text-xl"><RiRemixRunLine/></span>
                                        <span className="text-xl"><SiShadcnui/></span>
                                        </div>
                                    </div>
                                    </div>

                                    {/* Description */}
                                    <div className="mt-2">
                                    <p className="text-sm font-sans font-medium">{templete.projectDescription
                                        .split(" ")
                                        .slice(0, 40)
                                        .join(" ")}
                                    {templete.projectDescription.split(" ").length > 35 ? "..." : ""}</p>
                                    </div>

                                    {/* Buttons */}
                                    <div className="flex justify-between px-3 py-3">
                                    <button className="px-8 py-1 rounded-md bg-neutral-100 text-neutral-800 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] font-sans font-medium dark:bg-neutral-950  dark:text-neutral-200">
                                        View Template
                                    </button>
                                    <button className="px-8 py-1 rounded-md bg-neutral-950 dark:bg-neutral-100 dark:text-neutral-800 text-neutral-100 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] font-sans font-medium ">
                                        {templete.projectPrize}
                                    </button>
                                    </div>
                                </div>
                                </div>
                            
                        </div>
                        
                    ))}

                </div>
            </section>

        </div>
    )
}

export default Templates;



