import  Header  from '@/components/landing/header'
import React from 'react'
import { MdDone } from "react-icons/md";
import { BsStars } from "react-icons/bs";
import FAQ from './FAQ';
import { StripedPattern } from "@/components/magicui/striped-pattern"
import { webComponentsPricingConfig , mobileUIElementsPricingConfig, designsUIKitsPricingConfig ,  BgPatternsPricingConfig } from '@/config/pricingConfig';
import Footer from '@/components/layout/footer';
import CTA from '@/components/landing/CTA';
import { MdOutlinePriceChange } from "react-icons/md";
import Link from 'next/link';
function Pricing() {
  return (
    <div className='bg-[#f4f4f5] dark:bg-neutral-950 h-full'>
      <div className="fixed w-full z-50">
        <Header />
      </div>
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


      <div className='w-full h-auto flex flex-col items-centerjustify-center lg:px-10 mt-10'>
        <div className='relative w-full flex items-center justify-center'>
          <p className='bg-white dark:bg-neutral-950 dark:text-neutral-300 relative top-2 w-[130px] h-7 lg:w-[200px] lg:h-10 flex items-center justify-center gap-2 text-xs lg:text-sm rounded-lg border-2 text-neutral-800 premium font-sans font-medium text-center'><span className='text-lg'><MdOutlinePriceChange /></span>Pricing Models</p>
        </div>
        <div className='w-full flex flex-nowrap whitespace-nowrap justify-between items-center rounded-lg bg-neutral-100 dark:bg-neutral-900 h-14 lg:h-16 shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] lg:gap-0 gap-6 overflow-x-auto'>
          <Link href="#web-components" className='flex items-center justify-center pt-2 hover:bg-white dark:hover:bg-neutral-800 transition duration-300 w-full h-full rounded-l-lg pl-2'>
            <Link href="#web-components" className="cursor-pointer font-sans font-medium text-neutral-800 dark:text-neutral-200 text-md lg:text-lg">Web Components</Link>
          </Link>
          <Link href="#mobile-ui-elements" className='flex items-center justify-center pt-2 w-full h-full hover:bg-white dark:hover:bg-neutral-800 transition duration-300'>
            <Link href="#mobile-ui-elements" className="cursor-pointer font-sans font-medium text-neutral-800 dark:text-neutral-200 text-md lg:text-lg">Mobile UI Elements</Link>
          </Link>
          <Link href="#design-ui-kits" className='flex items-center justify-center pt-2 w-full h-full hover:bg-white dark:hover:bg-neutral-800 transition duration-300'>
            <Link href="#design-ui-kits" className="cursor-pointer font-sans font-medium text-neutral-800 dark:text-neutral-200 text-md lg:text-lg">Design UI Kits</Link>
          </Link>
          <Link href="#patterns" className='flex items-center justify-center pt-2 w-full h-full hover:bg-white dark:hover:bg-neutral-800 transition duration-300 rounded-r-lg pr-2'>
            <Link href="#patterns" className="cursor-pointer font-sans font-medium text-neutral-800 dark:text-neutral-200 text-md lg:text-lg">Patterns</Link>
          </Link>
        </div>
      </div>

        <br /><br />


        {/* Pricing fro Web Components */}

      <div id="web-components" className='border-t border-neutral-400 dark:border-neutral-700 mt-10 lg:mt-20'>
        
        <div className='w-full pb-0 px-0 lg:px-10 flex flex-col items-start'>
          <h1 className='font-sans font-bold text-xl lg:text-3xl text-neutral-800 dark:text-neutral-200 pt-10 pb-4'>Get instant access to all components for Nextjs and React.</h1>
          <p className='font-mono text-sm text-neutral-600 dark:text-neutral-400 pb-6 lg:w-1/2'>Choose from our flexible pricing plans designed to suit your needs. Whether you're an individual developer or a large enterprise, we have a plan that's right for you.</p>
          <div className="border-t border-dashed border-b py-1 w-46 text-center relative border-neutral-300 dark:border-neutral-800">
            <span className="h-14 absolute left-4 -top-4 border border-dashed border-neutral-300 dark:border-neutral-800"></span>
            <p className="text-sm font-mono font-bold text-neutral-700 dark:text-neutral-300">WEB COMPONENTS</p>  
            <span className="h-14 absolute right-4 -top-4 border border-dashed  border-neutral-300 dark:border-neutral-800"></span>          
          </div>
        </div> <br />

        <div  className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center flex-wrap items-start pt-10 w-full gap-2'>
        {
          webComponentsPricingConfig.map((plan) => (
            <div key={plan.id} className='relative px-4 py-6 xl:w-[360px] lg:w-[350px] md:w-auto w-full h-auto ring-1 ring-neutral-300 dark:ring-neutral-900 rounded-xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-neutral-50 dark:bg-neutral-900'>


              {plan.popular && (<div className='absolute -top-4 left-[50%] translate-x-[-50%] flex items-center justify-center'><p className='flex items-center justify-center gap-2 pramiun_pricing_btn px-8 py-[2px] text-sm rounded-full border-2 text-neutral-800 premium font-sans font-medium text-center'><span><BsStars /></span>Popular</p></div>)}

                <div className='flex flex-col justify-center gap-0'>
                    <h1 className='font-sans font-medium text-2xl text-neutral-800 dark:text-neutral-200'>{plan.plan}</h1>
                    <h1 className='pt-2 pb-2 text-6xl font-bold font-sans text-neutral-800 dark:text-neutral-200'>{plan.subscription_amount}$ <span>{plan.save_price_value && <span className='font-sans text-xl text-neutral-500 dark:text-neutral-500 line-through'>{plan.save_price_value}$</span>}</span></h1>
                    {plan.save_price && <span className='font-sans text-xs text-neutral-800 dark:text-neutral-200'>{plan.save_price}</span>}
                </div>
                <div className='flex justify-center pt-8'>
                    <p className='text-center font-sans text-sm text-neutral-800 dark:text-neutral-200'>{plan.planDescription}</p>
                </div>
                <div className='mt-8 relative overflow-hidden bg-white dark:bg-neutral-800 rounded-lg shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] w-full h-auto pb-3'>
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


        {/* Pricing fro Mobile UI Components */}
      
      <div id="mobile-ui-elements" className='border-t border-neutral-400 dark:border-neutral-700 mt-20'> 
         <div className='w-full pb-0 px-0 lg:px-10 flex flex-col items-start'>
          <h1 className='font-sans font-bold text-xl lg:text-3xl text-neutral-800 dark:text-neutral-200 pt-10 pb-4'>Cross-platform mobile UI elements for React Native and Flutter.</h1>
          <p className='font-mono text-sm text-neutral-600 dark:text-neutral-400 pb-6 lg:w-1/2'>Build native-feeling apps faster with ready-to-use, platform-aware UI elements for React Native, Expo, and Flutter. Each block follows mobile UX best practices — touch-friendly controls, optimized lists, accessible inputs, and polished screen templates.</p>
          <div className="border-t border-dashed border-b py-1 w-52 text-center relative border-neutral-300 dark:border-neutral-800">
            <span className="h-14 absolute left-4 -top-4 border border-dashed border-neutral-300 dark:border-neutral-800"></span>
            <p className="text-sm font-mono font-bold text-neutral-700 dark:text-neutral-300">MOBILE UI ELEMENTS</p>  
            <span className="h-14 absolute right-4 -top-4 border border-dashed  border-neutral-300 dark:border-neutral-800"></span>          
          </div>
        </div> <br />

        <div  className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 justify-center flex-wrap items-start pt-10 w-full gap-2'>
        {
          mobileUIElementsPricingConfig.map((plan) => (
            <div key={plan.id} className='relative px-4 py-6 xl:w-[360px] lg:w-[350px] md:w-auto w-full h-auto ring-1 ring-neutral-300 dark:ring-neutral-900 rounded-xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-neutral-50 dark:bg-neutral-900'>


              {plan.popular && (<div className='absolute -top-4 left-[50%] translate-x-[-50%] flex items-center justify-center'><p className='flex items-center justify-center gap-2 pramiun_pricing_btn px-8 py-[2px] text-sm rounded-full border-2 text-neutral-800 premium font-sans font-medium text-center'><span><BsStars /></span>Popular</p></div>)}

                <div className='flex flex-col justify-center gap-0'>
                    <h1 className='font-sans font-medium text-2xl text-neutral-800 dark:text-neutral-200'>{plan.plan}</h1>
                    <h1 className='pt-2 pb-2 text-6xl font-bold font-sans text-neutral-800 dark:text-neutral-200'>{plan.subscription_amount}$ <span>{plan.save_price_value && <span className='font-sans text-xl text-neutral-500 dark:text-neutral-500 line-through'>{plan.save_price_value}$</span>}</span></h1>
                    {plan.save_price && <span className='font-sans text-xs text-neutral-800 dark:text-neutral-200'>{plan.save_price}</span>}
                </div>
                <div className='flex justify-center pt-8'>
                    <p className='text-center font-sans text-sm text-neutral-800 dark:text-neutral-200'>{plan.planDescription}</p>
                </div>
                <div className='mt-8 relative overflow-hidden bg-white dark:bg-neutral-800 rounded-lg shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] w-full h-auto pb-3'>
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
         
        {/* Pricing fro Designs */}


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
            <div key={plan.id} className='relative px-4 py-6 xl:w-[360px] lg:w-[350px] md:w-auto w-full h-auto ring-1 ring-neutral-300 dark:ring-neutral-900 rounded-xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-neutral-50 dark:bg-neutral-900'>


              {plan.popular && (<div className='absolute -top-4 left-[50%] translate-x-[-50%] flex items-center justify-center'><p className='flex items-center justify-center gap-2 pramiun_pricing_btn px-8 py-[2px] text-sm rounded-full border-2 text-neutral-800 premium font-sans font-medium text-center'><span><BsStars /></span>Popular</p></div>)}

                <div className='flex flex-col justify-center gap-0'>
                    <h1 className='font-sans font-medium text-2xl text-neutral-800 dark:text-neutral-200'>{plan.plan}</h1>
                    <h1 className='pt-2 pb-2 text-6xl font-bold font-sans text-neutral-800 dark:text-neutral-200'>{plan.subscription_amount}$ <span>{plan.save_price_value && <span className='font-sans text-xl text-neutral-500 dark:text-neutral-500 line-through'>{plan.save_price_value}$</span>}</span></h1>
                    {plan.save_price && <span className='font-sans text-xs text-neutral-800 dark:text-neutral-200'>{plan.save_price}</span>}
                </div>
                <div className='flex justify-center pt-8'>
                    <p className='text-center font-sans text-sm text-neutral-800 dark:text-neutral-200'>{plan.planDescription}</p>
                </div>
                <div className='mt-8 relative overflow-hidden bg-white dark:bg-neutral-800 rounded-lg shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] w-full h-auto pb-3'>
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

        {/* Pricing for Patterns */}



        <div id="patterns" className='border-t border-neutral-400 dark:border-neutral-700 mt-20'> 
         <div className='w-full pb-0 px-0 lg:px-10 flex flex-col items-start'>
          <h1 className='font-sans font-bold text-xl lg:text-3xl text-neutral-800 dark:text-neutral-200 pt-10 pb-4'>Background & smooth UI patterns for web & mobile.</h1>
          <p className='font-mono text-sm text-neutral-600 dark:text-neutral-400 pb-6 lg:w-1/2'>A curated collection of smooth, production-ready background patterns and UI textures for web & mobile. Includes high-resolution SVGs, CSS gradient presets.</p>
          <div className="border-t border-dashed border-b py-1 w-42 text-center relative border-neutral-300 dark:border-neutral-800">
            <span className="h-14 absolute left-4 -top-4 border border-dashed border-neutral-300 dark:border-neutral-800"></span>
            <p className="text-sm font-mono font-bold text-neutral-700 dark:text-neutral-300">PATTERNS</p>  
            <span className="h-14 absolute right-4 -top-4 border border-dashed  border-neutral-300 dark:border-neutral-800"></span>          
          </div>
        </div> <br />

        <div  className='flex justify-center items-center gap-10 flex-wrap pt-10 w-full'>
        {
          BgPatternsPricingConfig.map((plan) => (
            <div key={plan.id} className='relative px-4 py-6 xl:w-[360px] lg:w-[350px] md:w-auto w-full h-auto ring-1 ring-neutral-300 dark:ring-neutral-900 rounded-xl shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] bg-neutral-50 dark:bg-neutral-900'>


              {plan.popular && (<div className='absolute -top-4 left-[50%] translate-x-[-50%] flex items-center justify-center'><p className='flex items-center justify-center gap-2 pramiun_pricing_btn px-8 py-[2px] text-sm rounded-full border-2 text-neutral-800 premium font-sans font-medium text-center'><span><BsStars /></span>Popular</p></div>)}

                <div className='flex flex-col justify-center gap-0'>
                    <h1 className='font-sans font-medium text-2xl text-neutral-800 dark:text-neutral-200'>{plan.plan}</h1>
                    <h1 className='pt-2 pb-2 text-6xl font-bold font-sans text-neutral-800 dark:text-neutral-200'>{plan.subscription_amount}$ <span>{plan.save_price_value && <span className='font-sans text-xl text-neutral-500 dark:text-neutral-500 line-through'>{plan.save_price_value}$</span>}</span></h1>
                    {plan.save_price && <span className='font-sans text-xs text-neutral-800 dark:text-neutral-200'>{plan.save_price}</span>}
                </div>
                <div className='flex justify-center pt-8'>
                    <p className='text-center font-sans text-sm text-neutral-800 dark:text-neutral-200'>{plan.planDescription}</p>
                </div>
                <div className='mt-8 relative overflow-hidden bg-white dark:bg-neutral-800 rounded-lg shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] w-full h-auto pb-3'>
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

