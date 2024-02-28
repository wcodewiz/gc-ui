import { VariantProps } from 'class-variance-authority';
import { FunctionComponent } from 'react';
import { TextFieldVariants } from './TextField';
import { useTheme } from '../../theme/useTheme';

import { OmitData, cn } from '../../utils/utils';

interface FormOptionProps extends React.DetailedHTMLProps<React.OptionHTMLAttributes<HTMLOptionElement>, HTMLOptionElement>, VariantProps<typeof TextFieldVariants> {}

const FormOption: FunctionComponent<FormOptionProps> = ({ ...props }) => {
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
        <option
            className={`${theme.input?.backgroundColor ?? ''} ${theme.input?.color ?? ''}  ${cnv}`}
            {...OmitData(props, ['defaultVariant', 'border', 'sizeVariant', 'radius', 'variant', 'outline'])}
        >
            {props.children}
        </option>
    );
};

export default FormOption;
