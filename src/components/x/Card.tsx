import React from 'react';
import { FunctionComponent } from 'react';
import { Container, Flex } from '../primary';
import { ContainerProps } from '../primary/Container';

interface CardProps extends ContainerProps {}

const Card: FunctionComponent<CardProps> = ({ ...props }) => {
    return (
        <Container {...{ ...props, className: `p-1  ${props.className}`, elevation: (props.elevation === 'default' ? 'small' : props.elevation) ?? 'small' }}>
            <Flex className="items-center justify-center">
                <div>{props.children}</div>
            </Flex>
        </Container>
    );
};

export default Card;
