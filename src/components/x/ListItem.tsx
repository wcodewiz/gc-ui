import { VariantProps } from 'class-variance-authority';
import { FunctionComponent } from 'react';
import { useTheme } from '../../theme/useTheme';
import { cn, hashes, OmitData } from '../../utils/utils';
import { ContentVariant } from '../primary/Content';
import { useOnce } from '../../hooks/useOnce';

interface ListItemProps extends React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, VariantProps<typeof ContentVariant> {}

const ListItem: FunctionComponent<ListItemProps> = ({ ...prop }) => {
    const { className, family, weight, fontSize, elevation, defaultVariant } = prop;
    const [theme] = useTheme();
    const classList = cn(ContentVariant({ family, weight: weight, fontSize: fontSize, elevation, className, defaultVariant }))
        .replace(':shadow-color', `${theme.text?.shadowColor ?? ''}`)
        .replace(':hover-shadow-color', `${theme.text?.hoverShadowColor ?? ''}`);
    const gcClassName = `gc-list-item-${hashes()}`;

    useOnce(() => {
        const list = document.querySelector(`.${gcClassName}`);
        if (!(list?.parentElement instanceof HTMLUListElement)) {
            throw new Error('List Item Component must be inside a ul list tag');
        }
    });

    return (
        <li
            {...OmitData(prop, ['transition', 'elevation', 'family', 'weight', 'fontSize', 'defaultVariant', 'border', 'sizeVariant', 'radius', 'variant', 'outline'])}
            className={`${gcClassName} flex justify-start px-2 ${classList}`}
        >
            {prop.children}
        </li>
    );
};

export default ListItem;
