import { FunctionComponent, ReactNode, useState } from 'react';
import { AlertBackDrop, AlertProp } from '../utils/Backdrop';

import { Container, ContainerProps } from '../primary/Container';
import { OmitData } from '../../utils/utils';

interface DialogProp extends AlertProp, ContainerProps {
    closeIcon?: ReactNode;
}

const Alert: FunctionComponent<DialogProp> = ({ closeable = true, ...prop }) => {
    const { className, screen, radius, elevation, align, defaultVariant } = prop;
    const [open, setOpen] = useState(prop.open);

    return (
        //@ts-ignore
        <AlertBackDrop {...{ ...OmitData(prop, ['closeIcon']), closeable: true, open: open }}>
            <Container className={`relative ${className}`} screen={screen} radius={radius} elevation={elevation} align={align} defaultVariant={defaultVariant}>
                {prop.children}
                {prop.closeIcon && (
                    <span
                        className="absolute cursor-pointer top-3 right-0 "
                        onClick={() => {
                            setOpen(!open);
                            prop.onClose(true);
                        }}
                    >
                        {prop.closeIcon}
                    </span>
                )}
            </Container>
        </AlertBackDrop>
    );
};

export default Alert;
