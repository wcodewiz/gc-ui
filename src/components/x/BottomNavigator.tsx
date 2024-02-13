import React, { ReactNode, useState } from 'react';
import { FunctionComponent } from 'react';
import { FlexColumn, FlexRow } from '../primary';
import { useOnce } from '../../hooks/useOnce';

interface BottomNavigatorProps {
    navigatorItems: ReactNode[] | string[];
    label?: ReactNode[] | string[];
    current: number;
    activeClassName?: string;
    className?: string;
    onChange?: (current: number) => void;
}

const BottomNavigator: FunctionComponent<BottomNavigatorProps> = ({ ...props }) => {
    const [current, setCurrent] = useState(props.current);

    useOnce(() => {
        setCurrent(props.current);
    }, [props.current]);

    return (
        <div className={`gc-normal fixed bottom-0 left-0 w-full h-10 ${props.className}`}>
            <FlexRow className="items-center ">
                {props.navigatorItems.map((e, i) => {
                    const label = props.label && props.label[i];

                    return (
                        <div
                            onClick={() => {
                                setCurrent(i);
                                props.onChange && props.onChange(i);
                            }}
                            key={i}
                            className={`relative flex justify-center items-center cursor-pointer h-full ${i === current ? props.activeClassName : ''}`}
                            style={{ width: `${100 / props.navigatorItems.length}%` }}
                        >
                            {label && (
                                <FlexColumn className="items-center">
                                    <span>{e}</span>
                                    <span className="relative bottom-3.5">{label}</span>
                                </FlexColumn>
                            )}

                            {!label && e}
                        </div>
                    );
                })}
            </FlexRow>
        </div>
    );
};

export default BottomNavigator;
