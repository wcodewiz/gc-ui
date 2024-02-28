import { FunctionComponent, ReactNode } from 'react';
import { VariantProps } from 'class-variance-authority';
import { LabelVariants } from './Label';
import { cn } from '../../utils/utils';

//@ts-ignore
interface FormFooterProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, VariantProps<typeof LabelVariants> {
    children: ReactNode | string;
}

const FormFooter: FunctionComponent<FormFooterProps> = ({ ...prop }) => {
    const { className, defaultVariant, variant, sizeVariant, weight } = prop;
    const classList = cn(LabelVariants({ className, defaultVariant, variant, sizeVariant, weight }));

    return <div className={`block w-full h-full ${classList}`}>{prop.children}</div>;
};

export default FormFooter;
