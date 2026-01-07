"use client";

import type React from "react";
import { motion } from "motion/react"
import AnnoncementBadge from "./AnnoncementBadge";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";
import { servicesShowCaseConfig } from '../../config/servicesConfig';
import { useEffect, useState } from "react";
import { ThemeProvider , useTheme } from "next-themes"
import { heroServiceContent } from "@/config/hero_section_service_config"
import Link from "next/link";
import { HiOutlineExternalLink } from "react-icons/hi";
import { ContainerTextFlip } from "./animate_hero_tags"
import DesignsShowcase from "./LandingComponents/DesignsShowcase";
import TemplatesShowcase from "./LandingComponents/TemplatesShowcase";

export function HeroSection() {

  const { theme } = useTheme();
  const [serviceId , setServiceId] = useState(1)
  const [service , setService] = useState(servicesShowCaseConfig[0])
  useEffect(() => {
    const findService:any = servicesShowCaseConfig.find(service => service.id === serviceId)
    setService(findService)
  }, [serviceId])


  return (
    <div className="w-full h-auto mx-auto md:container lg:container py-8 lg:py-16 flex flex-col items-center justify-center text-center gap-6">
      <motion.span
       initial={{opacity: 0 , y: -100}}
       animate={{opacity: 1 , y: 0}}
       transition={{ delay: 0.2, duration: 0.98 , ease: 'easeInOut'}}
       className="absolute top-0 left-0 lg:-top-28 lg:left-40 w-[60px] lg:w-[170px] h-[300px] lg:h-[600px] bg-neutral-300 dark:bg-neutral-800 blur-2xl rounded-b-full -rotate-45 "></motion.span>
       
      <div className="w-full h-auto px-0 lg:px-4 py-6">
        <AnnoncementBadge />
        <div className="mt-8 text-center flex-col gap-4">
          <h1 className="font-sans font-bold text-3xl lg:text-5xl text-neutral-800 dark:text-neutral-200">A Complete Ecosystem for Designing, Building, and Scaling Modern Web & Mobile Applications.</h1>
          <ContainerTextFlip/>
          <p className="px-0 lg:w-2/3 mx-auto py-4 font-sans font-medium text-md text-neutral-600 dark:text-neutral-400 ">A unified ecosystem built for modern product development, covering web and mobile UI, design systems, authentication, motion, and creative assets — all optimized for production use</p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 pt-8">
          <motion.button
            transition={{ duration: 0.28 , ease: "easeInOut"}}
            whileHover={{ y: -3 }}
            whileTap={{ y: -4 }}
          className="border-t-[2px] border-l-[2px] border-r-[2px] border-neutral-50 relative overflow-hidden cursor-pointer font-sans font-medium px-10 py-2 rounded-md bg-neutral-100 bg-gradient-to-t from-[#f5f5f5] to-[#d4d4d4] dark:text-neutral-900 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">Explore Templets  </motion.button>
          <motion.button
              transition={{ duration: 0.28 , ease: "easeInOut"}}
              whileHover={{ y: -3}}
              whileTap={{ y: -4 }}
          className="border-t-[2px] border-l-[2px] border-r-[2px] border-neutral-950 relative cursor-pointer font-sans font-medium px-10 py-2 rounded-md bg-gradient-to-t from-[#262626] to-[#525252] text-neutral-200 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">Components Documentation
          </motion.button>
          
        </div>
      </div>
{/*  */}
        <div className="relative h-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t gap-4 md:gap-0 lg:gap-0 border-b border-dashed px-px">

          {/* corners design */}
          <span className="absolute h-[160px] w-[160px] rounded-full border border-dashed -top-20 -left-20"></span>
          <span className="absolute h-[160px] w-[160px] rounded-full border border-dashed -top-20 -right-20"></span>
          {
            heroServiceContent.map((service) => (
              <Link key={service.id} href={service.service_link}>
              <div  className="cursor-pointer group relative h-[400px] bg-neutral-100 dark:bg-neutral-950 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] flex items-center justify-center overflow-hidden w-full border border-dashed">
                <div className="dark:hidden z-20 w-full h-[100px] absolute -top-12 bg-gradient-to-r from-[hsla(312,77%,86%,1)] to-[hsla(220,61%,79%,1)] rounded-b-full blur-lg"></div>
                <div className="relative group-hover:scale-110 transition duration-400">
                  <Image 
                    width={400}
                    height={650}
                    className="relative scale-105"
                    src={theme === 'dark' ? `${service.service_dark_image}` : `${service.service_light_image}`}
                    alt=""
                  />
                </div>
                <div className="absolute bottom-3 px-5 flex flex-col gap-2">
                  <div className="">
                    <h1 className="font-sans font-medium text-[17px] text-left text-neutral-700 dark:text-neutral-200">{service.sercice_name}</h1>
                    <p className="text-[13px] font-sans font-medium text-neutral-500 dark:text-neutral-300 text-left">{service.service_disc}</p>
                  </div>
                  <div className="flex justify-center gap-2">
                    <motion.button
                     transition={{ duration: 0.38 , ease: "easeInOut"}}
                     whileHover={{ y: -2 }}
                     whileTap={{ y: -4 }}
                     className="cursor-pointer border-t border-l border-r border-neutral-800 rounded-sm py-px whitespace-nowrap px-4 font-sans font-medium text-sm text-neutral-200 dark:text-neutral-200 bg-gradient-to-t from-[#262626] to-[#525252] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">{service.service_buttons[0].button_name}</motion.button>
                    <motion.button 
                      transition={{ duration: 0.38 , ease: "easeInOut"}}
                      whileHover={{ y: -2 }}
                      whileTap={{ y: -4 }}
                      className="cursor-pointer flex gap-1 items-center justify-center py-px w-full font-sans font-medium text-sm text-neutral-700 dark:text-neutral-200">{service.service_buttons[1].button_name} <span className="text-xs text-neutral-700 dark:text-neutral-200"><HiOutlineExternalLink /></span></motion.button>
                  </div>
                </div>
              </div>
              </Link>
            ))
          }
          <div className="md:col-span-2 lg:col-span-2 relative overflow-hidden h-[400px] bg-neutral-100 dark:bg-neutral-950 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] w-full border-r border-dashed border-t"></div>
        </div> 

        <br /><br />
        <div className="lg:pt-10">
          <h1 className="font-sans font-bold text-xl lg:text-5xl text-neutral-800 dark:text-neutral-200">Easy to Integrate, Build faster ship faster and Deploy smoothly</h1>
          
          <div className="lg:mt-20 w-full h-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 justify-between lg:py-10 items-between">
              <div className="w-full flex justify-end lg:hidden">
                <span className="text-3xl relative top-3 bg-neutral-200 shadow-md border rounded-full dark:bg-neutral-800 flex justify-center items-center"><IoIosArrowRoundForward /></span>
              </div>
              <div className="flex lg:flex-col justify-between lg:h-[525px] flex-nowrap overflow-auto gap-2 pl-2">

                {
                  servicesShowCaseConfig.map(({id , service , discription , tech_bages , link , icon: Icon}) => (
                    <div key={id} onClick={() => setServiceId(id) } className="cursor-pointer lg:w-auto w-[400px] h-auto rounded-sm px-2 py-2 bg-neutral-100 dark:bg-neutral-900 border pb-4 relative hover:bg-neutral-900 dark:hover:bg-neutral-200 dark:hover:text-neutral-800 hover:text-neutral-200 group shadow-md transition duration-300 ease-in-out">
                      <div className="flex w-[320px] justify-between">
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
            <div className="xl:col-span-2 lg:h-[600px] overflow-hidden">
               {/* for components */}
                { 
                  service.id === 1 && <div className="w-full h-auto gap-2 grid lg:grid-cols-3 grid-cols-2">
                    <div className="h-[120px] lg:h-[260px] rounded-sm shadow-sm border hover:bg-neutral-100 transition duration-300 hover:dark:bg-neutral-950"></div>
                    <div className="h-[120px] lg:h-[260px] rounded-sm shadow-sm border hover:bg-neutral-100 transition duration-300 hover:dark:bg-neutral-950"></div>
                    <div className="h-[120px] lg:h-[260px] rounded-sm shadow-sm border hover:bg-neutral-100 transition duration-300 hover:dark:bg-neutral-950"></div>
                    <div className="h-[120px] lg:h-[260px] lg:col-span-2 rounded-sm shadow-sm border hover:bg-neutral-100 transition duration-300 hover:dark:bg-neutral-950"></div>
                    <div className="h-[120px] lg:h-[260px] lg:col-span-1 col-span-2 rounded-sm shadow-sm border hover:bg-neutral-100 transition duration-300 hover:dark:bg-neutral-950"></div>
                  </div>
                }

                {/* form mobile elememnts */}
                { 
                  service.id === 3 && <div className="w-full h-auto gap-2 grid lg:grid-cols-3 grid-cols-2">
                    <div className="h-[120px] lg:h-[260px] rounded-sm shadow-sm border hover:bg-neutral-100 transition duration-300 hover:dark:bg-neutral-950"></div>
                    <div className="h-[120px] lg:h-[260px] rounded-sm shadow-sm border hover:bg-neutral-100 transition duration-300 hover:dark:bg-neutral-950"></div>
                    <div className="h-[120px] lg:h-[260px] rounded-sm shadow-sm border hover:bg-neutral-100 transition duration-300 hover:dark:bg-neutral-950"></div>
                    <div className="h-[120px] lg:h-[260px] lg:col-span-2 rounded-sm shadow-sm border hover:bg-neutral-100 transition duration-300 hover:dark:bg-neutral-950"></div>
                    <div className="h-[120px] lg:h-[260px] lg:col-span-1 col-span-2 rounded-sm shadow-sm border hover:bg-neutral-100 transition duration-300 hover:dark:bg-neutral-950"></div>
                  </div>
                }

               {/* for templates view */}
               {
                service.id === 2 && <div>
                  <TemplatesShowcase />
                </div>
               }
              {/*  fro designs */}
              { 
                  service.id === 4 && <div className="w-full h-full">
                    <DesignsShowcase />
                  </div>
                }
              
 
            </div>
          </div>
        </div>
    </div>
  );
}