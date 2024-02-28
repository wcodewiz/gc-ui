import { FunctionComponent, ReactNode } from 'react';
import { hashes } from '../../utils/utils';
import { useOnce } from '../../hooks/useOnce';
import { List } from './List';

interface ContextMenuProps {
    className?: string;
    contextLabel: ReactNode | string;
    children: ReactNode;
}

const ContextMenu: FunctionComponent<ContextMenuProps> = ({ ...prop }) => {
    const selector = `gc-context-menu-${hashes()}`;
    const pop = `gc-context-menu-pop-${hashes()}`;

    useOnce(() => {
        const menu = document.querySelector(`.${selector}`);
        const context = document.querySelector(`.${pop}`);

        if (menu !== null && context !== null) {
            document.addEventListener('contextmenu', (event) => {
                event.preventDefault();
                //@ts-ignore
                context.style.left = event.clientX + 'px';
                //@ts-ignore
                context.style.top = event.clientY + 'px';
                //@ts-ignore
                context.style.display = 'block';
            });
            context.addEventListener('click', (event) => {
                //@ts-ignore
                context.style.display = 'none';
            });
        }
    });

    return (
        <div className={`relative ${prop.className}`}>
            <div className={`relative w-full cursor-context-menu ${selector}`}>{prop.contextLabel}</div>
            <List className={` gc-normal ${pop}`}>{prop.children}</List>
        </div>
    );
};

export default ContextMenu;
