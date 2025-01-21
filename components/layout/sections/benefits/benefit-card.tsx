import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {BenefitItem} from "@/types";

interface BenefitCardProps extends BenefitItem {
    index: number;
}

export const BenefitCard = ({ icon: Icon, title, description, index }: BenefitCardProps) => (
    <Card className="group bg-muted/50 dark:bg-card hover:bg-background transition-all duration-300">
        <CardHeader>
            <div className="flex justify-between items-start">
                <Icon
                    width={32}
                    height={32}
                    className="mb-6 text-primary"
                    fill="hsl(var(--primary))"
                />
                <span className="text-5xl text-muted-foreground/15 font-medium transition-all duration-300 group-hover:text-muted-foreground/30">
          {index + 1}
        </span>
            </div>
            <CardTitle>{title}</CardTitle>
        </CardHeader>
        <CardContent>
            <p className="text-muted-foreground">{description}</p>
        </CardContent>
    </Card>
);