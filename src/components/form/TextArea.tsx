import { VariantProps } from 'class-variance-authority';
import { FC, InputHTMLAttributes, ReactNode } from 'react';
import { forwardRef } from 'react';
import { useTheme } from '../../theme/useTheme';
import { OmitData, cn } from '../../utils/utils';
import { TextFieldVariants } from './TextField';

//@ts-ignore
interface TextAreaProps extends InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof TextFieldVariants> {
    prefixIcon?: ReactNode;
    cols?: number;
    row?: number;
    suffixIcon?: ReactNode;
    change?: (ev: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextArea: FC<TextAreaProps> = forwardRef<HTMLTextAreaElement, TextAreaProps>(({ ...props }, ref) => {
    const { variant, outline, className, defaultVariant, sizeVariant, border, radius } = props;
    const [theme] = useTheme();
    const defaultClass = `outline-none border-none`;

    //@ts-ignore
    const cnv = cn(
        TextFieldVariants({
            className,
            variant,
            defaultVariant,
            sizeVariant,
            border,
            radius,
            outline
        })
    )
        .replaceAll(':border-color', variant === 'outline' ? theme.input?.borderColor ?? defaultClass : defaultClass)
        .replaceAll(':outline-color', variant === 'outline' ? theme.input?.borderColor ?? defaultClass : defaultClass);

    return (
        <div className={`${theme.input?.backgroundColor ?? ''} ${theme.input?.color ?? ''} flex justify-between gap-2 items-center flex-row flex-nowrap ${cnv}`}>
            {props.prefixIcon && props.prefixIcon}
            <textarea
                cols={props.cols}
                rows={props.row}
                //@ts-ignore
                onChange={(ev) => {
                    if (ev.target.type === 'text') {
                        ev.target.value.toUpperCase();
                    }
                    //@ts-ignore
                    props.onChange && props.onChange(ev);
                    //@ts-ignore
                    props.change && props.change(ev);
                    return undefined;
                }}
                ref={ref}
                {...{ type: `${props.type ?? 'text'}`, ...OmitData(props, ['prefixIcon', 'suffixIcon', 'defaultVariant', 'border', 'sizeVariant', 'radius', 'variant', 'outline']) }}
                className="w-full h-full outline-none border-none bg-transparent resize-none"
            />
            {props.suffixIcon && props.suffixIcon}
        </div>
    );
});

export { TextArea };
