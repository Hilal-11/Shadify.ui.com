"use client"
import { useState } from "react"
import { IoMdSearch } from "react-icons/io";
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { InputGroup, InputGroupButton, InputGroupInput } from "@/components/ui/input-group";
import { AnimatedGridPatternDemo } from '../designs/page';
import { LuFigma } from "react-icons/lu";
import AnnoncementBadge from "@/components/landing/AnnoncementBadge";
import Image from "next/image";

function Mobile() {
  
  const [activeFilter, setActiveFilter] = useState<'All' | 'Free' | 'Premium'>('All');
  
  return (
    <div className="relative">
            <AnimatedGridPatternDemo />
            <div className="relative w-full container max-w-[1580px] pt-10 h-auto z-40">
               <AnnoncementBadge aboutBadge={"Lokalhost.io cross-platform mobile apps are Coming soon"}/>

            <div className="z-50 w-full grid grid-cols-1 lg:grid-cols-2 gap-4 items-start pb-10">
                 <div className=" z-50 w-full h-auto mx-auto pt-6 lg:pt-20 px-5 lg:px-10"> 
                            <div className="w-full mx-auto text-center lg:text-left pt-2">
                                    <h1 className="font-sans font-bold text-3xl lg:text-4xl text-neutral-800 dark:text-neutral-200">High quality mobile Applications and UI Blocks for React Native and Flutter</h1>
                                    <p className="lg:px-2 mx-auto py-4 font-sans font-medium text-md text-neutral-600 dark:text-neutral-400">Discover a curated library of responsive templates and reusable components built for React, Next.js, and modern web technologies. Whether you're a freelancer, startup, or enterprise team.</p>
                            </div>
                            
                             <div className="flex flex-wrap justify-center lg:justify-start items-center pt-4 pb-5 gap-3 lg:gap-6">
                                <button className="border-1 border-orange-400 cursor-pointer px-8 py-[9px] rounded-lg text-sm font-sans font-medium text-neutral-800 bg-gradient-to-r from-[#F6D5F7] to-[#FBE9D7] shadow-sm flex items-center justify-center gap-2"><span><LuFigma /></span>Designs Figma</button>
                                <button className="px-8 py-[10px] cursor-pointer border-t border-l border-r border-neutral-800 rounded-lg whitespace-nowrap font-sans font-medium text-sm text-neutral-200 dark:text-neutral-200 bg-gradient-to-t from-[#262626] to-[#525252] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">Explore mobile apps</button>
                            </div>
                </div>
                 <div className="h-full relative p-10"> 
                    <div>
                      <img width={100} height={100} className="w-full h-full object-cover z-30 rounded-lg" alt="loading..." src="https://cdn.dribbble.com/userupload/18384847/file/original-a1467207b6d2a338f6c0d6c1764fdefa.png?resize=1200x900&vertical=center" />
                    </div>        
                </div>
            </div>           

           

            <section className="h-auto pt-4 mx-auto border border-dashed border-neutral-300 dark:border-neutral-700 mt-10 bg-neutral-50 dark:bg-neutral-900 z-50">
                <div className="flex flex-wrap justify-between gap-2 items-center w-full pt-0 pb-4 border-b border-dashed border-neutral-300 dark:border-neutral-700 px-5">
                    <div>
                      <SortMobile />
                    </div>
                    <div className="flex items-center gap-1">
                          <InputGroup className="flex items-center justify-center">
                              <InputGroupInput placeholder="Search Template:- " className="hidden lg:flex md:flex"/>
                              <InputGroupButton variant="secondary" className="bg-transparent flex items-center justify-center"><IoMdSearch className="text-lg mx-auto mr-px"/></InputGroupButton>
                          </InputGroup>
                    <ButtonGroup>
                        <Button 
                            variant={activeFilter === 'All' ? 'default' : 'outline'}
                            onClick={() => setActiveFilter('All')}
                            className={activeFilter === 'All' ? 'bg-gradient-to-t from-[#262626] to-[#525252] text-primary-foreground' : ''}
                        >
                            All
                        </Button>
                        <Button 
                            variant={activeFilter === 'Free' ? 'default' : 'outline'}
                            onClick={() => setActiveFilter('Free')}
                            className={activeFilter === 'Free' ? 'bg-gradient-to-t from-[#262626] to-[#525252] text-primary-foreground' : ''}
                        >
                            Free
                        </Button>
                        <Button 
                            variant={activeFilter === 'Premium' ? 'default' : 'outline'}
                            onClick={() => setActiveFilter('Premium')}
                            className={activeFilter === 'Premium' ? 'bg-gradient-to-t from-[#262626] to-[#525252] text-primary-foreground' : ''}
                        >
                            Premium
                        </Button>
                    </ButtonGroup>
                    </div>
                </div> 

                <div className="w-full h-auto grid grid-cols-1 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 border-t border-dashed border-neutral-300 dark:border-neutral-700 justify-evenly items-center">
                    <div className="w-full h-[400px] px-6 border-r border-dashed border-neutral-300 dark:border-neutral-700 py-5 pb-5"></div>
                    <div className="w-full h-[400px] px-6 border-r border-dashed border-neutral-300 dark:border-neutral-700 py-5 pb-5"></div>
                    <div className="w-full h-[400px] px-6 border-r border-dashed border-neutral-300 dark:border-neutral-700 py-5 pb-5"></div>
                    <div className="w-full h-[400px] px-6 border-r border-dashed border-neutral-300 dark:border-neutral-700 py-5 pb-5"></div>
                    <div className="w-full h-[400px] px-6 border-r border-t border-dashed border-neutral-300 dark:border-neutral-700 py-5 pb-5"></div>
                    <div className="w-full h-[400px] px-6 border-r border-t border-dashed border-neutral-300 dark:border-neutral-700 py-5 pb-5"></div>
                    <div className="w-full h-[400px] px-6 border-r border-t border-dashed border-neutral-300 dark:border-neutral-700 py-5 pb-5"></div>
                    <div className="w-full h-[400px] px-6 border-r border-t border-dashed border-neutral-300 dark:border-neutral-700 py-5 pb-5"></div>
                </div>
            </section>
            </div>   
    </div>
  )
}

export default Mobile



import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
function SortMobile() {
  return (
    <Select>
      <SelectTrigger className="w-full max-w-56 bg-gradient-to-t from-[#262626] to-[#525252] text-neutral-100">
        <SelectValue className="font-sans font-medium" placeholder="Sort" />
      </SelectTrigger>
      <SelectContent className="">
        <SelectGroup className="">
          <SelectLabel className="font-sans font-medium">Sort</SelectLabel>
          <SelectItem value="All">All</SelectItem>
          <SelectItem value="react-native">React Native Apps</SelectItem>
          <SelectItem value="react-native-blocks">React Native UI Blocks</SelectItem>
          <SelectItem value="flutter">Flutter Apps</SelectItem>
          <SelectItem value="flutter-blocks">Flutter UI Blocks</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

