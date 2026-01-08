import React from 'react'
import FAQ from './FAQ';
import { StripedPattern } from "@/components/magicui/striped-pattern"
import Footer from '@/components/layout/footer';
import CTA from '@/components/landing/CTA';
import { MdOutlinePriceChange } from "react-icons/md";
import Link from 'next/link';
import WebComponents from './PricingModels/WebComponents';
import MobileUIElements from "./PricingModels/MobileUIElements"
import DesignKits from "./PricingModels/DesignKits"
import Patterns from "./PricingModels/Patterns"


export const dynamic = 'force-static';


function Pricing() {
  return (
    <div className='bg-[#f4f4f5] dark:bg-neutral-950 h-full'>
      <div className='pt-20 h-auto pricing_breakpoint lg:w-[98%] mx-auto px-5 py-20'>
        <div className="flex flex-col items-center gap-6 pb-10 py-20">
          <div className="mx-auto border-t border-dashed border-b py-1 w-38 text-center relative border-neutral-300 dark:border-neutral-800">
            <span className="h-14 absolute left-4 -top-4 border border-dashed border-neutral-300 dark:border-neutral-800"></span>
            <p className="text-sm font-sans font-bold text-neutral-700 dark:text-neutral-300">PRICING PLAN</p>  
            <span className="h-14 absolute right-4 -top-4 border border-dashed  border-neutral-300 dark:border-neutral-800"></span>          
          </div>
          <div className="flex items-center px-6 lg:px-28">
            <h1 className="lg:text-6xl md:text-5xl text-2xl font-sans font-bold text-center space-y-4">Simply choose the pricing plan that <br /> <span className="ml-4 px-2 text-transparent bg-clip-text bg-gradient-to-r from-[#bf953f] to-[#aa771c] rounded-lg"> fits you best.</span></h1>
          </div>
        </div>


      <div className='w-full h-auto flex flex-col items-center justify-center lg:px-10 mt-10'>
        <div className='relative w-full flex items-center justify-center'>
          <p className='bg-white dark:bg-neutral-950 dark:text-neutral-300 relative top-2 w-[130px] h-7 lg:w-[200px] lg:h-10 flex items-center justify-center gap-2 text-xs lg:text-sm rounded-lg border-2 text-neutral-800 premium font-sans font-medium text-center'><span className='text-lg'><MdOutlinePriceChange /></span>Pricing Models</p>
        </div>
        <div className='w-full flex flex-nowrap whitespace-nowrap justify-between items-center rounded-lg bg-neutral-100 dark:bg-neutral-900 h-14 lg:h-16 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] lg:gap-0 gap-6 overflow-x-auto'>
          <Link href="#web-components" className='flex items-center justify-center pt-2 hover:bg-white dark:hover:bg-neutral-800 transition duration-300 w-full h-full rounded-l-lg pl-2'>
            <p className="cursor-pointer font-sans font-medium text-neutral-800 dark:text-neutral-200 text-md lg:text-lg">Web Components</p>
          </Link>
          <Link href="#mobile-ui-elements" className='flex items-center justify-center pt-2 w-full h-full hover:bg-white dark:hover:bg-neutral-800 transition duration-300'>
            <p className="cursor-pointer font-sans font-medium text-neutral-800 dark:text-neutral-200 text-md lg:text-lg">Mobile UI Elements</p>
          </Link>
          <Link href="#design-ui-kits" className='flex items-center justify-center pt-2 w-full h-full hover:bg-white dark:hover:bg-neutral-800 transition duration-300'>
            <p className="cursor-pointer font-sans font-medium text-neutral-800 dark:text-neutral-200 text-md lg:text-lg">Design UI Kits</p>
          </Link>
          <Link href="#patterns" className='flex items-center justify-center pt-2 w-full h-full hover:bg-white dark:hover:bg-neutral-800 transition duration-300 rounded-r-lg pr-2'>
            <p className="cursor-pointer font-sans font-medium text-neutral-800 dark:text-neutral-200 text-md lg:text-lg">Patterns</p>
          </Link>
        </div>
      </div>
        <br /><br />

        {/* Pricing fro Web Components */}
        <div id="web-components">
          <WebComponents />
        </div>
        
          <div id="mobile-ui-elements">
            <MobileUIElements />
          </div>
          <div id="design-ui-kits">
            <DesignKits />
          </div>
          <div id="patterns">
            <Patterns />
          </div>

      </div>
        <div className="relative w-[100%] h-auto border-t border-b border-dashed border-neutral-300 dark:border-neutral-800 z-10">
          <StripedPattern direction="left" className="mask-l-from-70% mask-l-to-100% mask-r-from-70% mask-r-to-100%" />
        <div className='relative container h-[100%] !important border-l border-r border-dashed z-50 !important bg-neutral-100 dark:bg-neutral-950 pb-5'>
          <FAQ />
        </div>
    </div>
    <div className='pt-20'>
      <CTA />
    </div>
    <div className='pt-20'>
      <Footer/>
    </div>
    </div>
  )
}


export default Pricing

