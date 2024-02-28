import { VariantProps } from 'class-variance-authority';
import { FunctionComponent } from 'react';
import { TextFieldVariants } from './TextField';
import { useTheme } from '../../theme/useTheme';

import { OmitData, cn } from '../../utils/utils';

interface FormSelectProps extends React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>, VariantProps<typeof TextFieldVariants> {}

const FormSelect: FunctionComponent<FormSelectProps> = ({ ...props }) => {
    var { variant, outline, className, defaultVariant, sizeVariant, border, radius } = props;
    const [theme] = useTheme();
    const defaultClass = `outline-none border-none`;

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

    return (
        <select
            className={`${theme.input?.backgroundColor ?? ''} ${theme.input?.color ?? ''}  ${cnv}`}
            {...OmitData(props, ['defaultVariant', 'border', 'sizeVariant', 'radius', 'variant', 'outline'])}
        >
            {props.children}
        </select>
    );
};

export default FormSelect;
