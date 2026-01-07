import { GrCubes } from "react-icons/gr";
import { IconType } from "react-icons";
import { MdViewQuilt } from "react-icons/md";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { LiaIconsSolid } from "react-icons/lia";
import { TbBrandAuth0 } from "react-icons/tb";
import { LuFigma } from "react-icons/lu";
import { TbBackground } from "react-icons/tb";
import { PiCubeDuotone } from "react-icons/pi";
interface Services {
    id: string | number
    service: string
    about: string
    icon: IconType,
    link: string

}
export const services: Services[]  = [
   {
    id: 1,
    service: "Components",
    about: "Pre-built, customizable components to speed up your development workflow.",
    icon: GrCubes,
    link: "/docs"
  },
  {
    id: 2,
    service: "Web Templates",
    about: "Production-ready website templates built with modern UI and top-tier code quality.",
    icon: MdViewQuilt,
    link: "/templates"
  },
  {
    id: 3,
    service: "Application Templates",
    about: "Starter app templates for full-scale web and mobile applications with best practices.",
    icon: IoPhonePortraitOutline,
    link: "/mobile-apps"
  },
  {
    id: 4,
    service: "Mobile UI Elements",
    about: "Beautiful and reusable mobile UI components for iOS and Android apps.",
    icon: PiCubeDuotone,
    link: "/mobile-apps"
  },
  {
    id: 5,
    service: "Authentication kits",
    about: "Authentication solutions for modern apps including JWT, OAuth, and social logins.",
    icon: TbBrandAuth0,
    link: "/authdocs"
  },
  {
    id: 6,
    service: "SASS Starter Kits",
    about: "End-to-end starter kits with complete backend, APIs, and scalable architectures.",
    icon: LiaIconsSolid,
    link: "/"
  },
  {
    id: 7,
    service: "UI Patterns",
    about: "Modern UI backgrounds, patterns, and sections ready to plug into any project.",
    icon: TbBackground,
    link: "/bg-patterns"
  },
  {
    id: 9,
    service: "Figma Kits",
    about: "Complete Figma design systems, components, and templates for fast UI/UX creation.",
    icon: LuFigma,
    link: "/designs"
  }
];


interface ITemlatesList {
  id: number | string,
  template_image: string,
  template_url: string
  template_name: string
}
interface IServices {
    id: number
    service: string
    discription: string
    tech_bages: string[]
    icon: IconType,
    link: string,
    image: string,
    templates_list_1?: ITemlatesList[],
    templates_list_2?: ITemlatesList[]

}
export const servicesShowCaseConfig:IServices[] = [
  {
    id: 1,
    service: "Web Components",
    discription: "Production ready funationsl web components for react/nextjs application.",
    tech_bages : ["React", "Next.Js" , "Typescript"],
    link: "/docs",
    icon: GrCubes,
    image: "https://res.cloudinary.com/dou5rypdf/image/upload/v1767535126/Screenshot_2026-01-04_192534_ayj4if.png"

  },
  {
    id: 2,
    service: "Web Templates",
    discription: "Modern Web Templates for personal, professional, business or anything.",
    tech_bages : ["React/Next.js" , "Tailwind/Motion" , "Typescript"],
    link: "/templatess",
    icon: MdViewQuilt,
    image: "https://cdn.dribbble.com/userupload/18345302/file/original-cd77993b9bf19501994e8099f6bfe59c.jpg",
    templates_list_1: [
      {

        id: "jd743wehqr6b3qxpd0gdxhh50x7xpxk2",
        template_image: "https://res.cloudinary.com/dou5rypdf/image/upload/v1760680292/Screenshot_2025-08-14_010122_dqcw04.png",
        template_url: "https://start-up-seven-iota.vercel.app/",
        template_name: "Agency Templete PrimeDeck"
    },
    {
        id: "jd7e2jfhf8sz24xfgpech0hzzs7xpbqm",
        template_image: "https://res.cloudinary.com/dou5rypdf/image/upload/v1760680174/Screenshot_2025-08-03_230537_f6popm.png",
        template_url: "https://portfolio-templete-five.vercel.app/",
        template_name: "Your Portfolio"
    },
    {
        id: "jd72kqr9k6104ynps1vkfedfxd7xpcgy",
        template_image: "https://res.cloudinary.com/dou5rypdf/image/upload/v1760680072/IMG-20251009-WA0001_idp5je.jpg",
        template_url: "https://portfolix-two.vercel.app/",
        template_name: "Minimal Portfolio for everyone"
    },
    
    ],
    templates_list_2: [
      {
          id: "jd72kqr9k6104ynps1vkfedfxd7xpcgy",
          template_image: "https://res.cloudinary.com/dou5rypdf/image/upload/v1760680072/IMG-20251009-WA0001_idp5je.jpg",
          template_url: "https://portfolio-pro-seven.vercel.app/",
          template_name: "Minimal Portfolio for everyone"
      },
      {
          id: "dummy_template_1",
          template_image: "https://res.cloudinary.com/dou5rypdf/image/upload/v1760680291/Screenshot_2025-08-14_010221_gfq5nj.png",
          template_url: "https://portfolio-pro-seven.vercel.app/",
          template_name: "Developer Profile"
      },
      {
          id: "dummy_template_2",
          template_image: "https://res.cloudinary.com/dou5rypdf/image/upload/v1760680065/IMG-20251008-WA0006_qk7ywz.jpg",
          template_url: "https://portfolio-pro-seven.vercel.app/",
          template_name: "Agency Templete PrimeDeck"
      },

    ]
  },
  {
    id: 3,
    service: "Mobile Appications",
    discription: "Production ready funationsl web components for react/nextjs application.",
    tech_bages : ["React Native", "Flutter", "Typescript"],
    link: "/mobile-apps",
    icon: IoPhonePortraitOutline,
    image: "https://cdn.dribbble.com/userupload/43067054/file/original-8fdd2826c28645b40c13bc6426fce4a5.jpg"

  },
  {
    id: 4,
    service: "UI Design Kits",
    discription: "Production ready funationsl web components for react/nextjs application.",
    tech_bages : ["Figma" , "Frammer" , "Designs"],
    link: "/designs",
    icon: LuFigma,
    image: "https://cdn.dribbble.com/userupload/42728462/file/original-77d7c731d90840391841a852b1f347a0.png"

  },

]