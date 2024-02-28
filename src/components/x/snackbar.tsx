import { FunctionComponent } from 'react';
import Alert from './Alert';
import { AlertProp } from '../utils/Backdrop';
import { OmitData } from '../../utils/utils';
import { Content } from '../primary';
import ProgressBar from './ProgressBar';

interface SnackbarProps extends AlertProp {
    radius?: 'small' | 'default' | 'xsmall' | 'large' | 'full' | 'meduim' | 'tiny' | 'x2small';
    showProgressText?: boolean;
    showProgressBar?: boolean;
}

const Snackbar: FunctionComponent<SnackbarProps> = ({ ...prop }) => {
    return (
        <Alert {...{ ...OmitData(prop, ['message', 'className']), disableScrollbar: false, open: prop.open, onClose: prop.onClose }}>
            <Content radius={prop.radius ?? 'meduim'} className={prop.className}>
                {prop.children}
                {prop.showProgressBar && (
                    <ProgressBar type="determinate" color="red" animateDuration={(prop.duration ?? 1) * 1000} animate open={true} percentage={2} showText={prop.showProgressText} />
                )}
            </Content>
        </Alert>
    );
};

export default Snackbar;
