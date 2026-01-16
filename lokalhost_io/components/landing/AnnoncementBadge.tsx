import { HiArrowNarrowRight } from "react-icons/hi";
import { ShimmerButton } from "@/components/ui/shimmer-button";
function AnnoncementBadge() {
  return (
    <div className="z-10 flex  items-center justify-center">
      <ShimmerButton className="shadow-2xl">
      <p className="text-center text-sm whitespace-break-spaces flex items-center gap-2">
        <span className="flex items-center justify-center bg-neutral-100 text-center font-mono text-[11px] px-2 h-[12px] py-px rounded-full text-neutral-800 ">New</span> Templates & Marketing UI Blocks, Mobile apps, UI design kits & more <span className="pl-1"><HiArrowNarrowRight className="text-xs" /></span>
      </p>
    </ShimmerButton>
    </div>
  )
}

export default AnnoncementBadge


