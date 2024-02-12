import { VariantProps, cva } from 'class-variance-authority';
import { OmitData, cn, getRadius, getSize, getWeights } from '../../utils/utils';
import { FunctionComponent, LabelHTMLAttributes, ReactNode } from 'react';
import React from 'react';
import { useTheme } from '../../theme/useTheme';

const LabelVariants = cva(`px-4 py-1`, {
    variants: {
        variant: {
            default: ``,
            outlined: `border :boder-color`
        },
        radius: getRadius,
        sizeVariant: getSize,
        weight: getWeights,

        defaultVariant: {
            variant: 'default',
            sizeVariant: `small`,
            weight: `normal`
        }
    }
});

interface LabelProps extends LabelHTMLAttributes<HTMLLabelElement>, VariantProps<typeof LabelVariants> {
    children: ReactNode;
    value: string;
    errorContent?: string;
}

const Label: FunctionComponent<LabelProps> = ({ ...prop }) => {
    const { className, defaultVariant, radius, variant, sizeVariant, weight } = prop;
    const [theme] = useTheme();
    const defaultClass = `outline-none border-none`;

    const classList = cn(LabelVariants({ className, defaultVariant, sizeVariant, weight }));

    const othersColor = cn(LabelVariants({ variant, radius }))
        .replaceAll(':border-color', variant === 'outlined' ? theme.input?.borderColor ?? defaultClass : defaultClass)
        .replaceAll(':outline-color', variant === 'outlined' ? theme.input?.borderColor ?? defaultClass : defaultClass);

    const errorClass = `border rounded ${theme.danger?.borderColor ?? ''} ${theme.danger?.color ?? ''}`;

    return (
        <div className={`w-full h-full flex flex-col float-start ${prop.errorContent && errorClass} ${othersColor}`}>
            <label {...{ className: `${classList}`, ...OmitData(prop, ['weight', 'defaultVariant', 'errorContent', 'border', 'sizeVariant', 'radius', 'variant', 'outline']) }}>{prop.value}</label>
            {prop.children}
            {prop.errorContent && <span className={`${theme.danger?.backgroundColor ?? ''} ${theme.danger?.color ?? ''} text-xs  font-sans px-4`}>{prop.errorContent}</span>}
        </div>
    );
};

export { Label, LabelVariants };
