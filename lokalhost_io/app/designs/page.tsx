"use client"

import { useRef } from "react"

import { useRouter } from "next/navigation";

import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { BsStars } from "react-icons/bs";
import Footer from "@/components/layout/footer"
import { IoMdSearch } from "react-icons/io";
import { Suspense } from 'react'
import Video from 'next-video';
import getStarted from '/videos/mobile_ui_kits.mp4';

function DegignKits(){

    const designsKits = useQuery(api.getTemplates.getDesignKits);
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

            <AnimatedGridPatternDemo />
            <div className="relative w-full container max-w-[1580px] pt-14 w-full h-auto z-40">
                            <AnnoncementBadge aboutBadge={"20 + Premium Templates and Designs by lokalhost.io"}/>
                            <div className="lg:pt-16 pt-8  w-full h-auto mx-auto">
                                <div className="w-full mx-auto text-center lg:px-14">
                                    <h1 className="font-sans font-bold text-3xl lg:text-5xl text-neutral-800 dark:text-neutral-200">A high-quality collection of templates for React, Next.js, and modern web stacks, designed to ship faster.</h1>
                                    <p className="px-0 lg:w-2/3 mx-auto py-4 font-sans font-medium text-md text-neutral-600 dark:text-neutral-400">Discover a curated library of responsive templates and reusable components built for React, Next.js, and modern web technologies. Whether you're a freelancer, startup, or enterprise team.</p>
                                </div>
                               
                            </div>
                             <div className="flex flex-wrap justify-center items-center pt-3 pb-5 gap-3 lg:gap-6">
                                <button className="border-1 border-orange-400 cursor-pointer px-8 py-[9px] rounded-lg text-sm font-sans font-medium text-neutral-800 bg-gradient-to-r from-[#F6D5F7] to-[#FBE9D7] shadow-sm flex items-center justify-center gap-2"><span><LuFigma /></span> Get Full Design Access</button>
                                <button className="px-8 py-[10px] cursor-pointer border-t border-l border-r border-neutral-800 rounded-lg whitespace-nowrap font-sans font-medium text-sm text-neutral-200 dark:text-neutral-200 bg-gradient-to-t from-[#262626] to-[#525252] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">Get All Premium Templates</button>
                            </div>
            
            <div className="grid grid-cols-2 gap-4 pt-8">
                <div className="w-full h-auto rounded-xl bg-neutral-100 dark:bg-neutral-900 p-5">
                    <Suspense fallback={<div>Loading...</div>}>
                        <Video src={getStarted} />
                    </Suspense>
                </div>
                <div className="w-full h-auto rounded-xl bg-neutral-100 dark:bg-neutral-900 p-5">
                    <Suspense fallback={<div>Loading...</div>}>
                        <Video src={getStarted} />
                    </Suspense>
                </div>
            </div>
                           
            
            </div>   
    
        {/* <Footer /> */}
        </div>
    )
}

export default DegignKits;





import { cn } from "@/lib/utils"
import { AnimatedGridPattern } from "@/components/ui/animated-grid-pattern";
import AnnoncementBadge from "@/components/landing/AnnoncementBadge";
import { LuFigma } from "react-icons/lu";
export function AnimatedGridPatternDemo() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden mask-x-from-80% mask-y-from-98% to-100%">
    <AnimatedGridPattern
      numSquares={50}
      maxOpacity={0.1}
      duration={3}
      repeatDelay={1}
      className={cn(
        "absolute inset-0",
        "inset-y-[-30%] h-[200%]"
      )}
    />
  </div>

  )
}


