import { VariantProps, cva } from 'class-variance-authority';
import { FunctionComponent } from 'react';
import { OmitData, cn } from '../../utils/utils';

const FlexVariant = cva('flex gap-1', {
    variants: {
        direction: {
            row: `flex-row`,
            column: 'flex-col'
        },
        axis: {
            start: `justify-start`,
            center: `justify-center`,
            around: `justify-around`,
            between: `justify-between`,
            end: `justify-end`
        },
        defaultVariant: {
            direction: 'row',
            axis: 'start'
        }
    }
});

interface FlexProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, VariantProps<typeof FlexVariant> {}

const Flex: FunctionComponent<FlexProps> = ({ ...prop }) => {
    const { direction, className, axis, defaultVariant } = prop;
    const classList = cn(FlexVariant({ direction, className, axis, defaultVariant }));

    return <div {...{ ...OmitData(prop, ['direction', 'axis', 'defaultVariant']), className: `${classList}` }}>{prop.children}</div>;
};

const FlexColumn: FunctionComponent<FlexProps> = ({ ...prop }) => {
    return <Flex direction={'column'} {...prop} />;
};

const FlexRow: FunctionComponent<FlexProps> = ({ ...prop }) => {
    return <Flex direction={'row'} {...prop} />;
};

export { Flex, FlexColumn, FlexRow };
