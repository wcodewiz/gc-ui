import { VariantProps, cva } from 'class-variance-authority';

import { FunctionComponent } from 'react';
import { cn, getRadius, getSize } from '../../utils/utils';
const ChipVariants = cva(`px-2 py-1`, {
    variants: {
        textSize: getSize,
        radius: {
            ...getRadius,
            default: 'rounded'
        },
        rectangleSize: {
            xsmall: 'h-4 w-8',
            small: 'h-6 w-12',
            medium: 'h-8 w-16',
            large: 'h-10 w-20',
            xlarge: 'h-12 w-24',
            x2large: 'h-16 w-32',
            x4large: 'h-20 w-40',
            x5large: 'h-24 w-48',
            x6large: 'h-28 w-56',
            x7large: 'h-32 w-64'
        }
    }
});

interface ChipProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, VariantProps<typeof ChipVariants> {}

const Chip: FunctionComponent<ChipProps> = ({ ...props }) => {
    const { className } = props;
    const classList = cn(ChipVariants({ rectangleSize: props.rectangleSize ?? 'small', className, radius: props.radius ?? 'small', textSize: props.textSize ?? 'small' }));

    return <span className={`flex justify-center items-center ${classList}`}>{props.children}</span>;
};

export default Chip;
