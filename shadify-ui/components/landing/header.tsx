"use client";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { Flame, Menu, SearchIcon } from "lucide-react";
import Link from "next/link";
import { Link as ViewTransitionsLink } from "next-view-transitions";
import Image from "next/image";
// import { HeaderPro } from "./header-pro";
import { ArrowUpRight } from "lucide-react";
import { PartyPopper } from "lucide-react";
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
                   <LiaAtomSolid className="animate-spin mr-2 h-8 w-8" />
                   
                    <span className="hidden sm:block font-sans font-bold text-lg">
                      ShadifyUI
                    </span>
                  </Link>
                  <span className="text-zinc-300 dark:text-zinc-700"></span>
                  {/* Desktop Navigation Links */}
                  <div className="hidden sm:flex items-center gap-4">
                    <ViewTransitionsLink
                      href="/docs/components/background-paths"
                      className="font-sans font-medium text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
                    >
                      Components
                    </ViewTransitionsLink>
                    <Link
                      href="/templates"
                      className="font-sans font-medium text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors flex items-center gap-2"
                    >
                      Templates
                    </Link>
                    <Link
                      href="docs"
                      className="font-sans font-medium text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors flex items-center gap-2"
                    >
                      Documentation
                    </Link>
                    <Link
                      href="/pricing"
                      className="font-sans font-medium text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors flex items-center gap-2"
                    >
                      Pricing
                    </Link>
                    
                  </div>
                </div>

                {/* Right side items */}
                
                <div className="hidden sm:flex items-center gap-4">
                  <span className="text-zinc-300 dark:text-zinc-700"></span>
                  {/* <HeaderPro /> */}

                   <div className="hidden lg:grid md:grid w-full max-w-lg gap-6">
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
                        href="docs"
                        className="block pb-3 font-sans font-medium text-xl text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
                      >
                        Documentation
                      </ViewTransitionsLink>
                      <ViewTransitionsLink
                        href="/pricing"
                        className="block pb-3 font-sans font-medium text-xl text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
                      >
                        Pricing
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