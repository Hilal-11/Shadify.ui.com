import { allComponentsConfig } from './componentsAllConfig';
import Link from 'next/link';
function componentsAll() {
  return (
    <div className="w-full h-auto py-6 lg:py-10 px-5 lg:px-8 relative">

        <div className="w-full border-t-1 border-dashed border-neutral-400 dark:border-neutral-700 absolute top-0 left-0"></div>

        
        <div className='w-full h-full flex flex-wrap justify-between gap-7 lg:gap-10'>
            {
                allComponentsConfig?.map((component) => (
                    <Link href={component?.src} key={component.id} className='font-sans font-medium text-[15px] text-neutral-800 dark:text-neutral-200 no-underline hover:text-neutral-600 dark:hover:text-neutral-400 hover:underline'>{component.name}</Link>
                ))
            }
        </div>
        <div className="w-full border-t-1 border-dashed border-neutral-400 dark:border-neutral-700 absolute bottom-0 left-0"></div>
    </div>
  )
}

export default componentsAll
