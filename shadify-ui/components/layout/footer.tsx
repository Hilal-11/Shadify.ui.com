"use client"
import React from 'react'
import { footerConfig , socialLinks } from "@/config/footerConfig"
import { PiTerminalFill } from "react-icons/pi";
import Link from 'next/link';
import { motion } from "motion/react"

import { LuMoon } from "react-icons/lu";
import { LuSunMedium } from "react-icons/lu";
import { RiComputerLine } from "react-icons/ri";
function Footer() {
  return (
    <div className='h-auto w-full bg-neutral-100 dark:bg-neutral-900 border-t border-neutral-400 dark:border-neutral-600 mt-20'>
      <div className='container h-auto border-l border-r border-neutral-400 dark:border-neutral-700 py-20 px-10'>
        <div className='lg:w-2/3 w-full'>
            <div className='flex items-center'>
              <PiTerminalFill className="mr-2 h-10 w-10" />
              <span className="block font-sans font-bold text-xl">
                Lokalhost.io
              </span>
            </div>
            <p className='text-sm lg:text-[17px] font-sans font-medium pl-2 pt-2 text-neutral-500 dark:text-neutral-400'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium numquam reprehenderit nesciunt maxime, dicta necessitatibus odit consequatur dignissimos accusamus voluptas nostrum dolorum minima natus? Ut rem.</p>
            <div className='flex gap-2 items-center pl-2 py-2'>
              <p className='font-sans font-medium'>Build By</p>
            <div className="border-t border-dashed border-b py-1 w-30 text-center relative border-neutral-300 dark:border-neutral-700">
              <span className="h-12 absolute left-4 -top-2.5 border border-dashed border-neutral-300 dark:border-neutral-700"></span>
              <p className="text-sm font-mono font-bold text-neutral-700 dark:text-neutral-300 underline">@HILAL</p>
              <span className="h-12 absolute right-4 -top-2.5 border border-dashed  border-neutral-300 dark:border-neutral-700"></span>          
            </div>
            </div>
          </div>

        
        <span className='border-t-1 border-neutral-400 dark:border-neutral-700 block w-full my-5 lg:my-20'></span>



        {/*  start footer boxes */}

        <div className='pt-4 lg:pt-10 grid lg:grid-cols-5 md:grid-cols-5 gap-4 justify-between grid-cols-2'>
          <div className='w-full'>
            <div>
              <h1 className="font-mono text-neutral-700 dark:text-neutral-300 text-[18px] font-medium">{footerConfig[0].service_title}</h1>
            </div>
            <div className='pl-2 py-3'>
              {
                footerConfig[0].services?.map((service , index) => (
                  <div className="" key={index}>
                    <motion.p
                      initial={{ scale: 1 }}
                      transition={{ duration: 0.26, ease: "easeInOut" }}
                      whileHover={{ scale: 1.03, }}
                      whileTap={{ scale: 1.03 }}
                    className='py-1 text-neutral-500 dark:text-neutral-500 text-sm lg:text-[15px] font-sans font-medium' ><Link href={service.navigateTo}
                    className='space-y-4'>{service.service}</Link></motion.p>
                    
                  </div>
                ))
              }
              <button className='py-2 text-xs'>Explore more</button>

            </div>
          </div>
          <div className='w-full'>
            <div>
              <h1 className="font-mono text-neutral-700 dark:text-neutral-300 text-[18px] font-medium">{footerConfig[1].service_title}</h1>
            </div>
            <div className='pl-2 py-3'>
              {
                footerConfig[1].services?.map((service , index) => (
                  <div className="" key={index}>
                    <motion.p 
                    initial={{ scale: 1 }}
                      transition={{ duration: 0.26, ease: "easeInOut" }}
                      whileHover={{ scale: 1.03, }}
                      whileTap={{ scale: 1.03 }}
                      className='py-1 text-neutral-500 dark:text-neutral-500 text-sm lg:text-[15px] font-sans font-medium hover:text-neutral-800 dark:hover:text-neutral-300' ><Link href={service.navigateTo}>{service.service}</Link></motion.p>
                  </div>
                ))
              }
            </div>
          </div>
          <div className='w-full'>
            <div>
              <h1 className="font-mono text-neutral-700 dark:text-neutral-300 text-[18px] font-medium">{footerConfig[2].service_title}</h1>
            </div>
            <div className='pl-2 py-3'>
              {
                footerConfig[2].services?.map((service , index) => (
                  <div className="" key={index}>
                    <motion.p 
                    initial={{ scale: 1 }}
                      transition={{ duration: 0.26, ease: "easeInOut" }}
                      whileHover={{ scale: 1.03, }}
                      whileTap={{ scale: 1.03 }}
                      className='py-1 text-neutral-500 dark:text-neutral-500 text-sm lg:text-[15px] font-sans font-medium hover:text-neutral-800 dark:hover:text-neutral-300' ><Link href={service.navigateTo}>{service.service}</Link></motion.p>
                  </div>
                ))
              }
            </div>
          </div>
          <div className='w-full'>
            <div>
              <h1 className="font-mono text-neutral-700 dark:text-neutral-300 text-[18px] font-medium">{footerConfig[3].service_title}</h1>
            </div>
            <div className='pl-2 py-3'>
              {
                footerConfig[3].services?.map((service , index) => (
                  <div className="" key={index}>
                    <motion.p 
                    initial={{ scale: 1 }}
                      transition={{ duration: 0.26, ease: "easeInOut" }}
                      whileHover={{ scale: 1.03, }}
                      whileTap={{ scale: 1.03 }}
                      className='py-1 text-neutral-500 dark:text-neutral-500 text-sm lg:text-[15px] font-sans font-medium hover:text-neutral-800 dark:hover:text-neutral-300'><Link href={service.navigateTo}>{service.service}</Link></motion.p>
                  </div>
                ))
              }
            </div>
          </div>
          <div className='w-full'>
            <div>
              <h1 className="font-mono text-neutral-700 dark:text-neutral-300 text-[18px] font-medium">{footerConfig[4].service_title}</h1>
            </div>
            <div className='pl-2 py-3'>
              {
                footerConfig[4].services?.map((service , index) => (
                  <div key={index}>
                    <motion.p 
                    initial={{ scale: 1 }}
                      transition={{ duration: 0.26, ease: "easeInOut" }}
                      whileHover={{ scale: 1.03, }}
                      whileTap={{ scale: 1.03 }}
                      className='py-1 text-neutral-500 dark:text-neutral-500 text-sm lg:text-[15px] font-sans font-medium hover:text-neutral-800 dark:hover:text-neutral-300' ><Link href={service.navigateTo}>{service.service}</Link></motion.p>
                  </div>
                ))
              }
            </div>
          </div>
          <div className='w-full'>
            <div>
              <h1 className="font-mono text-neutral-700 dark:text-neutral-300 text-[18px] font-medium">{footerConfig[5].service_title}</h1>
            </div>
            <div className='pl-2 py-3'>
              {
                footerConfig[5].services?.map((service , index) => (
                  <div key={index}>
                    <motion.p 
                    initial={{ scale: 1 }}
                      transition={{ duration: 0.26, ease: "easeInOut" }}
                      whileHover={{ scale: 1.03, }}
                      whileTap={{ scale: 1.03 }}
                      className='py-1 text-neutral-500 dark:text-neutral-500 text-sm lg:text-[15px] font-sans font-medium hover:text-neutral-800 dark:hover:text-neutral-300' ><Link href={service.navigateTo}>{service.service}</Link></motion.p>
                  </div>
                ))
              }
            </div>
          </div>
          <div className='w-full'>
            <div>
              <h1 className="font-mono text-neutral-700 dark:text-neutral-300 text-[18px] font-medium">{footerConfig[6].service_title}</h1>
            </div>
            <div className='pl-2 py-3'>
              {
                footerConfig[6].services?.map((service , index) => (
                  <div className="" key={index}>
                    <motion.p 
                    initial={{ scale: 1 }}
                      transition={{ duration: 0.26, ease: "easeInOut" }}
                      whileHover={{ scale: 1.03, }}
                      whileTap={{ scale: 1.03 }}
                      className='whitespace-nowrap lg:whitespace-normal py-1 text-neutral-500 dark:text-neutral-500 text-sm lg:text-[16px] font-sans font-medium hover:text-neutral-800 dark:hover:text-neutral-300' ><Link href={service.navigateTo}>{service.service}</Link></motion.p>
                  </div>
                ))
              }
            </div>
          </div>
        </div>

        

        <div className='flex w-full justify-between lg:px-4 py-5 lg:py-10'>
            <div></div>
            <div className='flex gap-2 items-center justify-evenly h-10 rounded-full px-2 bg-neutral-200 dark:bg-neutral-950 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]'>
              <span className='relative left-2 text-xl text-neutral-500 cursor-pointer hover:bg-neutral-300 dark:hover:bg-neutral-900 rounded-full h-8 w-8 flex items-center justify-center'><LuMoon /></span>
              <span className='text-xl text-neutral-500 cursor-pointer hover:bg-neutral-300 dark:hover:bg-neutral-900 rounded-full h-8 w-8 flex items-center justify-center'><RiComputerLine/></span>
              <span className='relative right-2 text-xl text-neutral-500 cursor-pointer hover:bg-neutral-300 dark:hover:bg-neutral-900 rounded-full h-8 w-8 flex items-center justify-center'><LuSunMedium /></span>
            </div>
        </div>

      </div>
    </div>
  )
}

export default Footer
