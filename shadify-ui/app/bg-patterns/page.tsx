'use client';
import { BACKGROUND_OPTIONS } from '@/components/BackgroundPatterns/backgrounds';
import Playground from '@/components/BackgroundPatterns/playground';
import { useState } from 'react';
import { Toaster } from 'sonner';
import Header from '@/components/landing/header';
import Footer from '@/components/layout/footer';
import { Iphone , AndroidPh } from './mobileBg';
import { CiMobile3 } from "react-icons/ci";
import { MdWeb } from "react-icons/md";
export default function Home() {
  const [preview, setPreview] = useState<null | React.ReactNode>(null);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const resetBg = () => {
    setPreview(null);
    setTheme('light');
  };

  const [isMobile ,setIsMobile] = useState(false)
  const [isWeb ,setIsWeb] = useState(true)
  const handleWeb = () => {
    setIsWeb(true)
    setIsMobile(false)
  }  
  const handleMobile = () => {
    setIsMobile(true)
    setIsWeb(false)
  }

  return (
    <>
    <Header />
      <Toaster position='top-right'/>
      <div className={`${theme}`}>
        <div className="fixed left-0 top-0 -z-10 h-full w-full">
          {preview ? preview : null}
        </div>
        <div className="relative mx-auto h-auto w-[90%]">
          <header className="flex items-center justify-between py-8">
            <div />
          </header>
          <div className="pt-8">
            <div className="relative mx-auto flex max-w-4xl flex-col items-center">
              
              <h2 className="font-sans font-bold text-center text-3xl text-gray-900 dark:text-gray-50 sm:text-6xl">
                Shadify UI modern,{' '}
                <span className="animate-text-gradient inline-flex bg-gradient-to-r from-neutral-900 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text leading-tight text-transparent dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400">
                  background patterns
                </span>
              </h2>
              <p className="mt-6 text-center text-lg leading-6 text-gray-600 dark:text-gray-200 font-sans font-medium">
                Simply copy, paste, and watch your UI come alive with sleek background patterns built for modern aesthetics.
              </p>
              
            </div>
            <div className="flex justify-end w-full pt-4">
              <div className="flex items-center justify-evenly gap-px dark:bg-neutral-800 bg-neutral-100 rounded-sm w-[100px] h-[50px] lg:w-[100px] lg:h-[46px] shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]">

                  <button onClick={handleWeb} className={`${isWeb ? 'bg-orange-600': 'bg-none'} cursor-pointer flex items-center justify-center rounded-l-sm lg:text-3xl text-3xl w-full h-[50px] lg:h-[46px]`}><MdWeb /></button> 
                  <button onClick={handleMobile} className={`${isMobile ? 'bg-orange-600': 'bg-none'} cursor-pointer flex items-center justify-center rounded-r-sm lg:text-3xl text-3xl w-full h-[50px] lg:h-[46px]`}><CiMobile3 /></button>
              </div>
            </div> 
          </div>
          <div className="overflow-hidden px-0 pb-20 pt-20">
            {/* <div className='flex gap-6 flex-wrap justify-evenly items-center'>
            <MobileBg />
            <MobileBg />
            <MobileBg />
            <MobileBg />
            </div> */}
          {
            isWeb ? (
               <div className="grid grid-cols-1 gap-6 pb-6 md:grid-cols-2 lg:grid-cols-4">
              {BACKGROUND_OPTIONS.map((background, index) => {
                return (
                  <Playground
                    key={index}
                    setPreview={setPreview}
                    theme={background.theme}
                    setTheme={setTheme}
                  >
                    {background.component}
                  </Playground>
                );
              })}
            </div>
            ) : (
              <div className='w-full h-auto flex flex-wrap justify-center gap-6'>
                  <Iphone />
                  <AndroidPh />
                  <Iphone />
                  <AndroidPh />
                  <Iphone />
                  <AndroidPh />
                  <Iphone />
                  <AndroidPh /><Iphone />
                  <AndroidPh />
              </div> 
            )
          }
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}


