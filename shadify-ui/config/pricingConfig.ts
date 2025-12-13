
interface PricingConfig {
    id: string,
    plan: string,
    planDescription?: string,
    subscription_amount: string,
    save_price?: string,
    save_price_value?: string,
    features: string[],
    butttonContent?: string,
    popular?: boolean
}
export const webComponentsPricingConfig: PricingConfig[] = [
  {
    id: 'monthly-access',        
    plan: 'Monthly Access',
    planDescription: "Unlock all premium web and mobile components. Access all templates, advanced themes, and regular updates building high-quality apps.",
    subscription_amount: '99',
    save_price: "Save 20% with monthly plan",
    save_price_value: "149",
    features: [
        'Access to 60+ Component Blocks — Create beautiful websites with premium components',
        'Access to 12+ Templates — Speed up landing page creation with hassle-free editing',
        '1 year of updates and new features',
        'Copy prompt for all Component Blocks that work well with Lovable, Bolt, V0 and other popular frameworks',
        'Access to private Discord community for support and collaboration',
        '48 hours turnaround time for dedicated support',
        'Copy and paste, no complexity',
        'Built with Next.js, React, TypeScript, Tailwind CSS and Framer Motion',
        'Ready-to-use components that save development time',
    ],
    butttonContent : "Try for Free",
    popular: false
  },
  {
    id: 'anual-access',
    plan: 'Annual Access',
    save_price: "Save 30% with annual plan",
    planDescription: "Unlock all premium web and mobile components. Access all templates, advanced themes, and regular updates building high-quality apps.",
    subscription_amount: '199',
    save_price_value: "249",
    features: [
        'Access to 60+ Component Blocks — Create beautiful websites with premium components',
        'Access to 12+ Templates — Speed up landing page creation with hassle-free editing',
        '1 year of updates and new features',
        'Copy prompt for all Component Blocks that work well with Lovable, Bolt, V0 and other popular frameworks',
        'Access to private Discord community for support and collaboration',
        '48 hours turnaround time for dedicated support',
        'Copy and paste, no complexity',
        'Built with Next.js, React, TypeScript, Tailwind CSS and Framer Motion',
        'Ready-to-use components that save development time',
        'Fully responsive and customizable components',
        'Cancel subscription anytime'
    ],
    butttonContent: "Get premium",
    popular: true
  },
{   
    id: 'lifetime-access',
    plan: 'Lifetime Access',
    planDescription: "Get everything in Pro plus team collaboration, private access, and priority support. Perfect for companies for building",
    subscription_amount: '299',
    save_price: "Best Value - One-time payment",
    save_price_value: "499",
    features: [
      'Access to 60+ Component Blocks — Create beautiful websites with premium components',
      'Access to 12+ Templates — Speed up landing page creation with hassle-free editing',
      'Lifetime updates for all templates and Component Blocks',
      'Lifetime access to all new templates and Component Blocks as they\'re released',
      'Access to private Discord community for support and collaboration',
      '48 hours turnaround time for dedicated support',
      'Copy prompt for all Component Blocks that work well with Lovable, Bolt, V0 and other popular frameworks',
      'Copy and paste, no complexity',
      'Built with Next.js, React, TypeScript, Tailwind CSS and Framer Motion',
      'Ready-to-use components that save development time'
    ],
    butttonContent: "Unlock the dreams",
    popular: false
  },
  {   
    id: 'team-access',
    plan: 'Team Access | Custom Pricing',
    planDescription: "Get everything in Pro plus team collaboration, private access, and priority support. Perfect for companies for building",
    subscription_amount: '599',
    save_price_value: "999",
    save_price: "Contact us for custom pricing",
    features: [
      '10 team members',
      'Access to 60+ Component Blocks — Create beautiful websites with premium components',
      'Access to 12+ Templates — Speed up landing page creation with hassle-free editing',
      'Lifetime updates for all templates and Component Blocks',
      'Lifetime access to all new templates and Component Blocks as they\'re released',
      'Access to private Discord community for support and collaboration',
      '48 hours turnaround time for dedicated support',
      'Copy prompt for all Component Blocks that work well with Lovable, Bolt, V0 and other popular frameworks',
      'Copy and paste, no complexity',
      'Built with Next.js, React, TypeScript, Tailwind CSS and Framer Motion',
      'Ready-to-use components that save development time'
    ],
    butttonContent: "Unlock the dreams",
    popular: false
  }
]


