"use client"
import React from "react"
import Header from "@/components/landing/header"
import { RiNextjsFill  , RiTailwindCssFill } from "react-icons/ri";
import { SiShadcnui } from "react-icons/si";
import { RiRemixRunLine } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import { TbBrandReactNative } from "react-icons/tb";
import { motion } from "motion/react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { IoMdSearch } from "react-icons/io";
import { BsStars } from "react-icons/bs";
import TemplateShimmerLoadingUI from '@/components/templateShimmerLoadingUI';

function Templates(){

    const templates = useQuery(api.getTemplates.getTemplates);

    const router = useRouter();
    return (
        <div className="relative">
            <div className="dark:hidden absolute inset-0 -z-10 h-screen w-full bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div className=" absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div></div>

            <div>
                <Header />
            </div>
            <div className="container pt-20 w-full h-auto">
                <div className="w-full h-auto mx-auto">
                    <div className="w-full mx-auto text-center">
                        <h1 className="font-sans font-bold text-3xl lg:text-6xl text-neutral-800 dark:text-neutral-200">Build Anything Faster with Ready-Made Templates & Components</h1>
                        <p className="px-0 lg:w-2/3 mx-auto py-4 font-sans font-medium text-md text-neutral-600 dark:text-neutral-400">Discover a curated library of responsive templates and reusable components built for React, Next.js, and modern web technologies. Whether you're a freelancer, startup, or enterprise team.</p>
                    </div>
                   
                </div>

                 {/* Search functionality */}
                <div className="flex items-center justify-center md:w-full w-full lg:w-2/3 mx-auto my-10 bg-transparent bg-neutral-50 h-[65px] px-2 rounded-full">
                    <div className="ring-1 ring-neutral-300 rounded-full w-full relative flex justify-between items-center pr-1 bg-neutral-100 dark:bg-neutral-800 mx-auto rounded-full h-[58px] pl-4 font-sans font-medium">
                        <span className="absolute left-4 top-3.5 text-3xl text-neutral-500"><IoMdSearch /></span>
                        <input 
                            type="text"
                            placeholder="Search the creative work"
                            className="w-full h-[58px] rounded-full outline-none pl-8"
                        />
                        <button className="flex items-center gap-1 h-[50px] whitespace-nowrap bg-neutral-950 text-center text-neutral-900 px-10 rounded-full inter-square shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] bg-[linear-gradient(90deg,_#F6D5F7_0%,_#FBE9D7_100%)]"><span className="text-xl"><BsStars /></span>GET TEMPLATE</button>
                    </div>
                </div>
                

            </div>  
            <section className="lg:w-[90%] h-[500px] pt-4 px-6 mt-20 mx-auto">
                { !templates ? (<TemplateShimmerLoadingUI/>) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:px-5 pb-2">
                    { 
                        templates?.map((templete) => (
                        <motion.div
                            initial={{ scale: 1, filter: "brightness(88%)" }}
                            whileHover={{
                                scale: 1.03,
                                filter: "brightness(100%)",
                            }}
                            whileTap={{
                                scale: 1.03,
                                filter: "brightness(100%)",
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 20,
                                duration: 0.3,
                            }}
                            onClick={() => router.push(`/templatesView/${templete._id}`)}
                            key={templete.id} className="cursor-pointer w-full h-auto bg-neutral-100 dark:bg-neutral-900 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] rounded-xl relative">

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
                                        className="z-40 w-full object-cover rounded-t-md"
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

                                    {/* Buttons */}
                                    <div className="flex justify-between px-3 py-3">
                                    <button className="bg-neutral-50 z-30 px-8 py-1 rounded-md bg-neutral-100 text-neutral-800 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] font-sans font-medium dark:bg-neutral-950  dark:text-neutral-200">
                                        View Template
                                    </button>
                                    </div>
                                </div>
                                </div>
                        </motion.div>
                        
                    )
                    )}

                </div>
                )}
            </section>

        </div>
    )
}

export default Templates;



