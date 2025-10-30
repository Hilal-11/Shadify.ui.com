import { GrCubes } from "react-icons/gr";
import { IconType } from "react-icons";
import { MdViewQuilt } from "react-icons/md";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { LiaIconsSolid } from "react-icons/lia";
import { FaRobot } from "react-icons/fa6";
import { TbBrandAuth0 } from "react-icons/tb";


interface Services {
    id: string | number
    service: string
    description: string
    icon: IconType,
    link: string

}
export const services: Services[]  = [
  {
    id: 1,
    service: "Component Blocks",
    description:
      "Pre-built, modern React components with smooth animations and ready-to-use UI patterns.",
    icon: GrCubes,
    link: "/docs"
  },
  {
    id: 2,
    service: "Web Templates",
    description:
      "Professional website templates crafted with clean code, modern layouts, and full responsiveness.",
      icon: MdViewQuilt,
      link: "/templates"
  },
  {
    id: 3_1,
    service: "Authentication",
    description:
      "Complete authentication and authorization with error handling, zod validation and typescript compatable.",
    icon: TbBrandAuth0,
    link: "/authdocs"
  },
  {
    id: 3,
    service: "Mobile App Blueprints",
    description:
      "Cross-platform starter apps for iOS and Android using React Native and Flutter frameworks.",
    icon: IoPhonePortraitOutline,
    link: "/mobile-apps"
  },
  {
    id: 4,
    service: "SaaS Starter Kits",
    description:
      "Full-stack SaaS boilerplates with built-in auth, payments, subscriptions, and scalable APIs.",
    icon: LiaIconsSolid,
    link: "/"
  },
  {
    id: 5,
    service: "AI Integrations",
    description:
      "Embed intelligent AI models, chatbots, and automation tools seamlessly into any application.",
    icon: FaRobot,
    link: "/ai-integration"
  },
];