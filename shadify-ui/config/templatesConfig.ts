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
export const templatesCofig: TemplateConfigItem[] = [
    {
        id: "45472ddk1",
        projectName: "PortfoliX",
        projectDescription: "PortfoliX is a sleek and modern portfolio template designed for developers, designers, and freelancers who want to make a strong first impression. It features smooth animations, responsive layouts, and fully modular components, making it easy to customize and launch within minutes.",
        projectPrize: "$59",
        projectLiveURL: "https://portfolix-two.vercel.app/",
        projectImages: [
            "https://res.cloudinary.com/dou5rypdf/image/upload/v1760680064/IMG-20251008-WA0005_or6ssp.jpg",
            "https://res.cloudinary.com/dou5rypdf/image/upload/v1760680072/IMG-20251009-WA0001_idp5je.jpg",
            "https://res.cloudinary.com/dou5rypdf/image/upload/v1760680069/IMG-20251008-WA0014_nvytkt.jpg",
            "https://res.cloudinary.com/dou5rypdf/image/upload/v1760680066/IMG-20251008-WA0008_soukzh.jpg",
            "https://res.cloudinary.com/dou5rypdf/image/upload/v1760680064/IMG-20251008-WA0004_pa5yam.jpg",
        ],
        projectTechStack: [
          {name: "React.JS", favIcon: RiNextjsFill},
          {name:"Next.Js", favIcon: RiRemixRunLine},
          {name: "Framer Motion", favIcon: TbBrandFramerMotion},
          {name: "Tailwind Css", favIcon: TbBrandReactNative}
        ],
        projectFeatures: [
            {
                feature: "Fully Responsive Design",
                aboutFeature: "Seamlessly adapts to all screen sizes — from mobile to ultra-wide monitors, ensuring a consistent and professional experience across devices."
              },
              {
                feature: "SEO Optimized Structure",
                aboutFeature: "Clean semantic HTML, optimized meta tags, and fast load times to boost search visibility and improve discoverability."
              },
              {
                feature: "Smooth Framer Motion Animations",
                aboutFeature: "Modern, polished transitions and interactive hover effects that enhance presentation without overwhelming the content."
              },
              {
                feature: "Modular & Reusable Components",
                aboutFeature: "Built with scalable architecture, allowing easy customization and extension without touching core logic."
              },
              {
                feature: "Dark & Light Mode Support",
                aboutFeature: "Automatic theme switching with full contrast and accessibility compliance for both aesthetic and usability needs."
              },
              {
                feature: "Performance First Approach",
                aboutFeature: "Optimized for speed with lazy loading, image compression, and minimal rendering overhead."
              }
        ]
    },
    {
        id: "45472ddk2",
        projectName: "Developer Portfolio",
        projectDescription: "Developer Portfolio is a clean and professional portfolio template crafted specifically for developers and tech creators. With elegant animations, flexible layouts, and component-based structure, it allows you to showcase your skills, projects, and experience effortlessly. Fast to deploy and easy to customize — perfect for building a strong personal brand.",
        projectPrize: "$49",
        projectLiveURL: "https://portfolio-templete-five.vercel.app/",
        projectImages: [
            "https://res.cloudinary.com/dou5rypdf/image/upload/v1760680174/Screenshot_2025-08-03_230537_f6popm.png",
            "https://res.cloudinary.com/dou5rypdf/image/upload/v1760680174/Screenshot_2025-08-03_230551_eaoo8h.png",
            "https://res.cloudinary.com/dou5rypdf/image/upload/v1760680176/Screenshot_2025-08-03_230628_kaubay.png",
            "https://res.cloudinary.com/dou5rypdf/image/upload/v1760680176/Screenshot_2025-08-03_230628_kaubay.png",
            "https://res.cloudinary.com/dou5rypdf/image/upload/v1760680175/Screenshot_2025-08-03_230607_zrhqwo.png",
        ],
        projectTechStack: [
            {
                techStack: [
                    {name: "React.JS", favIcon: RiNextjsFill},
                    {name:"Next.Js", favIcon: RiRemixRunLine},
                    {name: "Framer Motion", favIcon: TbBrandFramerMotion},
                    {name: "Tailwind Css", favIcon: TbBrandReactNative}
                ]

            }
        ],
        projectFeatures: [
            {
                feature: "Fully Responsive Design",
                aboutFeature: "Seamlessly adapts to all screen sizes — from mobile to ultra-wide monitors, ensuring a consistent and professional experience across devices."
              },
              {
                feature: "SEO Optimized Structure",
                aboutFeature: "Clean semantic HTML, optimized meta tags, and fast load times to boost search visibility and improve discoverability."
              },
              {
                feature: "Smooth Framer Motion Animations",
                aboutFeature: "Modern, polished transitions and interactive hover effects that enhance presentation without overwhelming the content."
              },
              {
                feature: "Modular & Reusable Components",
                aboutFeature: "Built with scalable architecture, allowing easy customization and extension without touching core logic."
              },
              {
                feature: "Dark & Light Mode Support",
                aboutFeature: "Automatic theme switching with full contrast and accessibility compliance for both aesthetic and usability needs."
              },
              {
                feature: "Performance First Approach",
                aboutFeature: "Optimized for speed with lazy loading, image compression, and minimal rendering overhead."
              }
        ]
    },
    {
        id: "45472ddk3",
        projectName: "Agency Templete PrimeDeck",
        projectDescription: "PrimeDeck is a high-converting agency template crafted for digital agencies, SaaS startups, and service-based businesses. With clean layouts, bold typography, and strategic call-to-action sections, it helps you showcase services, portfolio, testimonials, and case studies in a compelling way. Optimized for performance, SEO, and lead generation, PrimeDeck is your perfect launchpad for client acquisition.",
        projectPrize: "$89",
        projectLiveURL: "https://start-up-seven-iota.vercel.app/",
        projectImages: [
            "https://res.cloudinary.com/dou5rypdf/image/upload/v1760680289/Screenshot_2025-08-14_010058_yrysyt.png",
            "https://res.cloudinary.com/dou5rypdf/image/upload/v1760680291/Screenshot_2025-08-14_010237_wdqhot.png",
            "https://res.cloudinary.com/dou5rypdf/image/upload/v1760680293/Screenshot_2025-08-16_010758_qd8adh.png",
            "https://res.cloudinary.com/dou5rypdf/image/upload/v1760680295/Screenshot_2025-08-16_010838_ds4k0j.png",
            "https://res.cloudinary.com/dou5rypdf/image/upload/v1760680291/Screenshot_2025-08-14_010221_gfq5nj.png",
            "https://res.cloudinary.com/dou5rypdf/image/upload/v1760680295/Screenshot_2025-08-16_010838_ds4k0j.png",
        ],
        projectTechStack: [
            {
                techStack: [
                    {name: "React.JS", favIcon: RiNextjsFill},
                    {name:"Next.Js", favIcon: RiRemixRunLine},
                    {name: "Framer Motion", favIcon: TbBrandFramerMotion},
                    {name: "Tailwind Css", favIcon: TbBrandReactNative},
                    {name: "Clerk Authentication", favIcon: SiClerk},
                    {name: "ShadcnUI", favIcon: SiShadcnui}


                ]

            }
        ],
        projectFeatures: [
            {
                feature: "Fully Responsive Design",
                aboutFeature: "Seamlessly adapts to all screen sizes — from mobile to ultra-wide monitors, ensuring a consistent and professional experience across devices."
              },
              {
                feature: "SEO Optimized Structure",
                aboutFeature: "Clean semantic HTML, optimized meta tags, and fast load times to boost search visibility and improve discoverability."
              },
              {
                feature: "Modular & Reusable Components",
                aboutFeature: "Built with scalable architecture, allowing easy customization and extension without touching core logic."
              },
              {
                feature: "Multi-Page Ready",
                aboutFeature: "Comes with essential pre-built pages like Home, Services, About, Projects, Contact, and more — fully structured for scalability."
              },
              {
                feature: "Built-in 404 Error Page",
                aboutFeature: "Custom-designed 404 page to maintain branding even on broken routes and enhance user experience."
              },
              {
                feature: "Clerk Authentication Integration",
                aboutFeature: "Secure and modern authentication system ready out-of-the-box with login, signup, and user session handling."
              },
              {
                feature: "Dark & Light Mode Support",
                aboutFeature: "Automatic theme switching with full contrast and accessibility compliance for both aesthetic and usability needs."
              },
              {
                feature: "Performance First Approach",
                aboutFeature: "Optimized for speed with lazy loading, image compression, and minimal rendering overhead."
              },
              {
                feature: "Pixel-Perfect UI",
                aboutFeature: "Designed with modern aesthetics using Tailwind and Framer Motion — delivering a premium feel with smooth animations and spacing precision."
              }
        ]
    },
    {
        id: "45472ddk4",
        projectName: "Car Faver",
        projectDescription: "Car Faver is a modern and high-performance template designed specifically for car dealerships, rental agencies, and automotive marketplaces. It features sleek car listing layouts, powerful filtering options, and dedicated pages for vehicle details — making it easy for customers to browse, compare, and book their ideal ride. With responsive design, fast performance, and a conversion-focused UI, Car Faver helps auto businesses showcase their fleet and generate leads effortlessly.",
        projectPrize: "$49",
        projectLiveURL: "https://portfolix-two.vercel.app/",
        projectImages: [
            "https://res.cloudinary.com/dou5rypdf/image/upload/v1760679897/Screenshot_2025-10-05_232843_adf5i5.png",
            "https://res.cloudinary.com/dou5rypdf/image/upload/v1760679897/Screenshot_2025-10-05_232854_fxtomv.png",
            "https://res.cloudinary.com/dou5rypdf/image/upload/v1760679897/Screenshot_2025-10-05_232906_lcpbt8.png",
            "https://res.cloudinary.com/dou5rypdf/image/upload/v1760679897/Screenshot_2025-10-05_232930_xv35ky.png",
            "https://res.cloudinary.com/dou5rypdf/image/upload/v1760679897/Screenshot_2025-10-05_232957_aze1xk.png",
        ],
        projectTechStack: [
            {
                techStack: [
                    {name: "React.JS", favIcon: RiNextjsFill},
                    {name:"Next.Js", favIcon: RiRemixRunLine},
                    {name: "Framer Motion", favIcon: TbBrandFramerMotion},
                    {name: "Tailwind Css", favIcon: TbBrandReactNative},
                    {name: "ShadcnUI", favIcon: SiShadcnui}

                ]

            }
        ],
        projectFeatures: [
            {
                feature: "Car Listing & Filtering System",
                aboutFeature: "Display available vehicles with search filters for brand, price, fuel type, transmission, and more — making browsing effortless for users."
              },
              {
                feature: "Rental & Purchase Flow",
                aboutFeature: "Supports both car rentals and direct purchase inquiries with clear call-to-action buttons like ‘Book Now’ or ‘Request Quote’."
              },
              {
                feature: "Detailed Vehicle Pages",
                aboutFeature: "Each car comes with its own page featuring specifications, image gallery, pricing breakdown, and contact options."
              },
              {
                feature: "Location & Availability Support",
                aboutFeature: "Show available cars based on pickup locations and availability dates — perfect for rental agencies."
              },
              {
                feature: "Responsive & Mobile-Ready",
                aboutFeature: "Optimized for customers browsing on phones, tablets, or desktops for an uninterrupted booking experience."
              },
              {
                feature: "Customer Testimonials & Reviews",
                aboutFeature: "Built-in section to showcase client feedback and credibility boosters for higher trust."
              },
              {
                feature: "Contact & Inquiry Forms",
                aboutFeature: "Pre-built contact form or direct WhatsApp/Call action buttons to convert leads quickly."
              },
              {
                feature: "Admin-Friendly Structure",
                aboutFeature: "Designed with scalable components for easy integration with CMS or databases in the future."
              },
              {
                feature: "Modern UI with Smooth Animations",
                aboutFeature: "Clean layout paired with premium transitions to give users a high-end dealership experience."
              }
        ]
    },
    {
        id: "45472ddk5",
        projectName: "Business Templete Grid Flow",
        projectDescription: "PortfoliX is a sleek and modern portfolio template designed for developers, designers, and freelancers who want to make a strong first impression. It features smooth animations, responsive layouts, and fully modular components, making it easy to customize and launch within minutes.",
        projectPrize: "$29",
        projectLiveURL: "https://portfolix-two.vercel.app/",
        projectImages: [
            "https://res.cloudinary.com/dou5rypdf/image/upload/v1760680064/IMG-20251008-WA0005_or6ssp.jpg",
            "https://res.cloudinary.com/dou5rypdf/image/upload/v1760680072/IMG-20251009-WA0001_idp5je.jpg",
            "https://res.cloudinary.com/dou5rypdf/image/upload/v1760680069/IMG-20251008-WA0014_nvytkt.jpg",
            "https://res.cloudinary.com/dou5rypdf/image/upload/v1760680066/IMG-20251008-WA0008_soukzh.jpg",
            "https://res.cloudinary.com/dou5rypdf/image/upload/v1760680064/IMG-20251008-WA0004_pa5yam.jpg",
        ],
        projectTechStack: [
            {
                techStack: [
                    {name: "React.JS", favIcon: RiNextjsFill},
                    {name:"Next.Js", favIcon: RiRemixRunLine},
                    {name: "Framer Motion", favIcon: TbBrandFramerMotion},
                    {name: "Tailwind Css", favIcon: TbBrandReactNative}
                ]

            }
        ],
        projectFeatures: [
            {
                feature: "Fully Responsive Design",
                aboutFeature: "Seamlessly adapts to all screen sizes — from mobile to ultra-wide monitors, ensuring a consistent and professional experience across devices."
              },
              {
                feature: "SEO Optimized Structure",
                aboutFeature: "Clean semantic HTML, optimized meta tags, and fast load times to boost search visibility and improve discoverability."
              },
              {
                feature: "Smooth Framer Motion Animations",
                aboutFeature: "Modern, polished transitions and interactive hover effects that enhance presentation without overwhelming the content."
              },
              {
                feature: "Modular & Reusable Components",
                aboutFeature: "Built with scalable architecture, allowing easy customization and extension without touching core logic."
              },
              {
                feature: "Dark & Light Mode Support",
                aboutFeature: "Automatic theme switching with full contrast and accessibility compliance for both aesthetic and usability needs."
              },
              {
                feature: "Performance First Approach",
                aboutFeature: "Optimized for speed with lazy loading, image compression, and minimal rendering overhead."
              }
        ]
    }
]
