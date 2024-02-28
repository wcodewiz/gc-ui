import { FunctionComponent } from 'react';

interface SpinProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLSpanElement>, HTMLSpanElement> {}

const Spin: FunctionComponent<SpinProps> = ({ ...props }) => {
    return (
        <span {...{ ...props }} className="animate-spin">
            {props.children}
        </span>
    );
};

const Ping: FunctionComponent<SpinProps> = ({ ...props }) => {
    return (
        <span {...{ ...props }} className="animate-ping">
            {props.children}
        </span>
    );
};

const Pulse: FunctionComponent<SpinProps> = ({ ...props }) => {
    return (
        <span {...{ ...props }} className="animate-pulse">
            {props.children}
        </span>
    );
};

const Bounce: FunctionComponent<SpinProps> = ({ ...props }) => {
    return (
        <span {...{ ...props }} className="animate-bounce">
            {props.children}
        </span>
    );
};

export { Spin, Ping, Pulse, Bounce };
