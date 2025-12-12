"use client"
import { useRef } from "react"
import Header from "@/components/landing/header"
import { motion } from "motion/react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { BsStars } from "react-icons/bs";
import TemplateShimmerLoadingUI from '@/components/templateShimmerLoadingUI';
import { templatesCategories } from '@/config/templatesCatagoriedConfig';
import { CiMobile3 } from "react-icons/ci";
import { MdWeb } from "react-icons/md";
import Footer from "@/components/layout/footer"
import { designsConfig } from "./designsConfig"
import { IoMdSearch } from "react-icons/io";
import { GrFavorite } from "react-icons/gr";
import { IoEyeOutline } from "react-icons/io5";
function DegignKits(){

    // const templates = useQuery(api.getTemplates.getTemplates);


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

            <div className="dark:hidden absolute top-0 z-[-2] h-svh w-auto flex rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]"></div>

            <div className="fixed w-full z-50">
                <Header />
            </div>
            <div className="container lg:pt-40 pt-30 w-full h-auto">
                <div className="w-full h-auto mx-auto">
                    <div className="w-full mx-auto text-center">
                        <h1 className="font-sans font-bold text-3xl lg:text-6xl text-neutral-800 dark:text-neutral-200">Accelerate Your Ideas with Premium UI Kits</h1>
                        <p className="px-0 lg:w-2/3 mx-auto py-4 font-sans font-medium text-md text-neutral-600 dark:text-neutral-400">Delivering high-quality mobile and web app design kits built with precision in Figma Beautiful layouts, modern components, and production-ready templates to accelerate your product design journey.</p>
                    </div>
                   
                </div>

                 {/* Search functionality */}
                <div className="flex items-center justify-center md:w-full w-full lg:w-2/3 mx-auto my-10 bg-neutral-50 h-[65px] px-2 rounded-full">
                    <div className="ring-1 ring-neutral-300 dark:ring-neutral-600 rounded-full w-full relative flex justify-between items-center pr-2 bg-neutral-100 dark:bg-neutral-800 mx-auto h-[58px] pl-4 font-sans font-medium">
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
                            templatesCategories?.map((category) => (
                                <span key={category.id} className="px-4 py-1 text-lg cursor-pointer rounded-full ring-1 dark:ring-neutral-700 ring-neutral-300 flex items-center justify-center font-sans font-medium">{category.name}</span>
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
                

                {/*  Design sections */}
             <section className="lg:w-full h-auto pt-4 px-0 mt-10 mx-auto">
                { !designsConfig ? (<TemplateShimmerLoadingUI/>) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:px-5 pb-2 justify-between gap-10 realtive">
                    { 
                        designsConfig?.map((design) => (
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
                            onClick={() => router.push(`/designView/${design.id}`)}
                            key={design.id} className="cursor-pointer w-full h-auto bg-neutral-100 dark:bg-neutral-900 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] rounded-xl relative">


                                <div className="absolute top-2 right-2 flex gap-2">
                                    <button className="cursor-pointer text-sm font-sans font-bold bg-white rounded-sm w-10 h-10 flex justify-center items-center dark:bg-neutral-900 dark:text-white shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] z-40"><span className="text-xl"><GrFavorite/></span></button>
                                    <button className="cursor-pointer text-lg font-sans font-bold bg-white rounded-sm w-10 h-10 flex justify-center items-center dark:bg-neutral-900 dark:text-white shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] z-40"><IoEyeOutline/></button>
                                </div>


                                <div className="absolute inset-0 h-full w-full"><div className="absolute h-full w-full bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:10px_10px] bg-gradient-to-r from-orange-500 to-yellow-300  [mask-image:radial-gradient(ellipse_80%_100%_at_100%_100%,#000_50%,transparent_100%)]"></div></div>

                            <div className="flex flex-col">
                                {/* Image */}
                                {design.images?.[0] && (
                                    <div>
                                    <Image 
                                        src={design.images[0]}
                                        alt={design.name}
                                        width={400}
                                        height={400}
                                        className="z-40 w-full object-cover rounded-t-md"
                                    />
                                    </div>
                                )}

                                {/* Content */}
                                <div className="flex flex-col justify-end px-3 py-3 bg-white z-40 dark:bg-neutral-800 rounded-b-xl">
                                    <div className="flex justify-between">
                                    <div className="w-full flex justify-between px-2 py-2">
                                        <h1 className="text-sm font-sans font-bold">{design.name}</h1>
                                    </div>
                                    <div className="flex gap-2">
                                        
                                        <button className="cursor-pointer text-sm whitespace-nowrap font-sans font-bold bg-white rounded-sm w-10 h-10 flex justify-center items-center dark:bg-neutral-900 dark:text-white shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] z-40"><img className="w-7 h-7" src="https://cdn-icons-png.flaticon.com/512/5968/5968705.png"/></button>
                                    </div>
                                    </div>

                                    {/* Buttons */}
                                </div>
                                </div>
                        </motion.div>
                        
                    )
                    )}

                </div>
                )}
            </section>

        </div>  
    
        <Footer />
        </div>
    )
}

export default DegignKits;



