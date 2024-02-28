import { ReactNode, useState } from 'react';
import { FunctionComponent } from 'react';
import { Container, FlexColumn, FlexRow } from '../primary';
import { useOnce } from '../../hooks/useOnce';

interface TabProps {
    axis?: 'horizontal' | 'vertical';
    tabs: ReactNode[] | string[];
    panels: ReactNode[] | string[];
    current: number;
    activeClassName?: string;
    className?: string;
    onChange?: (current: number) => void;
}

const Tab: FunctionComponent<TabProps> = ({ ...props }) => {
    const [current, setCurrent] = useState(props.current);

    useOnce(() => {
        setCurrent(props.current);
    }, [props.current]);

    return props.axis === 'horizontal' ? (
        <FlexColumn className={props.className}>
            <FlexRow className="items-center">
                {props.tabs.map((e, i) => (
                    <div
                        onClick={() => {
                            setCurrent(i);
                            props.onChange && props.onChange(i);
                        }}
                        key={i}
                        className={`relative cursor-pointer ${i === current ? props.activeClassName : ''}`}
                        style={{ width: `${100 / props.tabs.length}%` }}
                    >
                        {e}
                    </div>
                ))}
            </FlexRow>
            {props.panels.map((e, i) => {
                if (i != current) return <span key={i} className="hidden"></span>;
                return (
                    <Container screen={'full'} key={i}>
                        {e}
                    </Container>
                );
            })}
        </FlexColumn>
    ) : (
        <FlexRow className={props.className}>
            <FlexColumn className="justify-start w-3/12">
                {props.tabs.map((e, i) => (
                    <div
                        onClick={() => {
                            setCurrent(i);
                            props.onChange && props.onChange(i);
                        }}
                        key={i}
                        className={`relative cursor-pointer ${i === current ? props.activeClassName : ''}`}
                        style={{ width: `${100 / props.tabs.length}%` }}
                    >
                        {e}
                    </div>
                ))}
            </FlexColumn>
            {props.panels.map((e, i) => {
                if (i != current) return <span key={i} className="hidden"></span>;
                return (
                    <Container className="w-9/12" key={i}>
                        {e}
                    </Container>
                );
            })}
        </FlexRow>
    );
};

export default Tab;
