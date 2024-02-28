import { useEffect, useState } from 'react';

export const useOnce = (callback: () => void, deps: any[] = []) => {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (loaded) {
            callback();
        } else {
            setLoaded(true);
        }
    }, [loaded, ...deps]);
    return <></>;
};
