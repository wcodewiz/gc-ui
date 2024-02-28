import { FunctionComponent, ReactNode } from 'react';
import { BackDropProps, DropDownBackDrop } from '../utils/Backdrop';
import { Container, ContainerProps } from '../primary/Container';
import { OmitData } from '../../utils/utils';

import { Flex } from '../primary';

//@ts-ignore
interface DropDownProps extends BackDropProps, ContainerProps {
    header: ReactNode | string;
    prefixIcon?: ReactNode;
    suffixIcon?: ReactNode;
}

const DropDown: FunctionComponent<DropDownProps> = ({ ...prop }) => {
    const { className, screen, radius, elevation, align, defaultVariant } = prop;

    return (
        <>
            {' '}
            <Flex className="items-center">
                {prop.prefixIcon && <span> {prop.prefixIcon}</span>}
                <span className="w-full">{prop.header && prop.header}</span>
                {prop.suffixIcon && <span>{prop.suffixIcon}</span>}
            </Flex>
            <DropDownBackDrop {...{ ...OmitData(prop, ['children', 'onClose']), open: prop.open, onClose: prop.onClose }}>
                <Container className={`absolute top-0 left-0 ${className}`} screen={screen} radius={radius} elevation={elevation} align={align} defaultVariant={defaultVariant}>
                    {prop.children}
                </Container>
            </DropDownBackDrop>
        </>
    );
};

export default DropDown;
