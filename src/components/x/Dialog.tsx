import { FunctionComponent, ReactNode, useState } from 'react';
import { BackDropProps, DialogBackDrop } from '../utils/Backdrop';

import { Container, ContainerProps } from '../primary/Container';
import { OmitData } from '../../utils/utils';
import { useOnce } from '../../hooks/useOnce';

interface DialogProp extends BackDropProps, ContainerProps {
    closeIcon?: ReactNode;
}

const Dialog: FunctionComponent<DialogProp> = ({ closeable = true, ...prop }) => {
    const { className, screen, radius, elevation, align, defaultVariant } = prop;
    const [open, setOpen] = useState(false);

    useOnce(() => {
        setOpen(prop.open);
    }, [prop.open]);

    return (
        //@ts-ignore
        <DialogBackDrop {...{ ...OmitData(prop, ['closeIcon']), closeable: closeable, open: open }}>
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
        </DialogBackDrop>
    );
};

export default Dialog;
