import { sponsors } from "@/data/sponsors-data";
import {SponsorsMarquee} from "@/components/layout/sections/sponsors/SponsorsMarquee";

interface SponsorsSectionProps {
    title?: string;
    className?: string;
}

export const SponsorsSection = ({
                                    title = "Our Platinum Sponsors",
                                    className = "",
                                }: SponsorsSectionProps) => {
    return (
        <section
            id="sponsors"
            className={`container max-w-[75%] mx-auto pb-24 sm:pb-32 ${className}`}
        >
            <div className="space-y-8">
                <h2 className="text-lg md:text-xl text-center font-medium">
                    {title}
                </h2>

                <div className="relative">
                    <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-background to-transparent z-10" />
                    <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-background to-transparent z-10" />

                    <SponsorsMarquee sponsors={sponsors} />
                </div>
            </div>
        </section>
    );
};