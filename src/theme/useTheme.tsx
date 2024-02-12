import { ThemeState, ThemeNameState, Theme } from 'gc-theme';
import { useContext } from 'react';
import { getTheme } from '../GC';

export const useTheme = (): [Theme, (value: string | null) => string | null] => {
    //@ts-ignore
    const { theme: themeState } = useContext(ThemeState);
    //@ts-ignore
    const { setThemeName: setTheme } = useContext(ThemeNameState);

    const theme = getTheme(themeState);

    return [theme, setTheme];
};
