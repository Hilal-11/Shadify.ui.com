import { FaqConfig } from '@/config/FAQconfig';
import {Accordion, AccordionItem} from "@heroui/accordion";
function FAQ() {
  return (
    <div className=''>
        <div className='mx-auto space-y-6'>
             <h1 className='text-center lg:text-7xl text-4xl Inter-bold'>Frequently asked questions</h1>
            <p className='text-center text-lg Inter-medium px-3 lg:w-1/2 mx-auto'>We are here to help you with any questions you may have. If you dont find what you need, please contact us at Find Some quick answers to the most common questions.<br /><a className='text-slate-950 dark:text-zinc-100 Inter-bold underline' href="/">hellocodedev404.com</a></p>
        </div>
    <div className='my-10 lg:my-20 w-full px-4 container mx-auto lg:max-w-[60%] Inter-medium space-y-4 grid lg:grid-cols-3 grid-cols-1 justify-between'>
    <div className='col-span-3'>
    <Accordion variant="splitted" className="" showDivider={false}>
        {
            FaqConfig.map((FAQ) => (
                <AccordionItem className=' Inter-medium space-y-2 bg-white px-4 py-[6px] lg:px-10 rounded-xl shadow-[0px_0px_0px_1px_rgba(0,0,0,0.06),0px_1px_1px_-0.5px_rgba(0,0,0,0.06),0px_3px_3px_-1.5px_rgba(0,0,0,0.06),_0px_6px_6px_-3px_rgba(0,0,0,0.06),0px_12px_12px_-6px_rgba(0,0,0,0.06),0px_24px_24px_-12px_rgba(0,0,0,0.06)] h-auto dark:bg-gradient-to-t dark:from-[#4c4c4c] dark:to-[#191818]' key={FAQ.id} aria-label={FAQ.question} title={FAQ.question}>
                    <p className='Inter-medium text-[16px] lg:text-[16px]'>{FAQ.description}</p>
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