
interface PricingConfig {
    id: string,
    plan: string,
    planDescription?: string,
    priceMonthly: string,
    priceYearly: string,
    features: string[],
    butttonContent?: string,
    popular?: boolean
}
export const pricingConfig: PricingConfig[] = [
  {
    id: 'basic',        
    plan: 'Basic Plan',
    planDescription: "In our free plan users can only use web components and some templates not mobile app templates and components",
    priceMonthly: '0',
    priceYearly: '0',
    features: [
        'Basic summary',
        '100 hours of transcription /month',
        'Speaker Basic in-call highlighting',
        'Standard support',
        '1TB of storage'
    ],
    butttonContent : "Try for Free",
    popular: false
  },
  {
    id: 'pro',
    plan: 'Pro Plan',
    planDescription: "Unlock all premium web and mobile components. Access all templates, advanced themes, and regular updates building high-quality apps.",

    priceMonthly: '24',
    priceYearly: '240',
    features: [
        'Basic summary',
        '100 hours of transcription /month',
        'Speaker identification',
        'Basic in-call highlighting',
        'Standard support',
        '1TB of storage'
    ],
    butttonContent: "Get premium",
    popular: true
  },
{   
    id: 'enterprise',
    plan: 'Enterprise Plan',
    planDescription: "Get everything in Pro plus team collaboration, private access, and priority support. Perfect for companies for building",
    priceMonthly: '299',
    priceYearly: '990',
    features: [
       ' Basic summary',
        '100 hours of transcription /month',
        'Speaker identification',
        'Basic in-call highlighting',
        'Standard support',
        '1TB of storage',
        'Team Collaboration',
        'Private NPM package or self-hosted access'
    ],
    butttonContent: "Unlock the dreams",
    popular: false
  }
]