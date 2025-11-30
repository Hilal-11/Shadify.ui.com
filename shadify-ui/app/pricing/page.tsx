import  Header  from '@/components/landing/header'
import React from 'react'
import { MdDone } from "react-icons/md";
import { BsStars } from "react-icons/bs";
import FAQ from './FAQ';
import { StripedPattern } from "@/components/magicui/striped-pattern"
import { pricingConfig } from '@/config/pricingConfig';
import Footer from '@/components/layout/footer';
import CTA from '@/components/landing/CTA';
function Pricing() {
  return (
    <div className='bg-[#f4f4f5] dark:bg-neutral-950 h-full'>
      <div className="fixed w-full z-50">
        <Header />
      </div>
      <div className='pt-24 w-full h-auto container py-20'>
        <div className="flex flex-col items-center gap-6 pb-10 py-20">
          <div className="border-t border-dashed border-b py-1 w-38 text-center relative border-neutral-300 dark:border-neutral-800">
            <span className="h-14 absolute left-4 -top-4 border border-dashed border-neutral-300 dark:border-neutral-800"></span>
            <p className="text-sm font-sans font-bold text-neutral-700 dark:text-neutral-300">PRICING PLAN</p>  
            <span className="h-14 absolute right-4 -top-4 border border-dashed  border-neutral-300 dark:border-neutral-800"></span>          
          </div>
          <div className="flex items-center px-6 lg:px-28">
            <h1 className="lg:text-6xl md:text-5xl text-2xl font-sans font-bold text-center space-y-4">Simply choose the pricing plan that <br /> <span className="ml-4 px-2 text-transparent bg-clip-text bg-gradient-to-r from-[#bf953f] to-[#aa771c] rounded-lg"> fits you best.</span></h1>
          </div>
        </div>
        <div className='flex gap-8 flex-wrap justify-center items-end pt-10'>
        {
          pricingConfig.map((plan) => (
            <div key={plan.id} className='relative px-6 py-6 lg:w-[400px] md:w-auto w-full h-auto ring-1 ring-neutral-300 dark:ring-neutral-900 rounded-xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-neutral-50 dark:bg-neutral-900'>
              {plan.popular && (<div className='absolute -top-4 left-[50%] translate-x-[-50%] flex items-center justify-center'><p className='flex items-center justify-center gap-2 pramiun_pricing_btn px-8 py-[2px] text-sm rounded-full border-2 text-neutral-800 premium font-sans font-medium text-center'><span><BsStars /></span>Popular</p></div>)}

                <div className='flex flex-col justify-center items-center gap-0'>
                    <h1 className='font-sans font-medium text-2xl text-neutral-800 dark:text-neutral-200'>{plan.plan}</h1>
                    <h1 className='text-5xl font-bold font-sans text-neutral-800 dark:text-neutral-200'>{plan.priceMonthly}$</h1>
                    <p className='font-sans text-xs'>Per user / month</p>
                </div>
                <div className='flex justify-center pt-6'>
                    <p className='text-center font-sans text-sm text-neutral-800 dark:text-neutral-200'>{plan.planDescription}</p>
                </div>
                <div className='relative overflow-hidden bg-white dark:bg-neutral-800 rounded-lg mt-4 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] w-full h-auto pb-3'>
                  {plan.popular && (<StripedPattern direction="left" className="mask-l-from-50% mask-l-to-80% mask-t-from-20% to-90% " />)}
                    <div className='pt-4 px-3'>
                      <h1 className='font-sans text-sm text-neutral-600'>What's included:</h1>
                      <div className='px-3 py-5'>
                        <ul className='flex flex-col gap-3'>
                            {
                              plan.features.map((feature, index) => (
                                <li key={index}className='flex gap-2 font-sans font-medium text-sm '> <span className='text-xl flex items-center justify-center h-[21px] bg-gradient-to-t from-[#262626] to-[#525252] text-neutral-200 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] w-[21px] rounded-full bg-neutral-200'><MdDone /></span>{feature}</li>
                              ))
                            }
                        </ul>
                      </div>
                    </div>
                    <div className='w-full flex justify-center items-center px-6'>
                        <button 
                          className={`${plan.popular ? 'z-20 w-full py-2 rounded-xl pramiun_pricing_btn cursor-pointer text-neutral-800 font-medium shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]' :'w-full py-2 rounded-xl bg-gradient-to-t from-[#262626] to-[#525252] text-neutral-200 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]'}`}
                          >
                          {plan.butttonContent}
                          </button>
                    </div>
                </div>
            </div>
          ))  
        }
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

