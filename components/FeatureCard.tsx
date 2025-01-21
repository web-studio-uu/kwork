// FeatureCard.tsx
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Feature } from "@/types";
import {Icon} from "@/components/ui/Icon";

interface FeatureCardProps extends Feature {}

export const FeatureCard = ({ iconName, title, description }: FeatureCardProps) => (
    <Card className="h-full bg-background border-0 shadow-none group">
        <CardHeader className="flex justify-center items-center">
            <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4 transition-all duration-300 group-hover:bg-primary/30 group-hover:ring-primary/20">
                <Icon
                    name={iconName}
                    className="w-6 h-6 text-primary"
                />
            </div>
            <CardTitle className="text-xl transition-colors duration-300 group-hover:text-primary">
                {title}
            </CardTitle>
        </CardHeader>
        <CardContent className="text-muted-foreground text-center">
            {description}
        </CardContent>
    </Card>
);