export const mobileUIElementsPricingConfig: PricingConfig[] = [
  {
    id: 'monthly-access',        
    plan: 'Monthly Access',
    planDescription: "Unlock all premium mobile UI components. Access cross-platform templates, native patterns, and regular updates for building high-quality apps.",
    subscription_amount: '99',
    save_price: "Save 20% with monthly plan",
    save_price_value: "149",
    features: [
        'Access to 60+ Mobile UI Blocks — Native-ready components for React Native, Expo, and Flutter',
        'Access to 12+ Mobile Templates — Speed up app launches with fully-built screens (auth, onboarding, settings)',
        '1 year of updates and new mobile patterns and components',
        'Copy/paste-ready code samples for React Native, Expo and Flutter with TypeScript examples',
        'Access to private Discord community for support and collaboration',
        '48 hours turnaround time for dedicated support',
        'Mobile-first accessibility, optimized touch targets, and platform-aware components',
        'Built with React Native, Expo, TypeScript, Nativewind/Tailwind for RN and Reanimated',
        'Ready-to-use components and screens that speed mobile product development',
    ],
    butttonContent : "Try for Free",
    popular: false
  },
  {
    id: 'anual-access',
    plan: 'Annual Access',
    save_price: "Save 30% with annual plan",
    planDescription: "Full year access to our mobile UI library — handle common mobile patterns and platform-specific UX with ready-made components.",
    subscription_amount: '199',
    save_price_value: "249",
    features: [
        'Access to 60+ Mobile UI Blocks — Lists, forms, navigation bars, drawers, bottom tabs, headers and cards with native behavior',
        'Access to 12+ Full mobile templates — Onboarding, e-commerce, social feed, dashboard, profile and settings',
        '12 months of updates plus new mobile design patterns',
        'Copy/paste prompts & examples for React Native, Expo, SwiftUI, and Jetpack Compose',
        'Access to private Discord community for support and collaboration',
        '48 hours turnaround time for dedicated support',
        'Copy and paste, no complexity',
        'Built for mobile: React Native, Nativewind (Tailwind for RN), Reanimated, Expo, and TypeScript',
        'Platform-aware components with iOS and Android variants and theming',
        'Ready-to-use mobile screens that save significant development time',
        'Fully responsive and customizable components',
        'Cancel subscription anytime'
    ],
    butttonContent: "Get premium",
    popular: true
  },
{   
    id: 'lifetime-access',
    plan: 'Lifetime Access',
    planDescription: "A one-time purchase that includes lifetime updates for all mobile UI blocks and templates. Ideal for teams and long-term projects.",
    subscription_amount: '299',
    save_price: "Best Value - One-time payment",
    save_price_value: "499",
    features: [
      'Access to 60+ Mobile UI Blocks — All components and widgets for building native-feeling apps',
      'Access to 12+ Mobile Templates — Production-ready screens and flows for mobile apps',
      'Lifetime updates for mobile UI blocks and templates',
      'Lifetime access to all new mobile templates and components as they are released',
      'Access to private Discord community for support and collaboration',
      '48 hours turnaround time for dedicated support',
      'Examples and prompts for cross-platform usage: React Native / Expo, SwiftUI, Jetpack Compose',
      'Copy and paste, no complexity',
      'Built for mobile stacks: React Native, Expo, TypeScript, Nativewind, and Reanimated',
      'Ready-to-use mobile UI patterns that save significant development time'
    ],
    butttonContent: "Unlock the dreams",
    popular: false
  },
  {   
    id: 'team-access',
    plan: 'Team Access | Custom Pricing',
    planDescription: "Team and enterprise plan — includes private repositories, priority support, and collaboration-friendly licensing for mobile products.",
    subscription_amount: '599',
    save_price_value: "999",
    save_price: "Contact us for custom pricing",
    features: [
      '10 team members included with collaborative access and shared licenses',
      'Access to 60+ Mobile UI Blocks — Teams can use components across multiple apps',
      'Access to 12+ Mobile templates for common app flows, optimized for production',
      'Lifetime updates, enterprise feature flags, and priority support',
      'Private asset access, Figma/Sketch design tokens, and code samples for mobile stacks',
      '48 hours or faster turnaround for enterprise support and onboarding',
      'Cross-platform guidance for React Native, Expo, SwiftUI, and Jetpack Compose',
      'Copy and paste, no complexity',
      'Built with mobile-first tooling: React Native, Expo, TypeScript, Nativewind, and Reanimated',
      'Ready-to-use mobile screens and components that save development time for teams'
    ],
    butttonContent: "Unlock the dreams",
    popular: false
  }
]


