import { VariantProps, cva } from 'class-variance-authority';
import React from 'react';
import { FunctionComponent } from 'react';
import { OmitData, cn } from '../../utils/utils';

const GridVariants = cva('grid ', {
    variants: {
        flow: {
            column: 'grid-flow-col',
            row: 'grid-flow-row'
        },
        gap: {
            xsmall: 'gap-2',
            small: 'gap-4'
        },
        column: {
            xsmall: 'column-2',
            small: 'column-4',
            medium: 'column-6'
        },
        row: {
            xsmall: 'grid-rows-2',
            small: 'grid-rows-4',
            medium: 'grid-rows-6'
        },
        variant: {
            default: ''
        },
        defaultVariant: {
            row: 'xsmall',
            column: 'xsmall',
            gap: 'xsmall',
            flow: 'column'
        }
    }
});

interface GridBoxProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, VariantProps<typeof GridVariants> {}

const GridBox: FunctionComponent<GridBoxProps> = ({ ...prop }) => {
    const { className, defaultVariant, row, column, flow, variant, gap } = prop;
    const classList = cn(GridVariants({ className, defaultVariant, flow, row, column, variant, gap }));
    return <div {...{ ...OmitData(prop, ['gap', 'flow', 'family', 'column', 'fontSize', 'defaultVariant', 'border', 'sizeVariant', 'radius', 'variant']), className: ` ${classList}` }} />;
};

export { GridBox, GridBoxProps };
