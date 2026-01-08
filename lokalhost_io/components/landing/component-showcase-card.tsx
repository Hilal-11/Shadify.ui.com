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
        <div className="bg-neutral-100 pb-34 p-10 relative border">

            

            <div className="relative flex flex-nowrap overflow-hidden justify-center items-end gap-4 h-full mask-l-from-10% to-10%">
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
            
        </div>
    );
}
