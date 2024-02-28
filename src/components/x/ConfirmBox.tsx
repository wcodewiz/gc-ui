import { FunctionComponent, ReactNode, useState } from 'react';
import Dialog from './Dialog';

import { Content, Heading, Flex } from '../primary';
import { ContentProps } from '../primary/Content';
import { useOnce } from '../../hooks/useOnce';

//@ts-ignore
interface ConfirmBoxProps extends ContentProps {
    show: boolean;
    className?: string;
    onClose?: (value: boolean) => void;
    heading: ReactNode;
    okButton?: ReactNode;
    cancelButton?: ReactNode;
    onConfirm?: () => void;
    onCancel?: () => void;
}

const ConfirmBox: FunctionComponent<ConfirmBoxProps> = ({ ...prop }) => {
    const [showBox, setShowBox] = useState(prop.show);

    useOnce(() => {
        setShowBox(prop.show);
    }, [prop.show]);

    return (
        <Dialog elevation={'large'} radius={'small'} screen={'full'} open={showBox} closeable={false} onClose={(value) => prop.onClose && prop.onClose(value)}>
            <Content className={`${prop.className}`}>
                <Heading>{prop.heading}</Heading>
                {prop.children}
                <Flex axis={'around'} className="my-4 items-center">
                    {prop.okButton && (
                        <div
                            onClick={() => {
                                prop.onConfirm && prop.onConfirm();
                                prop.onClose && prop.onClose(true);
                                setShowBox(false);
                            }}
                        >
                            {prop.okButton}
                        </div>
                    )}
                    {prop.cancelButton && (
                        <div
                            onClick={() => {
                                prop.onCancel && prop.onCancel();
                                prop.onClose && prop.onClose(true);
                                setShowBox(false);
                            }}
                        >
                            {prop.cancelButton}
                        </div>
                    )}
                </Flex>
            </Content>
        </Dialog>
    );
};

export default ConfirmBox;
