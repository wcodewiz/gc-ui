import { ReactNode } from 'react';
import { FunctionComponent } from 'react';
import { Flex } from '../primary';

interface TimelineProps {
    prefixIcon?: ReactNode;
    suffixIcon?: ReactNode;
    ropeColor?: string;
    children: ReactNode;
    className?: string;
}

const Timeline: FunctionComponent<TimelineProps> = ({ ...prop }) => {
    return (
        <Flex className={`${prop.className ?? ''} relative items-center`}>
            <Flex className={`${prop.className ?? ''} relative items-center w-8 h-16`}>
                <div className="timeline_rope rounded-md" style={{ borderColor: prop.ropeColor ?? '#ddd' }}></div>
                <span className="relative z-10">{prop.prefixIcon && prop.prefixIcon}</span>
            </Flex>
            <div className="w-11/12">{prop.children}</div>
            <div className="w-16 h-16">{prop.suffixIcon && prop.suffixIcon}</div>
        </Flex>
    );
};

export default Timeline;
