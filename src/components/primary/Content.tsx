import { VariantProps, cva } from 'class-variance-authority';

import { FunctionComponent } from 'react';
import { OmitData, cn, getElevation, getFontSize, getRadius, getWeights } from '../../utils/utils';
import { useTheme } from '../../theme/useTheme';

const ContentVariant = cva('p-2', {
    variants: {
        family: {
            sans: 'font-sans',
            serif: 'font-serif',
            mono: 'font-mono'
        },
        radius: getRadius,
        weight: getWeights,
        elevation: getElevation,
        fontSize: getFontSize,
        defaultVariant: {
            family: 'sans',
            elevation: 'default',
            weight: 'normal',
            fontSize: 'small'
        }
    }
});

export interface ContentProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, VariantProps<typeof ContentVariant> {}

const Content: FunctionComponent<ContentProps> = ({ ...prop }) => {
    const { className, radius, family, weight, fontSize, elevation, defaultVariant } = prop;
    const [theme] = useTheme();
    const classList = cn(ContentVariant({ family, radius, weight, fontSize, elevation, className, defaultVariant }))
        .replace(':shadow-color', `${theme.text?.shadowColor ?? ''}`)
        .replace(':hover-shadow-color', `${theme.text?.hoverShadowColor ?? ''}`);

    return (
        <div className={`max-w-prose`}>
            <article
                {...{
                    ...OmitData(prop, ['transition', 'elevation', 'family', 'weight', 'fontSize', 'defaultVariant', 'border', 'sizeVariant', 'radius', 'variant', 'outline']),
                    className: `${classList}`
                }}
            >
                {prop.children}
            </article>
        </div>
    );
};

export { Content, ContentVariant };
