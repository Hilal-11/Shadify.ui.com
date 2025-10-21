import { RiNextjsFill  , RiTailwindCssFill } from "react-icons/ri";
import { SiShadcnui } from "react-icons/si";
import { RiRemixRunLine } from "react-icons/ri";
import { TbBrandFramerMotion } from "react-icons/tb";
import { TbBrandReactNative } from "react-icons/tb";
import { SiClerk } from "react-icons/si";
interface Tech {
    name: string;
    favIcon: React.ComponentType; // or React.ComponentType if using other icon libs
  }
  
  interface ProjectFeature {
    feature: string;
    aboutFeature: string;
  }
  
  interface TemplateConfigItem {
    id: string;
    projectName: string;
    projectDescription: string;
    projectPrize: string;
    projectLiveURL: string;
    projectImages: string[];
    projectTechStack: {
      techStack: Tech[];
    }[];
    projectFeatures: ProjectFeature[];
  }

export const templatesNames = [
    {
        templateId: "1",
        templateName: "PortfoliX",
        disabled: false
    },
    {
        templateId: "2",
        templateName: "Developer Portfolio",
        disabled: false
    },
    {
        templateId: "3",
        templateName: "Agency Templete PrimeDeck",
        disabled: false
    },
    {
        templateId: "4",
        templateName: "Car Faver Agency",
        disabled: false
    },{
        templateId: "5",
        templateName: "Business Templete Grid Flow",
        disabled: false
    },
    { templateId: "6", templateName: "Startup Launchpad", disabled: true },
    { templateId: "7", templateName: "SaaS Dashboard Pro", disabled: true },
    { templateId: "8", templateName: "E-Commerce Hub", disabled: true },
    { templateId: "9", templateName: "Creative Studio", disabled: true },
    { templateId: "10", templateName: "Portfolio Minimal", disabled: true },
    { templateId: "11", templateName: "Blogify Pro", disabled: true },
    { templateId: "12", templateName: "Event & Conference", disabled: true },
    { templateId: "13", templateName: "Fitness & Gym", disabled: true },
    { templateId: "14", templateName: "Restaurant & Cafe", disabled: true },
    { templateId: "15", templateName: "Photography Portfolio", disabled: true },
    { templateId: "16", templateName: "Travel & Adventure", disabled: true },
    { templateId: "17", templateName: "Education & Courses", disabled: true },
    { templateId: "18", templateName: "Real Estate Listings", disabled: true },

]