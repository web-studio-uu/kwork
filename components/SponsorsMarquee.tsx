"use client";

import { type Sponsor } from "@/types";
import { SponsorItem } from "./SponsorItem";

interface SponsorsMarqueeProps {
    sponsors: Sponsor[];
}

export const SponsorsMarquee = ({ sponsors }: SponsorsMarqueeProps) => {
    const doubledSponsors = [...sponsors, ...sponsors];

    return (
        <div className="overflow-hidden relative">
            <div className="animate-marquee inline-flex gap-12">
                {doubledSponsors.map((sponsor, index) => (
                    <SponsorItem
                        key={`${sponsor.name}-${index}`}
                        {...sponsor}
                    />
                ))}
            </div>
        </div>
    );
};