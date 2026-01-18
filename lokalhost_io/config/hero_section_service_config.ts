


// Features config
interface IFeatureType {
    button_name: string,
    button_link: string
}

interface IFeatures {
    feature_id: string
    feature: string
    feature_about: string
    feature_about_2?: string
    feature_about_3?: string
    feature_links?: string
    feature_buttons?: IServiceType[]
}

export const FEATURES_BENTO_CONFIG: IFeatures[] = [
    {
        feature_id: "lokalhost_io",
        feature: "Lokalhost.io",
        feature_about: "The lokalhost.io is a modern template market place, creative design ui kits, Component library, pre-built functional components, authentication kits for SASS, Mobile application blocks and mobile apps for cross-platform [React-native and Flutter]. lokalhost.io provides the funational, modern assets for developing a modern web apps and mobile apps.",
        // rotating circulat tech stack 
    },
    {
        feature_id: "desig-mocro",
        feature: "Modern UI/UX with Micro-Intractions",
        feature_about: "Lokalhost.io focus on modern web and mobile technologies, crafting a feuristic web and mobile experiances.",
        feature_about_2: "Work with web technologies Next.Js | React.Js |  | Motion | Gsap | Three.Js",
        feature_about_3: "lokalhost.io with cross-patform mobile devs technologies React Native | Expo | Flutter | Motion | Gsap | Animate.Js",
        feature_buttons: [{ button_name: "Lets start", button_link: "/docs"},{ button_name: "Get Templates Free", button_link: "/templates"}]
    },
    {
        feature_id: "prouction",
        feature: "Production Ready | Easy to ship",
        feature_about: "Lokalhost.io focus on modern web and mobile technologies, crafting a feuristic web and mobile experiances.",
        feature_about_2: "Work with web technologies Next.Js | React.Js |  | Motion | Gsap | Three.Js",
        feature_about_3: "lokalhost.io with cross-patform mobile devs technologies React Native | Expo | Flutter | Motion | Gsap | Animate.Js",
    },
]


interface IServiceType {
    button_name: string,
    button_link: string
}
interface IHeroSectionSevice {
    id: string | number
    sercice_name: string,
    service_disc: string,
    service_link: string,
    service_light_image: string,
    service_dark_image: string,
    service_buttons: IServiceType[]
}

export const heroServiceContent: IHeroSectionSevice[] = [
    {
        id: "WebComponents",
       sercice_name: "Web Components",
        service_disc: "Explore the production ready components for React and Next.Js apps.",
        service_link: "/docs",
        service_light_image: "https://res.cloudinary.com/dou5rypdf/image/upload/v1767728958/image_comp_vzgzhv.png",
        service_dark_image  : "https://res.cloudinary.com/dou5rypdf/image/upload/v1767732075/image_comp_dark_xwdxwb.png",
        service_buttons: [
            {
                button_name: "Start Building",
                button_link: "/docs",
            },
            {
                button_name: "Components",
                button_link: "/docs",
            },
        ]
    },
   {
    id: "WebTemplates",
       sercice_name: "Web Templates",
        service_disc: "Explore the production ready components for React and Next.Js apps.",
        service_link: "/templates",
        service_light_image: "https://res.cloudinary.com/dou5rypdf/image/upload/v1767729440/image_templat_r9b3hs.png",
        service_dark_image  : "https://res.cloudinary.com/dou5rypdf/image/upload/v1767730724/image_temp_dark2_bkl2f6.png",
        service_buttons: [
            {
                button_name: "Explore Templates",
                button_link: "/templates",
            },
            {
                button_name: "Free Templates",
                button_link: "/templates",
            },
        ]
    },
    {
        id: "MobileUIElements",
       sercice_name: "Mobile UI Elements",
        service_disc: "Explore the production ready components for React and Next.Js apps.",
        service_link: "/",
        service_light_image: "https://res.cloudinary.com/dou5rypdf/image/upload/v1767729440/image_mob_w4f6v3.png",
        service_dark_image  : "https://res.cloudinary.com/dou5rypdf/image/upload/v1767732075/image_mob_dark_t4wia5.png",
        service_buttons: [
            {
                button_name: "Building Apps",
                button_link: "apps",
            },
            {
                button_name: "Mobile Elements",
                button_link: "/xyz",
            },
        ]
    },
    {
        id: "Designs",
       sercice_name: "Designs and Figma Kits",
        service_disc: "Explore the production ready components for React and Next.Js apps.",
        service_link: "/designs",
        service_light_image: "https://res.cloudinary.com/dou5rypdf/image/upload/v1767729440/image_design_xo7czm.png",
        service_dark_image  : "https://res.cloudinary.com/dou5rypdf/image/upload/v1767732075/image_mob_dark_t4wia5.png",
        service_buttons: [
            {
                button_name: "Design Kits",
                button_link: "/designs",
            },
            {
                button_name: "Explore Free",
                button_link: "/designs",
            },
        ]
    },
]