export const designsUIKitsPricingConfig: PricingConfig[] = [
  {
    id: 'monthly-access',
    plan: 'Designer Monthly',
    planDescription: 'Monthly access to our full designs UI kit with Figma files, web/mobile screens, icons and prototype flows.',
    subscription_amount: '49',
    save_price: 'Save 10% with monthly plan',
    save_price_value: '65',
    features: [
      'Access to 40+ ready-to-use UI screens for web and mobile — dashboards, e-commerce, auth flows',
      'Figma & Sketch design files, components and shared design tokens',
      'Responsive variants (mobile, tablet, desktop) with auto-layout ready components',
      '40+ curated icons, Lottie animations & vector illustrations included',
      'Design-to-code handoff examples and CSS/React snippets',
      'Regular monthly updates and new pattern additions',
      'Private Discord access and community support',
      '48 hours turnaround for support and bug fixes',
      'Commercial license for single product use (non-exclusive)'
    ],
    butttonContent: 'Try for Free',
    popular: false
  },
  {
    id: 'anual-access',
    plan: 'Designer Annual',
    save_price: 'Save 25% with annual plan',
    planDescription: 'Annual access to the full design kit with priority updates, advanced templates and commercial-use licensing for agencies and teams.',
    subscription_amount: '299',
    save_price_value: '399',
    features: [
      'Access to 80+ UI screens covering web & mobile product needs',
      'Complete Figma & Sketch libraries with component variants, auto-layout, and design tokens',
      'Prototype-ready flows for onboarding, checkout, and onboarding',
      'Figma plugin integration + One-click export for developer handoff',
      'Premium asset packs: icons, Lottie, vector illustrations',
      '12 months of updates and new templates',
      'Priority community support and dedicated Slack/Discord channel',
      'Commercial license for unlimited products in the team'
    ],
    butttonContent: 'Get premium',
    popular: true
  },
  {
    id: 'lifetime-access',
    plan: 'Lifetime Design Kit',
    planDescription: 'One-time purchase for lifetime access to all current and future design kit releases, perfect for agencies and freelancers.',
    subscription_amount: '699',
    save_price: 'Best Value - One-time payment',
    save_price_value: '999',
    features: [
      'Lifetime access to all design assets: Figma, Sketch, and source files',
      'All templates, UI screens, icons, Lottie animations, and premium illustrations',
      'Lifetime updates and new templates as they are released',
      'Extended commercial license for unlimited client projects',
      'Design tokens and export tool support for developer handoff',
      'Priority support and 1:1 setup call for your first project',
      'Dedicated Figma library setup files for teams'
    ],
    butttonContent: 'Buy Lifetime',
    popular: false
  },
]


export const BgPatternsPricingConfig: PricingConfig[] = [
  {
    id: 'free',
    plan: 'Free',
    planDescription: 'Free access to a small selection of background patterns for personal and non-commercial projects.',
    subscription_amount: '0',
    features: [
      'Access to 10 free background patterns (SVG/PNG)',
      'Low-res and web-optimized downloads',
      'Community support via Discord',
      'Personal and non-commercial use only',
      'Limited customizations and color overrides'
      
    ],
    butttonContent: 'Download Free',
    popular: false
  },
  {
    id: 'lifetime-access',
    plan: 'Lifetime Access',
    planDescription: 'One-time purchase for lifetime access to our full collection of background patterns, including commercial use and high-res assets.',
    subscription_amount: '49',
    save_price: 'Best Value - One-time payment',
    save_price_value: '79',
    features: [
      'Full access to 200+ background patterns (SVG/PNG/Vector)',
      'High-resolution and print-ready assets',
      'Figma and PSD sources for easier editing',
      'Commercial license for unlimited projects',
      'Priority support and pattern customization assistance',
      'Future pattern releases included'
    ],
    butttonContent: 'Buy Lifetime',
    popular: true
  }
]