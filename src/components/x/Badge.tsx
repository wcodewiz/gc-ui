import { FunctionComponent, ReactNode } from 'react';
import { useTheme } from '../../theme/useTheme';
import { OmitData, cn, getFontSize, getRadius, getWeights } from '../../utils/utils';
import { VariantProps, cva } from 'class-variance-authority';
import { Flex } from '../primary';

export const BadgeVariant = cva('absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold order border-white', {
    variants: {
        position: {
            topXSmall: 'top-0',
            topSmall: '-top-2 ',
            topMedium: '-top-4',
            topLarge: '-top-8 ',
            topLeftStart: 'top-0 left-0',
            topLeftEnd: 'top-0 left-full',
            topRightStart: 'top-0 right-0',
            topRightEnd: 'top-0 right-full',
            bottomLeftStart: 'bottom-0 left-0',
            bottomLeftEnd: 'bottom-0 left-full',
            bottomRightStart: 'bottom-0 right-0',
            bottomRightEnd: 'bottom-0 right-full',
            bottomXSmall: 'bottom-0',
            bottomSmall: '-bottom-2',
            bottomMedium: '-bottom-4',
            bottomLarge: '-bottom-8',
            topLeftXSmall: 'top-0 left-2',
            topLeftSmall: 'top-0 left-4',
            topLeftHalf: 'top-0 left-2/4',
            bottomLeftXSmall: 'bottom-0 left-2',
            bottomLeftSmall: 'bottom-0 left-4',
            bottomLeftHalf: 'bottom-0 left-2/4',
            topRightXSmall: 'top-0 right-2',
            topRightSmall: 'top-0 right-4',
            topRightHalf: 'top-0 right-2/4',
            bottomRigtXSmall: 'bottom-0 right-2',
            bottomRigtSmall: 'bottom-0 right-4',
            bottomRigtHalf: 'bottom-0 right-2/4'
        },
        space: {
            xsmall: 'p-0.5',
            small: 'p-1',
            medium: 'p-4',
            large: 'p-8',
            xlarge: 'p-12'
        },
        radius: getRadius,
        family: {
            sans: 'font-sans',
            serif: 'font-serif',
            mono: 'font-mono'
        },

        weight: getWeights,
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
interface BadgeProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement>, VariantProps<typeof BadgeVariant> {
    open?: boolean;
    onClose?: () => void;
    value: ReactNode | string;
}

const Badge: FunctionComponent<BadgeProps> = ({ ...prop }) => {
    const { className, family, radius, space, weight, fontSize, position, defaultVariant } = prop;
    const [theme] = useTheme();
    const classList = cn(BadgeVariant({ family, position, space, radius, weight: weight, fontSize: fontSize, className, defaultVariant }))
        .replace(':shadow-color', `${theme.text?.shadowColor ?? ''}`)
        .replace(':hover-shadow-color', `${theme.text?.hoverShadowColor ?? ''}`);

    return (
        <div className={`relative`}>
            {prop.children}
            {prop.value && (
                <span
                    {...{
                        ...OmitData(prop, [
                            'transition',
                            'value',
                            'open',
                            'onClose',
                            'family',
                            'width',
                            'widthSize',
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
                        className: `absolute ${classList}`
                    }}
                >
                    <Flex className="items-center">{prop.value}</Flex>
                </span>
            )}
        </div>
    );
};

export default Badge;
