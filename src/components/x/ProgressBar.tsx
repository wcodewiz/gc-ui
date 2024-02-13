import React from 'react';
import { FunctionComponent } from 'react';
import { useOnce } from '../../hooks/useOnce';
import { preventScroll, revertScroll } from '../../utils/utils';

interface ProgressBarProps {
    percentage?: number;
    color?: string;
    type: 'determinate' | 'indeterminate';
    showBackdrop?: boolean;
    animateDuration?: number;
    onComplete?: (value: number) => void;
    showText?: boolean;
    open?: boolean;
    animate?: boolean;
}

const ProgressBar: FunctionComponent<ProgressBarProps> = ({ animateDuration = 0.5, showText = false, showBackdrop = true, open = false, animate = false, ...prop }) => {
    useOnce(() => {
        const progressBar = document.querySelector('.progress-bar');
        const progressText = document.querySelector('.progress-text');
        if (progressBar !== null) {
            //@ts-ignore
            progressBar.style.backgroundColor = `${prop.color ?? '#007bff'}`;

            if (open && prop.type === 'indeterminate' && showBackdrop) {
                preventScroll();
            } else {
                revertScroll();
            }
            if (animate) {
                //@ts-ignore
                function setProgress(percentage) {
                    //@ts-ignore
                    progressBar.style.width = `${percentage}%`;
                    //@ts-ignore
                    progressText.textContent = `${percentage}%`;
                }

                let progress = 0;
                const intervalId = setInterval(() => {
                    progress += 1;
                    setProgress(progress);
                    if (progress === 100) {
                        prop.onComplete && prop.onComplete(progress);
                        clearInterval(intervalId);
                    }
                }, animateDuration / 100);
            }
        }
    }, [prop.percentage, open]);

    if (prop.type === 'indeterminate' && open) {
        return <IndeterminateProgressBar {...{ ...prop, showBackdrop: showBackdrop }} />;
    }

    return (
        <div className="progress-bar-container">
            <div className="progress-bar"></div>
            {showText && <span className="progress-text">0%</span>}
        </div>
    );
};

const IndeterminateProgressBar: FunctionComponent<ProgressBarProps> = ({ ...prop }) => {
    return (
        <div className="overflow-hidden">
            <div className="progress-bar-container" style={{ width: '110%', height: '4px', border: 'none', left: '-5%' }}>
                <div className="progress-barm w-10/12 shadow  shadow-gray-900  move-progress" style={{ backgroundColor: `${prop.color ?? 'blue'}` }}></div>
                {prop.showBackdrop && <div className="fixed top-1 opacity-10 left-0 w-full  z-50 h-screen" style={{ backgroundColor: `${prop.color ?? 'blue'}` }}></div>}
            </div>
        </div>
    );
};

export default ProgressBar;
