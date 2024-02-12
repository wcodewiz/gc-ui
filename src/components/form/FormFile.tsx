import React, { FunctionComponent, ReactNode, forwardRef } from 'react';
import { TextFieldProps, TextFieldVariants } from './TextField';
import { useTheme } from '../../theme/useTheme';
import { cn, OmitData } from '../../utils/utils';

const FormFile: FunctionComponent<TextFieldProps> = forwardRef<HTMLInputElement, TextFieldProps>(({ ...props }, ref) => {
    var { variant, outline, className, defaultVariant, sizeVariant, border, radius } = props;
    const [theme] = useTheme();
    const defaultClass = `outline-none border-none`;

    //@ts-ignore
    const cnv = cn(
        TextFieldVariants({
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
        <div className={`${theme.input?.backgroundColor ?? ''} ${theme.input?.color ?? ''} flex justify-between gap-2 items-center flex-row flex-nowrap ${cnv}`}>
            {props.prefixIcon && props.prefixIcon}
            <input
                type={'file'}
                onChange={(ev) => {
                    props.onChange && props.onChange(ev);
                    props.change && props.change(ev);
                }}
                ref={ref}
                {...{ ...OmitData(props, ['prefixIcon', 'suffixIcon', 'defaultVariant', 'border', 'sizeVariant', 'radius', 'variant', 'outline']) }}
                className={`${defaultClass} w-full h-full  bg-transparent`}
            />
            {props.suffixIcon && props.suffixIcon}
        </div>
    );
});

interface prop extends TextFieldProps {
    child: ReactNode;
}

const FormCustomFile: FunctionComponent<prop> = forwardRef<HTMLInputElement, prop>(({ ...props }, ref) => {
    var { variant, outline, className, defaultVariant, sizeVariant, border, radius } = props;
    const [theme] = useTheme();
    const defaultClass = `outline-none border-none`;

    //@ts-ignore
    const cnv = cn(
        TextFieldVariants({
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
        <div className={`relative ${theme.input?.backgroundColor ?? ''} ${theme.input?.color ?? ''} ${cnv}`}>
            <div className="absolute top-0 left-0 w-full h-full opacity-0">
                <input
                    type={'file'}
                    onChange={(ev) => {}}
                    ref={ref}
                    {...{ ...OmitData(props, ['prefixIcon', 'suffixIcon', 'defaultVariant', 'border', 'sizeVariant', 'radius', 'variant', 'outline']) }}
                    className={`${defaultClass} w-full h-full  bg-transparent`}
                />
            </div>
            {props.child}
        </div>
    );
});

export { FormFile, FormCustomFile };
