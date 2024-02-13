import clsx, { ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

const AppRunTime = new Date().getTime();

export const cn = (...inputs: ClassValue[]) => {
    return twMerge(clsx(inputs));
};

export const hashes = (length = 5) => {
    var current = (AppRunTime + Math.random()) * new Date().getTime();
    return current.toString(16).substring(0, length);
};

export const inputphone = (values: string) => {
    return values.length > 0 ? (values.length % 4 === 0 ? (values += ' ') : values) : values;
};

export const capitlize = (value: string) => {
    return value.replace(/(^\w{1})|(\s\w{1})/g, (match) => match.toUpperCase());
};

export const getTransition = {
    default: '',
    verySlow: 'transition-all duration-1000 :hover-bg-color :hover-color',
    slow: 'transition-all duration-500 :hover-bg-color :hover-color',
    fast: 'transition-all duration-200 :hover-bg-color :hover-color',
    veryFast: 'transition-all duration-100 :hover-bg-color :hover-color'
};
export const getFontSize = {
    xsmall: 'text-xs',
    small: 'text-sm',
    medium: 'text-md',
    large: 'text-lg',
    xlarge: 'text-xl',
    x2large: 'text-2xl',
    x3large: 'text-3xl',
    x4large: 'text-4xl',
    x5large: 'text-5xl',
    x6large: 'text-6xl',
    x7large: 'text-7xl',
    x8large: 'text-8xl',
    x9large: 'text-9xl'
};
export const getWeights = {
    light: `font-thin`,
    normal: `font-normal`,
    bold: `font-bold`,
    'extra-bold': `font-extraBold`
};

export const getElevation = {
    default: '',
    xsmall: 'shadow :shadow-color :hover-shadow-color transition-all duration-500',
    small: 'shadow-sm :shadow-color :hover-shadow-color transition-all duration-500',
    medium: 'shadow-md :shadow-color :hover-shadow-color transition-all duration-500',
    large: 'shadow-lg :shadow-color :hover-shadow-color transition-all duration-500',
    xlarge: 'shadow-xl :shadow-color :hover-shadow-color transition-all duration-500',
    x2large: 'shadow-2xl :shadow-color :hover-shadow-color transition-all duration-500'
};

export const getPositions = {
    topLeft: '-top-2 left-0',
    bottomLeftCenter: 'bottom-0 left-2/4',
    bottomRightCenter: 'bottom-0 right-2/4',
    topLeftCenter: '-top-2 left-2/4',
    topRightCenter: '-top-2 right-2/4',
    bottomLeft: 'bottom-2 left-0',
    topRight: '-top-2 right-0',
    bottomRight: 'bottom-0 right-0'
};

export const getRadius = {
    default: ``,
    tiny: `rounded`,
    xsmall: `rounded-sm`,
    x2small: `rounded-md`,
    small: `rounded-lg`,
    meduim: `rounded-2xl`,
    large: `rounded-3xl`,
    full: `rounded-full`
};

export const staticSpace = { xsmall: 'p-0.5', small: 'p-1', medium: 'p-4', large: 'p-8', xlarge: 'p-12' };

export const getSize = {
    xxmall: `text-xs`,
    small: `text-sm`,
    meduim: `text-md`,
    large: `text-lg`,
    xlarge: `text-xl`,
    x2large: `text-2xl`,
    x3large: `text-3xl`,
    x4large: `text-4xl`,
    x6large: `text-6xl`,
    x7large: `text-7xl`,
    x8large: `text-8xl`,
    x5large: `text-5xl`,
    x9large: `text-9xl`
};

export const OmitData = (data: {}, omittingArr: string[]) => {
    var newData = {};
    for (var i in data) {
        if (omittingArr.indexOf(i) !== -1) continue;
        //@ts-ignore
        newData = { ...newData, [i]: data[i] };
    }
    return newData;
};

export const preventScroll = () => {
    //   if (!document.body.classList.contains('overflow-hidden')) {
    const html = document.querySelector(`[id*='root']`);
    const htmlElement = html?.parentElement?.parentElement;
    if (htmlElement instanceof HTMLHtmlElement) {
        htmlElement.classList.add('overflow-hidden');
    } else {
    }
    //
    // }
};
export const revertScroll = () => {
    const html = document.querySelector(`[id*='root']`);
    const htmlElement = html?.parentElement?.parentElement;
    if (htmlElement instanceof HTMLHtmlElement) {
        htmlElement.classList.remove('overflow-hidden');
    } else {
    }
};
