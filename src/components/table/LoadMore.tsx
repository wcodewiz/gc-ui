import { FunctionComponent } from 'react';
import { hashes } from '../../utils/utils';

import { useOnce } from '../../hooks/useOnce';

interface LoadMoreProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    execute: () => void;
}

const LoadMore: FunctionComponent<LoadMoreProps> = ({ ...prop }) => {
    const id = hashes();
    const onReach = (entries: IntersectionObserverEntry[]) => {
        entries.forEach((e) => {
            if (e.isIntersecting) {
                prop.execute();
            }
        });
    };
    const observer = new IntersectionObserver(onReach, {});

    useOnce(() => {
        const element = document.querySelector(`.gc-load-more-${id}`);
        if (element !== null) {
            observer.observe(element);
            return () => observer.unobserve(element);
        }
    });

    return <div className={`gc-load-more-${id}`}>{prop.children}</div>;
};

export default LoadMore;
