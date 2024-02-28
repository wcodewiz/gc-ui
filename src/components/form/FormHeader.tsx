import { FunctionComponent, ReactNode } from 'react';
import { VariantProps } from 'class-variance-authority';
import { LabelVariants } from './Label';
import { cn } from '../../utils/utils';

import { useTheme } from '../../theme/useTheme';

//@ts-ignore
interface FormHeaderProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, VariantProps<typeof LabelVariants> {
    children: ReactNode;
    outlined?: boolean;
    heading: ReactNode | string;
    footer?: ReactNode;
}

const FormHeader: FunctionComponent<FormHeaderProps> = ({ ...prop }) => {
    const { className, defaultVariant, variant, sizeVariant, weight } = prop;
    const classList = cn(LabelVariants({ className, defaultVariant, variant, sizeVariant, weight }));
    const [theme] = useTheme();
    const errorClass = `border rounded  ${theme.form?.borderColor ?? ''}`;

    return (
        <div className={`block w-full h-full ${prop.outlined ? errorClass : ''}`}>
            <h2 className={`${classList}`}>{prop.heading}</h2>
            {prop.children}
            {prop.footer && prop.footer}
        </div>
    );
};

export default FormHeader;
