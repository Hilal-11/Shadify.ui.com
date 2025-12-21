import React from 'react'
import { StripedPattern } from "@/components/magicui/striped-pattern"
import { designsUIKitsPricingConfig } from '@/config/pricingConfig';
import { MdDone } from "react-icons/md";
import { BsStars } from "react-icons/bs";
export const dynamic = 'force-static';
function DesignKits() {
  return (
      <div id="design-ui-kits" className='border-t border-neutral-400 dark:border-neutral-700 mt-20'> 
         <div className='w-full pb-0 px-0 lg:px-10 flex flex-col items-start'>
          <h1 className='font-sans font-bold text-xl lg:text-3xl text-neutral-800 dark:text-neutral-200 pt-10 pb-4'>Design UI Kits for web & mobile apps — Figma, Sketch, and component libraries.</h1>
          <p className='font-mono text-sm text-neutral-600 dark:text-neutral-400 pb-6 lg:w-1/2'>Our design kits include extensive Figma and Sketch libraries, responsive templates, and component sets for web and mobile. They are designed for a smooth design-to-code workflow with tokens, auto-layout, and developer-friendly assets to accelerate product design and delivery.</p>
          <div className="border-t border-dashed border-b py-1 w-42 text-center relative border-neutral-300 dark:border-neutral-800">
            <span className="h-14 absolute left-4 -top-4 border border-dashed border-neutral-300 dark:border-neutral-800"></span>
            <p className="text-sm font-mono font-bold text-neutral-700 dark:text-neutral-300">DESIGN UI KITS</p>  
            <span className="h-14 absolute right-4 -top-4 border border-dashed  border-neutral-300 dark:border-neutral-800"></span>          
          </div>
        </div> <br />

        <div  className='flex justify-center items-center gap-4 flex-wrap pt-10 w-full '>
        {
          designsUIKitsPricingConfig.map((plan) => (
            <div key={plan.id} className={` ${plan.popular ? 'pricing_model_recommanded text-neutral-200' : 'bg-neutral-50 dark:bg-neutral-900'} relative px-4 py-6 xl:w-[360px] lg:w-[350px] md:w-auto w-full h-auto ring-1 ring-neutral-300 dark:ring-neutral-900 rounded-xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] `}>


              {plan.popular && (<div className='absolute -top-4 left-[50%] translate-x-[-50%] flex items-center justify-center'><p className='flex items-center justify-center gap-2 pramiun_pricing_btn px-8 py-[2px] text-sm rounded-full border-2 text-neutral-800 premium font-sans font-medium text-center'><span><BsStars /></span>Popular</p></div>)}

                <div className={`${plan.popular ? 'text-neutral-200' : 'text-neutral-800 dark:text-neutral-200'} flex flex-col justify-center gap-0`}>
                    <h1 className='font-sans font-medium text-2xl '>{plan.plan}</h1>
                    <h1 className='pt-2 pb-2 text-6xl font-bold font-sans'>{plan.subscription_amount}$ <span>{plan.save_price_value && <span className='font-sans text-xl text-neutral-500 dark:text-neutral-500 line-through'>{plan.save_price_value}$</span>}</span></h1>
                    {plan.save_price && <span className={`font-sans text-xs ${plan.popular ? 'text-neutral-200' : 'text-neutral-800 dark:text-neutral-200'}`}>{plan.save_price}</span>}
                </div>
                <div className='flex justify-center pt-8'>
                    <p className={`text-center font-sans text-sm ${plan.popular ? 'text-neutral-200' : 'text-neutral-800 dark:text-neutral-200'}`}>{plan.planDescription}</p>
                </div>
                <div className={`${plan.popular ? 'bg-s-800 text-neutral-200' : 'bg-white dark:bg-neutral-800'} mt-8 relative overflow-hidden rounded-lg shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] w-full h-auto pb-3`}>

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
  )
}

export default DesignKits
