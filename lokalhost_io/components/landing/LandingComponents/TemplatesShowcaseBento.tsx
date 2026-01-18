"use client"
import React from 'react'
import { motion } from "motion/react"
import { DotPattern } from '@/components/ui/dot-pattern';
export default function TemplatesShowcaseBento() {
  return (
    <div className='w-full h-full'>
        <div className='w-full mx-auto pt-8 lg:pt-16 relative pb-10'>
            <motion.h1
            initial={{ opacity: 0, y: 110 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, }}
            className='z-20  text-center font-sans font-bold text-3xl lg:text-4xl text-neutral-800 dark:text-neutral-200 pb-3'>Explore 10+ Premium Lokalhost.io Templates</motion.h1>
            <motion.p
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, }}
            className='px-8 lg:px-2 z-20 text-center text-sm lg:text-[17px] font-sans font-medium text-neutral-700 dark:text-neutral-300 lg:w-1/2 mx-auto'>From landing and front pages to powerful dashboards, everything you need to create modern, responsive, and visually stunning web applications - ready to go in no time!</motion.p>
        </div>
        <div className="relative h-auto w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-0 lg:gap-0 border-b border-dashed px-px">
          
            <div className="w-full lg:col-span-2 relative overflow-hidden h-auto lg:h-[340px] border-r border-dashed border-t flex justify-start mask-x-from-80% mask-x-to-100%">
                
            </div>

            <div className="relative h-[340px] w-full border border-dashed">
            </div>

            <div className="relative overflow-hidden h-[340px] w-full border-r border-dashed border-t">
            </div>

            <div className="relative overflow-hidden h-[340px] w-full border-r border-dashed border-t">
            </div>

        </div> 
    </div>
  )
}





