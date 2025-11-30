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
    icon: IconType,
    link: string

}
export const services: Services[]  = [
  {
    id: 1,
    service: "Component Blocks",
    icon: GrCubes,
    link: "/docs"
  },
  {
    id: 2,
    service: "Web Templates",
      icon: MdViewQuilt,
      link: "/templates"
  },
    {
    id: 3,
    service: "Application Templates",
    icon: IoPhonePortraitOutline,
    link: "/mobile-apps"
  },
    {
    id: 3,
    service: "Mobile UI Elements",
    icon: PiCubeDuotone,
    link: "/mobile-apps"
  },
  {
    id: 3_1,
    service: "Universal Auth",
    icon: TbBrandAuth0,
    link: "/authdocs"
  },
  {
    id: 4,
    service: "SASS Starter Kits",
    icon: LiaIconsSolid,
    link: "/"
  },
    {
    id: 5,
    service: "UI Patterns",
    icon: TbBackground,
    link: "/bg-patterns"
  },
  {
    id: 5,
    service: "AI Integrations",
    icon: FaRobot,
    link: "/ai-integration"
  },
  {
    id: 6,
    service: "Figma kits",
    icon: LuFigma,
    link: "/designs"
  },
  
];