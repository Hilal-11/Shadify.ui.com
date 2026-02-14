"use client"
import React, { useEffect } from 'react'
import { PiTerminalFill } from "react-icons/pi";
import Link from 'next/link';
import { motion } from "motion/react"
import { StripedPattern } from '../magicui/striped-pattern';
import { ThemeToggle } from "@/components/ui/theme-toggle";
import NProgress from 'nprogress';
import {SoonV1} from '../landing/MicroComponents/ComingSoon';
interface Service {
  service: string;
  navigateTo: string;
}

interface FooterServicesItem {
  id: string;
  service_title: string;
  services: Service[];
}

interface FooterConfig {
  footer_heading: string;
  creator_name: string;
  link: string;
  footerServicesItems: FooterServicesItem[];
}
function Footer({footerConfig}: {footerConfig: FooterConfig}) {

    const handleLinkClick = () => {
      NProgress.start()
    }

  return (
    <div className='relative h-auto w-[100%] bg-neutral-100 dark:bg-neutral-900 border-t border-neutral-400 dark:border-neutral-600 mt-20'>

      <StripedPattern
      direction="right"
      className="absolute inset-0 z-10 mask-l-from-70% mask-l-to-100% mask-r-from-70% mask-r-to-100%"
    />
      


      <div className='relative w-full container max-w-[1580px] !important border-dashed z-30 !important bg-neutral-100 dark:bg-neutral-950
       h-auto border-l border-r border-neutral-400 dark:border-neutral-700 py-20 px-10'>
        <div className='lg:w-2/3 w-full'>
            <div className='flex items-center'>
              <PiTerminalFill className="mr-2 h-10 w-10" />
              <span className="block font-sans font-bold text-xl">
                Lokalhost.io
              </span>
            </div>
            <p className='text-sm lg:text-[17px] font-sans font-medium pl-2 pt-2 text-neutral-500 dark:text-neutral-400'>{footerConfig?.footer_heading}</p>
            <div className='flex gap-2 items-center pl-2 py-2'>
              <p className='font-sans font-medium'>Build By</p>
            <div className="border-t border-dashed border-b py-1 w-30 text-center relative border-neutral-300 dark:border-neutral-700">
              <span className="h-12 absolute left-4 -top-2.5 border border-dashed border-neutral-300 dark:border-neutral-700"></span>
                <Link href={'https://hila-11.com'} target='_blank'><p className="text-sm font-mono font-bold text-neutral-700 dark:text-neutral-300 underline">{footerConfig?.creator_name}</p></Link>
              <span className="h-12 absolute right-4 -top-2.5 border border-dashed  border-neutral-300 dark:border-neutral-700"></span>          
            </div>
            </div>
          </div>

        
        <span className='border-t-1 border-neutral-400 dark:border-neutral-700 block w-full my-5 lg:my-20'></span>



        {/*  start footer boxes */}

        <div className='pt-4 lg:pt-10 grid lg:grid-cols-5 md:grid-cols-5 gap-4 justify-between grid-cols-2'>
          <div className='w-full'>
            <div>
              {footerConfig.footerServicesItems?.length > 0 && (
                  <h1 className="font-mono text-neutral-700 dark:text-neutral-300 text-[18px] font-medium">
                    {footerConfig.footerServicesItems[0].service_title}
                  </h1>
                )}

            </div>
            <div className='pl-1 py-3'>
              {
                footerConfig.footerServicesItems[0]?.services?.map((service , index) => (
                  <div className="" key={index}>
                    <motion.p
                      initial={{ scale: 1 }}
                      transition={{ duration: 0.26, ease: "easeInOut" }}
                      whileHover={{ scale: 1.03, }}
                      whileTap={{ scale: 1.03 }}
                    className='py-1 text-neutral-500 dark:text-neutral-500 text-sm lg:text-[15px] font-sans font-medium' ><Link href={service.navigateTo} onClick={handleLinkClick}
                    className='space-y-4'>{service.service}</Link></motion.p>
                    
                  </div>
                ))
              }
            </div>
          </div>
          <div className='w-full'>
            <div>
              {footerConfig.footerServicesItems?.length > 0 && (
                <h1 className="font-mono text-neutral-700 dark:text-neutral-300 text-[18px] font-medium">
                  {footerConfig.footerServicesItems[1].service_title}
                </h1>
              )}

            </div>
            <div className='pl-1 py-3'>
              {
                footerConfig?.footerServicesItems[1]?.services?.map((service , index) => (
                  <div className="" key={index}>
                    <motion.p 
                    initial={{ scale: 1 }}
                      transition={{ duration: 0.26, ease: "easeInOut" }}
                      whileHover={{ scale: 1.03, }}
                      whileTap={{ scale: 1.03 }}
                      className='py-1 text-neutral-500 dark:text-neutral-500 text-sm lg:text-[15px] font-sans font-medium hover:text-neutral-800 dark:hover:text-neutral-300' ><Link href={service.navigateTo} onClick={handleLinkClick}>{service.service}</Link></motion.p>
                  </div>
                ))
              }
            </div>
          </div>
          <div className='w-full'>
            <div>
              {footerConfig.footerServicesItems?.length > 0 && (
  <h1 className="font-mono text-neutral-700 dark:text-neutral-300 text-[18px] font-medium">
    {footerConfig.footerServicesItems[2].service_title}
    
  </h1>
)}

            </div>
            <div className='pl-1 py-3'>
              {
                footerConfig.footerServicesItems[2]?.services?.map((service , index) => (
                  <div className="" key={index}>
                    <motion.p 
                    initial={{ scale: 1 }}
                      transition={{ duration: 0.26, ease: "easeInOut" }}
                      whileHover={{ scale: 1.03, }}
                      whileTap={{ scale: 1.03 }}
                      className='py-1 text-neutral-500 dark:text-neutral-500 text-sm lg:text-[15px] font-sans font-medium hover:text-neutral-800 dark:hover:text-neutral-300' ><Link href={service.navigateTo} onClick={handleLinkClick}>{service.service}</Link></motion.p>
                  </div>
                ))
              }
            </div>
          </div>
          <div className='w-full'>
            <div>
             {footerConfig.footerServicesItems?.length > 0 && (
  <h1 className="font-mono text-neutral-700 dark:text-neutral-300 text-[18px] font-medium">
    {footerConfig.footerServicesItems[3].service_title}
  </h1>
)}

            </div>
            <div className='pl-1 py-3'>
              {
                footerConfig.footerServicesItems[3]?.services?.map((service , index) => (
                  <div className="" key={index}>
                    <motion.p 
                    initial={{ scale: 1 }}
                      transition={{ duration: 0.26, ease: "easeInOut" }}
                      whileHover={{ scale: 1.03, }}
                      whileTap={{ scale: 1.03 }}
                      className='py-1 text-neutral-500 dark:text-neutral-500 text-sm lg:text-[15px] font-sans font-medium hover:text-neutral-800 dark:hover:text-neutral-300'><Link href={service.navigateTo} onClick={handleLinkClick}>{service.service}</Link></motion.p>
                  </div>
                ))
              }
            </div>
          </div>
          <div className='w-full'>
            <div>
              {footerConfig.footerServicesItems?.length > 0 && (
  <h1 className="font-mono text-neutral-700 dark:text-neutral-300 text-[18px] font-medium">
    {footerConfig.footerServicesItems[4].service_title}
      <SoonV1 />
  </h1>
)}

            </div>
            <div className='pl-1 py-3'>
              {
                footerConfig.footerServicesItems[4]?.services?.map((service , index) => (
                  <div key={index}>
                    <motion.p 
                    initial={{ scale: 1 }}
                      transition={{ duration: 0.26, ease: "easeInOut" }}
                      whileHover={{ scale: 1.03, }}
                      whileTap={{ scale: 1.03 }}
                      className='py-1 text-neutral-500 dark:text-neutral-500 text-sm lg:text-[15px] font-sans font-medium hover:text-neutral-800 dark:hover:text-neutral-300' ><Link href={service.navigateTo} onClick={handleLinkClick}>{service.service}</Link></motion.p>
                  </div>
                ))
              }
            </div>
          </div>
          <div className='w-full'>
            <div>
             {footerConfig.footerServicesItems?.length > 0 && (
  <h1 className="font-mono text-neutral-700 dark:text-neutral-300 text-[18px] font-medium">
    {footerConfig.footerServicesItems[5].service_title}
      <SoonV1 />
  </h1>
)}

            </div>
            <div className='pl-1 py-3'>
              {
                footerConfig.footerServicesItems[5]?.services?.map((service , index) => (
                  <div key={index} className='relative'>
                    <motion.p 
                    initial={{ scale: 1 }}
                      transition={{ duration: 0.26, ease: "easeInOut" }}
                      whileHover={{ scale: 1.03, }}
                      whileTap={{ scale: 1.03 }}
                      className='py-1 text-neutral-500 dark:text-neutral-500 text-sm lg:text-[15px] font-sans font-medium hover:text-neutral-800 dark:hover:text-neutral-300' ><Link href={service.navigateTo} onClick={handleLinkClick}>{service.service}</Link></motion.p>
                      
                  </div>
                ))
              }
            </div>
          </div>
        </div>

        <div className='flex w-full justify-between lg:px-4 py-5 lg:py-10'>
            <div></div>
            <div className='flex gap-2 items-center justify-center w-12 h-12 rounded-full bg-neutral-200 dark:bg-neutral-800 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]'>
              <ThemeToggle/>
            </div>
        </div>

      </div>


    </div>
  )
}

export default Footer
