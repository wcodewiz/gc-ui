import React, { FunctionComponent, ReactNode, useState } from 'react';
import { useTheme } from '../../theme/useTheme';
import { OmitData, cn, getFontSize, getRadius, getSize, getWeights, staticSpace } from '../../utils/utils';
import { VariantProps, cva } from 'class-variance-authority';

export const ToolTipVariant = cva('z-30', {
    variants: {
        position: {
            bottom: 'top-full tooltiptext-up',
            bottomRight: 'top-full left-full tooltiptext-right',
            bottomLeft: 'top-full right-full tooltiptext-left',
            top: 'bottom-full tooltiptext-bottom',
            topRight: 'bottom-full left-full tooltiptext-right',
            topLeft: 'bottom-full right-full tooltiptext-left'
        },
        space: staticSpace,
        radius: getRadius,
        family: {
            sans: 'font-sans',
            serif: 'font-serif',
            mono: 'font-mono'
        },

        weight: getWeights,
        sizeVariant: getSize,
        fontSize: getFontSize,
        defaultVariant: {
            family: 'sans',
            elevation: 'default',
            weight: 'normal',
            fontSize: 'small',
            spaces: 'xsmall',
            width: 'default'
        }
    }
});

//@ts-ignore
interface ToolTipProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, VariantProps<typeof ToolTipVariant> {
    open?: boolean;
    onClose?: () => void;
    value: ReactNode | string;
}

const ToolTip: FunctionComponent<ToolTipProps> = ({ ...prop }) => {
    const { className, family, radius, space, weight, fontSize, position, defaultVariant } = prop;
    const [theme] = useTheme();
    const classList = cn(ToolTipVariant({ family, position, space, radius, weight: weight, fontSize: fontSize, className, defaultVariant }))
        .replace(':shadow-color', `${theme.text?.shadowColor ?? ''}`)
        .replace(':hover-shadow-color', `${theme.text?.hoverShadowColor ?? ''}`);
    const [show, setShow] = useState(false);

    return (
        <div
            className={`relative tooltip`}
            onMouseEnter={() => setShow(true)}
            onMouseOver={() => setShow(true)}
            onMouseOut={() => {
                setShow(false);
            }}
        >
            {prop.children}
            {show && prop.value && (
                <div
                    {...{
                        ...OmitData(prop, [
                            'transition',
                            'value',
                            'open',
                            'onClose',
                            'family',
                            'position',
                            'space',
                            'elevation',
                            'family',
                            'weight',
                            'fontSize',
                            'defaultVariant',
                            'border',
                            'sizeVariant',
                            'radius',
                            'variant',
                            'outline'
                        ]),
                        className: `tooltiptext ${classList}`
                    }}
                >
                    {prop.value}
                </div>
            )}
        </div>
    );
};

export default ToolTip;
