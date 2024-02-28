import { FC, FunctionComponent, useState } from 'react';
import { CheckboxProps } from './FormCheckbox';
import { useTheme } from '../../theme/useTheme';
import { cn, getRadius } from '../../utils/utils';
import { cva } from 'class-variance-authority';

import { Theme } from 'gc-theme';

const SwitchVariants = cva(`block capitalize`, {
    variants: {
        variant: {
            default: '',
            outline: 'border-2 :border-color'
        },
        sizeVariant: {
            xxsmall: 'h-4 w-8',
            xsmall: 'h-6 w-12',
            small: 'h-7 w-14',
            medium: 'h-8 w-16',
            large: 'h-10 w-20'
        },
        border: {
            default: ``,
            outline: `border-2 :border-color`
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

interface filledprop {
    onColor?: string;
    offColor?: string;
    off?: boolean;
    radiusr?: string;
    theme?: Theme;
}

const FilledSwitch: FC<filledprop> = ({ ...props }) => {
    return (
        <div className={`w-full h-full relative ${props.radiusr}`}>
            <span
                style={props.onColor || props.onColor ? { backgroundColor: `${props.off ? props.offColor : props.onColor}`, borderColor: `${props.off ? props.onColor : props.offColor}` } : {}}
                className={`w-6/12 h-full absolute transition-all duration-500  ${
                    props.off
                        ? 'bg-gray-500 border border-gray-800 left-0'
                        : `${props.theme?.switch?.backgroundColor ?? 'bg-rose-500'} border ${props.theme?.switch?.borderColor ?? 'border-rose-800'} left-2/4`
                }  ${props.radiusr}`}
            ></span>
        </div>
    );
};

interface FormSwitchProps extends CheckboxProps, filledprop {
    onSwitch?: () => void;
    offSwitch?: () => void;
    isSwitchedOn: boolean;
}

const FormSwitch: FunctionComponent<FormSwitchProps> = ({ ...props }) => {
    const [switchOn, setSwitchOn] = useState(props.isSwitchedOn);
    var { variant, outline, className, defaultVariant, sizeVariant, border, radius } = props;
    const [theme] = useTheme();
    const defaultClass = `outline-none border-none`;

    const radiusSize = cn(
        SwitchVariants({
            radius
        })
    );
    const cnv = cn(
        SwitchVariants({
            className,
            defaultVariant,
            border,
            sizeVariant,
            radius,
            variant,
            outline
        })
    )
        .replaceAll(':border-color', variant === 'outline' ? theme.input?.borderColor ?? defaultClass : defaultClass)
        .replaceAll(':outline-color', variant === 'outline' ? theme.input?.borderColor ?? defaultClass : defaultClass);

    const switOnHandler = () => {
        if (switchOn) {
            props.offSwitch && props.offSwitch();
        } else {
            props.onSwitch && props.onSwitch();
        }
        setSwitchOn(!switchOn);
    };

    return (
        <div className={`cursor-pointer ${cnv}`} onClick={switOnHandler}>
            {<FilledSwitch theme={theme} off={!switchOn} radiusr={radiusSize} />}
        </div>
    );
};

export default FormSwitch;
