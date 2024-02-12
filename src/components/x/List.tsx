import { VariantProps } from 'class-variance-authority';
import React from 'react';
import { FunctionComponent } from 'react';
import { OmitData, cn } from '../../utils/utils';
import { useTheme } from '../../theme/useTheme';
import { ContentVariant } from '../primary/Content';

interface ContentProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLUListElement>, HTMLUListElement>, VariantProps<typeof ContentVariant> {}

const List: FunctionComponent<ContentProps> = ({ ...prop }) => {
    const { className, family, weight, fontSize, elevation, defaultVariant } = prop;
    const [theme] = useTheme();
    const classList = cn(ContentVariant({ family, weight: weight, fontSize: fontSize, elevation, className, defaultVariant }))
        .replace(':shadow-color', `${theme.text?.shadowColor ?? ''}`)
        .replace(':hover-shadow-color', `${theme.text?.hoverShadowColor ?? ''}`);

    return (
        <ul className={`${classList}`} {...OmitData(prop, ['transition', 'elevation', 'family', 'weight', 'fontSize', 'defaultVariant', 'border', 'sizeVariant', 'radius', 'variant', 'outline'])}>
            {prop.children}
        </ul>
    );
};

export { List };
