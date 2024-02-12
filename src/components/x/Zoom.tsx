import React, { FunctionComponent } from 'react';
import { hashes } from '../../utils/utils';
import { useOnce } from '../../hooks/useOnce';

interface ZoomProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    strength?: number;
}

const Zoom: FunctionComponent<ZoomProps> = ({ ...prop }) => {
    const hash = hashes();
    const { strength } = prop;
    const id = `gc-zoomable-${hash}`;
    const zoomed = `gc-zoomable-zoomed-${hash}`;
    const zoomlens = `gc-zoomable-zoom-lens-${hash}`;

    useOnce(() => {
        const zoomerElement = document.querySelector(`.${id}`);
        const zoomedElement = document.querySelector(`.${zoomed}`);
        const lens = document.querySelector(`.${zoomlens}`);
        if (zoomerElement !== null && zoomedElement !== null) {
            if (lens !== null) {
                //@ts-ignore
                lens.addEventListener('mousemove', (event: MouseEvent) => {
                    //@ts-ignore
                    const x = event.clientX - zoomerElement.offsetLeft;
                    //@ts-ignore
                    const y = event.clientY - zoomerElement.offsetTop;
                    //@ts-ignore
                    lens.style.left = `${x - lens.offsetWidth / 2}px`;
                    //@ts-ignore
                    lens.style.top = `${y - lens.offsetHeight / 2}px`;
                    //@ts-ignore
                    zoomedElement.style.transform = `scale(${(strength < 1.4 ? 1.4 : strength) ?? 1.4}) translateX(${100 * 1.4 - 40}px)`;
                });
                lens.addEventListener('mouseout', () => {
                    //@ts-ignore
                    lens.style.left = `0px`;
                    //@ts-ignore
                    lens.style.top = `0px`;
                });
            }
            zoomerElement.addEventListener('mouseout', () => {
                //@ts-ignore
                zoomedElement.style.transform = 'scale(1) translateX(0px)';
            });
        }
    });

    return (
        <div className={`relative ${id}`}>
            <div className={`${zoomed} transition-all duration-300`}>{prop.children}</div>
            <div className={`${zoomlens} w-32 h-32 top-0 left-0`}></div>
        </div>
    );
};

export default Zoom;
