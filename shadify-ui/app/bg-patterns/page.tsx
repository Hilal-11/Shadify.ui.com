'use client';
import { ArrowRight, Github, Twitter } from 'lucide-react';
import { BACKGROUND_OPTIONS } from '@/components/BackgroundPatterns/backgrounds';
import { Button } from '@/components/ui/button';
import Playground from '@/components/BackgroundPatterns/playground';
import { useState } from 'react';
import { Toaster } from 'sonner';
import Header from '@/components/landing/header';

export default function Home() {
  const [preview, setPreview] = useState<null | React.ReactNode>(null);
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  const resetBg = () => {
    setPreview(null);
    setTheme('light');
  };

  return (
    <>
    <Header />
      <Toaster position='top-right'/>
      <div className={`${theme}`}>
        <div className="fixed left-0 top-0 -z-10 h-full w-full">
          {preview ? preview : null}
        </div>
        <div className="relative mx-auto h-screen w-[90%]">
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
          </div>
          <div className="overflow-hidden px-0 pb-20 pt-20">
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
          </div>
        </div>
      </div>

    </>
  );
}
