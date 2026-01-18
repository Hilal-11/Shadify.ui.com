import { cn } from "@/lib/utils"
import { Marquee } from "@/components/ui/marquee"
import Image from "next/image"
const templates = [
  {
    image: "/templates/hero-block-1-light.webp",
    to: ""
  },
    {
    image: "/templates/hero-block-2-light.webp",
    to: ""
  },
   {
    image: "https://res.cloudinary.com/dou5rypdf/image/upload/v1759937470/Screenshot_2025-10-05_232854_jjjxka.png",
    to: ""
  },
    {
    image: "/templates/hero-block-3-light.webp",
    to: ""
  },
    
 
  {
    image: "https://res.cloudinary.com/dou5rypdf/image/upload/v1760680334/Screenshot_2025-09-28_081449_sk8qpj.png",
    to: ""
  },  

   {
    image: "https://res.cloudinary.com/dou5rypdf/image/upload/v1760680333/Screenshot_2025-09-28_081408_bvxwvh.png",
    to: ""
  }, 

   {
    image: "https://res.cloudinary.com/dou5rypdf/image/upload/v1760680296/Screenshot_2025-08-16_010903_jpmvup.png",
    to: ""
  }, 
    {
    image: "/templates/hero-block-5-light.webp",
    to: ""
  },
  {
    image: "https://res.cloudinary.com/dou5rypdf/image/upload/v1760629285/Screenshot_2025-10-05_232843_pjfcdu.png",
    to: ""
  },
    {
    image: "/templates/hero-block-6-light.webp",
    to: ""
  },
    {
    image: "/templates/hero-block-7-light.webp",
    to: ""
  },
  {
    image: "https://res.cloudinary.com/dou5rypdf/image/upload/v1759937583/Screenshot_2025-09-11_012042_aqqxwo.png",
    to: ""
  },
  {
    image: "/templates/hero-block-8-light.webp",
    to: ""
  },
    {
    image: "/templates/hero-block-9-light.webp",
    to: ""
  },  {
    image: "/templates/hero-block-10-light.webp",
    to: ""
  },  
  {
    image: "https://res.cloudinary.com/dou5rypdf/image/upload/v1760680334/Screenshot_2025-09-28_081449_sk8qpj.png",
    to: ""
  },  

   {
    image: "https://res.cloudinary.com/dou5rypdf/image/upload/v1760680333/Screenshot_2025-09-28_081408_bvxwvh.png",
    to: ""
  }, 

   {
    image: "https://res.cloudinary.com/dou5rypdf/image/upload/v1760680296/Screenshot_2025-08-16_010903_jpmvup.png",
    to: ""
  },
  


  
 
]

const firstRow = templates.slice(0, templates.length / 2)
const secondRow = templates.slice(templates.length / 2)

const ReviewCard = ({
  image,
  to,
}: {
  image: string
    to: string
}) => {
  return (
    <img alt="Error" src={image} className="w-auto h-[178px] object-cover object-center rounded-sm border" />
  )
}

export function MarqueeTemplates() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover  className="[--duration:40s]">
        {firstRow.map((template, index) => (
          <ReviewCard key={index} {...template} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:30s]">
        {secondRow.map((template, index) => (
          <ReviewCard key={index} {...template} />
        ))}
      </Marquee>
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
    </div>
  )
}


const ComponentImage = ({
  image,
  to,
}: {
  image: string
    to: string
}) => {
  return (
    <img alt="Error" src={image} className="w-auto h-[140px] object-cover object-center rounded-sm border" />
  )
}


export function ComponentsMarquee() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover repeat={1}  className="[--duration:200s]">
        {templates.map((template, index) => (
          <ComponentImage key={index} {...template} />
        ))}
      </Marquee>
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
    </div>
  )
}

import { templatesCategories } from "@/config/templatesCatagoriedConfig"

const TemplatesCatagory = ({
  id,
  name,
}: {
    id: number | string
    name: string
}) => {
  return (
    <div className="flex justify-center items-center px-3 text-sm font-sans font-medium py-1 rounded-sm bg-neutral-100 dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700">
      <p>{name}</p>
    </div>
  )
}
export function TemplatesList() {
  return (
    <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
      <Marquee pauseOnHover  className="[--duration:200s]">
        {templatesCategories.map((template, index) => (
          <TemplatesCatagory key={index} {...template} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:180s]">
        {templatesCategories.map((template, index) => (
          <TemplatesCatagory key={index} {...template} />
        ))}
      </Marquee>
      <Marquee pauseOnHover className="[--duration:180s]">
        {templatesCategories.map((template, index) => (
          <TemplatesCatagory key={index} {...template} />
        ))}
      </Marquee>
      <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
    </div>
  )
}