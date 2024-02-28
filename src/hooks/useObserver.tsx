import { useOnce } from './useOnce';
const observer = new IntersectionObserver(onIntersection, {});
const loadedImages: string[] = [];
const loadedBlob: string[] = [];

function deleteAtrr(image: HTMLImageElement) {
    image.setAttribute('data-loaded', 'true');
    image.removeAttribute('data-src');
    image.removeAttribute('data-error');
    image.removeAttribute('data-loadingSrc');
}
function loadImage(image: HTMLImageElement) {
    const id = `.gc-lazy-fallback-${image.dataset.id}`;
    document.querySelector(id)?.classList.remove('hidden');
    image.removeAttribute('src');
}

async function fetchSrcImagePath(src: string | null | undefined, image: HTMLImageElement, error: (ev: any) => void) {
    if (!image.dataset.loaded) {
        const img = await fetch(src ?? 'image.jpeg');
        const blob = await img.blob();
        image.src = URL.createObjectURL(blob);
        loadedBlob.push(image.src);
        loadedImages.push(image.dataset.src ?? '');
        image.onload = (ev) => {
            deleteAtrr(image);
        };
        image.onerror = (ev) => {
            error(ev);
        };
        return;
    }

    if (!image.src) {
        loadImage(image);
    }
}

async function fetchImage(image: HTMLImageElement) {
    fetchSrcImagePath(image.dataset.src, image, (ev) => {
        fetchSrcImagePath(image.dataset.errorSrc, image, (ev) => {
            fetchSrcImagePath(image.dataset.loadingSrc, image, (ev) => {
                loadImage(image);
                deleteAtrr(image);
            });
        });
    });
}

function onIntersection(entries: IntersectionObserverEntry[], observer: IntersectionObserver) {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            if (entry.target instanceof HTMLImageElement) {
                const image = entry.target as HTMLImageElement;
                if (loadedImages.indexOf(image.dataset.src ?? '') === -1) {
                    fetchImage(image);
                } else {
                    image.src = loadedBlob[loadedImages.indexOf(image.dataset.src ?? '')];
                    deleteAtrr(image);
                }
                observer.unobserve(image);
            }
        }
    });
}

export const useObserver = () => {
    useOnce(() => {
        const selector = `[class*="gc-lazy-"]`;
        const lazies = document.querySelectorAll(selector);

        try {
            lazies.forEach((e) => {
                observer.observe(e);
                return () => observer.unobserve(e);
            });
        } catch (_e) {
            return () => {};
        }
    });

    return <></>;
};
