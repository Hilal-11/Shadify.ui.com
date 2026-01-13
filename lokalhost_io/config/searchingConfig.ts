import { GrCubes } from "react-icons/gr";
import { IconType } from "react-icons";
import { MdViewQuilt } from "react-icons/md";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { LiaIconsSolid } from "react-icons/lia";
import { TbBrandAuth0 } from "react-icons/tb";
import { LuFigma } from "react-icons/lu";
import { TbBackground } from "react-icons/tb";
import { PiCubeDuotone } from "react-icons/pi";
import { RiTeamLine } from "react-icons/ri";
interface IMAIN_PAGE_SERCHING {
    suggesstion: string,
    suggesstion_to: string,
    Icon: React.ElementType
}

export const MAIN_PAGE_SEARCHING_CONFIG = [ 
    {
        suggesstion: "Components",
        suggesstion_to: "/",
        Icon: GrCubes
    },
    {
        suggesstion: "Templates",
        suggesstion_to: "/",
        Icon: MdViewQuilt
    },
    {
        suggesstion: "Designs",
        suggesstion_to: "/",
        Icon: TbBrandAuth0
    },
    {
        suggesstion: "Authentication kits",
        suggesstion_to: "/",
        Icon: LiaIconsSolid
    },
    {
        suggesstion: "SASS stater kits",
        suggesstion_to: "/",
        Icon: LuFigma
    },
    {
        suggesstion: "Mobile UI Elements",
        suggesstion_to: "/",
        Icon: PiCubeDuotone
    },
    {
        suggesstion: "Mobile Applications",
        suggesstion_to: "/",
        Icon: PiCubeDuotone
    },
    {
        suggesstion: "Team",
        suggesstion_to: "/",
        Icon: RiTeamLine
    },
]