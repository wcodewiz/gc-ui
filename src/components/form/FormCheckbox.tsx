import React, { FunctionComponent, InputHTMLAttributes, ReactNode } from 'react';
import { OmitData, cn, getRadius } from '../../utils/utils';
import { VariantProps, cva } from 'class-variance-authority';
import { useTheme } from '../../theme/useTheme';

const CheckboxVariants = cva(`block capitalize`, {
    variants: {
        variant: {
            default: '',
            outline: 'border :boder-color'
        },
        sizeVariant: {
            xxsmall: 'h-4 w-4',
            xsmall: 'h-6 w-6',
            small: 'h-7 w-7',
            medium: 'h-8 w-8',
            large: 'h-10 w-10'
        },
        border: {
            default: ``,
            outline: `border :border-color`
        },
        outline: {
            default: ``,
            outline: `outline :outline-color`
        },
        radius: getRadius,
        defaultVariant: {
            variant: 'default',
            sizeVariant: `small`,
            border: 'default',
            outline: 'default',
            radius: `default`
        }
    }
});

//@ts-ignore
interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof CheckboxVariants> {
    value: ReactNode | string;
    color?: string;
}

const FormCheckbox: FunctionComponent<CheckboxProps> = ({ ...props }) => {
    var { variant, outline, className, defaultVariant, sizeVariant, border, radius } = props;
    const [theme] = useTheme();
    const defaultClass = `outline-none border-none`;

    const cnv = cn(
        CheckboxVariants({
            className,
            defaultVariant,
            border,
            //@ts-ignore
            sizeVariant,
            radius,
            variant,
            outline
        })
    )
        .replaceAll(':border-color', variant === 'outline' ? theme.input?.borderColor ?? defaultClass : defaultClass)
        .replaceAll(':outline-color', variant === 'outline' ? theme.input?.borderColor ?? defaultClass : defaultClass);

    return (
        <div className="flex justify-start gap-1 items-center">
            <div className={`${theme.input?.backgroundColor ?? ''} ${theme.input?.color ?? ''}  ${cnv} `}>
                {/* @ts-ignore */}
                <input
                    type={'checkbox'}
                    {...{ ...OmitData(props, ['defaultValue', 'value', 'color', 'sizeVariant', 'radius', 'border', 'variant', 'outline']) }}
                    className={`${className ?? ''} ${defaultClass} h-full w-full  bg-transparent transition-all duration-500 rounded`}
                    style={{ accentColor: props.color ?? 'blue' }}
                />
            </div>
            {props.value}
        </div>
    );
};

export { FormCheckbox, CheckboxProps, CheckboxVariants };
