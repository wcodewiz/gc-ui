import { VariantProps } from 'class-variance-authority';
import React from 'react';
import { FunctionComponent } from 'react';
import { OmitData, cn } from '../../utils/utils';
import { useTheme } from '../../theme/useTheme';
import { ButtonVariant } from './Button';

interface ContentProps extends React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement>, VariantProps<typeof ButtonVariant> {
    to: string;
}

const Page: FunctionComponent<ContentProps> = ({ ...prop }) => {
    const { className, family, transition, variant, radius, weight, fontSize, elevation, defaultVariant } = prop;
    const [theme] = useTheme();
    const classList = cn(ButtonVariant({ family, weight, fontSize, transition, radius, elevation, className, defaultVariant, variant }))
        .replace(':border-color', `${variant === 'outline' ? theme.anchor?.borderColor ?? '' : ''}`)
        .replace(':shadow-color', `${theme.anchor?.shadowColor ?? ''}`)
        .replace(':hover-shadow-color', `${theme.anchor?.hoverShadowColor ?? ''}`)
        .replace(':hover-bg-color', `${theme.anchor?.hoverBackgroundColor ?? ''}`)
        .replace(':hover-color', `${theme.anchor?.hoverColor ?? ''}`);

    return (
        <a
            {...{
                ...OmitData(prop, ['transition', 'elevation', 'family', 'weight', 'fontSize', 'defaultVariant', 'border', 'sizeVariant', 'radius', 'variant', 'outline']),
                href: prop.to,
                className: ` cursor-pointer ${theme.anchor?.backgroundColor ?? ''} ${theme.anchor?.color ?? ''}  ${classList}`
            }}
        />
    );
};

export { Page };
