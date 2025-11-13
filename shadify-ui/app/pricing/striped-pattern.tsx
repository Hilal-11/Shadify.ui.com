import { StripedPattern } from "@/components/magicui/striped-pattern"
function StripedPatternDemo() {
  return (
    <div className="absolute w-full h-full">
      <StripedPattern direction="left" className="[mask-image:radial-gradient(300px_circle_at_center,white,transparent)]" />
    </div>
  )
}
export default StripedPatternDemo
