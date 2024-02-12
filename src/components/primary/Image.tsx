import { FC, FunctionComponent } from 'react';
import { useObserver } from '../../hooks/useObserver';
import { OmitData, cn, getRadius, getSize, hashes } from '../../utils/utils';
import React from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { useTheme } from '../../theme/useTheme';
import ReactImageMagnify from 'react-image-magnify';

const ImageVariants = cva(`p-0.5`, {
    variants: {
        fit: {
            contain: 'object-contain',
            cover: 'object-cover',
            scaleDown: 'object-scaled-down'
        },
        variant: {
            default: '',
            outline: 'border :boder-color'
        },
        fallbackSize: getSize,
        sizeVariant: {
            xxsmall: 'h-4 w-4',
            xsmall: 'h-6 w-6',
            small: 'h-7 w-7',
            medium: 'h-8 w-8',
            auto: 'max-h-full max-w-full',
            large: 'h-10 w-10',
            xlarge: 'h-14 w-14',
            x2large: 'h-20 w-20',
            x3large: 'h-24 w-24',
            x4large: 'h-28 w-28',
            x5large: 'h-32 w-32',
            x6large: 'h-36 w-36',
            x7large: 'h-40 w-40',
            x8large: 'h-52 w-52',
            full: 'h-full w-full',
            half: 'h-6/12 w-6/12'
        },
        blurEffect: {
            default: '',
            xsmall: 'blur-sm',
            small: 'blur-md',
            medium: 'blur-lg',
            large: 'blur-xl',
            xlarge: 'blur-2xl',
            x2large: 'blur-3xl'
        },
        border: {
            default: ``,
            outline: `border :border-color`
        },
        outline: {
            default: ``,
            outline: `outline :outline-color`
        },
        radius: getRadius,
        defaultVariant: {
            variant: 'default',
            sizeVariant: `small`,
            border: 'default',
            outline: 'default',
            radius: `default`
        }
    }
});

interface ImageProps extends React.DetailedHTMLProps<React.ImgHTMLAttributes<HTMLImageElement>, HTMLImageElement>, VariantProps<typeof ImageVariants> {
    placeHolderSrc?: string;
    errorSrc?: string;
    fullWidth?: boolean;
    loadingSrc?: string;
    zoomable?: boolean;
    fallbackAlt?: string | null;
}

const Image: FunctionComponent<ImageProps> = ({ zoomable = false, ...props }) => {
    var { variant, outline, blurEffect, fallbackSize, fullWidth, className, defaultVariant, sizeVariant, border, radius } = props;
    const [theme] = useTheme();
    const defaultClass = `outline-none border-none`;
    const useFul = `${fullWidth ? 'w-full h-full' : ''}`;
    const cnv = cn(
        ImageVariants({
            className,
            defaultVariant,
            border,
            blurEffect,
            sizeVariant,
            radius,
            variant,
            outline
        })
    )
        .replaceAll(':border-color', variant === 'outline' ? theme.img?.borderColor ?? defaultClass : defaultClass)
        .replaceAll(':outline-color', variant === 'outline' ? theme.img?.borderColor ?? defaultClass : defaultClass);

    const id = hashes();
    const normal = cnv.replaceAll('border', '').replaceAll('outline', '');
    const fallback = cn(ImageVariants({ fallbackSize }));
    const filtered = {
        ...OmitData(props, ['transition', 'blurEffect', 'elevation', 'family', 'fallbackSize', 'weight', 'fontSize', 'defaultVariant', 'border', 'sizeVariant', 'radius', 'variant', 'outline'])
    };

    useObserver();

    return (
        <div {...{ ...filtered, className: `relative ${useFul} m-0 p-0 border-none outline-none ${normal}` }}>
            <img
                data-id={id}
                data-magnify-src={zoomable ? props.src : ''}
                data-src={props.src === '' ? 'image.jpg' : props.src ?? 'image.jpg'}
                data-error={props.errorSrc ?? 'error-image.jpg'}
                data-normal={props.loadingSrc ?? 'loading-image.jpg'}
                {...{ ...filtered, className: `gc-lazy-${id} text-transparent  ${useFul} flex justify-center items-center  zoom ${cnv}`, src: props.placeHolderSrc }}
            />
            <span
                {...{
                    ...filtered,
                    className: `absolute gc-lazy-fallback-${id} ${useFul} hidden flex justify-center p-0 m-0 font-bold ${fallback} items-center top-0 bottom-0 left-0  ${normal}`
                }}
            >
                {props.alt?.substring(0, 1) ?? 'I'}
            </span>
        </div>
    );
};

interface zoomProp {
    alt?: string;
    src?: string;
    className?: string;
}

export const ZoomableImage: FC<zoomProp> = ({ ...prop }) => {
    return (
        <ReactImageMagnify
            {...{
                smallImage: {
                    alt: prop.alt,
                    isFluidWidth: true,
                    src: prop.src ?? ''
                },
                imageClassName: prop.className,
                largeImage: {
                    src: prop.src ?? '',
                    width: 1200,
                    height: 1800
                }
            }}
        />
    );
};

export default Image;
