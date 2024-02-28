import { VariantProps, cva } from 'class-variance-authority';
import { useState } from 'react';
import { FunctionComponent } from 'react';
import { useOnce } from '../../hooks/useOnce';
import { cn, hashes } from '../../utils/utils';

const FadeVariant = cva('transition-all ', {
    variants: {
        duration: {
            xsmall: 'duration-100',
            small: 'duration-200',
            medium: 'duration-300',
            large: 'duration-500',
            xlarge: 'duration-1000'
        }
    }
});

interface FadeProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, VariantProps<typeof FadeVariant> {
    delay: '100' | '1000' | '1000' | '2000' | '5000' | '8000' | '10000';
    start: boolean;
    type: 'fade-out' | 'fade-in';
}

const Fade: FunctionComponent<FadeProps> = ({ ...prop }) => {
    const { duration, delay, type } = prop;
    const [visible, setVisible] = useState(type === 'fade-out');
    const classList = cn(FadeVariant({ duration }));
    const id = hashes();

    useOnce(() => {
        const delayTime = parseInt(delay ?? '1000');
        if (prop.start) {
            setTimeout(() => {
                const eid = `gc-fader-box-${type === 'fade-in' ? 'in' : 'out'}-${id}`;
                const alertBody = document.getElementById(eid);

                if (alertBody !== null) {
                    alertBody.classList.add(type);

                    if (alertBody.classList.contains('opacity-0')) {
                        alertBody.classList.remove('opacity-0');
                    }
                    alertBody.style.animationDuration = `${delay}ms`;
                    setTimeout(() => {
                        if (visible) {
                            setVisible(false);
                        }
                        if (type === 'fade-in') {
                            alertBody.classList.add('opacity-100');
                        }
                        alertBody?.classList.remove(type);
                    }, delayTime + 200);
                }
            }, delayTime);
        }
    }, [prop.start]);

    if (type === 'fade-out') {
        return (
            visible && (
                <div id={`gc-fader-box-out-${id}`} className={`${classList}`}>
                    {prop.children}
                </div>
            )
        );
    }
    if (type === 'fade-in') {
        return (
            <div id={`gc-fader-box-in-${id}`} className={`opacity-0 ${classList}`}>
                {prop.children}
            </div>
        );
    }
    return <></>;
};

export default Fade;
