import { FunctionComponent } from 'react';
import { OmitData, cn } from '../../utils/utils';
import { useTheme } from '../../theme/useTheme';
import { CheckboxProps, CheckboxVariants } from './FormCheckbox';

const FormRadio: FunctionComponent<CheckboxProps> = ({ ...props }) => {
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
                    type={'radio'}
                    {...{ ...OmitData(props, ['defaultVariant', 'border', 'sizeVariant', 'radius', 'variant', 'outline']) }}
                    className={`${className ?? ''} ${defaultClass} h-full w-full  bg-transparent transition-all duration-500 rounded`}
                    style={{ accentColor: props.color ?? 'blue' }}
                />
            </div>
            {props.value}
        </div>
    );
};

export default FormRadio;
