import { FunctionComponent, useState } from 'react';
import { useOnce } from './useOnce';

interface useStopInputValueChangeProps {
    id: string;
    onReady: (value: string) => void;
    waitDuration?: number;
}

const useStopInputValueChange: FunctionComponent<useStopInputValueChangeProps> = ({ waitDuration = 2000, ...prop }) => {
    const [value, setValue] = useState('');
    const [waiting, setWaiting] = useState(false);
    useOnce(() => {
        const input = document.querySelector(prop.id);
        var oldval = value;
        if (input !== null) {
            //@ts-ignore
            oldval = input.value;

            input.addEventListener('change', (ev) => {
                //@ts-ignore
                let inval = ev.target.value;
                if (inval !== oldval) {
                    if (!waiting) {
                        inval = oldval;
                        const waiter = setTimeout(() => {
                            if (inval !== oldval) {
                            } else {
                                prop.onReady && prop.onReady(inval);
                            }
                            setValue(inval);
                            setWaiting(false);
                            return () => clearTimeout(waiter);
                        }, waitDuration);
                        setWaiting(true);
                    }
                }
            });
        }
    }, [value, waiting]);

    return [value, waiting];
};

export default useStopInputValueChange;
