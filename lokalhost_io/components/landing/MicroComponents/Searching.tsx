import React, { useEffect, useState } from 'react'
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog"
import { MAIN_PAGE_SEARCHING_CONFIG } from "@/config/searchingConfig";
import Link from 'next/link';
import { IoSearchSharp } from 'react-icons/io5';
export function SearchingMain() {
    const [searchQuery , setSearchQuery] = useState('');
    const [isSearching , setIsSearching] = useState(false);
    const handleSearching = (event:any) => {
        setSearchQuery(event.target.value)
    }

    useEffect(() => {
        const filtering = MAIN_PAGE_SEARCHING_CONFIG.find((item) => item.suggesstion.includes(searchQuery))
        console.log(filtering)
    }, [searchQuery])
  return (
    <div>
        <Dialog>
            <DialogTrigger asChild>
                <button className="bg-neutral-50 dark:bg-neutral-900 px-[7px] py-[6px] rounded-sm shadow-sm border hover:bg-neutral-100"><IoSearchSharp className="text-lg"/></button>
            </DialogTrigger>
            <DialogContent className="lg:w-[500px] h-[400px] overflow-y-scroll pb-4">
                {/* Header search box */}
                <div className="w-full h-[48px] fixed top-0 border-b rounded-5-lg p-1 flex justify-center items-center pl-2  ">
                    <span><IoSearchSharp className="text-lg text-neutral-400 dark:text-neutral-700"/></span>
                    <input className="w-full h-full outline-0 text-sm font-sans font-medium pl-1" onChange={handleSearching} type="text" placeholder="Searching..." />
                        </div>
                            <div className="flex flex-col gap-1 w-full h-auto mt-10">
                                <p className="text-xs fonr-sans text-neutral-600">Suggestions</p>
                                {
                                  MAIN_PAGE_SEARCHING_CONFIG.map(({suggesstion , suggesstion_to , Icon}) => (
                                    <div key={suggesstion_to} className="w-full h-[42px] rounded-sm hover:bg-neutral-200 hover:dark:bg-neutral-800 transition duration-300 flex items-center">
                                      <Link className="flex gap-3 pl-2 items-center text-sm font-medium" href={suggesstion_to}><span className="text-lg"><Icon /></span>{suggesstion}</Link>
                                    </div>
                                  ))
                                }
                </div>
            </DialogContent>
        </Dialog>
    </div>
  )
}


