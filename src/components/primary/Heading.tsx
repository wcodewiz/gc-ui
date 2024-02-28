import { VariantProps } from 'class-variance-authority';

import { FunctionComponent } from 'react';
import { OmitData, cn } from '../../utils/utils';
import { useTheme } from '../../theme/useTheme';
import { ContentVariant } from './Content';

interface ContentProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement>, VariantProps<typeof ContentVariant> {}

const Heading: FunctionComponent<ContentProps> = ({ ...prop }) => {
    const { className, family, weight, fontSize, elevation, defaultVariant } = prop;
    const [theme] = useTheme();
    const classList = cn(ContentVariant({ family, weight: weight ?? 'bold', fontSize: fontSize ?? 'large', elevation, className, defaultVariant }))
        .replace(':shadow-color', `${theme.text?.shadowColor ?? ''}`)
        .replace(':hover-shadow-color', `${theme.text?.hoverShadowColor ?? ''}`);

    return (
        <div className={`max-w-prose`}>
            <h1 className={`${classList}`} {...OmitData(prop, ['transition', 'elevation', 'family', 'weight', 'fontSize', 'defaultVariant', 'border', 'sizeVariant', 'radius', 'variant', 'outline'])}>
                {prop.children}
            </h1>
        </div>
    );
};

export { Heading };
