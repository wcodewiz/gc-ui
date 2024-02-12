import React, { FunctionComponent } from 'react';
import { OmitData, cn } from '../../utils/utils';
import { useTheme } from '../../theme/useTheme';
import { TextFieldProps, TextFieldVariants } from './TextField';

const FormTime: FunctionComponent<TextFieldProps> = ({ ...props }) => {
    var { variant, outline, className, defaultVariant, sizeVariant, border, radius } = props;
    const [theme] = useTheme();
    const defaultClass = `outline-none border-none`;

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
        <div className={`${theme.input?.backgroundColor ?? ''} ${theme.input?.color ?? ''}  ${cnv} `}>
            {/* @ts-ignore */}
            <input
                type={'time'}
                {...{ ...OmitData(props, ['defaultVariant', 'border', 'sizeVariant', 'radius', 'variant', 'outline']) }}
                className={`${className ?? ''} ${defaultClass} h-full w-full  bg-transparent transition-all duration-500 rounded`}
                style={{ accentColor: props.color ?? 'blue' }}
            />
        </div>
    );
};

export default FormTime;
