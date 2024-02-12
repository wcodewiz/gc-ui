import React, { ReactNode } from 'react';
import { FC, useState } from 'react';
import { BlurApp, LoadLazyState } from './GC';
import './assets/style.css';
import { useTheme } from './theme/useTheme';

interface prop {
    children: ReactNode;
}

export const GCApp: FC<prop> = ({ ...prop }) => {
    const { children } = prop;
    const [theme] = useTheme();
    const [lazyLoading, setLazyLoading] = useState({ counter: 0 });
    const [blurApp, setBlurApp] = useState(false);

    return (
        <>
            {/* @ts-ignore */}
            <LoadLazyState.Provider value={{ lazyLoading, setLazyLoading }}>
                <>
                    {/* @ts-ignore */}
                    <BlurApp.Provider value={{ blurApp, setBlurApp }}>
                        <div className={`gc-ui-body-root p-0 m-0 ${blurApp && 'overflow-hidden overflow-x-hidden overflow-y-hidden'} w-full h-full ${theme.body.backgroundColor} ${theme.body.color}`}>
                            {children}
                        </div>
                    </BlurApp.Provider>
                    <div id="gc-drops"></div>
                </>
            </LoadLazyState.Provider>
        </>
    );
};
