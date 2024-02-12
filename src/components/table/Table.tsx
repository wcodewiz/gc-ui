import { VariantProps, cva } from 'class-variance-authority';
import React from 'react';
import { FunctionComponent, ReactNode } from 'react';
import { OmitData, cn } from '../../utils/utils';
export const TablVariant = cva('', {
    variants: {
        variant: {
            default: 'table-auto',
            fixed: 'table-fixed'
        },
        spacing: {
            xxsmall: 'border-spacing-0.5',
            xsmall: 'border-spacing-1',
            small: 'border-spacing-1.5',
            medium: 'border-spacing-2',
            large: 'border-spacing-2.5',
            xlarge: 'border-spacing-3',
            x2large: 'border-spacing-6',
            x3large: 'border-spacing-9',
            x4large: 'border-spacing-12',
            x6large: 'border-spacing-16',
            x7large: 'border-spacing-20',
            x8large: 'border-spacing-24',
            x9large: 'border-spacing-28'
        },
        borderVariant: {
            default: '',
            collapse: 'border border-collapse :border-color',
            seperated: 'border border-separate :border-color'
        },
        captionPosition: {
            default: '',
            top: 'caption-top',
            bottom: 'caption-bottom'
        },
        defaultVariant: {
            border: 'default',
            spacing: 'xxsmall',
            caption: 'default',
            variant: 'auto'
        }
    }
});

//@ts-ignore
interface TableProps extends React.DetailedHTMLProps<React.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement>, VariantProps<typeof TablVariant> {
    caption?: ReactNode | string;
    borderColor?: string;
    outlineColor?: string;
}

const Table: FunctionComponent<TableProps> = ({ ...prop }) => {
    const { variant, spacing, className, captionPosition, borderVariant, caption, defaultVariant } = prop;
    const captionClassList = cn(TablVariant({ captionPosition }));
    const defaultClass = `outline-none border-none`;

    const classList = cn(TablVariant({ variant, spacing, borderVariant, className, defaultVariant })).replaceAll(':border-color', `${prop.borderColor}` ?? defaultClass);
    return (
        <table {...{ ...OmitData(prop, ['variant', 'spacing', 'captionPosition', 'borderColor', 'borderVariant', 'defaultVariant', 'caption']), className: `${classList}` }}>
            {caption && <caption className={`${captionClassList}`}>{caption}</caption>}
            {prop.children}
        </table>
    );
};

//@ts-ignore
interface TableHeadProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>, VariantProps<typeof TablVariant> {}

const TableHead: FunctionComponent<TableHeadProps> = ({ ...prop }) => {
    const { className } = prop;
    return (
        <thead className={className}>
            <TableRow>{prop.children}</TableRow>
        </thead>
    );
};

//@ts-ignore
interface TableRowProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableRowElement>, HTMLTableRowElement>, VariantProps<typeof TablVariant> {}

const TableRow: FunctionComponent<TableRowProps> = ({ ...prop }) => {
    const { className } = prop;
    return <tr className={className}>{prop.children}</tr>;
};

//@ts-ignore
interface TableHeadDataProps extends React.DetailedHTMLProps<React.ThHTMLAttributes<HTMLTableHeaderCellElement>, HTMLTableHeaderCellElement>, VariantProps<typeof TablVariant> {}

const TableHeadData: FunctionComponent<TableHeadDataProps> = ({ ...prop }) => {
    const { className } = prop;
    return <th className={className}>{prop.children}</th>;
};

//@ts-ignore
interface TableBodyDataProps extends React.DetailedHTMLProps<React.TdHTMLAttributes<HTMLTableDataCellElement>, HTMLTableDataCellElement>, VariantProps<typeof TablVariant> {}

const TableBodyData: FunctionComponent<TableBodyDataProps> = ({ ...prop }) => {
    const { className } = prop;
    return <td className={className}>{prop.children}</td>;
};

//@ts-ignore
interface TableBodyProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>, VariantProps<typeof TablVariant> {}

const TableBody: FunctionComponent<TableBodyProps> = ({ ...prop }) => {
    const { className } = prop;
    return <tbody className={className}>{prop.children}</tbody>;
};

//@ts-ignore
interface TableFooterProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLTableSectionElement>, HTMLTableSectionElement>, VariantProps<typeof TablVariant> {}

const TableFooter: FunctionComponent<TableFooterProps> = ({ ...prop }) => {
    const { className } = prop;
    return <tfoot className={className}>{prop.children}</tfoot>;
};

export { Table, TableHead, TableFooter, TableBody, TableRow, TableBodyData, TableHeadData };
