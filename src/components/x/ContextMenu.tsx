import React, { FunctionComponent } from 'react';
import { hashes } from '../../utils/utils';

interface ContextMenuProps {}

const ContextMenu: FunctionComponent<ContextMenuProps> = () => {
    const selector = `gc-context-menu-${hashes()}`;

    return <div className={selector}></div>;
};

export default ContextMenu;
