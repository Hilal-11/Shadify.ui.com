

interface ServiceConfig {
    service: string,
    navigateTo: string,

}
interface FooterConfigTypes {
    id: number | string
    service_title: string
    services: ServiceConfig[]
}


export const footerConfig: FooterConfigTypes[] = [
    {
        id: Math.floor(Math.random() * 1000),
        service_title: "Services",
        services: [
            { service: "Authentication", navigateTo: "/auth" },
            { service: "Authorization", navigateTo: "/auth/authorization" },
            { service: "Social Login", navigateTo: "/auth/social-login" },
            { service: "Password Reset", navigateTo: "/auth/password-reset" },
            { service: "Session Management", navigateTo: "/auth/sessions" },
            { service: "Two-Factor Auth", navigateTo: "/auth/2fa" },
            { service: "OAuth Integrations", navigateTo: "/auth/oauth" },
            { service: "Single Sign-On", navigateTo: "/auth/sso" },
            { service: "Passwordless Login", navigateTo: "/auth/passwordless" },
            { service: "SSO Providers", navigateTo: "/auth/sso-providers" },
            { service: "API Keys", navigateTo: "/auth/api-keys" },
            { service: "Device Management", navigateTo: "/auth/devices" },
            { service: "User Provisioning", navigateTo: "/auth/provisioning" },
            { service: "Session Revocation", navigateTo: "/auth/session-revoke" },
            { service: "Access Logs", navigateTo: "/auth/access-logs" },
            { service: "Rate Limiting", navigateTo: "/auth/rate-limits" },
        ] 
    },

    {
        id: Math.floor(Math.random() * 1000),
        service_title: "Pages",
        services: [
            { service: "Home", navigateTo: "/" },
            { service: "Docs", navigateTo: "/docs" },
            { service: "Components", navigateTo: "/about" },
            { service: "Templates", navigateTo: "/pricing" },
            { service: "Mobile Apps", navigateTo: "/docs" },
            { service: "Mobile UI Blocks", navigateTo: "/blog" },
            { service: "Design kits", navigateTo: "/designs" },
            { service: "Patterns", navigateTo: "/contact" },
            { service: "Team & About", navigateTo: "/team" },
            { service: "Pricing", navigateTo: "/pricing" },
            { service: "Contect Center", navigateTo: "/contact" },

        ] 
    },

    {
        id: Math.floor(Math.random() * 1000),
        service_title: "Web Components",
        services: [
           { service: "Button", navigateTo: "/components/button" },
            { service: "Card", navigateTo: "/components/card" },
            { service: "Modal", navigateTo: "/components/modal" },
            { service: "Tooltip", navigateTo: "/components/tooltip" },
            { service: "Avatar", navigateTo: "/components/avatar" },
            { service: "Input", navigateTo: "/components/input" },
            { service: "Dropdown", navigateTo: "/components/dropdown" },
            { service: "Toast", navigateTo: "/components/toast" },
            { service: "Badge", navigateTo: "/components/badge" },
            { service: "Checkbox", navigateTo: "/components/checkbox" },
            { service: "Switch", navigateTo: "/components/switch" },
            { service: "Tabs", navigateTo: "/components/tabs" },
            { service: "Accordion", navigateTo: "/components/accordion" },
            { service: "Progress", navigateTo: "/components/progress" },
            { service: "Spinner", navigateTo: "/components/spinner" },
            { service: "Pagination", navigateTo: "/components/pagination" },
            { service: "Select", navigateTo: "/components/select" },
            { service: "Date Picker", navigateTo: "/components/date-picker" },
        ] 
    },

    {
        id: Math.floor(Math.random() * 1000),
        service_title: "Web Templates",
        services: [
           { service: "Landing", navigateTo: "/templates/landing" },
            { service: "Dashboard", navigateTo: "/templates/dashboard" },
            { service: "E-commerce", navigateTo: "/templates/ecommerce" },
            { service: "Blog", navigateTo: "/templates/blog" },
            { service: "Portfolio", navigateTo: "/templates/portfolio" },
            { service: "SaaS", navigateTo: "/templates/saas" },
            { service: "Admin Panel", navigateTo: "/templates/admin" },
            { service: "Docs Site", navigateTo: "/templates/docs" },
            { service: "Marketing Site", navigateTo: "/templates/marketing" },
            { service: "SaaS Landing", navigateTo: "/templates/saas-landing" },
            { service: "Portfolio Pro", navigateTo: "/templates/portfolio-pro" },
            { service: "Restaurant", navigateTo: "/templates/restaurant" },
            { service: "E-commerce Pro", navigateTo: "/templates/ecommerce-pro" },
            { service: "Marketplace", navigateTo: "/templates/marketplace" },
            { service: "Support Portal", navigateTo: "/templates/support" },
            { service: "Admin Dashboard Pro", navigateTo: "/templates/admin-pro" },
            { service: "Checkout Flow", navigateTo: "/templates/checkout" },
            { service: "Auth Flow", navigateTo: "/templates/auth-flow" },
            { service: "Coming Soon", navigateTo: "/templates/coming-soon" },
        ] 
    },


    {
        id: Math.floor(Math.random() * 1000),
        service_title: "Mobile Apps",
        services: [
           { service: "Business App", navigateTo: "/mobile/business" },
            { service: "Health & Wellness", navigateTo: "/mobile/health" },
            { service: "Education / Learning", navigateTo: "/mobile/education" },
            { service: "E-commerce App", navigateTo: "/mobile/ecommerce" },
            { service: "Food Delivery", navigateTo: "/mobile/food-delivery" },
            { service: "Fitness Tracker", navigateTo: "/mobile/fitness" },
            { service: "Telemedicine", navigateTo: "/mobile/telemedicine" },
            { service: "Booking & Reservations", navigateTo: "/mobile/booking" },
            { service: "Social Network", navigateTo: "/mobile/social" },
            { service: "Chat & Messaging", navigateTo: "/mobile/chat" },
            { service: "Finance & Budget", navigateTo: "/mobile/finance" },
            { service: "Travel Guide", navigateTo: "/mobile/travel" },
            { service: "News Reader", navigateTo: "/mobile/news" },
            { service: "Music Streaming", navigateTo: "/mobile/music" },
            { service: "Podcast Player", navigateTo: "/mobile/podcast" },
            { service: "Event Ticketing", navigateTo: "/mobile/events" },
            { service: "Video Streaming", navigateTo: "/mobile/video" },
            { service: "Marketplace", navigateTo: "/mobile/marketplace" },
            { service: "Ride Sharing", navigateTo: "/mobile/rideshare" },
            { service: "Meditation & Mindfulness", navigateTo: "/mobile/meditation" },
            { service: "Real Estate", navigateTo: "/mobile/real-estate" },
            { service: "Grocery Delivery", navigateTo: "/mobile/grocery" },
            { service: "Loyalty & Rewards", navigateTo: "/mobile/loyalty" },
        ] 
    },



    {
        id: Math.floor(Math.random() * 1000),
        service_title: "Mobile UI Blocks",
        services: [
           { service: "Auth Form", navigateTo: "/blocks/auth-form" },
            { service: "Profile Card", navigateTo: "/blocks/profile-card" },
            { service: "Chat UI", navigateTo: "/blocks/chat-ui" },
            { service: "Feed Item", navigateTo: "/blocks/feed-item" },
            { service: "Settings List", navigateTo: "/blocks/settings-list" },
            { service: "Onboarding Steps", navigateTo: "/blocks/onboarding" },
            { service: "Bottom Sheet", navigateTo: "/blocks/bottom-sheet" },
            { service: "Floating Action", navigateTo: "/blocks/fab" },
            { service: "Tab Bar", navigateTo: "/blocks/tab-bar" },
            { service: "Notification Center", navigateTo: "/blocks/notification-center" },
            { service: "Search Bar", navigateTo: "/blocks/search-bar" },
            { service: "Carousel", navigateTo: "/blocks/carousel" },
            { service: "Form Elements", navigateTo: "/blocks/forms" },
            { service: "Ratings", navigateTo: "/blocks/ratings" },
            { service: "Empty State", navigateTo: "/blocks/empty-state" },
            { service: "Skeleton Loader", navigateTo: "/blocks/skeleton" },
            { service: "Bottom Navigation", navigateTo: "/blocks/bottom-navigation" },
            { service: "Segmented Control", navigateTo: "/blocks/segmented-control" },
            { service: "Media Player", navigateTo: "/blocks/media-player" },
            { service: "Settings Panel", navigateTo: "/blocks/settings-panel" },
        ] 
    },


    {
        id: Math.floor(Math.random() * 1000),
        service_title: "Web/Mobile UI Patterns",
        services: [
            { service: "Gradient Waves", navigateTo: "/patterns/gradient-waves" },
            { service: "Diagonal Stripes", navigateTo: "/patterns/diagonal-stripes" },
            { service: "Mesh Grid", navigateTo: "/patterns/mesh-grid" },
            { service: "Dot Matrix", navigateTo: "/patterns/dot-matrix" },
            { service: "Noise Texture", navigateTo: "/patterns/noise-texture" },
            { service: "Halftone", navigateTo: "/patterns/halftone" },
            { service: "Blurred Blobs", navigateTo: "/patterns/blurred-blobs" },
            { service: "Radial Burst", navigateTo: "/patterns/radial-burst" },
            { service: "Linear Gradient", navigateTo: "/patterns/linear-gradient" },
            { service: "Conic Gradient", navigateTo: "/patterns/conic-gradient" },
            { service: "Subtle Checker", navigateTo: "/patterns/subtle-checker" },
            { service: "Wavy Lines", navigateTo: "/patterns/wavy-lines" },
            { service: "Isometric Grid", navigateTo: "/patterns/isometric-grid" },
            { service: "Hex Tile", navigateTo: "/patterns/hex-tile" },
            { service: "Crosshatch", navigateTo: "/patterns/crosshatch" },
            { service: "Paper Texture", navigateTo: "/patterns/paper-texture" },
            { service: "Speckled Dust", navigateTo: "/patterns/speckled-dust" },
            { service: "Glass Frosted", navigateTo: "/patterns/glass-frosted" },
            { service: "Gradient Noise", navigateTo: "/patterns/gradient-noise" },
            { service: "Retro Lines", navigateTo: "/patterns/retro-lines" },
            { service: "Fluid Gradient", navigateTo: "/patterns/fluid-gradient" },
            { service: "Micro Dots", navigateTo: "/patterns/micro-dots" },
            { service: "Organic Shapes", navigateTo: "/patterns/organic-shapes" },
        ] 
    },

]

interface SocialLinks {
    id: number | string,
    social: string,
    socialIcon?: string,
    link: string,
}

export const socialLinks: SocialLinks[] = [
    {
        id: 1,
        social: "Github",
        socialIcon: "",
        link: "https://github.com/hilal-11"
    },
    {
        id: 2,
        social: "X",
        socialIcon: "",
        link: "https://github.com/hilal-11"
    },
    {
        id: 3,
        social: "Instagram",
        socialIcon: "",
        link: "https://github.com/hilal-11"
    },
    {
        id: 4,
        social: "Discord",
        socialIcon: "",
        link: "https://github.com/hilal-11"
    },
]