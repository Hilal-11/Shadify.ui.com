"use client";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { SearchIcon } from "lucide-react";
import Link from "next/link";
import { Link as ViewTransitionsLink } from "next-view-transitions";
import Image from "next/image";
import { IoLogoGithub } from "react-icons/io5";
import { PiCrownFill } from "react-icons/pi";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

import { IoMenu } from "react-icons/io5";
import { RiCloseFill } from "react-icons/ri";
import { IoSearchSharp } from "react-icons/io5";
import { useState } from "react";
import { LiaAtomSolid } from "react-icons/lia";
import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton, SignOutButton } from "@clerk/nextjs";
import { FaAngleDown } from "react-icons/fa6";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { services } from "@/config/servicesConfig"
import { Button } from "@/components/ui/button"
function Header() {
  const [isAuthenticate , setIsAuthenticate] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <>
      {/* Mobile Pro Banner completely separate from sticky header */}
      <div className="sticky top-0 left-0 right-0 z-50">
        <div className="bg-neutral-50 dark:bg-neutral-950 w-full">
          {/* Rest of the header content */}
          <div className="flex items-center justify-center w-full flex-col shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] border-b 
                            border-neutral-200 dark:border-neutral-800">
            <div
              className={`
                            w-full md:w-[90%] lg:w-[80%] xl:w-[80%] mx-auto
                            flex items-center justify-between
                            px-4 py-4
                            relative
                            transition-all duration-300 ease-in-out
                        `}
            >
              <div className="relative z-10 flex items-center justify-between w-full gap-2">
                {/* Logo Section with Navigation Links */}
                <div className="flex items-center gap-6">
                  <Link href="/" className="flex items-center gap-2">
                   <LiaAtomSolid className="animate-spinning mr-2 h-8 w-8" />
                   
                    <span className="hidden sm:block font-sans font-bold text-lg">
                      ShadifyUI
                    </span>
                  </Link>
                  <span className="text-zinc-300 dark:text-zinc-700"></span>
                  {/* Desktop Navigation Links */}
                  <div className="hidden sm:flex items-center gap-4">
                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        <h1 className="cursor-pointer flex gap-1 bg-transparent hover:bg-transparent font-sans font-medium text-[15px] text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors items-center">Solution<span className="text-sm"><FaAngleDown /></span></h1>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="md:w-[700px] lg:w-[720px] pt-3 pb-4 h-auto my-5.5" align="start">
                        <div className="w-full flex justify-between px-6 py-2 items-center border-b-1">
                          <div><h2 className="text-ms font-sans font-medium">Browse Products</h2></div>
                          <div><button className="relative cursor-pointer font-sans font-medium px-10 py-2 rounded-md text-sm bg-gradient-to-t from-[#262626] to-[#525252] text-neutral-200 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">Start Building</button></div>
                        </div>

                        
                        <div className="grid grid-cols-3 gap-3 w-full h-auto justify-evenly py-4 px-4">
                         {
                          services.map(({ id, service, icon: Icon, link }) => (
                            <Link key={id} href={link}>
                              <div className="h-auto py-2 cursor-pointer flex items-center hover:bg-neutral-100 hover:dark:bg-neutral-950 hover:rounded-sm">
                                <div className="flex justify-center items-center px-5 h-full overflow-hidden relative">
                                  <span className="text-xl z-30"><Icon/></span>
                                </div>
                                <div className="space-y-1">
                                  <h1 className="text-sm font-sans font-medium">{service}</h1>
                                </div>
                              </div>
                            </Link>
                          ))
                         }
                                <div className=" flex gap-3 items-end justify-end px-5">
                                  <button className="pro_btn w-full whitespace-nowrap relative cursor-pointer font-sans font-medium rounded-md text-sm py-2 flex items-center gap-2"><span><PiCrownFill /></span>Pro Access</button>
                                </div>
                        </div>
                      </DropdownMenuContent>
                    </DropdownMenu>
                    <Link
                      href="/templates"
                      className="font-sans font-medium text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors flex items-center gap-2"
                    >
                      Templates
                    </Link>
                    <Link
                      href="/bg-patterns"
                      className="font-sans font-medium text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors flex items-center gap-2"
                    >
                      Patterns
                    </Link>
                    <Link
                      href="/pricing"
                      className="font-sans font-medium text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors flex items-center gap-2"
                    >
                      Pricing
                    </Link>
                    <Link
                      href="/team"
                      className="font-sans font-medium text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors flex items-center gap-2"
                    >
                      Team
                    </Link>
                    
                  </div>
                </div>

                {/* Right side items */}
                
                <div className="hidden sm:flex items-center gap-4">
                  <span className="text-zinc-300 dark:text-zinc-700"></span>
                  {/* <HeaderPro /> */}


                  <div className="flex gap-3">
                    <SignedOut>
                      <Link href="/signup" className="w-full whitespace-nowrap relative cursor-pointer font-sans font-medium py-2 rounded-md text-xs px-4 bg-gradient-to-t from-[#262626] to-[#525252] text-neutral-200 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] flex items-center justify-center gap-2">Signup</Link>
                      {/* <Link href="/login" className="font-sans font-medium text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors flex items-center gap-2">Login</Link> */}
                    </SignedOut>
                    <SignedIn>
                      <UserButton afterSignOutUrl="/" /> 
                    </SignedIn>
                  </div>

                  <span className="text-xl text-neutral-700 dark:text-neutral-300"><IoLogoGithub/></span>
                  <ThemeToggle />
                </div>

                {/* Mobile Navigation remains unchanged */}
                <div className="flex sm:hidden items-center gap-3">
                   {
                    isAuthenticate ? (<button className="w-full whitespace-nowrap relative cursor-pointer font-sans font-medium py-2 rounded-md text-xs px-4 bg-gradient-to-t from-[#262626] to-[#525252] text-neutral-200 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] flex items-center justify-center gap-2">Start Building <span><HiOutlineArrowNarrowRight /></span></button>) : (<button onClick={() => setIsAuthenticate(true)} className="w-full whitespace-nowrap relative cursor-pointer font-sans font-medium py-2 rounded-md text-xs px-4 bg-gradient-to-t from-[#262626] to-[#525252] text-neutral-200 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] flex items-center justify-center gap-2">Signup</button>)
                   }
                   
                  {!isMobileMenuOpen ? <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="flex md:hidden lg:hidden bg-neutral-100 dark:bg-neutral-900 rounded-sm p-1 text-2xl text-neutral-700 dark:text-neutral-300"><IoMenu /></button> : <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="flex md:hidden lg:hidden  text-2xl text-neutral-700 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-900 rounded-sm p-1"><RiCloseFill /></button>}
                </div>
                
                
              </div>
              {
                  isMobileMenuOpen && <div className="md:hidden lg:hidden flex absolute top-14 left-0 w-screen h-screen bg-neutral-100 dark:bg-neutral-950">
                  {/* Mobile Menu Content */}
                    <div className="block px-5 w-full">

                      <div className="w-full pb-4 h-auto my-5.5 border-b-1 border-neutral-400">
                        <div className="w-full flex justify-between px-2 items-center ">
                          <div><h2 className="text-ms font-sans font-medium">Browse Products</h2></div>
                          
                        </div>

                        
                        <div className="grid grid-cols-1 gap-1 w-full h-auto justify-evenly pt-4">
                         {
                          services.map(({ id, service, icon: Icon, link }) => (
                            <Link key={id} href={link}>
                              <div
                              className="hover:bg-neutral-50 hover:dark:bg-neutral-800 rounded-sm pl-2 h-auto py-2 cursor-pointer flex items-center gap-4 hover:bg-neutral-100 hover:dark:bg-neutral-950 hover:rounded-sm">
                                <div className="flex justify-center items-center px-1 h-full overflow-hidden relative bg-neutral-200 px-2 py-2 dark:bg-neutral-900 rounded-sm">
                                  <span className="text-xl z-30"><Icon/></span>
                                </div>
                                <div className="space-y-1">
                                  <h1 className="text-sm font-sans font-medium">{service}</h1>
                                </div>
                              </div>
                            </Link>
                          ))
                         }
                                <div className="flex justify-between items-center gap-3 mt-5">
                                  
                                  <button className="w-full whitespace-nowrap relative cursor-pointer font-sans font-medium py-2 rounded-md text-sm bg-gradient-to-t from-[#262626] to-[#525252] text-neutral-200 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] flex items-center justify-center gap-2">Start Building <span><HiOutlineArrowNarrowRight /></span></button>

                                  <button className="pro_btn w-full whitespace-nowrap relative cursor-pointer font-sans font-medium rounded-md text-sm py-2 flex items-center gap-2"><span><PiCrownFill /></span>Pro Access</button>
                                </div>
                        </div>
                      </div>

                      <div className="flex justify-between">
                        <div className="flex flex-col gap-2  justify-center">
                          <ViewTransitionsLink
                            href="/pricing"
                            className="block pb-3 font-sans font-medium text-md text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
                          >
                            Pricing
                          </ViewTransitionsLink>
                          <ViewTransitionsLink
                      
                            href="/team"
                            className="block pb-3 font-sans font-medium text-md text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
                          >
                            Feedback
                          </ViewTransitionsLink>
                        </div>
                        <div className="flex flex-col gap-2  justify-center">
                          <ViewTransitionsLink
                            href="/pricing"
                            className="block pb-3 font-sans font-medium text-md text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
                          >
                            Report Bug
                          </ViewTransitionsLink>
                          <ViewTransitionsLink
                      
                            href="/team"
                            className="block pb-3 font-sans font-medium text-md text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
                          >
                            Team
                          </ViewTransitionsLink>
                        </div>
                        <div className="flex flex-col gap-1 items-center ">
                            <span className="p-1.5 rounded-sm bg-neutral-300 dark:bg-neutral-900 text-xl text-neutral-700 dark:text-neutral-300"><IoLogoGithub/></span>
                            <span className="p-1.5 rounded-sm bg-neutral-300 dark:bg-neutral-900"><ThemeToggle /></span>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Header

