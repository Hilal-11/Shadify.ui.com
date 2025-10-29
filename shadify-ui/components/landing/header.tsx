"use client";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Flame, Menu, SearchIcon } from "lucide-react";
import Link from "next/link";
import { Link as ViewTransitionsLink } from "next-view-transitions";
import Image from "next/image";
import { IoLogoGithub } from "react-icons/io5";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { IoMenu } from "react-icons/io5";
import { RiCloseFill } from "react-icons/ri";
import { IoSearchSharp } from "react-icons/io5";
import { useState } from "react";
import { LiaAtomSolid } from "react-icons/lia";

import { SignedIn, SignedOut, SignInButton, SignUpButton, UserButton, SignOutButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button"
import { FaAngleDown } from "react-icons/fa6";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { services } from "@/config/servicesConfig"
import { GrCubes } from "react-icons/gr";
function Header() {
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
                    {/* <ViewTransitionsLink
                      href="/docs/components/background-paths"
                      className="font-sans font-medium text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
                    >
                      Components
                    </ViewTransitionsLink> */}
                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        <h1 className="cursor-pointer flex gap-1 bg-transparent hover:bg-transparent font-sans font-medium text-[15px] text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors flex items-center">Services<span className="text-sm"><FaAngleDown /></span></h1>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="md:w-[700px] lg:w-[800px] h-auto my-5.5 py-4 px-2" align="start">
                        <div className="grid grid-cols-2 gap-3 w-full h-auto justify-evenly">
                         {
                          services.map(({ id, service, description, icon: Icon }) => (
                            <div key={id} className="h-auto py-2 rounded-lg bg-neutral-50 dark:bg-neutral-800 hover:shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] duration-400 cursor-pointer flex items-center">
                              <div className="flex justify-center items-center px-5 h-full overflow-hidden relative">
                                <span className="text-4xl"><Icon/></span>
                                
                                  <div className="absolute h-full w-full bg-[linear-gradient(to_right,#f74c062e_1px,transparent_1px),linear-gradient(to_bottom,#f9bc2c2e_1px,transparent_1px)] [background-size:5px_5px] [mask-image:radial-gradient(ellipse_40%_40%_at_50%_50%,#000_70%,transparent_100%)]"></div>
                                
                              </div>
                              <div className="space-y-1 px-2">
                                <h1 className="text-lg font-sans font-bold">{service}</h1>
                                <p className="font-sans text-xs text-zinc-600 dark:text-zinc-200">{description}</p>
                              </div>
                            </div>
                          ))
                         }
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
                      <Link href="/signup" className="font-sans font-medium text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors flex items-center gap-2">Signup</Link>
                      <Link href="/login" className="font-sans font-medium text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors flex items-center gap-2">Login</Link>
                    </SignedOut>
                    <SignedIn>
                      <UserButton afterSignOutUrl="/" /> {/* shows user avatar dropdown */}
                      {/* Optional Signout Button in plain text if needed */}
                      {/* <SignOutButton /> */}
                    </SignedIn>
                  </div>


                   <div className="hidden lg:grid md:hidden w-full max-w-lg gap-6">
                    <InputGroup>
                      <InputGroupInput className="font-sans font-medium" placeholder="Search Documentation" />
                      <InputGroupAddon>
                        <SearchIcon />
                      </InputGroupAddon>
                    </InputGroup>
                  </div>
                  <span className="text-xl text-neutral-700 dark:text-neutral-300"><IoLogoGithub/></span>
                  <ThemeToggle />
                </div>

                {/* Mobile Navigation remains unchanged */}
                <div className="flex sm:hidden items-center gap-3">
                  <button className="flex md:hidden lg:hidden bg-transparent text-xl text-neutral-700 dark:text-neutral-300"><IoSearchSharp /></button>
                  <span className="text-xl text-neutral-700 dark:text-neutral-300"><IoLogoGithub/></span>
                  <ThemeToggle />
                  {!isMobileMenuOpen ? <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="flex md:hidden lg:hidden bg-transparent text-2xl text-neutral-700 dark:text-neutral-300"><IoMenu /></button> : <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="flex md:hidden lg:hidden bg-transparent text-2xl text-neutral-700 dark:text-neutral-300"><RiCloseFill /></button>}
                </div>
                
                
              </div>
              {
                  isMobileMenuOpen && <div className="md:hidden lg:hidden flex absolute top-14 left-0 w-screen h-screen bg-neutral-100 dark:bg-neutral-950">
                  {/* Mobile Menu Content */}
                    <div className="block px-5 pt-4">
                      <ViewTransitionsLink
                        href="/docs"
                        className="block pb-3 font-sans font-medium text-xl text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
                      >
                        Components
                      </ViewTransitionsLink>
                      <ViewTransitionsLink
                        href="/templates"
                        className="block pb-3 font-sans font-medium text-xl text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
                      >
                        Templates
                      </ViewTransitionsLink>
                       <ViewTransitionsLink
                        href="/bg-patterns"
                        className="block pb-3 font-sans font-medium text-xl text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
                      >
                        Patterns
                      </ViewTransitionsLink>
                      <ViewTransitionsLink
                      
                        href="/pricing"
                        className="block pb-3 font-sans font-medium text-xl text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
                      >
                        Pricing
                      </ViewTransitionsLink>
                      <ViewTransitionsLink
                      
                        href="/team"
                        className="block pb-3 font-sans font-medium text-xl text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
                      >
                        Team
                      </ViewTransitionsLink>
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

