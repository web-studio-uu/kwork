// components/ui/icon.tsx
"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { IconProps } from "@/types";
import GithubIcon from "@/components/icons/github-icon";
import XIcon from "@/components/icons/x-icon";
import DiscordIcon from "@/components/icons/discord-icon";

const iconComponents = {
    github: GithubIcon,
    x: XIcon,
    discord: DiscordIcon,
} as const;

const Icon = React.forwardRef<SVGSVGElement, IconProps>(
    ({
         name,
         size = 24,
         strokeWidth = 2,
         className,
         "aria-label": ariaLabel,
         ...props
     }, ref) => {
        const IconComponent = iconComponents[name];

        if (!IconComponent) {
            console.warn(`Icon "${name}" not found`);
            return null;
        }

        return (
            <IconComponent
                ref={ref}
                width={size}
                height={size}
                strokeWidth={strokeWidth}
                aria-label={ariaLabel || `${name} icon`}
                aria-hidden={!ariaLabel}
                className={cn(
                    "inline-block shrink-0",
                    "transition-colors duration-200",
                    className
                )}
                {...props}
            />
        );
    }
);

Icon.displayName = "Icon";

export { Icon, type IconProps };