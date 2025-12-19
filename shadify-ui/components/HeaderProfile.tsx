import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Avatar } from "@radix-ui/react-avatar";
import { MdLogout } from "react-icons/md";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { PiTerminalFill } from "react-icons/pi";

function HeaderProfile({ user , userEmail }: { user: string; userEmail: string }) {
  return (
                  <div className='flex flex-col bg-neutral-100 dark:bg-neutral-900'>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button className="px-1 py-1 rounded-full flex justify-center items-center w-[22px] h-[22px] lg:w-[28px] lg:h-[28px] overflow-hidden bg-neutral-900 dark:bg-neutral-200 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
                          <Avatar className="rounded-full">
                            <span className="text-lg lg:text-lg font-medium text-white dark:text-black">{user[0]}</span>
                          </Avatar>
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-56 lg:w-58 px-2 py-4 relative right-10 top-4" align="center" >
                         <div className="flex flex-col gap-1 px-">
                          <span className="font-sans font-medium text-lg lg:text-xl">{user}</span>
                          <span className="overflow-hidden font-sans font-medium textxs lg:text-sm text-zinc-500">{userEmail}</span>
                         </div>
                         <div className="mt-2 pl-2 w-full py-2 rounded-sm hover:bg-neutral-100 hover:dark:bg-neutral-800 cursor-pointer">
                          <h1 className="text-sm lg:text-md font-sans font-medium">Dashboard</h1>
                         </div>
                         <div className="mt-1 pl-2 w-full py-2 rounded-sm hover:bg-neutral-100 hover:dark:bg-neutral-800 cursor-pointer">
                          <h1 className="text-sm lg:text-md font-sans font-medium">Profile</h1>
                         </div>

                         <div className="mt-1 px-2 w-full py-2 rounded-sm hover:bg-neutral-100 hover:dark:bg-neutral-800 cursor-pointer flex items-center justify-between">
                            <h1 className="text-sm lg:text-md font-sans font-medium">Theme</h1>
                            <ThemeToggle />
                         </div>

                        <DropdownMenuSeparator/>
                        
                         <div className="mt-3 px-2 w-full py-2 rounded-sm hover:bg-neutral-100 cursor-pointer flex items-center justify-between bg-gradient-to-t from-[#262626] to-[#525252] text-neutral-200 shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)]">
                            <button className="text-sm lg:text-md font-sans font-medium">Logout</button>
                            <button className="text-sm lg:text-md font-sans font-medium"><MdLogout/></button>
                         </div>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
  )
}

export default HeaderProfile
