import { VariantProps, cva } from 'class-variance-authority';
import React from 'react';
import { FunctionComponent } from 'react';
import { OmitData, cn, getElevation, getFontSize, getRadius, getTransition, getWeights } from '../../utils/utils';
import { useTheme } from '../../theme/useTheme';

const ButtonVariant = cva('px-4 py-2 transition-all duration-300', {
    variants: {
        variant: {
            default: '',
            outline: 'border :border-color bg-transparent'
        },
        family: {
            sans: 'font-sans',
            serif: 'font-serif',
            mono: 'font-mono'
        },
        radius: getRadius,
        weight: getWeights,
        transition: getTransition,
        elevation: getElevation,
        fontSize: getFontSize,
        defaultVariant: {
            family: 'sans',
            elevation: 'default',
            weight: 'normal',
            fontSize: 'small',
            radius: 'default',
            transition: 'default'
        }
    }
});

interface ContentProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>, VariantProps<typeof ButtonVariant> {}

const Button: FunctionComponent<ContentProps> = ({ ...prop }) => {
    const { className, family, transition, variant, radius, weight, fontSize, elevation, defaultVariant } = prop;
    const [theme] = useTheme();
    const classList = cn(ButtonVariant({ family, weight, fontSize, transition, radius, elevation, className, defaultVariant, variant }))
        .replace(':border-color', `${variant === 'outline' ? theme.button?.borderColor ?? '' : ''}`)
        .replace(':shadow-color', `${theme.button?.shadowColor ?? ''}`)
        .replace(':hover-shadow-color', `${theme.button?.hoverShadowColor ?? ''}`)
        .replace(':hover-bg-color', `${theme.button?.hoverBackgroundColor ?? ''}`)
        .replace(':hover-color', `${theme.button?.hoverColor ?? ''}`);

    return (
        <button
            {...{
                ...OmitData(prop, ['transition', 'family', 'weight', 'fontSize', 'defaultVariant', 'border', 'sizeVariant', 'radius', 'variant', 'outline']),
                className: `${theme.button?.backgroundColor ?? ''} ${theme.button?.color ?? ''} ${classList}`
            }}
        >
            {prop.children}
        </button>
    );
};

export { Button, ButtonVariant };
