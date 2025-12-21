"use client";
import { FaqConfig } from '@/config/FaqConfig';
import {Accordion, AccordionItem} from "@heroui/accordion";
export const dynamic = 'force-static';
function FAQ() {
  return (
    <div className='z-50 !important relative '>
        <div className='mx-auto pt-20 '>
             <h1 className='text-center lg:text-6xl text-4xl font-sans font-bold'>Frequently asked questions</h1>
        </div>
    <div className='my-10 lg:my-20 w-full container mx-auto md:max-w-[80%] lg:max-w-[70%] font-sans font-medium space-y-4 grid lg:grid-cols-3 grid-cols-1 justify-between'>
    <div className='col-span-3'>
    <Accordion variant="splitted" className="px-0 !important ">
        {
            FaqConfig.map((FAQ) => (
                <AccordionItem className='font-sans font-medium space-y-2 bg-white py-[6px]  rounded-xl shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] h-auto dark:bg-gradient-to-t dark:bg-neutral-900' key={FAQ.id} aria-label={FAQ.question} title={FAQ.question}>
                    <p className='font-sans text-[16px] lg:text-[16px]'>{FAQ.description}</p>
                </AccordionItem> 
            ))
        }
    </Accordion>
    </div>
    
    </div>
    </div>
  )
}

export default FAQ