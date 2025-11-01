import { HeaderPro } from "@/components/landing/header-pro";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import { LiaAtomSolid } from "react-icons/lia";


export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <div className="flex items-center">
        <LiaAtomSolid className="animate-spin mr-2 h-8 w-8" />
        <span className="hidden md:inline-flex items-center text-lg font-bold tracking-tight text-black dark:text-white">
          Shadify UI
        </span>
      </div>
    ),
  },
  links: [
    {
      text: "Templates",
      url: "/templates",
    },
    {
      text: "Patterns",
      url: "/patterns",
    },
    {
      text: "Pricing",
      url: "/pricing",
    },
    {
      type: "custom",
      children: <HeaderPro />,
    },
  ],
};


export const baseOptions2: BaseLayoutProps = {
  nav: {
    title: (
      <div className="flex items-center">
        <LiaAtomSolid className="animate-spin mr-2 h-8 w-8" />
        <span className="hidden md:inline-flex items-center text-lg font-bold tracking-tight text-black dark:text-white">
          Shadify UI
        </span>
      </div>
    ),
  },
  links: [
    {
      type: "custom",
      children: <HeaderPro />,
    },
  ],
};
