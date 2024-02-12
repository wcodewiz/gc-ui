import { Theme, ThemeBox } from 'gc-theme';
import { GCThemeDark, GCThemeLight } from './theme';
import React, { FC, ReactNode, createContext } from 'react';

const defaultTheme = new GCThemeLight();
const themes: Theme[] = [defaultTheme, new GCThemeDark()];
export const BlurApp = createContext(false);
export const LoadLazyState = createContext({ counter: 0 });

interface prop {
    children: ReactNode;
}

export const getTheme = (theme: any): Theme => {
    return (theme && (theme as Theme)) ?? defaultTheme;
};
const GUIMASTER: FC<prop> = ({ ...props }) => {
    const { children } = props;

    return (
        //@ts-ignore
        <ThemeBox themes={themes} current={'light'}>
            {children}
        </ThemeBox>
    );
};

export const Gc: FC<prop> = ({ ...props }) => {
    const { children } = props;

    //@ts-ignore

    return <GUIMASTER>{children}</GUIMASTER>;
};
