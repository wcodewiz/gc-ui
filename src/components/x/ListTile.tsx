import { FunctionComponent, ReactNode } from 'react';
import { Container, ContainerProps } from '../primary/Container';
import { VariantProps, cva } from 'class-variance-authority';
import { OmitData, cn, hashes } from '../../utils/utils';
import { Flex, FlexColumn, FlexRow } from '../primary';
import { useOnce } from '../../hooks/useOnce';

const ListVariant = cva('px-2 py-1', {
    variants: {
        type: {
            disc: 'list-disc',
            none: 'list-none',
            decimal: 'list-decimal'
        },
        trailingPosition: {
            topRight: 'absolute top-0 right-0 :color :bgColor',
            topLeft: 'absolute top-0 left-0 :color :bgColor',
            bottomLeft: 'absolute bottom-0 left-0 :color :bgColor',
            bottomRight: 'absolute bottom-0 right-0 :color :bgColor'
        }
    }
});

//@ts-ignore
interface ListTileProps extends React.DetailedHTMLProps<React.LiHTMLAttributes<HTMLLIElement>, HTMLLIElement>, ContainerProps, VariantProps<typeof ListVariant> {
    title: ReactNode | string;
    prefixIcon?: ReactNode;
    suffixIcon?: ReactNode;
    strength?: '50' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | '950';
    bgStrength?: '50' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900' | '950';
    trailColor?:
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
    trailBgColor?: string;
    trailing?: ReactNode;
}

const ListTile: FunctionComponent<ListTileProps> = ({ bgStrength = '100', strength = '100', ...prop }) => {
    const { type, trailingPosition } = prop;
    const classList = cn(ListVariant({ type }));
    const trailingClassList = cn(ListVariant({ trailingPosition }))
        .replaceAll(':bgColor', `bg-${prop.trailBgColor}-${prop.trailBgColor === 'white' || prop.trailBgColor === 'transparent' || prop.trailBgColor === 'black' ? '' : bgStrength}`)
        .replaceAll(':color', `text-${prop.trailColor}-${prop.trailColor === 'white' || prop.trailColor === 'transparent' || prop.trailColor === 'black' ? '' : bgStrength}`);
    const gcClassName = `gc-list-tile-${hashes()}`;

    useOnce(() => {
        const list = document.querySelector(`.${gcClassName}`);
        if (!(list?.parentElement instanceof HTMLUListElement)) {
            throw new Error('List Tile Component must be inside a ul list tag');
        }
    });

    return (
        <li
            {...{
                ...OmitData(prop, [
                    'screen',
                    'type',
                    'trailingPosition',
                    'title',
                    'strength',
                    'bgStrength',
                    'trailColor',
                    'trailBgColor',
                    'suffixIcon',
                    'trailing',
                    'prefixIcon',
                    'radius',
                    'elevation',
                    'align',
                    'defaultVariant'
                ]),
                className: `relative ${gcClassName} ${classList}`
            }}
        >
            <Container {...{ ...OmitData(prop, ['type', 'trailingPosition', 'prefixIcon', 'trailColor', 'trailBgColor', 'suffixIcon', 'trailing']) }}>
                <FlexRow axis={'between'} className="relative items-center">
                    <Flex>{prop.prefixIcon && prop.prefixIcon}</Flex>
                    <FlexColumn axis={'start'}>
                        <span>{prop.title && prop.title}</span>
                        <span>{prop.children}</span>
                    </FlexColumn>
                    <Flex>{prop.suffixIcon && prop.suffixIcon}</Flex>
                    {prop.trailing && <span className={`${trailingClassList}`}>{prop.trailing}</span>}
                </FlexRow>
            </Container>
        </li>
    );
};

export default ListTile;
