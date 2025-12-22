"use client"
import { ThemeToggle } from "@/components/ui/theme-toggle";
import Link from "next/link";
import { PiTerminalFill } from "react-icons/pi";
import { PiCrownFill } from "react-icons/pi";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";
import { IoMenu } from "react-icons/io5";
import { RiCloseFill } from "react-icons/ri";
import { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa6";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { services } from "@/config/servicesConfig"
import { FaChevronDown } from "react-icons/fa6";
import { FaChevronUp } from "react-icons/fa";
import HeaderProfile from "@/components/HeaderProfile";
import { TbLockHeart } from "react-icons/tb";
function Header({ isLoggedIn }: { isLoggedIn: boolean }) {
  // const token = cookies().get("token")?.value;
  // const isAuthenticate = !!token;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showservices, setShowServices] = useState(false)

  const [user, setUser] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const loggedInUser = async () => {
    try{  
      const res =  await fetch('/api/users/profile', {
        method: 'GET',
        headers: {
          "Content-Type": "application/json"
        }
      });
      const data = await res.json();
      setUser(data.user.username);
      setUserEmail(data.user.email);
    }catch(error){
      console.log(error);
    }
  }
  useEffect(() => {
    loggedInUser();
  }, []);

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
                   <PiTerminalFill className="mr-2 h-8 w-8" />
                   
                   
                    <span className="hidden sm:block font-sans font-bold text-lg">
                      Lokalhost.io
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
                            <Link key={id} href={link} prefetch>
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
                      prefetch
                    >
                      Web Templates
                    </Link>
                    <Link
                      href="/bg-patterns"
                      className="font-sans font-medium text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors flex items-center gap-2"
                      prefetch
                    >
                      Mobile Applications
                    </Link>
                    <div className="relative border-t border-b border-dashed border-neutral-500 px-4 py-px">
                      <span className="absolute left-2 h-[35px] -top-[6px] border-l border-dashed border-neutral-500"></span>
                      <span className="absolute right-2 h-[35px] -top-[6px] border-l border-dashed border-neutral-500"></span>
                      <Link
                      href="/pricing"
                      className=" relative font-sans font-medium text-sm text-zinc-500 dark:text-neutral-700 transition-colors flex items-center gap-2"
                      prefetch
                    >
                      Pricing 
                    </Link>
                    </div>
                    <DropdownMenu>
                      <DropdownMenuTrigger>
                        <h1 className="cursor-pointer flex gap-1 bg-transparent hover:bg-transparent font-sans font-medium text-[15px] text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors items-center">more<span className="text-sm"><FaAngleDown /></span></h1>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-[160px] flex-col space-y-1 px-1 pt-2 pb-2 mt-2" align="start">
                        <div className="w-full hover:bg-neutral-200 hover:dark:bg-neutral-800 cursor-pointer rounded-sm py-1 pl-1 ">
                          <Link
                          href="/team"
                          className="font-sans font-medium text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
                          prefetch
                        >
                          Team
                        </Link>
                        </div>
                        <div className="w-full hover:bg-neutral-200 hover:dark:bg-neutral-800 cursor-pointer rounded-sm py-1 pl-1 ">
                          <Link
                          href="/team"
                          className="font-sans font-medium text-sm text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
                          prefetch
                        >
                          Blogs
                        </Link>
                        </div>
                      </DropdownMenuContent>
                    </DropdownMenu>

                  </div>
                </div>

                {/* Right side items */}
                
                <div className="hidden sm:flex items-center gap-4">
                  <span className="text-zinc-300 dark:text-zinc-700"></span>
                  {/* <HeaderPro /> */}


                  <div className="flex gap-3">
                      <Link href="/signup" className="w-full whitespace-nowrap relative cursor-pointer font-sans font-medium py-2 rounded-md text-xs px-4 bg-gradient-to-t from-[#262626] to-[#525252] text-neutral-200 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] flex items-center justify-center gap-2">{isLoggedIn ? "Start Building" : "Signup"}</Link>
                  </div>
                  { isLoggedIn ? (<HeaderProfile user={user} userEmail={userEmail} />) : null }
                </div>

                {/* Mobile Navigation remains unchanged */}
                <div className="flex sm:hidden items-center gap-3">
                   {
                    isLoggedIn ? (<HeaderProfile user={user} userEmail={userEmail} />) : (<Link href="/signup" className="w-full whitespace-nowrap relative cursor-pointer font-sans font-medium py-2 rounded-md text-xs px-4 bg-gradient-to-t from-[#262626] to-[#525252] text-neutral-200 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] flex items-center justify-center gap-2">Signup</Link>)
                   }
                   
                  {!isMobileMenuOpen ? <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="flex md:hidden lg:hidden bg-neutral-100 dark:bg-neutral-900 rounded-sm p-1 text-2xl text-neutral-700 dark:text-neutral-300"><IoMenu /></button> : <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="flex md:hidden lg:hidden  text-2xl text-neutral-700 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-900 rounded-sm p-1"><RiCloseFill /></button>}
                </div>
                
                
              </div>
              
              {
                  isMobileMenuOpen && <div className="md:hidden lg:hidden flex absolute top-14 left-0 w-screen h-screen bg-neutral-100 dark:bg-neutral-950 overflow-y-scroll">
                  {/* Mobile Menu Content */}
                    <div className="block px-5 w-full">

                      <div className="w-full pb-4 h-auto my-5.5 border-b-1 border-neutral-400">
                        <div className="w-full flex justify-between px-2 items-center ">
                          <div onClick={() => setShowServices(!showservices)} className="flex justify-between items-center w-full">
                            <h2 className="text-ms font-sans font-medium">Browse Products</h2>
                            <button className="relative cursor-pointer font-sans font-medium py-2 rounded-md text-xs px-2 bg-gradient-to-t from-[#262626] to-[#525252] text-neutral-200 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] flex items-center justify-center gap-2">
                              {
                                !showservices ? (<span><FaChevronDown /></span>) : (<span><FaChevronUp/></span>)
                              }
                              
                            </button>
                          </div>
                          
                        </div>

                        
                        <div className="grid grid-cols-1 gap-1 w-full h-auto justify-evenly pt-4">
                         { showservices && 
                          services.map(({ id, service, about,  icon: Icon, link }) => (
                            <Link key={id} href={link} prefetch>
                              <div
                              className="hover:bg-neutral-50 hover:dark:bg-neutral-800 rounded-sm pl-2 h-auto py-2 cursor-pointer flex items-center gap-4 hover:rounded-sm">
                                <div className="flex justify-center items-center px-1 h-full overflow-hidden relative bg-neutral-200 py-2 dark:bg-neutral-900 rounded-sm">
                                  <span className="text-xl z-30"><Icon/></span>
                                </div>
                                <div className="">
                                  <h1 className="text-sm font-sans font-medium">{service}</h1>
                                  <p className="text-[9px] font-sans font-medium">{about}</p>
                                </div>
                              </div>
                            </Link>
                          ))
                         }
                                
                        </div>
                      </div>

                      <div className="flex justify-between">
                        <div className="flex flex-col gap-2  justify-center">
                          <Link
                            href="/pricing"
                            className="block pb-3 font-sans font-medium text-md text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
                            prefetch
                          >
                            <span><TbLockHeart /></span>Pricing
                          </Link>
                          <Link
                            href="/team"
                            className="block pb-3 font-sans font-medium text-md text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
                            prefetch
                          >
                            Feedback
                          </Link>
                          <Link
                      
                            href="/team"
                            className="block pb-3 font-sans font-medium text-md text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
                            prefetch
                          >
                            Blogs
                          </Link>
                        </div>
                        <div className="flex flex-col gap-2  justify-center">
                          <Link
                            href="/pricing"
                            className="block pb-3 font-sans font-medium text-md text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
                            prefetch
                          >
                            Report Bug
                          </Link>
                          <Link
                      
                            href="/team"
                            className="block pb-3 font-sans font-medium text-md text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
                            prefetch
                          >
                            Team
                          </Link>
                        </div>
                        <div className="flex flex-col gap-1 items-center ">
                            <span className="p-1.5 rounded-sm bg-neutral-300 dark:bg-neutral-900"><ThemeToggle /></span>
                        </div>
                        
                      </div>
                      <div className="flex justify-between items-center gap-3 mt-5">
                        <button className="w-full whitespace-nowrap relative cursor-pointer font-sans font-medium py-2 rounded-md text-sm bg-gradient-to-t from-[#262626] to-[#525252] text-neutral-200 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] flex items-center justify-center gap-2">Start Building <span><HiOutlineArrowNarrowRight /></span></button>
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

