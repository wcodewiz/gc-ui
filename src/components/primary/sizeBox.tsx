import { FunctionComponent } from 'react';

interface SizeBoxProps {
    width?: number;
    height?: number;
    block?: boolean;
}

const SizeBox: FunctionComponent<SizeBoxProps> = ({ block = true, ...props }) => {
    return <span style={{ width: `${props.width ?? 0}vw`, display: `${block ? 'block' : ''}`, height: `${props.height ?? 0}vh` }}></span>;
};

export default SizeBox;
