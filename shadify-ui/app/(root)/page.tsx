// import EventToast from "@/components/event-toast";
import { ComponentShowcaseCard } from "@/components/landing/component-showcase-card";
import CTA from "@/components/landing/CTA";
import { HeroSection } from "@/components/landing/hero";
import Reviews from "@/components/landing/Reviews";


export default function Home() {
    return (
        <main className="bg-white dark:bg-black/5 overflow-x-hidden">
            <div className="grid grid-rows-[auto_1fr_auto] min-h-screen px-6 lg:px-4 gap-4 sm:gap-12">
                <HeroSection />
            </div>

            <ComponentShowcaseCard
                className="mx-auto w-full max-w-screen bg-neutral-100 dark:bg-neutral-900 h-auto py-10"
            />
            <div className="pt-20 pb-8">
                <Reviews/>
            </div>
            <div className="pt-10 pb-5">
                <CTA/>
            </div>

        </main>
    );
}
