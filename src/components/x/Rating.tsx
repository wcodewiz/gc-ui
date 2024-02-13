import React, { FunctionComponent, ReactNode, useState } from 'react';
import { Flex } from '../primary';

interface RatingProps {
    count: number;
    rateNumber?: number;
    onRate?: (value: number) => void;
    emptyIcon: ReactNode;
    filledIcon: ReactNode;
}

const Rating: FunctionComponent<RatingProps> = ({ rateNumber = 0, ...props }) => {
    const [ratedNumber, setRatedNumber] = useState(rateNumber);

    const rate = (target: HTMLSpanElement) => {
        const children = (target.parentElement as HTMLDivElement).childNodes;
        const counter = parseInt(`${(target.firstChild as HTMLSpanElement).dataset.value}`);
        for (var i = 0; i < counter; i++) {
            const first = (children[i] as HTMLSpanElement).firstElementChild?.nextElementSibling;
            const last = (children[i] as HTMLSpanElement).lastElementChild;
            first?.classList.add('hidden');
            last?.classList.remove('hidden');
        }
        unrateFunc(target, counter);
    };

    const unrateFunc = (target: HTMLSpanElement, valueNumber: number) => {
        const children = (target.parentElement as HTMLDivElement).childNodes;
        const counter = parseInt(`${(target.firstChild as HTMLSpanElement).dataset.value}`);
        for (var i = 0; i < counter; i++) {
            const first = (children[i] as HTMLSpanElement).firstElementChild?.nextElementSibling;
            const last = (children[i] as HTMLSpanElement).lastElementChild;
            if (i >= valueNumber) {
                last?.classList.add('hidden');
                first?.classList.remove('hidden');
            }
        }
    };

    const unrate = (target: HTMLSpanElement) => {
        unrateFunc(target, ratedNumber);
    };

    const rateClick = (target: HTMLSpanElement) => {
        const children = (target.parentElement as HTMLDivElement).childNodes;
        const counter = parseInt(`${(target.firstChild as HTMLSpanElement).dataset.value}`);
        for (var i = 0; i < counter; i++) {
            const first = (children[i] as HTMLSpanElement).firstElementChild?.nextElementSibling;
            const last = (children[i] as HTMLSpanElement).lastElementChild;
            first?.classList.add('hidden');
            last?.classList.remove('hidden');
        }
        props.onRate && props.onRate(counter);
        setRatedNumber(counter);
    };

    const loadIcons = () => {
        const children: ReactNode[] = [];
        for (var i = 0; i < props.count; i++) {
            children.push(
                <span className="relative">
                    <span
                        className="absolute  top-0 left-0 w-full h-full"
                        key={i}
                        onClick={(ev) => rateClick((ev.target as HTMLSpanElement).parentElement as HTMLSpanElement)}
                        onMouseOut={(ev) => unrate((ev.target as HTMLSpanElement).parentElement as HTMLSpanElement)}
                        onMouseOver={(ev) => rate((ev.target as HTMLSpanElement).parentElement as HTMLSpanElement)}
                        data-value={i + 1}
                    ></span>
                    <span className={i > rateNumber ? '' : 'hidden'}>{props.emptyIcon}</span>
                    <span className={i < rateNumber ? '' : 'hidden'}>{props.filledIcon}</span>
                </span>
            );
        }
        return children;
    };

    return <Flex className="max-w-full items-center">{loadIcons()}</Flex>;
};

export default Rating;
