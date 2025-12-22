"use client"
import { useRef } from "react"
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { IoMdSearch } from "react-icons/io";
import TemplateShimmerLoadingUI from '@/components/templateShimmerLoadingUI';
import { templatesCategories } from '@/config/templatesCatagoriedConfig';
import { CiMobile3 } from "react-icons/ci";
import { MdWeb } from "react-icons/md";
import Footer from "@/components/layout/footer"
import { IoEyeOutline } from "react-icons/io5";
function Templates(){

    const templates = useQuery(api.getTemplates.getTemplates);


    const ref = useRef<HTMLDivElement>(null);

    const onMouseDown = (e: React.MouseEvent) => {
        const slider = ref.current;
        if (!slider) return;

        const startX = e.pageX - slider.offsetLeft;
        const scrollLeft = slider.scrollLeft;

        const onMouseMove = (moveEvent: MouseEvent) => {
        const x = moveEvent.pageX - slider.offsetLeft;
        const walk = x - startX;
        slider.scrollLeft = scrollLeft - walk;
        };

        const onMouseUp = () => {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
        };

        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);
    };



    const router = useRouter();
    return (
        <div className="relative">
            <div className="dark:hidden absolute inset-0 -z-10 h-screen w-full bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"><div className=" absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_500px_at_50%_200px,#C9EBFF,transparent)]"></div></div>
            <div className="container lg:pt-40 pt-30 w-full h-auto">
                <div className="w-full h-auto mx-auto">
                    <div className="w-full mx-auto text-center">
                        <h1 className="font-sans font-bold text-3xl lg:text-6xl text-neutral-800 dark:text-neutral-200">Build Anything Faster with Ready-Made Templates & Components</h1>
                        <p className="px-0 lg:w-2/3 mx-auto py-4 font-sans font-medium text-md text-neutral-600 dark:text-neutral-400">Discover a curated library of responsive templates and reusable components built for React, Next.js, and modern web technologies. Whether you're a freelancer, startup, or enterprise team.</p>
                    </div>
                   
                </div>

                 {/* Search functionality */}
                <div className="flex items-center justify-center md:w-full w-full lg:w-2/3 mx-auto my-10 bg-neutral-50 h-[65px] px-2 rounded-full">
                    <div className="ring-1 ring-neutral-300 dark:ring-neutral-600 w-full relative flex justify-between items-center pr-1 bg-neutral-100 dark:bg-neutral-800 mx-auto rounded-full h-[58px] pl-4 font-sans font-medium">
                        <span className="absolute left-4 top-3.5 text-3xl text-neutral-500"><IoMdSearch /></span>
                        <input 
                            type="text"
                            placeholder="Search the creative work"
                            className="w-full h-[58px] rounded-full outline-none pl-8"
                        />
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center pt-4">
                    <div className="w-[100%] flex gap-3 overflow-auto whitespace-nowrap px-4 py-1 scrollbar-hide"
                        ref={ref}
                        onMouseDown={onMouseDown}
                    >
                        {
                            templatesCategories?.map((catagory) => (
                                <span key={catagory.id} className="px-4 py-1 text-lg cursor-pointer rounded-full ring-1 dark:ring-neutral-700 ring-neutral-300 flex items-center justify-center font-sans font-medium">{catagory.name}</span>
                            ))
                        }
                    </div>
                    <div className="flex justify-end w-full pt-4">
                        <div className="flex items-center justify-evenly gap-px dark:bg-neutral-800 bg-neutral-100 rounded-sm w-[70px] h-[40px] lg:w-[100px] lg:h-[46px] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">
                            <button className="flex items-center justify-center rounded-r-sm lg:text-3xl text-2xl w-full h-[40px] lg:h-[46px]"><MdWeb /></button> 
                            <button className="flex items-center justify-center rounded-r-sm lg:text-3xl text-2xl bg-orange-600 w-full h-[40px] lg:h-[46px]"><CiMobile3 /></button>
                        </div>
                    </div>        
                </div>
                

        </div>  
        
            <section className="lg:w-[90%] h-auto pt-4 px-6 mt-10 mx-auto">
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
                            key={templete.id} className="cursor-pointer w-full h-[350px] bg-neutral-100 dark:bg-neutral-900 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] rounded-xl relative ">

                            <div className="flex flex-col justify-between w-full h-[350px]">
                                {/* Image */}
                                {templete.projectImages?.[0] && (
                                    <div>
                                    <Image 
                                        src={templete.projectImages[0]}
                                        alt="not load yet"
                                        width={400}
                                        height={400}
                                        className="z-40 w-full object-cover rounded-t-md"
                                    />
                                    </div>
                                )}

                                {/* Content */}
                                <div className="flex flex-col px-3 py-3 justify-items-end justify-end h-full">
                                    <div className="flex justify-between items-end">
                                    <div className="w-full flex justify-between items-center">
                                        <h1 className="text-[17px] font-sans font-medium text-neutral-800 dark:text-neutral-200">{templete.projectName}</h1>
                                    </div>
                                    </div>
                                    <div>
                                        <p className="pt-1 text-xs text-neutral-600 dark:text-neutral-500 w-full">{templete.projectDescription.split(" ").slice(0, 22).join(" ")}...</p>
                                    </div>

                                    {/* Buttons */}
                                    <div className="flex justify-between px-3 py-2 items-end">
                                        <button>{templete.projectPrize === "free" ? `Free` : `${templete.projectPrize !== "Free"? `$${templete.projectPrize}` : "Free"} `}</button>
                                        <button className="cursor-pointer bg-neutral-50 z-30 w-8 h-8 rounded flex items-center justify-center text-neutral-800 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] font-sans font-medium dark:bg-neutral-950  dark:text-neutral-200 text-lg">
                                            <IoEyeOutline/>
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

        <Footer />
        </div>
    )
}

export default Templates;



