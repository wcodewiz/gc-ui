import { FunctionComponent, ReactNode, useState } from 'react';
import { useOnce } from '../../hooks/useOnce';

interface SliderProps {
    slides: ReactNode[];
    autoplay?: boolean;
    showDots?: boolean;
    dotHeight?: number;
    dotWidth?: number;
    playDuration?: number;
    randomPlay?: boolean;
    showScrollBar?: boolean;
}

const Slider: FunctionComponent<SliderProps> = ({ playDuration = 2, showDots = true, randomPlay = false, showScrollBar = false, autoplay = false, ...prop }) => {
    const [position, setPosition] = useState(0);
    const slideTo = 100 / prop.slides.length;
    const [slideStart, setSlideStart] = useState(0);
    const [pause, setPause] = useState(false);

    useOnce(() => {
        if (autoplay) {
            const interval = setTimeout(() => {
                if (randomPlay) {
                    setPosition(parseInt((Math.random() * prop.slides.length).toString()));
                } else {
                    if (!pause) {
                        const container = document.querySelector('.slider-container');
                        if (position < prop.slides.length - 1) {
                            setPosition(position + 1);
                        } else {
                            container?.classList.remove('transition-all');
                            container?.classList.remove('duration-1000');
                            setPosition(0);

                            const reset = setTimeout(() => {
                                container?.classList.add('transition-all');
                                container?.classList.add('duration-1000');
                                clearTimeout(reset);
                            }, 100);
                        }
                    }
                }
                return () => clearTimeout(interval);
            }, playDuration * 1000);
        }
    }, [autoplay, position, pause]);

    const updatePosition = (endX: number) => {
        if (slideStart < endX) {
            const nextSlide = position + parseInt((slideStart / endX).toString()) + 1;
            setPosition(nextSlide < prop.slides.length ? nextSlide : prop.slides.length - 1);
        }

        if (slideStart > endX) {
            const nextSlide = position + parseInt((endX / slideStart).toString()) - 1;
            setPosition(nextSlide > 0 ? nextSlide : 0);
        }
    };

    return (
        <div
            onMouseOver={() => setPause(true)}
            onMouseOut={() => setPause(false)}
            className={`relative ${showScrollBar ? 'overflow-scroll overflow-y-hidden scrollbar-thin scrollbar-track-rose-200 scrollbar-thumb-rose-800' : 'overflow-hidden'} `}
            onDragStart={(ev) => {
                setSlideStart(ev.clientX);
            }}
            onDragEnd={(ev) => {
                updatePosition(ev.clientX);
            }}
        >
            {/* slide-container */}
            <div className="slider-container overflow-hidden h-96 transition-all duration-1000" style={{ width: `${prop.slides.length * 100}%`, transform: `translateX(${-position * slideTo}%)` }}>
                <div className="flex justify-around h-full">
                    {prop.slides.map((e, i) => {
                        //slide item
                        return (
                            <div className="slide-item" key={i}>
                                {e}
                            </div>
                        );
                    })}
                </div>
            </div>

            {showDots && (
                <div className="slider-dots flex justify-center my-4" style={{ height: `${prop.dotHeight ?? 0.5}vh` }}>
                    {prop.slides.map((_e, i) => {
                        return (
                            <span
                                style={{ width: `${prop.dotWidth ?? 0.5}vh` }}
                                className={` ${position === i ? 'bg-rose-500 rounded-full p-1' : 'bg-gray-500 px-4 rounded-md'} h-full py-0 mx-2 transition-all duration-1000`}
                                key={i}
                                onClick={() => setPosition(i)}
                            ></span>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export default Slider;
