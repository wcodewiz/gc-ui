import { FunctionComponent, ReactNode, useState } from 'react';
import { ContentProps, ContentVariant } from '../primary/Content';
import { useOnce } from '../../hooks/useOnce';
import React from 'react';
import { useTheme } from '../../theme/useTheme';
import { OmitData, cn } from '../../utils/utils';

//@ts-ignore
interface BreadCrumbsProps extends ContentProps, React.DetailedHTMLProps<React.AnchorHTMLAttributes<HTMLAnchorElement>, HTMLAnchorElement> {
    prefixIcon?: ReactNode | string;
    defaultLabel?: string;
}

const BreadCrumbs: FunctionComponent<BreadCrumbsProps> = ({ defaultLabel = 'Home', prefixIcon = '>', ...prop }) => {
    const [urls, setUrls] = useState<string[]>([]);
    const { className, family, weight, fontSize, elevation, defaultVariant } = prop;
    const [theme] = useTheme();
    const classList = cn(ContentVariant({ family, weight: weight ?? 'bold', fontSize: fontSize ?? 'small', elevation, className, defaultVariant }))
        .replace(':shadow-color', `${theme.text?.shadowColor ?? ''}`)
        .replace(':hover-shadow-color', `${theme.text?.hoverShadowColor ?? ''}`);
    var prev = '';

    useOnce(() => {
        const full = document.location.pathname;

        if (full === '/') {
            setUrls([full]);
        } else {
            setUrls(full.split('/'));
        }
    }, [urls]);

    return (
        urls &&
        urls.map((e, i) => {
            prev = `${prev}/${e}`;
            return (
                <a
                    href={`${prev}`.replaceAll('//', '/')}
                    key={i}
                    className={`${classList}`}
                    {...OmitData(prop, ['transition', 'elevation', 'family', 'weight', 'fontSize', 'defaultVariant', 'border', 'sizeVariant', 'radius', 'variant', 'outline'])}
                >
                    {i > 0 && prop.prefix}
                    {e === '/' ? defaultLabel : e}
                </a>
            );
        })
    );
};

export default BreadCrumbs;
