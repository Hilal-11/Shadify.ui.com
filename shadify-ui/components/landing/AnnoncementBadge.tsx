import { BsStars } from "react-icons/bs";
import { cn } from "@/lib/utils"
import { AnimatedShinyText } from "@/components/ui/animated-shiny-text"
import { IoIosArrowRoundForward } from "react-icons/io";
function AnnoncementBadge() {
  return (
    <div className="z-10 flex  items-center justify-center">
      <div
        className={cn(
          "group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800"
        )}
      >
        <AnimatedShinyText className="inline-flex items-center justify-center font-sans font-medium px-4 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400 text-sm">
          <span>✨ Introducing Lokalhost Apps</span>
          <IoIosArrowRoundForward className="ml-1 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedShinyText>
      </div>
    </div>
  )
}

export default AnnoncementBadge
