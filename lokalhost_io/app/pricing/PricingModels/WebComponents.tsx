"use client"
import React, { useEffect, useState } from 'react'
import { MdDone } from "react-icons/md";
import { BsStars } from "react-icons/bs";
import { StripedPattern } from "@/components/magicui/striped-pattern"
// import { webComponentsPricingConfig } from '@/config/pricingConfig';
export const dynamic = 'force-static';


interface PricingConfig {
    id: string,
    plan: string,
    planDescription?: string,
    subscription_amount: string,
    save_price?: string,
    save_price_value?: string,
    features: string[],
    butttonContent?: string,
    popular?: boolean
}

function WebComponents() {
  const [webComponentsPricingConfig , setWebComponentsPricingConfig] = useState<PricingConfig[]>([])
  useEffect(() => {
    const fetchPricing = async () => {
      try{
        const data = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/config/pricingConfig.json`, {
          cache: 'force-cache'
        })
        const response = await data.json();
        setWebComponentsPricingConfig(response)
      }catch(error:any) {
        console.log(error);
      }
    }
    fetchPricing();
  },[])

  return (
          <div id="web-components" className='dark:border-neutral-700'>
            
            <div  className='grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 grid-cols-1 justify-center flex-wrap items-start pt-10 w-full gap-4'>
            {
              webComponentsPricingConfig.map((plan) => (
                <div key={plan.id} className={` ${plan.popular ? 'pricing_model_recommanded text-neutral-200' : 'bg-neutral-50 dark:bg-neutral-900'} relative px-4 py-6 w-full md:w-auto h-auto ring-1 ring-neutral-300 dark:ring-neutral-900 rounded-xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] `}>
    
    
                  {plan.popular && (<div className='absolute -top-4 left-[50%] translate-x-[-50%] flex items-center justify-center'><p className='flex items-center justify-center gap-2 pramiun_pricing_btn px-8 py-[2px] text-sm rounded-full border-2 text-neutral-800 premium font-sans font-medium text-center'><span><BsStars /></span>Popular</p></div>)}
    
                    <div className={`${plan.popular ? 'text-neutral-200' : 'text-neutral-800 dark:text-neutral-200'} flex flex-col justify-center gap-0`}>
                        <h1 className='font-sans font-medium text-xl '>{plan.plan}</h1>
                        <h1 className='pt-2 pb-2 text-4xl font-bold font-sans'>{plan.subscription_amount}$ <span>{plan.save_price_value && <span className='font-sans text-xl text-neutral-500 dark:text-neutral-500 line-through'>{plan.save_price_value}$</span>}</span></h1>
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

export default WebComponents
