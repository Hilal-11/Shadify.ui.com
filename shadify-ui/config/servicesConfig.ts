import { GrCubes } from "react-icons/gr";
import { IconType } from "react-icons";
import { MdViewQuilt } from "react-icons/md";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { LiaIconsSolid } from "react-icons/lia";
import { FaRobot } from "react-icons/fa6";
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
    service: "Component Blocks",
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
    service: "Universal Auth",
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
    id: 8,
    service: "AI Integrations",
    about: "Integrate ChatGPT, Gemini, and other AI models seamlessly into your applications.",
    icon: FaRobot,
    link: "/ai-integration"
  },
  {
    id: 9,
    service: "Figma Kits",
    about: "Complete Figma design systems, components, and templates for fast UI/UX creation.",
    icon: LuFigma,
    link: "/designs"
  }
];