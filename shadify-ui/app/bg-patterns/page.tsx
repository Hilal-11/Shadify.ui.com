'use client';
import { BACKGROUND_OPTIONS } from '@/components/BackgroundPatterns/backgrounds';
import Playground from '@/components/BackgroundPatterns/playground';
import { useState } from 'react';
import { Toaster } from 'sonner';
import Header from '@/components/landing/header';
import Footer from '@/components/layout/footer';
import { CiMobile3 } from "react-icons/ci";
import { MdWeb } from "react-icons/md";
import Script from "next/script";
import { useEffect } from "react";
export default function Home() {
  const [preview, setPreview] = useState<null | React.ReactNode>(null);
  const [theme, setTheme] = useState<"light" | "dark">(
  (localStorage.getItem("theme") as "light" | "dark") || "light"
);

const toggleTheme = () => {
  const newTheme = theme === "light" ? "dark" : "light";
  setTheme(newTheme);
  localStorage.setItem("theme", newTheme);
};

// Optional: apply theme to HTML body or root
useEffect(() => {
  document.documentElement.setAttribute("data-theme", theme);
}, [theme]);


  const resetBg = () => {
    setPreview(null);
    setTheme('light');
  };


  const [isMobile ,setIsMobile] = useState(true)
  const [isWeb ,setIsWeb] = useState(false)
  const handleWeb = () => {
    setIsWeb(true)
    setIsMobile(false)
  }  
  const handleMobile = () => {
    setIsMobile(true)
    setIsWeb(false)
    window.location.reload()
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
          <div className="lg:pt-8">
            <div className="relative mx-auto flex lg:max-w-[80%] flex-col items-center">
              
              <h2 className="font-sans font-bold text-center text-gray-900 dark:text-gray-50">
                <span className="animate-text-gradient inline-flex bg-gradient-to-r from-neutral-900 via-slate-500 to-neutral-500 bg-[200%_auto] bg-clip-text leading-tight text-transparent dark:from-neutral-100 dark:via-slate-400 dark:to-neutral-400 lg:text-5xl text-2xl">
                  Beautiful UI backgrounds, palettes, and patterns for every platform.
                    use across Web, iOS, Android.
                </span>
              </h2>
              <p className="mt-6 lg:max-w-3xl text-center text-xm lg:text-lg leading-6 text-gray-600 dark:text-gray-200 font-sans font-medium">
                Get beautifully crafted backgrounds and UI patterns built for real-world apps for Web, React Native, and Flutter, making your design process fast, clean, and effortless.
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
          {
            isWeb ? (
               <div className="grid grid-cols-1 gap-6 pb-6 md:grid-cols-2 lg:grid-cols-4">
              {BACKGROUND_OPTIONS.map((background, index) => {
                return (
                  <Playground
                    key={index}
                    setPreview={setPreview}
                    theme={"light"}
                    setTheme={setTheme}
                  >
                    {background.component}
                  </Playground>
                );
              })}
            </div>
            ) : (
              <div className='w-full h-auto grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 justify-center gap-6'>
                  <div className='w-full h-auto rounded-md grid lg:grid-cols-1 md:grid-cols-1 grid-cols-1'>
                    <div className='h-[605px] overflow-hidden flex justify-center items-center'>
                      <Script
                        async
                        src="https://snack.expo.dev/embed.js"
                      />
                      <div 
                        key={theme}
                        data-snack-id="@junaid3443gghdd/lokalhost_io" 
                        data-snack-platform="ios" 
                        data-snack-preview="true" 
                        data-snack-theme={theme}
                        className='overflow-hidden border rounded-md w-full h-[605px]'>
                      </div>

                    </div>
                  </div>
                  <div className='w-full h-auto rounded-md grid lg:grid-cols-1 md:grid-cols-1 grid-cols-1'>
                    <div className='h-[605px] overflow-hidden flex justify-center items-center'>
                      <Script
                        async
                        src="https://snack.expo.dev/embed.js"
                      />
                      <div 
                        key={theme}
                        data-snack-id="@junaid3443gghdd/lokalhost_io" 
                        data-snack-platform="ios" 
                        data-snack-preview="true" 
                        data-snack-theme={theme}
                        className='overflow-hidden border rounded-md w-full h-[605px]'>
                      </div>

                    </div>
                  </div>

                   <div className='w-full h-auto rounded-md grid lg:grid-cols-1 md:grid-cols-1 grid-cols-1'>
                    <div className='h-[605px] overflow-hidden flex justify-center items-center'>
                      <Script
                        async
                        src="https://snack.expo.dev/embed.js"
                      />
                      <div 
                        key={theme}
                        data-snack-id="@junaid3443gghdd/ios_bg_1"
                        data-snack-platform="ios"
                        data-snack-preview="true"
                        data-snack-theme={theme}
                        className='overflow-hidden border rounded-md w-full h-[605px]'>
                      </div>

                    </div>
                  </div>
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




