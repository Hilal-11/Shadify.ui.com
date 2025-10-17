"use client";
import React from "react"
import Header from "@/components/landing/header"
import { RiNextjsFill  , RiTailwindCssFill } from "react-icons/ri";
import { SiShadcnui } from "react-icons/si";
import { RiRemixRunLine } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import { TbBrandReactNative } from "react-icons/tb";
import { templatesNames , templatesCofig} from "@/config/templatesConfig";
import { motion } from "motion/react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

function Templates(){
    const router = useRouter();
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
                
                <section className="w-full h-auto h-[800px] mt-20 flex gap-10 relative">
                    <div className="hidden md:block lg:block overflow-y-auto w-[25%] pl-5 md:pl-5 lg:pl-10">
                        <div className="w-full h-auto py-4 flex flex-col gap-3 ">
                            <h1 className="font-sans font-bold text-2xl text-neutral-800 dark:text-neutral-200 pb-1">Templates</h1>
                            {
                                templatesNames.map((template) => (
                                    <motion.h3 
                                        key={template.templateId}
                                        initial={{ scale: 1 }}
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 1.05 }}
                                        className={`${ template.disabled ? 'text-neutral-400 dark:text-neutral-700' : 'text-neutral-600 dark:text-neutral-400'} cursor-pointer font-sans font-medium text-sm`}>{template.templateName}
                                    </motion.h3>
                                ))
                            }
                        </div>
                    </div>
                    <div className="w-[100%] md:w-[75%] lg:w-[75%] flex flex-col gap-10">
                        { templatesCofig.map((templete) => (
                            <div 
                             onClick={() => router.push(`/templatesView/${templete.id}`)}
                             key={templete.id} className="cursor-pointer w-full h-auto py-4 flex flex-col gap-3">
                            <div className="flex justify-between items-center flex-wrap lg:flex-nowrap">
                                <div className="text-left md:px-10 lg:px-10">
                                    <h1 className="font-sans font-bold text-2xl text-neutral-800 dark:text-neutral-200 pb-1">{templete.projectName}</h1>
                                    <p className="py-4 font-sans font-medium text-sm text-neutral-600 dark:text-neutral-400">{templete.projectDescription.split(" ").slice(0,30).join(" ") + "..."}</p>
                                </div>
                                <div className="w-full md:px-10 lg:px-10 flex juetify-end md:justify-end lg:justify-end ">
                                    <button className="w-full lg:w-auto font-sans font-bold px-10 py-2 rounded-md bg-neutral-900 dark:bg-neutral-200 dark:text-neutral-900  text-neutral-200 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] text-nowrap">Buy Now {templete.projectPrize}</button>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 lg:grid-cols-3 md:px-10 lg:px-10 gap-4 py-4">
                                <div className="rounded-md shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
                                    <img src={templete.projectImages[0]} alt="Template 1" className="w-full lg:h-[240px] h-auto md:h-[240px] object-cover lg:h-[240px] object-cover rounded-md" />
                                </div>
                                <div className="hidden lg:flex rounded-md shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
                                    <img src={templete.projectImages[1]} alt="Template 1" className="w-full lg:h-[240px] h-auto md:h-[240px] object-cover lg:h-[240px] object-cover rounded-md" />
                                </div>
                                <div className="hidden lg:flex rounded-md shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
                                    <img src={templete.projectImages[2]} alt="Template 1" className="w-full h-auto md:h-[240px] object-cover lg:h-[240px] object-cover rounded-md" />
                                </div>
                            </div>
                        </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Templates;