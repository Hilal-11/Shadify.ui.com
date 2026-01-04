"use client";

import type React from "react";
import { motion } from "motion/react"
import AnnoncementBadge from "./AnnoncementBadge";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";
import { servicesShowCaseConfig } from '../../config/servicesConfig';
import { useEffect, useState } from "react";

export function HeroSection() {

  const [serviceId , setServiceId] = useState(1)
  const [service , setService] = useState(servicesShowCaseConfig[0])
  useEffect(() => {
    const findService:any = servicesShowCaseConfig.find(service => service.id === serviceId)
    setService(findService)
  }, [serviceId])


  return (
    <div className="w-full h-auto mx-auto md:container lg:container py-8 lg:py-16 flex flex-col items-center justify-center text-center gap-6 relative">
      <div className="w-full h-auto px-0 lg:px-4 py-6">
        <AnnoncementBadge />
        <div className="mt-8 text-center flex-col gap-4">
          <h1 className="font-sans font-bold text-3xl lg:text-6xl text-neutral-800 dark:text-neutral-200">A Modern Component & Template Library for Fast, Beautiful Frontends.</h1>
          <p className="px-0 lg:w-2/3 mx-auto py-4 font-sans font-medium text-md text-neutral-600 dark:text-neutral-400 ">Fully customizable React components and production-ready templates — built with clean code, modern design principles, and performance at the core.</p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 pt-8">
          <motion.button
            transition={{ duration: 0.28 , ease: "easeInOut"}}
            whileHover={{ y: -3 }}
            whileTap={{ y: -4 }}
          className="relative overflow-hidden cursor-pointer font-sans font-medium px-10 py-2 rounded-md bg-neutral-100 bg-gradient-to-t from-[#f5f5f5] to-[#d4d4d4] dark:text-neutral-900 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">Explore Templets  </motion.button>
          <motion.button
              transition={{ duration: 0.28 , ease: "easeInOut"}}
              whileHover={{ y: -3}}
              whileTap={{ y: -4 }}
          className="relative cursor-pointer font-sans font-medium px-10 py-2 rounded-md bg-gradient-to-t from-[#262626] to-[#525252] text-neutral-200 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">Components Documentation
          </motion.button>
          
        </div>
      </div>

        <div className="relative h-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-b border-dashed px-px">
          {/* verticel border-dashed lines */}
          <span className="absolute h-[800px] border-l border-dashed left-0 top-0"></span>
          <span className="absolute h-[800px] border-r border-dashed right-0 top-0"></span>

          {/* corners design */}
          <span className="hidden lg:block absolute h-[160px] w-[160px] rounded-full border border-dashed -top-20 -left-20"></span>
          <span className="hidden lg:block absolute h-[160px] w-[160px] rounded-full border border-dashed -top-20 -right-20"></span>

          <div className="relative h-[400px] bg-neutral-100 dark:bg-neutral-950 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] flex items-center justify-center overflow-hidden w-full border-r border-dashed">
            <div className="w-full h-[100px] absolute -top-12 bg-orange-200 rounded-b-full blur-lg"></div>
            <div>
              <img className="object-cover" src="https://res.cloudinary.com/dou5rypdf/image/upload/v1767559172/Hilal_zsdfut.png" alt="" />
            </div>
            <div className="absolute bottom-2 px-5">
              <h1 className="font-sans font-medium text-[16px] text-left">Web Components</h1>
              <p className="text-[12px] font-sans font-medium text-neutral-400 text-left">Explore the production ready components for React and Next.Js apps.</p>
            </div>
          </div>
          <div className="relative overflow-hidden h-[400px] bg-neutral-100 dark:bg-neutral-950 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] w-full border-r border-dashed">
          </div>
          <div className="relative overflow-hidden h-[400px] bg-neutral-100 dark:bg-neutral-950 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] w-full border-r border-dashed">
          </div>
          <div className="relative overflow-hidden h-[400px] bg-neutral-100 dark:bg-neutral-950 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] w-full border-r border-dashed "></div>

          <div className="relative overflow-hidden h-[400px] bg-neutral-100 dark:bg-neutral-950 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] w-full border-r border-dashed border-t"></div>

          <div className="relative overflow-hidden h-[400px] bg-neutral-100 dark:bg-neutral-950 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] w-full border-r border-dashed border-t"></div>

          <div className="md:col-span-2 lg:col-span-2 relative overflow-hidden h-[400px] bg-neutral-100 dark:bg-neutral-950 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] w-full border-r border-dashed border-t"></div>

        </div> 

        <br /><br />
        <div className="pt-10">
          <h1 className="font-sans font-bold text-xl lg:text-5xl text-neutral-800 dark:text-neutral-200">Easy to Integrate, Build faster ship faster and Deploy smoothly</h1>
          <div className="w-full h-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 justify-between py-10 items-start">

            <div className="">
              <div className="w-full flex justify-end lg:hidden">
                <span className="text-3xl relative top-6 bg-neutral-200 shadow-md border rounded-full dark:bg-neutral-800 flex justify-center items-center"><IoIosArrowRoundForward /></span>
              </div>
              <div className="flex lg:flex-col flex-nowrap overflow-auto gap-2 lg:gap-6 pl-2 pt-10">

                {
                  servicesShowCaseConfig.map(({id , service , discription , tech_bages , link , icon: Icon}) => (
                    <div key={id} onClick={() => setServiceId(id) } className="cursor-pointer lg:w-auto w-[400px] h-auto rounded-sm px-2 py-2 bg-neutral-100 dark:bg-neutral-900 border pb-4 relative hover:bg-neutral-900 dark:hover:bg-neutral-200 dark:hover:text-neutral-800 hover:text-neutral-200 group shadow-md transition duration-300 ease-in-out ">
                      <div className="flex w-[320px] justify-between ">
                        <div className="w-[80] lg:w-[120px] h-[80px] flex items-center justify-center">
                          <span className="text-4xl"><Icon/></span>
                        </div>
                        <div className="pt-1 pb-2 lg:pl-0 pl-3">
                          <h1 className="text-left text-sm font-bold text-neutral-700 group-hover:text-neutral-300 dark:group-hover:text-neutral-700 dark:text-neutral-300">{service}</h1>
                          <p className="text-left text-[11px] font-sans font-medium pl-1 group-hover:text-neutral-500 text-neutral-500">{discription}</p>
                        </div>
                        <div className="absolute right-1 bottom-1 flex gap-1">
                          {
                            tech_bages.map((tech , index) => (
                              <motion.span

                              key={index} className="group-hover:flex md:hidden lg:hidden text-[11px] font-mono font-medium px-2 h-4 rounded-full shadow-xs bg-neutral-700 text-neutral-200 items-center justify-center">{tech}</motion.span>
                            ))
                          }
                          </div>
                      </div>
                  </div>
                    ))
                }
                


              </div>
            </div>
            <div className="xl:col-span-2 h-[600px] lg:pt-10">
              <div className="flex items-center justify-center overflow-hidden">
                 <img className=" h-[500px] object-cover overflow-hidden" src={service.image} alt="Err" />
              </div> 
            </div>

          </div>
        </div>
    </div>
  );
}