import { VariantProps, cva } from 'class-variance-authority';
import { FunctionComponent } from 'react';
import { useTheme } from '../../theme/useTheme';
import { cn, getElevation, getRadius } from '../../utils/utils';

const ContainerVariant = cva('block', {
    variants: {
        screen: {
            half: `w-6/12 h-full px-2`,
            full: `w-full h-full px-0`
        },
        radius: getRadius,
        elevation: getElevation,
        align: {
            start: 'mx-0 my-0',
            center: 'mx-auto my-auto'
        },
        defaultVariant: {
            screen: 'half',
            align: 'start',
            radius: 'default',
            elevation: 'default'
        }
    }
});

interface ContainerProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, VariantProps<typeof ContainerVariant> {
    shadowStrength?: 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950;
    shadowColor?:
        | 'white'
        | 'rose'
        | 'red'
        | 'blue'
        | 'gray'
        | 'stone'
        | 'teal'
        | 'fuchsia'
        | 'slate'
        | 'neutral'
        | 'orange'
        | 'amber'
        | 'yellow'
        | 'lime'
        | 'green'
        | 'emerald'
        | 'cyan'
        | 'sky'
        | 'black'
        | 'transparent'
        | 'indigo'
        | 'violet'
        | 'purple'
        | 'pink';
}

const Container: FunctionComponent<ContainerProps> = ({ ...prop }) => {
    const { className, screen, radius, elevation, align, defaultVariant } = prop;
    const [theme] = useTheme();
    const color = `shadow-${prop.shadowColor}-${prop.shadowColor === 'white' || prop.shadowColor === 'transparent' || prop.shadowColor === 'black' ? '' : prop.shadowStrength ?? '200'}`;
    const classList = cn(ContainerVariant({ screen, radius, elevation, className, align, defaultVariant }))
        .replace(':shadow-color', `${(prop.shadowColor && color) ?? theme.container?.shadowColor ?? 'shadow-gray-700'}`)
        .replace(':hover-shadow-color', `${prop.shadowColor ? `hover:${color}` : ''} ${!prop.shadowColor ? theme.container?.hoverShadowColor ?? 'hover:shadow-gray-800' : ''}`);
    const classCheck = cn(ContainerVariant({ className: `${classList}` }));
    return <div className={`${theme.container?.backgroundColor ?? ''}  ${theme.container?.color ?? ''} ${classCheck}`}>{prop.children}</div>;
};

export { Container, ContainerProps };
