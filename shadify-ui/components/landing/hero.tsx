"use client";

import type React from "react";

import Link from "next/link";
import TailwindCSS from "@/components/icons/tailwindcss";
import { motion } from "motion/react";

import {
  PlaneTakeoff,
  BarChart2,
  Video,
  AudioLines,
  Globe,
  Diamond,
  Sparkles,
  Code,
  Layers,
} from "lucide-react";

import CheckoutInteraction from "../codesnippetui/currency-transfer"
import Profile04 from "../codesnippetui/profile/profile-04";
import AICardGeneration from "../codesnippetui/blocks/ai-card-generation/ai-card-generation"
import Alert04 from "@/components/codesnippetui/alert/alert-04";
import Features from "./feature-block";

import Card02 from "../codesnippetui/card/card-02";
import { IoIosArrowRoundForward } from "react-icons/io";
import { RiNextjsFill  , RiTailwindCssFill } from "react-icons/ri";
import { SiShadcnui } from "react-icons/si";
import { RiRemixRunLine } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import { TbBrandReactNative } from "react-icons/tb";

interface Action {
  id: string;
  label: string;
  icon: React.ReactNode;
  description?: string;
  short?: string;
  end?: string;
}



export function HeroSection() {
  return (
    <div className="w-full h-auto mx-auto container lg:px-4 py-14 lg:py-16 flex flex-col items-center justify-center text-center gap-6 relative">
      <div className="w-full h-auto px-2 lg:px-4 py-6">
        <span className="mx-auto w-auto lg:w-[310px] md:w-[310px] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] font-sans text-sm px-6 py-px rounded-full bg-neutral-100 text-neutral-800 dark:bg-neutral-900 dark:text-neutral-200 flex gap-2 items-center justify-center">New Components: let's expolore all <IoIosArrowRoundForward className="text-lg"/></span> 
        <div className="mt-8 text-center flex-col gap-4">
          <h1 className="font-sans font-bold text-3xl lg:text-6xl text-neutral-800 dark:text-neutral-200">A Modern Component & Template Library for Fast, Beautiful Frontends.</h1>
          <p className="px-0 lg:w-2/3 mx-auto py-4 font-sans font-medium text-md text-neutral-600 dark:text-neutral-400">Fully customizable React components and production-ready templates — built with clean code, modern design principles, and performance at the core.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 pt-8">
          <button className="font-sans font-medium px-10 py-2 rounded-md bg-neutral-100 text-neutral-900 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">Explore Templets</button>
          <button className="font-sans font-medium px-10 py-2 rounded-md bg-neutral-900 text-neutral-200 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">Components Documentation</button>
        </div>
      </div>
      <div className='flex flex-wrap justify-evenly lg:justify-center py-0 gap-4 lg:gap-6 poppins-medium text-neutral-600'>
          <span className='flex gap-1 justify-center items-end text-[14px] lg:text-[15px] font-sans font-bold '> <span className='text-3xl lg:text-4xl'><RiNextjsFill/></span>Next.js</span>
          <span className='flex gap-1 justify-center items-end text-[14px] lg:text-[15px] font-sans font-bold '> <span className='text-3xl lg:text-4xl'><TbBrandReactNative/></span>React</span>
          <span className='flex gap-1 justify-center items-end text-[14px] lg:text-[15px] font-sans font-bold '> <span className='text-3xl lg:text-4xl'><RiTailwindCssFill/></span>Tailwind CSS</span>
          <span className='flex gap-1 justify-center items-end text-[14px] lg:text-[15px] font-sans font-bold '> <span className='text-3xl lg:text-4xl'><TbBrandFramerMotion/></span>Motion</span>
          <span className='flex gap-1 justify-center items-end text-[14px] lg:text-[15px] font-sans font-bold '> <span className='text-3xl lg:text-4xl'><RiRemixRunLine/></span>Remix</span>
          <span className='flex gap-1 justify-center items-end text-[14px] lg:text-[15px] font-sans font-bold '> <span className='text-3xl lg:text-4xl'><SiShadcnui/></span>Shadcn</span>
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 lg:gap-1 w-full justify-center py-4 relative ">
          <div className="lg:w-[400px] w-full relative top-10"><AICardGeneration/></div>
          <div className="flex flex-col gap-4 lg:w-auto w-full"><CheckoutInteraction /><Alert04/></div>
          <div className="hidden lg:flex w-[400px] relative top-12"><Profile04 /></div>
        </div>
        <div className="grid grid-cols-1 gap-1"> 
          <div
              className=""
            >
              <div className="">
                <img
                  className="w-full rounded-t-lg object-contain mask-b-from-0% to-30%"
                  src={"https://res.cloudinary.com/dou5rypdf/image/upload/v1760615368/Screenshot_2025-10-10_202338_f8ic4h.png"}
                  alt={"Bato image"}
                />
              </div>
            </div>
        </div>
    </div>
  );
}