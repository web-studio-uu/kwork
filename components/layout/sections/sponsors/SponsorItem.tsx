"use client";

import { type Sponsor } from "@/types";
import {Icon} from "@/components/ui/Icon";

interface SponsorItemProps extends Sponsor {}

export const SponsorItem = ({ iconName, name }: SponsorItemProps) => (
    <div className="flex items-center gap-2 text-xl md:text-2xl font-medium px-4 py-2 rounded-lg transition-colors duration-200 hover:bg-muted/50">
        <Icon
            name={iconName}
            className="text-foreground w-8 h-8"
        />
        <span>{name}</span>
    </div>
);