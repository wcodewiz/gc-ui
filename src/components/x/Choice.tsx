import { FunctionComponent, ReactNode, useState } from 'react';
import { FlexColumn } from '../primary';

import { useOnce } from '../../hooks/useOnce';

class choiceItem {
    public value: string;
    public component: ReactNode;
    constructor(value: string, component?: ReactNode) {
        this.value = value;
        this.component = component;
    }
}

export const ChoiceItem = (value: string, component: ReactNode) => {
    return new choiceItem(value, component);
};

interface ChoiceProps {
    items?: choiceItem[];
    current: number;
    onSelected?: (value: string) => void;
    className?: string;
    activeClassName?: string;
}

const Choice: FunctionComponent<ChoiceProps> = ({ ...prop }) => {
    const [selected, setSelected] = useState(prop.current);

    useOnce(() => {
        setSelected(prop.current);
    }, [prop.current]);

    return (
        <FlexColumn className={`gc-choice  ${prop.className ?? ''}`}>
            {prop.items?.map((e, i) => (
                <div
                    className={`relative w-full cursor-pointer ${selected === i ? prop.activeClassName : ''}`}
                    onClick={() => {
                        prop.onSelected && prop.onSelected(e.value);
                        setSelected(i);
                    }}
                    key={i}
                >
                    {e.component}
                </div>
            ))}
        </FlexColumn>
    );
};

export default Choice;
