"use client"
interface ComponentShowcaseCardProps {
    className: string;
}
import { TbBrandAuth0 } from "react-icons/tb";
import { motion } from 'motion/react'
import image1 from '../../public/heroImage1.png'
import image2 from '../../public/heroImage2.png'
import image3 from '../../public/heroImage3.png'
import image4 from '../../public/heroImage4.png'
import Image from "next/image";


export function ComponentShowcaseCard({
    className,
}: ComponentShowcaseCardProps) {
    return (
        <div className="bg-neutral-100 pb-34 p-10 relative">
            <div className="flex flex-nowrap overflow-hidden justify-center items-end gap-4 relative h-full mask-l-from-10% to-10%">
                <Image 
                    className="rounded-2xl relative -bottom-20"
                    src={image1} 
                    alt="Image not load yet" 
                    width={500}
                    height={500}
                />

                <Image  className="hidden md:block lg:block rounded-2xl" 
                    src={image2} 
                    alt="Image not load yet" 
                    width={500}
                    height={500}
                />
                <Image  className="hidden md:block lg:block rounded-2xl" 
                    src={image4} 
                    alt="Image not load yet" 
                    width={500}
                    height={500}
                />
                <Image  className="hidden md:block lg:block rounded-2xl" 
                    src={image3} 
                    alt="Image not load yet" 
                    width={500}
                    height={500}
                />
            
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
