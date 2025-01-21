import { SVGProps } from 'react';

export type IconName = 'github' | 'x' | 'discord';

export interface BenefitItem {
    icon: React.FC<SVGProps<SVGSVGElement>>;
    title: string;
    description: string;
}

export interface Sponsor {
    iconName: IconName;
    name: string;
}

export interface Feature {
    iconName: IconName;
    title: string;
    description: string;
}

export interface IconProps extends React.SVGProps<SVGSVGElement> {
    name: IconName;
    size?: number;
    strokeWidth?: number;
    'aria-label'?: string;
    className?: string;
}