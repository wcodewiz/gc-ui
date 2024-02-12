import { VariantProps, cva } from 'class-variance-authority';
import React, { FC, InputHTMLAttributes, ReactNode, useMemo, useState } from 'react';
import { forwardRef } from 'react';
import { useTheme } from '../../theme/useTheme';
import { OmitData, capitlize, cn, getRadius, inputphone } from '../../utils/utils';

const TextFieldVariants = cva(`w-full px-4 block capitalize`, {
    variants: {
        variant: {
            default: '',
            outline: 'border :border-color'
        },
        sizeVariant: {
            xxsmall: 'py-0.5 text-xs my-0.5',
            xsmall: 'py-1 text-xs my-0.5',
            small: 'py-2.5 text-sm my-0.5',
            meduim: 'py-4 text-md my-0.5',
            large: 'py-8 text-lg my-0.5'
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
interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof TextFieldVariants> {
    prefixIcon?: ReactNode;
    suffixIcon?: ReactNode;
    capitalize?: boolean;
    isPhone?: boolean;
    change?: (ev: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextField: FC<TextFieldProps> = forwardRef<HTMLInputElement, TextFieldProps>(({ ...props }, ref) => {
    var { variant, outline, className, defaultVariant, sizeVariant, border, radius } = props;
    const [theme] = useTheme();
    const [value, setValue] = useState(0);
    const defaultClass = `outline-none border-none`;

    //@ts-ignore
    const cnv = cn(
        TextFieldVariants({
            className,
            defaultVariant,
            border,
            sizeVariant,
            radius,
            variant,
            outline
        })
    )
        .replaceAll(':border-color', variant === 'outline' ? theme.input?.borderColor ?? defaultClass : defaultClass)
        .replaceAll(':outline-color', variant === 'outline' ? theme.input?.borderColor ?? defaultClass : defaultClass);

    return useMemo(
        () => (
            <div className={`${theme.input?.backgroundColor ?? ''} ${theme.input?.color ?? ''} flex justify-between gap-2 items-center flex-row flex-nowrap ${cnv}`}>
                {props.prefixIcon && props.prefixIcon}
                <input
                    type={props.type ?? 'text'}
                    onChange={(ev) => {
                        const len = ev.target.value.length;
                        if (ev.target.type === 'text') {
                            if (len > value) {
                                if (props.isPhone) {
                                    ev.target.value = inputphone(ev.target.value);
                                }
                            }

                            if (props.capitalize) {
                                ev.target.value = capitlize(ev.target.value);
                            }
                        }
                        setValue(len);
                        props.onChange && props.onChange(ev);
                        props.change && props.change(ev);
                    }}
                    ref={ref}
                    {...{ ...OmitData(props, ['prefixIcon', 'capitalize', 'isPhone', 'change', 'suffixIcon', 'defaultVariant', 'border', 'sizeVariant', 'radius', 'variant', 'outline']) }}
                    className={`${defaultClass} w-full h-full  bg-transparent`}
                />
                {props.suffixIcon && props.suffixIcon}
            </div>
        ),
        [value, theme]
    );
});

export { TextField, TextFieldVariants, TextFieldProps };
