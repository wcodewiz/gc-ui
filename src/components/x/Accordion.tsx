import { FunctionComponent, ReactNode, useState } from 'react';
import { Container } from '../primary/Container';

import { Content, FlexRow } from '../primary';
import { ContentProps } from '../primary/Content';
import { OmitData } from '../../utils/utils';

interface AccordionProps extends ContentProps {
    prefixIcon?: ReactNode | string;
    prefixSwapIcon?: ReactNode | string;
    suffixIcon?: ReactNode | string;
    suffixSwapIcon?: ReactNode | string;
    children?: ReactNode;
    actionButton?: 'right' | 'left' | 'both';
    className?: string;
    bodyClassName?: string;
    change?: () => void;
    heading: ReactNode | string;
}

const Accordion: FunctionComponent<AccordionProps> = ({ ...prop }) => {
    const [show, setShow] = useState(false);

    const execute = (clicked: string) => {
        if (prop.actionButton === 'both') {
            setShow(!show);
            prop.change && prop.change();
        }
        if (prop.actionButton === clicked) {
            setShow(!show);
            prop.change && prop.change();
        }
    };

    return (
        <Container className={prop.bodyClassName}>
            <FlexRow className="items-center">
                <div className="w-8" onClick={() => execute('left')}>
                    {prop.prefixSwapIcon && prop.prefixIcon && (show ? prop.prefixSwapIcon : prop.prefixIcon)}
                    {!prop.prefixSwapIcon && prop.prefixIcon && prop.prefixIcon}
                </div>
                <div className="w-11/12">{prop.heading}</div>
                <div className="w-8" onClick={() => execute('right')}>
                    {prop.suffixSwapIcon && prop.suffixIcon && (show ? prop.suffixSwapIcon : prop.suffixIcon)}
                    {!prop.suffixSwapIcon && prop.suffixIcon && prop.suffixIcon}
                </div>
            </FlexRow>
            {show && <Content {...{ ...OmitData(prop, ['prefixIcon', 'suffixIcon', 'actionButton', 'heading']) }}>{prop.children}</Content>}
        </Container>
    );
};

export default Accordion;
