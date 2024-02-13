import React, { useContext } from 'react';
import { FunctionComponent, useState } from 'react';
import { useOnce } from '../../hooks/useOnce';
import { BlurApp } from '../../GC';
import { useTheme } from '../../theme/useTheme';
import { OmitData, cn, hashes } from '../../utils/utils';
import { VariantProps, cva } from 'class-variance-authority';

export interface BackDropProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    open: boolean;
    closeable?: boolean;
    onClose: (value: boolean) => void;
}

const DialogBackDrop: FunctionComponent<BackDropProps> = ({ closeable = true, ...prop }) => {
    const [open, setOpen] = useState(prop.open);
    const [theme] = useTheme();
    const id = hashes();
    //@ts-ignore
    const { setBlurApp } = useContext(BlurApp);
    useOnce(() => {
        if (open) {
            document.body.classList.add('overflow-hidden');
        } else {
            document.body.classList.remove('overflow-hidden');
        }
        setOpen(prop.open);
    }, [open, prop.open]);

    return (
        open && (
            <div
                id={`gc-dialog-${id}`}
                className={`gc-dialog flex justify-center items-center fixed top-0 left-0 w-full h-screen`}
                onClick={(ev) => {
                    if (closeable) {
                        setOpen(!open);
                        prop.onClose(true);
                    }
                }}
            >
                <div className={`absolute top-0 left-0 w-full h-full opacity-60 ${theme.dialogBackdrop?.backgroundColor ?? 'bg-black'}`}></div>
                <div className="relative blur-0 gc-dialog ">{prop.children}</div>
            </div>
        )
    );
};

export const AlertVariant = cva('absolute w-auto h-auto', {
    variants: {
        position: {
            topLeft: 'top-0 left-0',
            bottomLeft: 'bottom-0 left-0',
            topRight: 'top-0 right-0',
            bottomRight: 'bottom-0 right-0'
        }
    }
});

export interface AlertProp extends BackDropProps, VariantProps<typeof AlertVariant> {
    duration?: number;
    disableScrollbar?: boolean;
}

const AlertBackDrop: FunctionComponent<AlertProp> = ({ disableScrollbar = true, ...prop }) => {
    const { position, className } = prop;
    const classList = cn(AlertVariant({ position, className }));
    const id = hashes();
    const [open, setOpen] = useState(prop.open);
    //@ts-ignore
    const { setBlurApp } = useContext(BlurApp);
    useOnce(() => {
        if (open) {
            if (disableScrollbar) {
                document.body.classList.add('overflow-hidden');
            }
            const duration = (prop.duration ?? 2) * 1000;
            setTimeout(() => {
                const alert = document.getElementById(`gc-alert-box-${id}`);
                if (alert !== null) {
                    alert.classList.add('fade-out');
                    alert.style.animationDuration = `${duration}ms`;
                    setTimeout(() => {
                        setOpen(false);
                        alert?.classList.remove('fade-out');
                    }, duration + 200);
                }
            }, duration);
        } else {
            if (disableScrollbar) {
                document.body.classList.remove('overflow-hidden');
            }
        }
    }, [open]);
    return (
        open && (
            <div
                className={`gc-alert  fixed top-0 left-0 w-full h-screen`}
                onClick={(ev) => {
                    if (prop.closeable) {
                        setOpen(!open);
                        prop.onClose(true);
                    }
                }}
            >
                <div id={`gc-alert-box-${id}`} {...{ ...OmitData(prop, ['position']), className: `${classList}` }}>
                    {prop.children}
                </div>
            </div>
        )
    );
};

const MenuBackDrop: FunctionComponent<BackDropProps> = ({ ...prop }) => {
    const [open, setOpen] = useState(prop.open);
    useOnce(() => {
        setOpen(prop.open);
    }, [open, prop.open]);

    return (
        open && (
            <div className={`gc-menu relative w-full h-full`}>
                <div
                    onClick={(ev) => {
                        setOpen(!open);
                        prop.onClose(true);
                    }}
                    className={`fixed top-0 left-0 w-full h-full opacity-0 bg-transparent`}
                ></div>
                <div className="relative">{prop.children}</div>
            </div>
        )
    );
};

const DropDownBackDrop: FunctionComponent<BackDropProps> = ({ ...prop }) => {
    const [open, setOpen] = useState(prop.open);

    useOnce(() => {
        setOpen(prop.open);
    }, [prop.open]);

    return (
        open && (
            <div className={`gc-dropdown relative w-full h-full`}>
                <div
                    onClick={(ev) => {
                        if (prop.open) {
                            setOpen(false);
                            prop.onClose(false);
                        }
                    }}
                    className={`fixed top-0 left-0 w-full h-full opacity-0 bg-transparent`}
                ></div>
                <div className="relative">{prop.children}</div>
            </div>
        )
    );
};

export { DialogBackDrop, AlertBackDrop, MenuBackDrop, DropDownBackDrop };
