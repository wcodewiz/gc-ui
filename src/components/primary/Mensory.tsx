import { FunctionComponent, ReactNode } from 'react';
import { GridBoxProps } from './Gridbox';
import React from 'react';
import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';

interface MensoryProps extends GridBoxProps {
    items: ReactNode[];
    mobileColumCount?: number;
    tabletColumCount?: number;
    columCount?: number;
}

const Mensory: FunctionComponent<MensoryProps> = ({ mobileColumCount = 1, tabletColumCount = 2, columCount = 3, ...prop }) => {
    return (
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: mobileColumCount, 750: tabletColumCount, 900: columCount }}>
            <Masonry>
                {prop.items.map((e, i) => (
                    <div className="block w-full">{e}</div>
                ))}
            </Masonry>
        </ResponsiveMasonry>
    );
};

export { Mensory };
