"use client"
interface ComponentShowcaseCardProps {
    className: string;
}
import { TbBrandAuth0 } from "react-icons/tb";
import { motion } from 'motion/react'
export function ComponentShowcaseCard({
    className,
}: ComponentShowcaseCardProps) {
    return (
        <div className="bg-neutral-100 pb-34 p-10 relative">
            <div className="flex flex-nowrap overflow-hidden justify-center items-end gap-4 relative h-full mask-l-from-10% to-10%">
                <img className="rounded-2xl relative -bottom-20"src="https://res.cloudinary.com/dou5rypdf/image/upload/v1760628911/Screenshot_2025-09-26_025658_hoxc9a.png" alt="" />
                <img  className="hidden md:block lg:block rounded-2xl" src="https://res.cloudinary.com/dou5rypdf/image/upload/v1761817889/Screenshot_2025-10-30_151515_bimxnq.png" alt="" />
                <img  className="hidden md:block lg:block rounded-2xl" src="https://res.cloudinary.com/dou5rypdf/image/upload/v1761817934/Screenshot_2025-10-30_151444_xdoaek.png" alt="" />
                <img  className="hidden md:block lg:block rounded-2xl" src="https://res.cloudinary.com/dou5rypdf/image/upload/v1761817989/Screenshot_2025-10-30_151457_q5bg1a.png" alt="" />
            </div>
            <div className="absolute right-10 bottom-4 py-2 px-2">
                <motion.button
                    initial={{ scale: 1}}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 1.02 }}
                    transition={{ duration: 0.20 , ease: "easeInOut"}}
                className="cursor-pointer bg-gradient-to-t from-[#262626] to-[#525252] shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] flex items-center justify-center gap-3 py-[9px] rounded-full bg-neutral-950 text-neutral-200 font-sans font-medium text-sm w-54"><span className="text-xl"><TbBrandAuth0 /></span>Dive into the auth</motion.button>
            </div>
        </div>
    );
}
