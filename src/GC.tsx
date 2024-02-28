import { Theme, ThemeBox } from 'gc-theme';
import { GCThemeDark, GCThemeLight } from './theme';
import { FC, ReactNode, createContext } from 'react';
import { LoadCss } from './utils/css';

const defaultTheme = new GCThemeLight();
const themes: Theme[] = [defaultTheme, new GCThemeDark()];
export const BlurApp = createContext(false);
export const LoadLazyState = createContext({ counter: 0 });

interface prop {
    children: ReactNode;
    themes?: Theme[];
}
LoadCss();

export const getTheme = (theme: any): Theme => {
    return (theme && (theme as Theme)) ?? defaultTheme;
};
const GUIMASTER: FC<prop> = ({ ...props }) => {
    const { children } = props;

    return (
        //@ts-ignore
        <ThemeBox themes={props.themes ? [...themes, ...props.themes] : themes} current={'light'}>
            {children}
        </ThemeBox>
    );
};

export const Gc: FC<prop> = ({ ...props }) => {
    const { children } = props;

    //@ts-ignore

    return <GUIMASTER {...props}>{children}</GUIMASTER>;
};
