import { PlusIcon } from 'lucide-react'

import * as AccordionPrimitive from '@radix-ui/react-accordion'
import { PiTerminalFill } from "react-icons/pi";

import { Accordion, AccordionContent, AccordionItem } from '@/components/ui/accordion'

const items = [
  {
    title: 'How do I track my order?',
    content: `You can track your order by logging into your account and visiting the "Orders" section. You'll receive tracking information via email once your order ships. For real-time updates, you can also use the tracking number provided in your shipping confirmation email.`
  },
  {
    title: 'What is your return policy?',
    content:
      'We offer a 30-day return policy for most items. Products must be unused and in their original packaging. To initiate a return, please contact our customer service team or use the return portal in your account dashboard.'
  },
  {
    title: 'How can I contact customer support?',
    content:
      'Our customer support team is available 24/7. You can reach us via live chat, email at support@example.com, or by phone at 1-800-123-4567. For faster service, please have your order number ready when contacting us.'
  },
  {
    title: 'Do you offer international shipping?',
    content:
      'Yes, we offer international shipping to most countries. Shipping costs and delivery times vary depending on the destination. You can view the available shipping options and costs during checkout.'
  },
  {
    title: 'Can I change or cancel my order?',
    content:
      'Order changes or cancellations are possible within a limited timeframe after purchase. Please contact our customer support team as soon as possible if you need to modify or cancel your order.'
  },
  {
    title: 'What payment methods do you accept?',
    content:
      'We accept major credit cards (Visa, MasterCard, American Express), PayPal, and other popular payment methods. All transactions are securely processed.'
  },

]

export const FAQ_A = () => {
  return (
    <Accordion type='single' collapsible className='w-full' defaultValue='item-1'>
        <div className='pb-3'>
            <h1 className='font-mono font-bold text-[16px] lg:text-xl relative -left-2'>General Questions Localhost.io</h1>
        </div>
      {items.map((item, index) => (
        <AccordionItem key={index} value={`item-${index + 1}`}>
          <AccordionPrimitive.Header className='flex items-center gap-2'>
            <span className='text-neutral-700 dark:text-neutral-300'><PiTerminalFill /></span>
            <AccordionPrimitive.Trigger
              data-slot='accordion-trigger'
              className='focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-center justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none  focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg]:rotate-180 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0'
            >
              {item.title}
              <PlusIcon className='text-muted-foreground pointer-events-none size-4 shrink-0 transition-transform duration-200' />
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          <AccordionContent className='text-muted-foreground'>{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}

export const FAQ_B = () => {
    return (
      <Accordion type='single' collapsible className='w-full'>
        <div className='pb-3'>
            <h1 className='font-mono font-bold text-[16px] lg:text-xl relative -left-2'>Support</h1>
        </div>
        {items.map((item, index) => (
          <AccordionItem key={index} value={`item-${index + 1}`}>
            <AccordionPrimitive.Header className='flex items-center gap-2'>
            <span className='text-neutral-700 dark:text-neutral-300'><PiTerminalFill /></span>
              <AccordionPrimitive.Trigger
                data-slot='accordion-trigger'
                className='focus-visible:border-ring focus-visible:ring-ring/50 flex flex-1 items-center justify-between gap-4 rounded-md py-4 text-left text-sm font-medium transition-all outline-none  focus-visible:ring-[3px] disabled:pointer-events-none disabled:opacity-50 [&>svg>path:last-child]:origin-center [&>svg>path:last-child]:transition-all [&>svg>path:last-child]:duration-200 [&[data-state=open]>svg]:rotate-180 [&[data-state=open]>svg>path:last-child]:rotate-90 [&[data-state=open]>svg>path:last-child]:opacity-0'
              >
                {item.title}
                <PlusIcon className='text-muted-foreground pointer-events-none size-4 shrink-0 transition-transform duration-200' />
              </AccordionPrimitive.Trigger>
            </AccordionPrimitive.Header>
            <AccordionContent className='text-muted-foreground'>{item.content}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    )
  }



export const PricingFAQ = () => {
    return (
        <div className='w-full h-full pt-8 lg:pt-20'>
            <div className='w-full mx-auto py-20 pb-5 flex flex-col items-center justify-center'>
                <h1 className='text-center font-sans font-bold text-2xl lg:text-4xl text-neutral-800 dark:text-neutral-200 pb-2'>Frequently Asked Questions about Lokalhost.io</h1>
                <p className='text-center font-sans font-medium text-sm text-neutral-700 dark:text-neutral-300'>Find answers to common questions about our services, features, and how Lokalhost.io can benefit you.</p>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-2 grid-cols-1 pt-16 px-6 gap-6 lg:gap-16'>
                <div>
                    <FAQ_A />
                </div>
                <div>
                    <FAQ_B />
                </div>
            </div>
        </div>
    )
} 